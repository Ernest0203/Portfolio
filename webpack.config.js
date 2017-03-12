var webpack = require('webpack');

var config = {
	devtool: 'cheap-module-eval-source-map',
	entry:   __dirname + '/src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
  	loaders: [
			{
      	test: /\.(js|jsx)$/,
      	exclude: /node_modules/,
      	loader: 'babel-loader',
      	query: {
        	presets: ['es2015', 'react', 'stage-0']
      	}
    	},
			{
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
			{
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'url-loader?name=[path][name].[ext]',
      },
			{
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?name=[path][name].[ext]',
      }
    ]
  },
	devServer: {
		contentBase: './dist',
		inline: true
	}
}

module.exports = config;