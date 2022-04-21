const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
    entry: {
        index: ['./src/index.js'],
        connect: ['./src/connect.js'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.[name].[contenthash].js',
    },
    mode: "production",
    plugins: [
        new MergeIntoSingleFilePlugin({
            files: {
                "index.js": [
                    'html5/js/lib/es6-shim.js',
                    'html5/js/lib/AudioContextMonkeyPatch.js',
                    'html5/js/lib/jquery.js',
                    'html5/js/lib/jquery-ui.js',
                    'html5/js/lib/jquery.ba-throttle-debounce.js',
                    'html5/js/lib/jquery-transform-draggable.js',
                    'html5/js/lib/rencode.js',
                    'html5/js/lib/bencode.js',
                    'html5/js/lib/zlib.js',
                    'html5/js/lib/lz4.js',
                    'html5/js/lib/brotli_decode.js',
                    'html5/js/lib/forge.js',
                    'html5/js/lib/jsmpeg.js',
                    'html5/js/lib/broadway/Decoder.js',
                    'html5/js/lib/aurora/aurora.js',
                    //'html5/js/lib/aurora/mp3',
                    //'html5/js/lib/aurora/flac',
                    //'html5/js/lib/aurora/aac',
                    'html5/js/lib/aurora/aurora-xpra.js',
                    'html5/js/lib/FileSaver.js',
                    'html5/js/lib/jszip.js',
                    'html5/js/lib/detect-zoom.js',
                    'html5/js/Keycodes.js',
                    'html5/js/Protocol.js',
                    'html5/js/Window.js',
                    'html5/js/Notifications.js',
                    'html5/js/Constants.js',
                    'html5/js/Utilities.js',
                    'html5/js/MediaSourceUtil.js',
                    'html5/js/RgbHelpers.js',
                    'html5/js/ImageDecoder.js',
                    'html5/js/VideoDecoder.js',
                    'html5/js/OffscreenDecodeWorkerHelper.js',
                    'html5/js/Client.js',
                    'html5/js/Menu.js',
                    'html5/js/Menu-custom.js',
                    'html5/js/lib/slick.js',
                    'html5/js/lib/simple-keyboard.js',
                ],
                "index.css": [
                    'html5/css/client.css',
                    'html5/css/spinner.css',
                    'html5/css/menu.css',
                    'html5/css/menu-skin.css',
                    'html5/css/icon.css',
                    'html5/css/slick.css',
                    'html5/css/simple-keyboard.css',
                ],
                "connect.js": [
                    'html5/js/lib/es6-shim.js',
                    'html5/js/lib/AudioContextMonkeyPatch.js',
                    'html5/js/RgbHelpers.js',
                    'html5/js/ImageDecoder.js',
                    'html5/js/VideoDecoder.js',
                    'html5/js/OffscreenDecodeWorkerHelper.js',
                    'html5/js/lib/jquery.js',
                    'html5/js/MediaSourceUtil.js',
                    'html5/js/lib/aurora/aurora.js',
                ],
                "connect.css": [
                    'html5/css/bootstrap.css',
                    'html5/css/signin.css',
                ],
            }
        }),
        // Disable Error - Module not found: Error: Can't resolve 'jquery' in
        new webpack.ProvidePlugin({
            'window.jQuery'    : 'jquery',
            'window.$'         : 'jquery',
            'jQuery'           : 'jquery',
            '$'                : 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './src/index2.html',
            chunks: ['index'],
            filename: 'index2.html',
            favicon: './html5/favicon.ico',
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: './src/connect2.html',
            chunks: ['connect'],
            filename: 'connect2.html',
            favicon: './html5/favicon.ico',
            minify: false,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './html5/favicon.ico',
                    to: 'favicon.ico',
                },
                {
                    from: './html5/favicon.png',
                    to: 'favicon.png',
                },
                {
                    from: './html5/js',
                    to: 'js',
                },
                {
                    from: './html5/js',
                    to: 'assets/js',
                },
                {
                    from: './html5/css',
                    to: 'css',
                },
                {
                    from: './html5/icons',
                    to: 'icons',
                },
                {
                    from: './html5/default-settings.txt',
                    to: 'default-settings.txt',
                },
                {
                    from: './html5/index.html',
                    to: 'index.html',
                },
                {
                    from: './html5/connect.html',
                    to: 'connect.html',
                },
                {
                    from: './src/index3.html',
                    to: 'index3.html',
                },
                {
                    from: './src/connect3.html',
                    to: 'connect3.html',
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};