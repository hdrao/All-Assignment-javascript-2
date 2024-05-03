



 setInterval(function updateCoundown () {

    let currentTime = new Date().getTime();
    let countDownDate = new Date("Jun 17, 2024 12:00:00").getTime();
    let difference = countDownDate - currentTime;
    let days = document.querySelector("#days")
    let houres = document.querySelector("#hours")
    let minutes = document.querySelector("#minutes")
    let seconds = document.querySelector("#seconds")
    console.log(difference)

     days.innerHTML = Math.floor(difference / (1000 * 60 * 24 * 60))
     houres.innerHTML = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
     minutes.innerHTML = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60 ))
     seconds.innerHTML = Math.floor(difference % (1000 * 60) / (1000 ));

    
 },1000 )

