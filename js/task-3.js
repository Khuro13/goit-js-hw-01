const ADMIN_PASSWORD = 'jqueryismyjam';
const userChoise = prompt('Пожалуйста введите пароль!');
let message;

if (userChoise === null) {
  message = 'Отменено пользователем!';
} else {
  switch (userChoise) {
    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;

    default:
      message = 'Доступ запрещен, неверный пароль!';
      break;
  }
}
alert(message);
