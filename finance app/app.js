
let income = document.querySelector(".btn");
let expenses = document.querySelector(".btn1");
let totalAmount = document.querySelector(".totalincome");
let totalExpensis = document.querySelector(".totalexpenses");
let balance = document.querySelector(".balance");
let savings = document.querySelector(".savings")
let history = document.querySelector(".history")


let total = 0;
let  sxpens= 0;

function addToTotal() {
    // const inputElement = document.getElementById("numberInput");
    // const inputValue = parseFloat(inputElement.value); // Get the input value and convert to a float
    const inputValue =document.getElementById('amount').value;
    const numbers = inputValue.split(',').map(Number);

    if (inputValue == "") {
        alert("Please enter the amount")
    }

    let sum = numbers.reduce( function (a,b) {
        return a + b;
    }, 0);

    total += sum;
    totalAmount.innerHTML = total;
    balance.innerHTML = total;
    savings.innerHTML = total;
    document.getElementById('amount').value="";
}


function calculate () {
    const inputValue =document.getElementById('amount').value;
    const numbers = inputValue.split(',').map(Number);
    let loss = document.querySelector('.loss');
    let date = new Date;
    let dtStr = date.toLocaleString();

    if (inputValue == "") {
        alert("Please enter the amount")
    }

    let sum = numbers.reduce( function (a,b) {
        return a + b;
    }, 0);

    if (inputValue == "")  {
        
    } else {
        history.innerHTML += "<p>" + dtStr + ":" + inputValue +  "</p>";
    }
   
    sxpens += sum;
    total -= numbers;
    totalExpensis.innerHTML = sxpens;
    totalAmount.innerHTML = total;
    balance.innerHTML = total;
    savings.innerHTML = total;
    document.getElementById('amount').value="";

    if (total <= 0) {
        savings.style.color = "red";
        loss.innerHTML = "Loss:";
    }
}