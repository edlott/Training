'use strict';

const plib = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

if (process.env.WEBPACK_SERVE) {
	const path = plib.join(__dirname, '/dist/main.css');
	fs.closeSync(fs.openSync(path, 'w'));
}

module.exports = {
	mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
	devtool: process.env.WEBPACK_SERVE ? 'eval-source-map' : 'source-map',
	entry: './src/rindex.js',
	module: {
		rules: [
		    {
		      test: /\.(js|jsx)$/,
		      exclude: /node_modules/,
		      use: ['babel-loader']
			},
			{
			  test: /\.scss$/,
			  use:[
				  {
					loader: process.env.WEBPACK_SERVE ? 'style-loader' : MiniCssExtractPlugin.loader
				  },
				  {
					loader: 'css-loader',
					options: {
						modules: true,
        				localIdentName: process.env.WEBPACK_SERVE ? '[path][name]__[local]--[hash:base64:5]' : '[sha1:hash:hex:4]'
					}
				  },
				  {
					loader: 'sass-loader'			
				  }
			  ]
			}
		]
	},	
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		filename: 'dist/bundle.js',
		path: plib.join(__dirname, '/'),
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'dist/[name].css'
		})
	]
};

module.exports.serve = {
	content: [__dirname],
	add: function(app, middleware, options) {
	    // Need this so that we serve 'hot' reload content over files that
		// happen to be in the 'dist' directory.
		middleware.webpack();
		middleware.content();
	}
};