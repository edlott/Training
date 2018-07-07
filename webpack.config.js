const plib = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'dist/bundle.js',
		path: plib.join(__dirname, '/'),
	},
};

module.exports.serve = {
	content: [__dirname],
	add: function(app, middleware, options) {
	    // since we're manipulating the order of middleware added, we need to handle
		// adding these two internal middleware functions.
		middleware.webpack();
		middleware.content();
	}
};