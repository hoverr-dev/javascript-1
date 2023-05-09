/* 
  Методом prompt получите ответ пользователя
  на вопрос "Сколько будет 7 + или -15?". Если ответ верен
  выведите в консоле "Успех", если нет - "Вы робот!",
  а если он введёт "Я не робот", то тоже "Успех".
*/

const userAnswer = prompt('Сколько будет 7 + или -15?');

switch (true) {
	case userAnswer === 'Я не робот':
	case Number(userAnswer) === -8:
	case Number(userAnswer) === 22:
		console.log('Успех');
		break;
	default:
		console.log('Вы робот!');
}
