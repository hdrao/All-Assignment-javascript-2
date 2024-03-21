// Q1 print the number from 1 to 10 by using loop
function ED() {
   for (let i=0; i<=10; i) {
    console.log(i);
    i++;
};
}


//  Q2 print the even number from 1 to 20 by using loop

function PN () {
for (let i=0; i<=20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
};


//  Q2 print the odd number from 1 to 20 by using loop

function LC () {

for (let i=0; i<=15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

}

// print the fectorial of a 5 by using loop

function SC () {

let factorial =1;

for (let i=1; i<=5; i++) {
    factorial = factorial * i;
}
console.log(factorial);

}
//  print the multiplication table of a number 7

function GC () {

let number = 7;


for (let i=1; i<=20;i++) {
    console.log(number + " X " + i + " = " + number*i);
}

}
//  Q5 find the sum of the number 123 by using loop

function TC () {

let num = +prompt("Enter any number for sum");

let sum = 0;

 for (let i=1; i<=num; i++) {
    sum += i;
 }

 console.log(sum);

}

// Q 7 reverse the hello world

function RS () {

let original = "Hello World";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log(reversed);

}

//   Q6 print square frm 1 to 10

function  QR() {



for (let i=1; i<=10; i++) {
   let  sqr = i * i;
   console.log(sqr);
}


}