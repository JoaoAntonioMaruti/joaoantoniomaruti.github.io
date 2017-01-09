'use strict';

let environment = './src/';

module.exports = {
    entry: environment + 'app.js',
    output: {
        path: environment + '../build', 
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },
        { 
            test: /\.css$/, exclude: /\.useable\.css$/, 
            loader: "style-loader!css-loader" 
            
        }, {
            test: /\.json$/,
            loader: "json"
        }]
    },
};