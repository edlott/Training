'use strict';

const plib = require('path');

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