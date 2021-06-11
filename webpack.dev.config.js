const path = require('path')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const outputPath = path.resolve(__dirname,'./dist');


module.exports =  merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'distdev'),
        hot: true,
        // proxy: {}, // 代理
        // compress: true
    },
    entry: {
        'previewImage': {
            import: './public/index.js',
            filename: '[name].[fullhash].js',
        },
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    { 
                        from: path.resolve(__dirname, './public'), to: outputPath ,
                        globOptions: {
                            
                        }
                    },
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
    ]
    // output:{
    //     path: outputPath,
    //     filename: '[name][ext]',
    //     sourceMapFilename: '[name][fullhash][ext].map',
    // }
});