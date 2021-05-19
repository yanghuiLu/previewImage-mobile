const path = require('path')
const outputPath = path.resolve(__dirname,'./dist');

module.exports = {
    target: "web",
    devtool: 'source-map',
    // node: {
    //     process: false
    // },
    output:{
        path: outputPath,
        filename: '[name][ext]',
        sourceMapFilename: '[name].[fullhash][ext].map',
    },
    plugins: [
        
    ],
    module: {
        rules: [
            {
              test: /\.less$/i,
              use:[
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                  { loader: 'less-loader' },
              ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.svg$/,
                use:{
                    loader:'svg-inline-loader',
                }
            }
        ]
      }
}