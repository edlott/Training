// Functions are values and 'const'

const calc1 = function() {
	console.log('calc1');
}

function calc2() {
	console.log('calc2');
}

const calc2b = function() {
	console.log('calc2b');
}

const changeCalcs = function() {
	calc2 = calc2b;
	calc1 = 5;
}