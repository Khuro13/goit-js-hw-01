let credits = 23580;
const pricePerDroid = 3000;

let quantity = Number(prompt('Какое количество дроидов Выхотите купить'));

if (quantity == 0) {
  console.log('Отменено пользователем!');
} else {
  let totalPrice = pricePerDroid + quantity;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${quantity} дроидов, на счету осталось ${
        credits - totalPrice
      }`,
    );
  }
}
