//fetch the buttons
let minusButtonPants = document.getElementById("pantsMinusButton");
let plusButtonPants = document.getElementById("pantsAddButton");
let minusButtonShirt = document.getElementById("shirtMinusButton");
let plusButtonShirt = document.getElementById("shirtAddButton");
let calcSubTotal = document.getElementById("calculate");
let promoCode = document.getElementById("promo");

let varPantQty = document.getElementById("pantsQty");
let varExtdPricePants = document.getElementById("extdPricePants");
let varShirtQty = document.getElementById("shirtQty");
let varExtdPriceShirt = document.getElementById("extdPriceShirt");
let varSubTotal = document.getElementById("subTotal");
let varTax = document.getElementById("taxValue");
let varTotalValue = document.getElementById("totalValue");

//create function
function decreaseValuePants() {
    //get quantity from innerHTML
    //decrease by 1
    let qtyMinus = parseInt(varPantQty.innerHTML) - 1;
    //assign that new value to the innerHTML
    varPantQty.innerHTML = qtyMinus;

    //finding extended price
    let extdPrc = parseFloat(varExtdPricePants.innerHTML);
    varExtdPricePants.innerHTML = qtyMinus * 40.99;
    if (varPantQty.innerHTML == 0) {
        pantsMinusButton.disabled = true;
    }
}

function increaseValuePants() {
    //get quantity from innerHTML\
    //increase by 1
    let qtyAdd = parseInt(varPantQty.innerHTML) + 1;
    //assign that new value to the innerHTML
    varPantQty.innerHTML = qtyAdd;

    //finding extended price
    let extdPrc = parseFloat(varExtdPricePants.innerHTML);
    varExtdPricePants.innerHTML = (qtyAdd * 40.99).toFixed(2);

}

//shirt
//create function
function decreaseValueShirt() {

    //get quantity from innerHTML\
    //decrease by 1
    let qtyMinus = parseInt(varShirtQty.innerHTML) - 1;
    //assign that new value to the innerHTML
    varShirtQty.innerHTML = qtyMinus;

    //finding extended price
    let extdPrc = parseFloat(varExtdPriceShirt.innerHTML);
    varExtdPriceShirt.innerHTML = qtyMinus * 10.99;
    if (varShirtQty.innerHTML == 0) {
        shirtMinusButton.disabled = true;
    }
}


function increaseValueShirt() {
    //get quantity from innerHTML\
    //increase by 1
    let qtyAdd = parseInt(varShirtQty.innerHTML) + 1;
    //assign that new value to the innerHTML
    varShirtQty.innerHTML = qtyAdd;

    //finding extended price
    let extdPrc = parseFloat(varExtdPriceShirt.innerHTML);
    varExtdPriceShirt.innerHTML = (qtyAdd * 10.99).toFixed(2);

}

function calculate() {
    varSubTotal.innerHTML = (parseFloat(varExtdPricePants.innerHTML) + parseFloat(varExtdPriceShirt.innerHTML)).toFixed(2);
    varTax.innerHTML = (parseFloat(varSubTotal.innerHTML) * 13 / 100).toFixed(2);
    varTotalValue.innerHTML = (parseFloat(varSubTotal.innerHTML) + parseFloat(varTax.innerHTML)).toFixed(2);
}

function promo() {
    let code;
    let pCode = prompt("Enter your promo code!!", "NOTAX");
    if (pCode == "NOTAX") {
        varTax.innerHTML = 0;
        varTotalValue.innerHTML = (parseFloat(varSubTotal.innerHTML) + parseFloat(varTax.innerHTML)).toFixed(2);

    } else if (pCode == "FIFTYFIFTY") {
        varTax.innerHTML = (parseFloat(varTax.innerHTML) * 50 / 100).toFixed(2);
        varTotalValue.innerHTML = (parseFloat(varSubTotal.innerHTML) + parseFloat(varTax.innerHTML)).toFixed(2);
    }
}
//add event listener
minusButtonPants.addEventListener("click", decreaseValuePants);
plusButtonPants.addEventListener("click", increaseValuePants);
minusButtonShirt.addEventListener("click", decreaseValueShirt);
plusButtonShirt.addEventListener("click", increaseValueShirt);
calcSubTotal.addEventListener("click", calculate);
promoCode.addEventListener("click", promo);