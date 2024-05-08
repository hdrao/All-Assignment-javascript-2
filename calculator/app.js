

// let counter =function creatCounter (c) {
//     let counter =c;

//     return {

//     increment:  () => {
//         counter++;
//         return counter;
//     },

//     reset:  () => {
//         counter=c;
//         return counter;
//     },

//     decrement: () => {
//         counter--;
//         return counter;
//     }

//     }

// }

// let counterr = counter(10);

// console.log(counterr.increment());

// console.log(counterr.increment());

// console.log(counterr.decrement());

// console.log(counterr.reset());





// function findMax () {
//     let arr = [1,2,6,79,89,99]
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }

// findMax();



// let user = parseInt(prompt("give me a prime number"))
// function findPrime () {
//     if (user % 2 == 1) {
//         console.log("this is a prime number");
//     } else (
//         console.log("this is not a prime number")
//     )
// }

// findPrime();

// fibonnaci

// let a =0;
// let b =1;


// for (let i = 0; i < 10; i++) {
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
// }


// function find (n) {

//     if (n ==0) {
//         return 0;
//     }
//     if (n ==1) {
//         return 1;
//     }

//     return find(n-1) + find(n-2);
// }

// console.log(find(10));



// script.js
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      const result = eval(display.value); // Warning: `eval` can be dangerous; only use with trusted input
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  