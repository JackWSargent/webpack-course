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
                use: [{ loader: "style-loader" }, { loader: "css-loader" }],
            },
            {
                test: /\.(jpg|gif|png)$/,
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
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-loader",
                    },
                ],
            },
            {
                test: /\.ejs$/,
                loader: "ejs-loader",
                options: {
                    esModule: false,
                },
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
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new webpack.NamedModulesPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.ejs",
            inject: true,
            title: "Link's Journal",
        }),
    ],
};
