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

//Globals and scope

const defineGlobals = function() {
	global1 = 'global1';
	let local1 = 'local1';
	showLocal1Function = function() {
		console.log(local1);
	}
}

const showGlobal1 = function() {
	console.log(global1);
}

const showLocal1 = function() {
	console.log(local1);
}