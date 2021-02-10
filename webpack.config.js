//Источник https://www.youtube.com/watch?v=eSaF8NXeNsA&t=2897s
const path = require('path');
const pug = require('pug');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const devMode = process.env.NODE_ENV !== 'production';

if (!devMode) {
    // enable in production only
    plugins.push(new MiniCssExtractPlugin());
}
/* Установку пакетов делаем с флагом -D то есть зависимости для разработки (package.json "devDependencies") */
module.exports = {
    context: path.resolve(__dirname, "./src"), /*  Указываю папку в которой разработка идет */
    entry: './app.js', /* Вход */
    output: {
        filename: '[name].js', /* выход в папку DIST С именем и хешем */
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [
            '.js', '.json', '.scss', '.pug' /*прописав   alias , можно скоратить путь при импорте*/
        ],
    },
    // devtool: 'source-map',
    //---------------------ВАЖНО--------------------------
    // взять На заметку прикрутить к рабочей сборке
    optimization: {
        splitChunks: {
            chunks: "all"
        },
    },
    //---------------------ВАЖНО--------------------------

    module: {
        rules: [

            {
                test: /\.(sa|sc|c)ss$/,  /* Через регулярное выражение говорю какие импорты в  js обрабатывать */
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin,
                    'css-loader',
                    'sass-loader',
                ], /* Лоадеры предварительно надо уствновить, webpack обрабатывает с право на лево то есть 1.css-loader 2.style-loader */
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
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
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pug/index.pug',
        }),
        // new HtmlWebpackPugPlugin(),
        new CleanWebpackPlugin() /* очистка папки DIST перед обновлением */,
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[contenthash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    }
};
