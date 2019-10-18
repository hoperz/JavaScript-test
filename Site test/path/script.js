"use strict"

let money = +prompt("Введите ваш бюджет на месяц: ", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов", ""),
        b = prompt("Во сколько это обойется?", "");
    if ( (typeof(a) === 'string' && typeof(a) != null  && typeof(b) != null && a != '' && b != '' && a.length < 50) ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        
    }
};

appData.moneyPerDay = appData.budget / 30;

document.write("Ежедневный бюджет " + Math.round(appData.moneyPerDay));

if(appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
}   else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
}   else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}   else {
    console.log("Вы точно ввели все верно?? Какой-то Error")
}

