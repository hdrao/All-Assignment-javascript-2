let btn = document.querySelector(".buttonOne");
btn.addEventListener("click", function () {
function stringlength (str) {
    let  count = 0;
    for (let i=0; i<str.length; i++) {
    if (str.charCodeAt(i) !== ""){
        count++;
    }
    }
    return count;
}
let userString = prompt("Please enter a string");
let mysring = stringlength(userString);
console.log(mysring);
});



let btnTwo = document.querySelector(".buttonTwo");

btnTwo.addEventListener("click", function () {

function countSpecific (str,counter) {
    let count = 0;
    for (let i=0; i < str.length; i++) {
        if (str[i] === counter) {
            count++;
        }

    }
    return count
}


const inputString = prompt("Enter a string");
const charecter = prompt("Enter the character that you want to count");
console.log(countSpecific(inputString, charecter)); // Output: 3

});



let extracter = document.querySelector(".buttonThree");



extracter.addEventListener("click", function () {

let inputString = prompt("Please enter");
let startIndex =parseInt(prompt("Enter the start index:"));
let endIndex =parseInt(prompt("Enter the end index:"));

if ( !isNaN(startIndex) && !isNaN(endIndex) ) {
    let substring = inputString.substring(startIndex,endIndex+1)
    console.log("The extracted substring is:", substring);
}else {
    console.log("Please enter valid numeric indices.");
}

});



let captLizedLetter= document.querySelector(".buttonfour");


captLizedLetter.addEventListener("click", function () {

let inputStrings = prompt("Enter the string");

let words = inputStrings.split(" ");

for (let i=0; i < words.length; i++) {
    let firstLetter=words[i].charAt(0).toUpperCase();

    words[i] = firstLetter + words[i].slice(1);
}


let captLized = words.join(" ");

console.log(captLized);


})







let countVCB = document.querySelector(".buttonfive");

countVCB.addEventListener("click", function () {

function counVC (str) {

    str = str.toLowerCase();

    let countvowels = 0;
    let countconsonants = 0;


    for (let i=0; i<str.length; i++) {

        char = str[i];

        if (char.match(/[aeiou]/)) {
            countvowels++;
        }else if (char.match(/[a-z]/)) {
            countconsonants++;
        }

    }
    return { vowels: countvowels, consonants: countconsonants };
}


let inputwords = prompt("enter");

let count = counVC(inputwords);

console.log("Number of vowels in the string", count.vowels);

console.log("number of consonants in the string", count.consonants);

});


let rmcDp = document.querySelector(".buttonSix")

rmcDp.addEventListener("click", function () {

function removeDup(str) {
    let uniqueStr = new Set ();

    for (let char of str) {
        uniqueStr.add(char);
    }
    return [...uniqueStr].join ('');
}

let mystring = removeDup(prompt("Enter a string"));

console.log(mystring);

});



document.querySelector(".buttonSeven").addEventListener("click", function () {
function extractNumbers (str) {
    let numbers = str.match(/\d+/g);
    return numbers ? numbers.join('') : "Not found any number"
}

let mysring = extractNumbers(prompt("Enter a number"));

console.log(mysring);

});

