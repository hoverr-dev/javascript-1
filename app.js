/*
 for (let i = 1; i < 5; i++) {
	console.log(`Вывод - ${i}`);
}

let i = 1;
while (i < 5) {
	console.log(`Вывод - ${i}`);
	i++;

} 
*/

const arr = [1, 4, 8, 7];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 5) {
		break;
	}
	console.log(arr[i]);
}

let a = 0;
while (arr[a] <= 5 && a < arr.length) {
	console.log(arr[a]);
	a++;
}

let j = 0;

do {
	console.log(j);
	j++;
} while (j < 0);
