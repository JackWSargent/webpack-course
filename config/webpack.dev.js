const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: ["./src/main.js"],
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true,
        stats: {
            colors: true,
        },
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        // query: {
                        //     modules: true,
                        //     localIdentName: "[name]--[local]",
                        // },
                    },
                ],
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: "ejs-loader",
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-loader",
                    },
                ],
            },
            {
                test: /\.hbs$/,
                use: [
                    {
                        loader: "handlebars-loader",
                        query: {
                            inlineRequires: `\/images\/`,
                        },
                    },
                ],
            },
            {
                test: /\.sass$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }],
            },
            {
                test: /\.less$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "less-loader" }],
            },
            {
                test: /\.styl$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                    { loader: "stylus-loader" },
                ],
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            test: /\.hbs$/,
            use: [
                {
                    loader: "handlebars-loader",
                    query: { inlineRequires: "/images/" },
                },
            ],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.ejs",
            inject: true,
            title: "Link's Journal",
        }),
    ],
};
