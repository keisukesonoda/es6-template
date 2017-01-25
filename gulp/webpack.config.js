
const CONFIG = require('./config');
const webpack = require('webpack');

const webpackConf = {

  // エントリーポイント
  entry: {
    init: [`${CONFIG.PATH.src.js}/init.js`],
    app: [`${CONFIG.PATH.src.js}/app.js`],
    main: [`${CONFIG.PATH.src.js}/main.js`],
  },

  // 出力先
  output: {
    // filename: 'bundle.js',
    filename: '[name].js'
  },

  // dev-server設定
  // devServer: {
  //   contentBase: './app/dist',
  //   port: 3000
  // },

  // ソースマップ出力（https://webpack.github.io/docs/configuration.html#devtool）
  devtool: 'source-map',

  // プラグイン設定（https://github.com/webpack/docs/wiki/list-of-plugins）
  plugins: [
    // ファイル圧縮
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    // ファイルを細かく分析してまとめられるところは可能な限りまとめて圧縮
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
    }),
  ],

  // require時の拡張子省略
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.yaml'],
  },

  // javascript意外のソースを読み込むためのモジュール設定
  // 読みたいファイルのnpm installが必要（$ npm install yaml-loader 等）
  // ここではyamlをjsonに変換し、jsonファイルを読み込んでる（配列の記述順は逆）
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.yaml$/,
        loaders: ['json', 'yaml'],
      },
    ],
  },
};

module.exports = webpackConf;
