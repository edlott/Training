const local1 = 'module local1';
let local2 = 'module local2';

module.exports = {
	showLocal1: function() {
		console.log(local1);
	},
	showLocal2: function() {
		console.log(local2);
	}
};