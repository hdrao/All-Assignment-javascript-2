
//  Q1 Even and odd Number varification
 
  function ED () {

var num = prompt("Enter a number");
if (num % 2 == 0) {
    alert("Even Number");
} else {
    alert("Odd Number");
 }

  };


//  Q2 show the number is positive and negative

 function PN () {

var num = prompt("Enter a number");

if (num > 0) {
    alert("Positive Number");
} else if (num < 0) {
    alert("Negative Number");
} else {
    alert("Zero Number");
}
 
 };
// // Q3 get the two numbers from the user and show the larger one
function LC () {
var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");

if (num1 > num2) {
    alert(num1);
} else if (num2 > num1) {
    alert(num2);
}
}
// // Q4 get the three numbers from the user and show the smaller one
function SC () {
var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");
var num3 = prompt("Enter another number");

if (num1 < num2 && num2 < num3) {
    alert(num1);
} else if (num2 < num1 && num1 < num3) {
    alert(num2);
} else if (num3 < num1 && num1 < num2) {
    alert(num3);
} else {
    alert("Try other numbers");
};

};



// Q4 

function GC () {
let userNum1=+prompt("How many umbers do ypu get in HTML out of 100");
let userNum2=+prompt("How many umbers do ypu get in CSS out of 100");
let userNum3=+prompt("How many umbers do ypu get in JS out of 100");


let allUsers = userNum1+userNum2+userNum3;
let totalnum= allUsers/300;
let fp = totalnum*100;




if (fp < 100 && fp > 90) {
    alert("congratulation A+");
}else if (fp < 89 && fp > 80){
    alert("congratulation A");
} else if (fp <79 && fp > 70){
    alert("congratulation B+");
} else if (fp < 70 && fp > 60) {
    alert("congratulation B");
} else{
    alert("You should focus on yourself");
}

document.querySelector("h1").innerHTML ="Your Percentage is " + Math.round(fp) + " %"; 

};


//  Q 5 get from the user tempprature in celsius and convert it to feranheit;

function TC () {
let userTemp = +prompt("Enter your temperature in Celsius");
let userTempF = (userTemp * 1.8) + 32;
document.querySelector("h1").innerHTML = "Your temperature in Fahrenheit is " + Math.round(userTempF) + " Fahrenheit";
};


// Q 6 vowel characters cheker

function VC () {

let userCharecter= prompt("Please enter your character");

if (userCharecter === "a" || userCharecter === "e" || userCharecter === "i" || userCharecter === "o" || userCharecter === "u" || userCharecter === "A" || userCharecter === "E" || userCharecter === "I" || userCharecter === "O" || userCharecter === "U") {
    alert("Your character is a vowel");
} else {
    alert("Your character is not a vowel");
}

};


// Q 7 request the user to enter the base number and its exponent then print result

function RE () {
let userBase = +prompt("Enter the base number");
let userExp = +prompt("Enter the exponent");
let result = userBase ** userExp;
document.querySelector("h1").innerHTML = "The result is " + result;
};


// Q 8 age cheker and print the result

function AG () {

let userAge = +prompt("Enter the age");

if (userAge <= 12) {
    document.querySelector("h1").innerHTML="Child";
} else if (userAge >= 13 && userAge <= 18) {
    document.querySelector("h1").innerHTML="Teen";
} else if (userAge >= 19 && userAge <= 64) {
    document.querySelector("h1").innerHTML="Young Adult";
}else if (userAge >= 65) {
    document.querySelector("h1").innerHTML="Senior Citizen";
}
};

