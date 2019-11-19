//fetch the buttons
let minusButton = document.getElementById("pantsMinusButton");
let plusButton = document.getElementById("pantsAddButton");

//create function
function decreaseValue() {
    //get quantity from innerHTML\
    //decrease by 1
    let qtyMinus = parseInt(document.getElementById("pantsQty").innerHTML) - 1;
    //assign that new value to the innerHTML
    document.getElementById("pantsQty").innerHTML = qtyMinus;

    //finding extended price
    let extdPrc = parseFloat(document.getElementById("extdPrice").innerHTML);
    document.getElementById("extdPrice").innerHTML = qtyMinus * 40.99;

}

function increaseValue() {
    //get quantity from innerHTML\
    //increase by 1
    let qtyAdd = parseInt(document.getElementById("pantsQty").innerHTML) + 1;
    //assign that new value to the innerHTML
    document.getElementById("pantsQty").innerHTML = qtyAdd;

    //finding extended price
    let extdPrc = parseFloat(document.getElementById("extdPrice").innerHTML);
    document.getElementById("extdPrice").innerHTML = qtyAdd * 40.99;

}

//shirt
//create function
function decreaseValue() {
    //get quantity from innerHTML\
    //decrease by 1
    let qtyMinus = parseInt(document.getElementById("pantsQty").innerHTML) - 1;
    //assign that new value to the innerHTML
    document.getElementById("pantsQty").innerHTML = qtyMinus;

    //finding extended price
    let extdPrc = parseFloat(document.getElementById("extdPrice").innerHTML);
    document.getElementById("extdPrice").innerHTML = qtyMinus * 40.99;

}

function increaseValue() {
    //get quantity from innerHTML\
    //increase by 1
    let qtyAdd = parseInt(document.getElementById("pantsQty").innerHTML) + 1;
    //assign that new value to the innerHTML
    document.getElementById("pantsQty").innerHTML = qtyAdd;

    //finding extended price
    let extdPrc = parseFloat(document.getElementById("extdPrice").innerHTML);
    document.getElementById("extdPrice").innerHTML = qtyAdd * 40.99;

}

//add event listener
minusButton.addEventListener("click", decreaseValue);
plusButton.addEventListener("click", increaseValue);