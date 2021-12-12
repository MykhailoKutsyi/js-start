// console.log('awdawd');


// const min = 0;
// const max = 5;

// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     // total += i;
//     if (i % 2 === 0) {
//         total += i;
//     }
//     console.log(total);

// }
// console.log(total);


// let balance = 10000;
// const payment = 10001;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем к-во доступных средств на счету`);
// if (payment <= balance) {
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредитов.`);
// }
// else {
//     console.log('Недостаточно средств');
// }
// console.log('Операция завершена.');


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(20000));