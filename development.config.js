'use strict';
module.exports = {
    devtool: 'eval',
    devServer: {
        contentBase: "./dist",
        noInfo: true
    },
    entry: {
        app: ['./app/src/app.js']
    },
    output: {
        path: "./dist",
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony',
                resolverLoader: {
                    root: './node_modules'
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};