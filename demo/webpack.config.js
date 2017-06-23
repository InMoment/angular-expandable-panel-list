var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
  entry: './demo/src/main.ts',
  output: {
    filename:'app.bundle.js',
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          { use: [
            {
              loader: "css-loader", options: {
                sourceMap: true
              }
            }, {
              loader: "sass-loader", options: {
                sourceMap: true
              }
            }
          ]}
        )
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          { use: 'css-loader'}
        )
      },
      {
        test: /\.(html)$/,
        loader: 'raw-loader',
        exclude: /\.async\.(html)$/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts','.js','.scss','.css','.html'],
    alias: {
      'angular-collapsible-panel-list': path.resolve(__dirname, '../src/index.ts')
    }
  },
  plugins: [
    new ExtractTextPlugin('demo.css'),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, './demo/src')
    ),
    new HtmlWebpackPlugin({
      template: './demo/src/index.html',
      chunksSortMode: 'dependency'
    })
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'src'), path.join(__dirname, '../src')],
    publicPath: '/',
    historyApiFallback: true,
    stats: 'minimal'
  }
}

module.exports=webpackConfig;
