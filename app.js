function add(a, b) {
	return a + b;
}

function subtruct(a, b) {
	return a - b;
}

function power(a, b) {
	return a ** b;
}

// Функция высшего порядка
function calculate(a, b, fn) {
	console.log(fn.name);
	const res = fn(a, b);
	return res;
}

let res = calculate(3, 5, add);
console.log(res);

res = calculate(3, 5, subtruct);
console.log(res);

res = calculate(3, 5, power);
console.log(res);
