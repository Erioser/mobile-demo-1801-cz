const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 需求，根据pages里由几个文件夹，就认为有几个页面

const entry = {}
const htmls = []
const pages = get_pages()
pages.forEach(page => {
    entry[page] = ['./src/utils/flexible.js', `./src/pages/${page}/${page}`]
    htmls.push(new HtmlWebpackPlugin({
        template: `./src/pages/${page}/${page}.html`, filename: page + '.html', chunks: [page]
    }))
})


module.exports = {
    mode: 'development',
    entry,
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },
    plugins: [
        ...htmls,
        // new HtmlWebpackPlugin({
        //     template: './src/pages/index/index.html', filename: 'index.html', chunks: ['index']
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/pages/mine/mine.html', filename: 'mine.html', chunks: ['mine']
        // }),
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
                test: /\.html$/,
                use: 'string-loader'
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
        contentBase: [path.join(__dirname, "../dist")],
        compress: true,
       
        port:9000
    }

}


// 如何得知pages中有几个文件夹
function get_pages() {
    // 页面所在的路径
    let _path = path.join(__dirname, '../src/pages')
    try {
        // 读取pages目录内容
        let result = fs.readdirSync(_path)
        if ( !result.length ) return [];
        // 如果有内容的话，判断是不是文件夹
        return result.filter(_p => {
            let stat = fs.statSync(path.join(_path,_p))
            return stat.isDirectory()
        })
    }catch (err) {
        throw new Error('pages目录出问题了。。。')
    }
    

}