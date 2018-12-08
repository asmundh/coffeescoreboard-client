import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';


export default config = {
   entry: {
      app: './src/index.js',
   },
   mode: env || 'development',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
  },
  module: {
     rules: [{
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: ['babel-loader']
      },
      {
         test: /(\.css|\.scss|\.sass)$/,
         use: [{
            loader: 'style-loader',
         },{
            loader: 'css-loader',
         },{
            loader: 'sass-loader',
         }],
      }],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: 'index.html'
      }),
      new CleanWebpackPlugin(['dist'])
   ]
}