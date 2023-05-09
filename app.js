/* 
  Пользователь хочет приобрести игру в магазине
  Он может это сделать только если:
  - Его баланс больше 1000 (balance)
  или число бонусов больше 100 (bonusBalance)
  - Он не забанен (isBanned)
  - Игра не куплена (isExist)
  - Игра в продаже (isSelling)
  Напишите условие для покупки и выведите в консоль результат
*/

const balance = 1200;
const bonusBalance = 900;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy =
	(balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;

console.log(`Можете купить игру: ${canBuy ? 'Да' : 'Нет'}`);
