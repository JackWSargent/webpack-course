import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import Routes from "../components/RoutesArray"
import { matchRoutes, renderRoutes } from "react-router-config"

import Header from "../components/Header"

import { Provider } from "react-redux"

import { configureStore } from "../store"

import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"

export default ({ clientStats }) => (req, res) => {
  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  })

  const context = {
    site: req.headers.host.split(":")[0].split(".")[0],
    slug: req.originalUrl.split("/").reverse()[0]
  }

  const preloadedState = {}

  const store = configureStore(preloadedState, context)

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve)
        })
      }
    })

  Promise.all(promises).then(_ => {
    const preloadedState = store.getState()
    const content = `
      <html>
        <head>
          ${styles}
          <link href="/${context.site}-theme-css.css" rel="stylesheet" />
        </head>
        <body>
          <div id="react-root">${renderToString(
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <div>{renderRoutes(Routes, context)}</div>
              </StaticRouter>
            </Provider>
          )}</div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              "\\x3c"
            )}
          </script>
        ${js}
        </body>
      </html>
    `
    if (context.url) {
      return res.redirect(301, context.url)
    }
    if (context.notFound) {
      res.status(404)
    }
    res.send(content)
  })
}
