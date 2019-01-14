const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: {
        index: './src/views/index/index',
        mine: './src/views/mine/mine',
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/index/index.html', filename: 'index.html', chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/views/mine/mine.html', filename: 'mine.html', chunks: ['mine']
        }),
        new ExtractTextPlugin({
            allChunks: true,
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'), //编译时，不需要编译哪些文件
                /*include: path.resolve(__dirname, 'src'),//在config中查看 编译时，需要包含哪些文件*/
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        port: 9000
    }

}