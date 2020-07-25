const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js",
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
    },
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
};
