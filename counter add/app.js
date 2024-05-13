

let count = document.querySelector(".count");
const resetBtn = document.getElementsByClassName('btn1');
let showColor = document.querySelector(".show");
let tracker = document.querySelector(".tracker");
let history = document.querySelector(".history");
function creatCount () {
   let num =Math.round(Math.random() * 99);
   count.innerHTML= num;
   history.innerHTML += "<p>" + "The given number is" + " : "  + num   + "</p>";
   if (num <= 9) {
      count.innerHTML="0"+num;
   } else if (num % 2 == 0) {
      showColor.style.color="chocolate";
      tracker.innerHTML = "The given number is Even";
   } else {
      showColor.style.color="cadetblue";
      tracker.innerHTML = "The given number is Odd";
   }
}

let counter = setInterval(creatCount, 1000);


 function resetCounter () {
   clearInterval(counter);
   count.innerHTML="00";
   showColor.style.color="#182848";
   history.innerHTML = "";
}

function startCounter () {
   counter = setInterval(creatCount, 1000);
}

