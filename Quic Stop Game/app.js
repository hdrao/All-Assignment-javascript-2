let charcters =0;
let counting = document.querySelector(".counting")
let input = document.querySelector("#input");
let result = document.querySelector(".result");
function start () {
    if (input.value == "") {
        alert("please enter a value")
    } else {
    inter = setInterval (function () {
        counting.innerHTML = charcters;
        charcters++;
        if (charcters === 500) {
            clearInterval(inter);
            charcters = 0;
            counting.style.color = "red";
            alert("you are lazy ")
        }
    }, 10)
    }
}

function stop () {
    clearInterval(inter);
    counting.style.color = "black";
    counting.innerHTML = charcters;
    if (input.value == charcters) {
        result.style.color = "green";
        result.innerHTML = "you won the game"
    } else {
    result.style.color = "red";
    result.innerHTML = "you lost the game"
    }
}

function reset () {
    clearInterval(inter);
    counting.innerHTML ="00";
    charcters = 0;
    input.value = "";
    counting.style.color = "black";
    result.style.color = "black";
}


