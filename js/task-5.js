let userCountry = prompt("Введите страну").toLowerCase();
if (userCountry === null) {
  alert("Отмена ввода!");
}

const China = "Китай";
const Chile = "Чили";
const Australia = "Австрaлия";
const India = "Индия";
const Jamaica = "Ямайка";

switch (userCountry) {
  case China:
    console.log(`Доставка в ${China} будет стоить 100 кредитов`);
    break;
  case Chile:
    console.log(`Доставка в ${Chile} будет стоить 250 кредитов`);
    break;
  case Australia:
    console.log(`Доставка в ${Australia} будет стоить 170 кредитов`);
    break;
  case India:
    console.log(`Доставка в ${India} будет стоить 80 кредитов`);
    break;
  case Jamaica:
    console.log(`Доставка в ${Jamaica} будет стоить 50 кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
