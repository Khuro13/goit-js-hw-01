const ADMIN_PASSWORD = "jqueryismyjam";
let message;
message = prompt("Введите пожалуйста кодовое слово!");

if (message === ADMIN_PASSWORD) {
  console.log("Добро пожаловать");
} else if (message) {
  console.log("Вход запрещен, неверный пароль!");
} else {
  console.log("Отменено пользователем");
}
