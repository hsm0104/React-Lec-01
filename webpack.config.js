// node js file
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode : 'development', //on Service / Developer mode
    entry: './app.js', //which js file to start. input
    output: {
        // 1. which directory to use. 2. what name
        path: path.resolve(__dirname, 'dist'), //using path built in node 
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/, //only JS 
                exclude: /node_modules/,
                use: {
                loader: "babel-loader", //can deal JS only. Not Css, img...etc
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        }
        ]
    }, //transpiler setting
    plugins: [
        new HtmlWebpackPlugin({
            title: 'settting Babel and WebPack',
            template: 'index.html' //which html file to use?
        })
    ]
}