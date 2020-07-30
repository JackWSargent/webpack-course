webpackHotUpdate("main",{

/***/ "./src sync recursive":
/*!******************!*\
  !*** ./src sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive";

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

__webpack_require__(/*! babel-core/register */ "./node_modules/babel-core/register.js");

__webpack_require__(/*! webpack-hot-middleware/client?reload=true */ "./node_modules/webpack-hot-middleware/client.js?reload=true");

__webpack_require__(/*! ./main.css */ "./src/main.css");

__webpack_require__("./src sync recursive")("./images/link.jpg".default);

__webpack_require__(/*! ./index.hbs */ "./src/index.hbs");

/***/ })

})
//# sourceMappingURL=main.8d280b5988c540a3ac02.hot-update.js.map