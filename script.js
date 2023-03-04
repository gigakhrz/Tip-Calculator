const inputBill = document.getElementById("input-bill");
const custom = document.getElementById("custom");
const inputPeople = document.getElementById("input-quantity");
const tipAmount = document.getElementById("amount-number");
const totalAmount = document.querySelector(".total-amount-number");
const reset = document.querySelector(".reset");
const errorMesage = document.getElementById("error-message");
let tip;

function calculateTip(){
    tip = inputBill.value * custom.value / 100;
    let perPerson = tip / inputPeople.value;
    tipAmount.textContent= ("$"+perPerson.toFixed(2));
    console.log(perPerson);
    check();
}

function calculateTotal(){
    tip = Number(inputBill.value) * custom.value / 100;
    let totalPerPerson =(tip + Number(inputBill.value)) / inputPeople.value;
    console.log(totalPerPerson);
    totalAmount.textContent = ("$"+totalPerPerson.toFixed(2));
    check();
}

custom.addEventListener('input' , calculateTip);

custom.addEventListener("input" , calculateTotal);

function moneyPerPeople(x){
    tip = inputBill.value * Number(x.value) / 100;
    let perPerson = tip / inputPeople.value;
    tipAmount.textContent= ("$"+perPerson.toFixed(2));
    console.log(perPerson);

    tip = Number(inputBill.value) * Number(x.value) / 100;
    let totalPerPerson =(tip + Number(inputBill.value)) / inputPeople.value;
    console.log(totalPerPerson);
    totalAmount.textContent = ("$"+totalPerPerson.toFixed(2));
    check();
}

function restart(){
    inputBill.value = "";
    inputPeople.value = "";
    custom.value = "";
    totalAmount.textContent = "$0.00";
    tipAmount.textContent= "$0.00";
    errorMesage.style.display = "none";
    inputPeople.style.border= "none";
}

reset.addEventListener("click" , restart);

function check(){
    if(inputPeople.value <= 0){
        inputPeople.style.border= "1px solid red";
        errorMesage.style.display = "block";
        totalAmount.textContent = "$0.00";
        tipAmount.textContent= "$0.00";
    }else {
        errorMesage.style.display = "none";
        inputPeople.style.border= "none";
    }
}



