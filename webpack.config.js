const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ["./src/js/app.js"],
    output:{
        path: path.resolve(__dirname, "dist"),
        filename:"js/[name].js"
    },
    devServer:{
        contentBase: "./dist"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    },
                ],
                },
            {
                test:/\.html$/,
                use:{
                    loader:"html-loader"
                }
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        })
    ]
};