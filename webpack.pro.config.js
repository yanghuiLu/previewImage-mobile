const path = require('path')
const { merge }  = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

module.exports =  merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        // vendors: [],
        'previewImage': {
            import: './index.js',
            filename: '[name].[fullhash].js',
            // dependOn: ['vendors']
        },
    },
    output:{
        path: outputPath,
        filename: '[name][ext]',
        library: {
            name: 'previewImage',
            type: 'umd',
            export: 'default',
            umdNamedDefine: true,
        },
        sourceMapFilename: '[name][fullhash][ext].map',
        globalObject: 'this',
    },
});