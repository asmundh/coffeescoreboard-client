import webpack from 'webpack';
import path from 'path';
import HTMLMWebpackPlugin from 'html-webpack-plugin';
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
  module: {
     rules: [
        {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: ['babel-loader']
        }
     ]
  }
  ,
   plugins: [
      new HTMLMWebpackPlugin({
         template: 'index.html'
      }),
      new CleanWebpackPlugin(['dist'])
   ]
}