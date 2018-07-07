'use strict';

const plib = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'dist/bundle.js',
		path: plib.join(__dirname, '/'),
	}
};