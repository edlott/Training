const plib = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: plib.resolve(__dirname, 'dist')
	}
};