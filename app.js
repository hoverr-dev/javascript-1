/* 
 Есть выгрузка операций пользователя
 const operations = [1000, -700, 300, -500, 10000];
 а так же начальный бонус в 100$
 Необходимо сделать функции расчета:
 - Итогового баланса
 - Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
 - Расчета среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getBalance(arrayOfOperations, initialBalance) {
	let balance = initialBalance;
	for (const el of arrayOfOperations) {
		balance += el;
	}
	return balance;
}
console.log(getBalance(operations, startingBalance));

function checkOperations(arrayOfOperations, initialBalance) {
	let balance = initialBalance;
	let isTrue = true;

	for (const el of arrayOfOperations) {
		balance += el;
		if (balance < 0) {
			isTrue = false;
			break;
		}
	}
	return isTrue;
}
console.log(checkOperations(operations, startingBalance));

function avarageOperations(arrayOfOperations) {
	let positiveSum = 0;
	let positiveCount = 0;
	let negativeSum = 0;
	let negativeCount = 0;

	for (const el of arrayOfOperations) {
		if (el > 0) {
			positiveCount++;
			positiveSum += el;
		}

		if (el < 0) {
			negativeCount++;
			negativeSum += el;
		}
	}
	return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(avarageOperations(operations));
