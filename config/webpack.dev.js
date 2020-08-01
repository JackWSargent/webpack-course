const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: ["./src/main.js"],
        polyfills: ["./src/angular-polyfills.ts"],
        angular: ["./src/angular.ts"],
    },
    resolve: {
        extensions: ["js", "ts"],
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist/js"),
        publicPath: "/",
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        historyApiFallback: true,
        stats: {
            colors: true,
        },
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].html", // Tells name of file you would like to create
                        },
                    },
                    {
                        loader: "extract-loader", // Tells webpack to make a separate file
                    },
                    {
                        loader: "html-loader", // Does linting
                        options: {
                            attributes: true,
                        },
                    },
                ],
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
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core/, path.join(__dirname, "./src"), {}),
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
