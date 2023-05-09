/* 
  Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
  Вывести в консоль, сможет ли он купить дом за 13 500$
  через 2 года после снятия вклада. И остаток после покупки.

  Итог = Сумма * (1  + Ставка в месяц не в %) ^ срок в месяцах
*/

const deposit = 12000;
const newDeposit = 13500;
const percent = 0.07;
const depositLength = 24;

const result = deposit * (1 + percent / 12) ** depositLength;

if (result > newDeposit) {
	console.log(
		`Накопили: ${result}. Сможем купить. Сумма остатка: ${result - newDeposit}`
	);
} else {
	console.log(
		`Накопили: ${result}. Не хватает: ${newDeposit - result}. Купить не сможем.`
	);
}
