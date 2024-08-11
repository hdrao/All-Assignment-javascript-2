let capital_letter =document.querySelector(".capital_letter");
let small_letter = document.querySelector(".samll_letter");
let special_letter =document.querySelector(".special_letter");
let input_numbers = document.querySelector(".number");
let psd_btn = document.querySelector("#button_psdw")
let showpswd = document.querySelector(".Genrated");

// psd_btn.addEventListener("click",()=>{
//     console.log(capital_letter,small_letter,special_letter,numbers);
// })

const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
const numbers = '0123456789';


function genratepsdw (char) {
   return char[Math.round(Math.random() * char.length)];
}

let password = '';


psd_btn.addEventListener("click", () => {
    password="";
   for (let i=0; i<+capital_letter.value; i++){
    password += genratepsdw(capitalLetters);
   } 
   for (let i=0; i<+small_letter.value; i++){
    password += genratepsdw(smallLetters);
   }
   for (let i=0; i<+input_numbers.value; i++){
    password += genratepsdw(numbers);
   } 
   for (let i=0; i<+special_letter.value; i++){
    password += genratepsdw(specialCharacters);
   }
   console.log(password.length);
    showpswd.innerHTML = password;  
})
