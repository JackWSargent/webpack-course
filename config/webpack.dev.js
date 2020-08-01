const path = require("path");

module.exports = {
    entry: {
        main: ["./src/main.js"],
        ts: ["./src/index.ts"],
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
    },
    devServer: {
        contentBase: "dist",
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: babel - loader,
            },
        ],
    },
};
