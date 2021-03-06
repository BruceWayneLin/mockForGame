const path = require('path')
const webpack = require('webpack')
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',
    css: {
        sourceMap: true
    },
    configureWebpack: {
        module:  {
            noParse: /(mapbox-gl)\.js$/
        },
        resolve: {
        extensions: ['.js'],
        alias: {
            'jquery': 'jquery/dist/jquery.slim.js',
        }
        },
        plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            jQuery: 'jquery',
            Popper: ['popper.js', 'default'],
            'Util': "exports-loader?Util!bootstrap/js/dist/util"
        }),
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ]
    }
}