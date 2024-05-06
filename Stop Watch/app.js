let hoursee = document.querySelector(".hourse");
let secound = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let count = document.querySelector(".count");
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
hourse=0;


timer = false;
secounds=0;
minute = 0;
counting = 0;

    
function stopWAtch() {
    if (timer) {
    hourse++;
    }
    if (hourse == 100) {
        hourse = 0;
        secounds++;
       
    }
    if (secounds == 60) {
        secounds = 0;
        minute++;
    }

    if (minute == 60) {
        minute = 0;
        counting++;
    }

    count.innerHTML = counting;
    minutes.innerHTML = minute;
    secound.innerHTML = secounds;   
    hoursee.innerHTML = hourse;

    if (secounds < 10) {
        secound.innerHTML = "0" + secounds;
    }
    if (minute < 10) {
        minutes.innerHTML = "0" + minute;
    }
    if (counting < 10) {
        count.innerHTML = "0" + counting;
    }

}



start.addEventListener("click", function () {
    setInterval(stopWAtch,10);
    timer=true;
})




stop.addEventListener("click", function () {
    timer=false;
}) 


reset.addEventListener("click", function () {
    timer=false;
    hourse=0;
    secounds=0;
    minute = 0;

     document.querySelector(".hourse").innerHTML='00';
})