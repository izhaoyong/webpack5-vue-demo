const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const eslintOptions = {
    fix: true,
    context: 'src',
    exclude: ['resources/fonts', 'resources/images'],
    extensions: ['js', 'ts', 'vue'],
    // files: ['src/**', '!src/resources/**'],
    emitError: true,
    emitWarning: true,
    failOnError: true,
};

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: './src/main.ts',
    output: {
        filename: 'index.js',
        path: __dirname + '/dist',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    module: {
        rules: [
            {
                /*将js文件转码成es5*/
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false,
                            },
                            // esModule: true,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/i,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/i,
                use: [
                    'vue-style-loader',
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    // "postcss-loader"
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            limit: 1,
                        },
                    },
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                },
            },
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     enforce: "pre",
            //     include: [path.resolve(__dirname, 'src')], // 指定检查的目录
            //     options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
            //         formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
            //     }
            // }
        ],
    },
    plugins: [
        new HtmlWebpackplugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html'),
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
        new ESLintPlugin(eslintOptions),
    ],
    devServer: {
        host: 'localhost',
        port: 9527,
    },
};
