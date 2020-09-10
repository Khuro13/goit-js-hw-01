const china = 'CHINA';
const chili = 'CHILI';
const australia = 'AUSTRALIA';
const india = 'INDIA';
const jamaika = 'JAMAIKA';

const userChoise = prompt('В какую страну доставить товар?');

let cost;
let message;

if (userChoise === null) {
  message = 'Отменено пользователем!';
} else {
  // userChoise[0].toUpperCase() + userChoise.slice(1).toLowerCase();

  switch (userChoise.toUpperCase()) {
    case 'CHINA':
      cost = 100;
      break;

    case 'CHILI':
      cost = 250;
      break;

    case 'AUSTRALIA':
      cost = 170;
      break;

    case 'INDIA':
      cost = 80;
      break;

    case 'JAMAIKA':
      cost = 120;
      break;

    default:
      message = 'В вашей стране доставка не доступна';
      break;
  }
}

if (cost > 0) {
  message = `Доставка в ${userChoise.toUpperCase()} будет стоить ${cost} кредитов`;
}

alert(message);
