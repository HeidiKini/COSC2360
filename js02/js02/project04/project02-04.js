/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Heidi Kinikini
      Date:  Sept. 3, 2024

      Filename: project02-04.js
 */
 




// Function to display a numeric value as a text string in the format $##.## 

const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;


 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 document.getElementById('chicken').addEventListener("click", calcTotal);
 document.getElementById('halibut').addEventListener("click", calcTotal);
 document.getElementById('burger').addEventListener("click", calcTotal);
 document.getElementById('salmon').addEventListener("click", calcTotal);
 document.getElementById('salad').addEventListener("click", calcTotal);

 function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById('chicken').checked;
   let buyHalibut = document.getElementById('halibut').checked;
   let buyBurger = document.getElementById('burger').checked;
   let buySalmon = document.getElementById('salmon').checked;
   let buySalad = document.getElementById('salad').checked;

   if(buyChicken === true) {
    cost += CHICKEN_PRICE
   } 
   if(buyHalibut === true) {
    cost += HALIBUT_PRICE
   }
   if(buyBurger === true) {
    cost += BURGER_PRICE
   }
   if(buySalmon === true) {
    cost += SALMON_PRICE
   }
   if(buySalad === true) {
    cost += SALAD_PRICE
   };
   
  document.getElementById('foodTotal').innerHTML = formatCurrency(cost);

  let tax = cost * SALES_TAX;

  document.getElementById('foodTax') = formatCurrency(tax);

  let totalCost = cost + tax;

  document.getElementById('totalBill').innerHTML = formatCurrency(totalCost);
 };