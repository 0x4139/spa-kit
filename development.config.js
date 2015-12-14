'use strict';
var path = require("path");
module.exports = {
    devtool: 'eval',
    devServer: {
        path: path.resolve(__dirname, "app/src"),
        noInfo: false
    },
    entry: {
        app: [path.resolve(__dirname, 'app/src/app.js')]
    },
    output: {
        path: path.resolve(__dirname, "app/src/"),
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    externals: {
        'react': 'React'
    }
};