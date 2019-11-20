//fetch the buttons
let minusButtonPants = document.getElementById("pantsMinusButton");
let plusButtonPants = document.getElementById("pantsAddButton");
let minusButtonShirt = document.getElementById("shirtMinusButton");
let plusButtonShirt = document.getElementById("shirtAddButton");

//create function
function decreaseValuePants() {
    //get quantity from innerHTML\
    //decrease by 1
    let qtyMinus = parseInt(document.getElementById("pantsQty").innerHTML) - 1;
    //assign that new value to the innerHTML
    document.getElementById("pantsQty").innerHTML = qtyMinus;

    //finding extended price
    let extdPrc = parseFloat(document.getElementById("extdPricePants").innerHTML);
    document.getElementById("extdPricePants").innerHTML = qtyMinus * 40.99;

}

function increaseValuePants() {
    //get quantity from innerHTML\
    //increase by 1
    let qtyAdd = parseInt(document.getElementById("pantsQty").innerHTML) + 1;
    //assign that new value to the innerHTML
    document.getElementById("pantsQty").innerHTML = qtyAdd;

    //finding extended price
    let extdPrc = parseFloat(document.getElementById("extdPricePants").innerHTML);
    document.getElementById("extdPricePants").innerHTML = qtyAdd * 40.99;

}

//shirt
//create function
function decreaseValueShirt() {
    //get quantity from innerHTML\
    //decrease by 1
    let qtyMinus = parseInt(document.getElementById("shirtQty").innerHTML) - 1;
    //assign that new value to the innerHTML
    document.getElementById("shirtQty").innerHTML = qtyMinus;

    //finding extended price
    let extdPrc = parseFloat(document.getElementById("extdPriceShirt").innerHTML);
    document.getElementById("extdPriceShirt").innerHTML = qtyMinus * 10.99;

}

function increaseValueShirt() {
    //get quantity from innerHTML\
    //increase by 1
    let qtyAdd = parseInt(document.getElementById("shirtQty").innerHTML) + 1;
    //assign that new value to the innerHTML
    document.getElementById("shirtQty").innerHTML = qtyAdd;

    //finding extended price
    let extdPrc = parseFloat(document.getElementById("extdPriceShirt").innerHTML);
    document.getElementById("extdPriceShirt").innerHTML = qtyAdd * 10.99;

}

//add event listener
minusButtonPants.addEventListener("click", decreaseValuePants);
plusButtonPants.addEventListener("click", increaseValuePants);
minusButtonShirt.addEventListener("click", decreaseValueShirt);
plusButtonShirt.addEventListener("click", increaseValueShirt);