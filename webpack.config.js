const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

const outputPath = path.resolve(__dirname,'./dist');

module.exports = {
    mode: 'development',
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        // open: true,
         // hotOnly: true,
        // inline: true,
        proxy: {} // 代理
    },  
    target: "web",
    devtool: 'inline-source-map',
    // node: {
    //     process: false
    // },
    entry: {
        // vendors: [],
        main: {
            import: './index.js',
            // filename: 'pages/[name][ext]',
            // dependOn: ['vendors']
        },
    },
    output:{
        path: outputPath,
        filename: 'previewImage.js',
        library: {
            name: 'previewImage2',
            type: 'umd'
        },
        sourceMapFilename: 'previewImage.map',
        // libraryTarget: 'umd',
        // umdNamedDefine: true,
        // globalObject: 'this',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: path.resolve(__dirname, './public'), to: outputPath },
                ],
                // {
                //     transform(content,absoluteFrom) {
                //         if(/\.css$/.test(absoluteFrom)){
                //             return new CleanCSS({}).minify(content).styles //压缩css文件
                //         }else if(/\.js$/.test(absoluteFrom)){
                //             return Uglify.minify(content.toString()).code //压缩js文件
                //         }else if(/\.html$/.test(absoluteFrom)){
                //             return HtmlMinify(content.toString(),{   //压缩html文件
                //                 minifyJS: true,
                //                 minifyCSS: true,
                //                 removeComments: true,
                //                 collapseWhitespace: true
                //             })
                //         }else{
                //             return content;
                //         }
                //     },
                //     ignore: ['.*','**/node_tool/**'],
                //     force: true,
                // }
            }
        )
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
            }
        ]
      }
}