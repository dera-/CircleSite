var webpack = require('webpack');
module.exports = {
  entry: {
    index: './src/viewmodel/page/IndexViewModel.js',
    hakkapuzzle: './src/viewmodel/page/HakkaPuzzleViewModel.js',
    reinforce: './src/viewmodel/page/RainforceViewModel.js'
  },
  output: {
    path: __dirname + "/htdocs/js/",
    filename: "[name].js"
  },
  devtool: '#source-map',
  resolve: {
    extensions: ['', '.js','json'],
    modulesDirectories: ["node_modules"]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),  // ライブラリ間で依存しているモジュールが重複している場合、二重に読み込まないようにする
    new webpack.optimize.AggressiveMergingPlugin(), //ファイルを細かく分析し、まとめられるところはできるだけまとめてコードを圧縮する
    new webpack.optimize.UglifyJsPlugin() //jsファイルのminify
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.json$/, exclude: /node_modules/, loader: "json-loader" }
    ]
  }
};
