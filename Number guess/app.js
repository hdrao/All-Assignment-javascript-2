
let input = document.querySelector("#inputField");
let submit = document.querySelector("#submitButton");
let compNumber = Math.ceil(Math.random() * 9);
let showText = document.querySelector("#text");
let resultFinal= document.querySelector(".result");
attemptCount = 0;
result = 0;
remainingAttemptCount = 10;

function handleSubmit(event) {
    
    event.preventDefault();

    attemptCount++;
    remainingAttemptCount --;

    showText .innerHTML = `you have left ${remainingAttemptCount}`

    if (attemptCount >= 10) {

        input.disabled = true;
        input.disabled = true;

        alert("You have reached at the maximum number of attempts")
    }


    if (compNumber == input.value) {
        result ++;
        alert(`You have completed ${result} tasks`)
    };
    if ( result >= 3 ) {
        alert("You have won the game")
    }    

}