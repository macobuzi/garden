const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src", "main.js")
    },

    output: {
        path: path.resolve(__dirname, "build")
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test:/\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"] 
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}

