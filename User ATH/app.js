
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
   } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCJiwRze8Ak3ummNj6hzdIQBGHLNZ3jmD8",
    authDomain: "user-athentication-74d8a.firebaseapp.com",
    projectId: "user-athentication-74d8a",
    storageBucket: "user-athentication-74d8a.appspot.com",
    messagingSenderId: "518655560395",
    appId: "1:518655560395:web:f747c1b4f223097b74294e",
    measurementId: "G-HY009MXTNK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
// This is use for change the state  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      home_container.style.display="block";
      user_email.innerText = user.email;
      localStorage.setItem("email", user.email);
      left_section.style.display="none";
    } else {
      home_container.style.display="none";
    }
  });

  const email = document.getElementById("email");
  const email1 = document.getElementById("email1");
  const password = document.getElementById("password");
  const password1 = document.getElementById("password1");
  const user_email = document.getElementById("user_email");
  const login_container = document.getElementById("login_container");
  const home_container = document.getElementById("home_container");
  let optional_section = document.querySelector(".optional-section");
  let left_section = document.querySelector(".left-section");

  // Creat the account functions
document.getElementById("loginform").addEventListener("click", 
function SignupUser() {

  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    left_section.style.display="none";
    home_container.style.display = "none";
    optional_section.style.display="block";
    localStorage.setItem("email", email.value)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  localStorage.setItem("email", email.value);
}
);
// All login features availible
document.getElementById("loginform1").addEventListener("click",
function loginUser () {
  signInWithEmailAndPassword(auth, email1.value, password1.value)
  .then((userCredential) => {
    optional_section.style.display="none";
    const user = userCredential.user;
    localStorage.setItem("email", email1.value)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}
)

let btn =document.getElementById("btnlgn");
btn.addEventListener("click", () => {
  optional_section.style.display="block";
  home_container.style.display = "none";
  left_section.style.display="none";
})

// Signout or logout here
document.getElementById("logout").addEventListener("click", function logout() {
  auth.signOut().then(() => {
    optional_section.style.display="block";    
    home_container.style.display = "none";
  }).catch((error) => {
    console.error(error);
  });
});
// Add todo from here
const date = new Date();
let currentDate = date.toLocaleString();

const input = document.getElementById("todoinput");
const todolist = document.getElementById("todolist");

let todoItems = [];

document.getElementById("btn").addEventListener("click",
function addTodo() {
  if (!input.value) {
    return alert("Please add a todo item.");
  }
  currentDate = date.toLocaleString();
  localStorage.setItem("userdata", input.value);
  let data = localStorage.getItem("userdata");
  todolist.innerHTML += `<div id="createdfile"><li>${data} <b>${currentDate}</b> </li> <div class="buttonslink"><button onclick="removeItems()">Remove</button>  </div></div>`;
  input.value = "";
}
)


function removeItems() {
  localStorage.removeItem("userdata");
  const parent = event.target.parentElement.parentElement;
  parent.remove();
}

document.addEventListener("DOMContentLoaded", function() {
  const emailfromlcst = localStorage.getItem("email");
  if (emailfromlcst) {
    user_email.innerText = emailfromlcst;
  } else {

  }
});




// document.addEventListener("DOMContentLoaded", checkLoginStatus);

// document.getElementById("loginform").addEventListener("click", 
// function loginUser() {
//   // if (!email.value || !password.value) {
//   //   return alert("Please add email and password.");
//   // }
//   createUserWithEmailAndPassword(auth, email.value, password.value)
//   .then((userCredential) => {
//     console.log("login");
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage);
//   });
//   localStorage.setItem("email", email.value);
//   checkLoginStatus();
// }