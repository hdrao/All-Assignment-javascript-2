import {
    auth,
    app,
    db,
    storage,
    signInWithEmailAndPassword
} from "../../utilies/app.js"


let login_btn = document.getElementById("login");
let email = document.getElementById("floating_email");
let password = document.getElementById("floating_password");


login_btn.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value).then (()=>{
        alert("login success")
        window.location.href = "/index.html";
    }).catch((e)=>{
        alert(e)
    })
})

