"use strict";
/*
Midterm Project
Author: Heidi Kinikini
Date: 10/12/2024
Course: COSC 2360 NT
*/

//Variables
let toppings = document.getElementById("toppings-form");
let crustType = document.getElementById("crust-form");
let cardType = document.getElementById("card-type");
let cardNumber = document.getElementById("cardnumber");
let expiration = document.getElementById("expiration");
let submit = document.getElementById("submit");
let total;

//Event Listeners
crustType.addEventListener("change", updateTotal);
submit.addEventListener("click", function () {
    let cardNumberValue = Number(cardNumber.value);
    
    if (isNaN(cardNumberValue)) {
        // alert
        window.alert("Please enter valid valid card number!")
    } else if(cardNumberValue == "") {
        window.alert("Please enter a card number")
    } else if (expiration.value == "") {
        window.alert("Enter a valid expiration date!");
    } else {
        window.alert("Payment Successful!")
    }
});

//For loop to listen for and add users selected choice of toppings
for (let i = 0; i < toppings.length; i++){
    let currentTopping = toppings[i];
    currentTopping.addEventListener("click", updateTotal)
}

// Updates total of selected toppings
function updateTotal() {
 total = 0;
    for(let i = 0; i < toppings.length; i++){
        let checkedTopping = toppings[i];
        let toppingValue = Number(checkedTopping.value);

        if(checkedTopping.checked) {
            total += toppingValue;
        }
    }

    let selectedCrust = crustType.options[crustType.selectedIndex];
    let crustValue = Number(selectedCrust.value);

    total+= crustValue;

    document.getElementById("total").textContent = "Total: $" + total;
}