module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',
    css: {
        sourceMap: true
    },
    configureWebpack: {
        module:  {
            noParse: /(mapbox-gl)\.js$/
        }
    }
}