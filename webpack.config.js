const path = require('path')

// определяем здесь импорты для плагинов и реализовываем их как инстансы классов в массиве plugins

const HTMLWebpackPlugin = require('html-webpack-plugin')  // для работы с html
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // для очистки папки dist от кэша, при определении "забираем" из объекта
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HTMLWebpackPugPlugin = require('html-webpack-pug-plugin')
// //

const isDev = process.env.NODE_ENV === 'development' // нужна, чтобы точно определять, в каком режиме собирает вебпак
const isProd = !isDev
const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}` // меняет имя output файла в зависимости от режима сборки

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename('js')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 42000,
        hot: isDev,
        open: true

    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './pages/index.pug', 
            favicon: '../favicons/favicon.ico',
            filename:'./pages/index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        // new HTMLWebpackPugPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
              }
        ]
    }
}

