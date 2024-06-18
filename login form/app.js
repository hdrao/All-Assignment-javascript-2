// // let email = document.querySelector(".login__input");
// // let button = document.querySelector(".login__submit");
// // var login_container = document.querySelector(".main-section")
// // let emailValue = email.value;

// // localStorage.setItem("admin", "admin@gmail.com");
// // localStorage.setItem("user1", "raodanishgmail.com");
// // localStorage.setItem("user2", "danishraogmail.com");

// // button.addEventListener("click", function  () {
    
// //     let getEmail = localStorage.getItem("user1");
// //     if (getEmail == email.value) {
// //         alert("welcome user1");
// //     }else{
// //         alert("try again")
// //     }

// //     let getEmail1 = localStorage.getItem("user2");
// //     if (getEmail1 == email.value) {
// //         alert("welcome user2");
// //     }else{
// //         alert("try again")
// //     }

// // })

// // let getEmail = localStorage.getItem("user1");

// // function savedata () {
// //     if (email.value == getEmail){
// //         login_container.style.display = "none";

// //     alert("fd")
// //     }else {
// //         alert("please enter your email");
// //     }

// // }

  


// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const user_email = document.getElementById("user_email");
// const login_container = document.getElementById("login_container");
// const home_container = document.getElementById("home_container");
// // const note = document.getElementById("note");


// function loginUser() {
//   if (!email.value || !password.value) {
//     return alert("Please add email and password.");
//   }
//   localStorage.setItem("email", email.value);
// //   checkIsUserLogin();
// ceckData();
// }

// function ceckData () {
//   const email = localStorage.getItem("email");
//   if (email) {
//     login_container.classList.add("remove");
//     // login_container.style.display = "none";
//     // home_container.style.display = "block";
//     user_email.innerText = email;
//     // displayUserNotes();
//   }else {
//     alert("Please login first");
//   }
// }


// function logout() {
//     localStorage.removeItem("email");
//     login_container.classList.remove("remove")
//     home_container.style.display = "none";
// }



// const date = new Date();

// // let day = date.getDate();
// // let month = date.getMonth() + 1;
// // let year = date.getFullYear();
// // let time = date.getMinutes;
// // let currentDate = `${day}-${month}-${year}`;
// let currentDate = date.toLocaleString();


// let input = document.getElementById("todoinput");
// let todolist = document.getElementById("todolist");

// function addTodo() {
//      localStorage.setItem("userdata", input.value);
//      let addinput = localStorage.getItem("userdata")
//      console.log(addinput);
//     todolist.innerHTML += `<div id="createdfile"><li>${addinput} <b>${currentDate}</b> </li>  <div class="buttonslink"><button onclick="removeItems()">Remove</button> <button>Completed</button> </div></div>`; 
// }


// function removeItems () {
//   localStorage.removeItem("userdata")
// }











const email = document.getElementById("email");
const password = document.getElementById("password");
const user_email = document.getElementById("user_email");
const login_container = document.getElementById("login_container");
const home_container = document.getElementById("home_container");


function checkLoginStatus() {
  const email = localStorage.getItem("email");
  if (email) {
    login_container.classList.add("remove");
    home_container.style.display = "block";
    user_email.innerText = email;
  }
}

document.addEventListener("DOMContentLoaded", checkLoginStatus);

function loginUser() {
  if (!email.value || !password.value) {
    return alert("Please add email and password.");
  }
  localStorage.setItem("email", email.value);
  checkLoginStatus();
}

function logout() {
  localStorage.removeItem("email");
  login_container.classList.remove("remove");
  home_container.style.display = "none";
}

const date = new Date();
let currentDate = date.toLocaleString();

const input = document.getElementById("todoinput");
const todolist = document.getElementById("todolist");

let todoItems = [];

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

// function displayTodoItems() {
//   todolist.innerHTML = "";
//   todoItems.forEach((item) => {
//     const todoHTML = `
//       <div id="createdfile">
//         <li>${item.text} <b>${item.date}</b></li>
//         <div class="buttonslink">
//           <button onclick="removeItems()">Remove</button>
//           <button>Completed</button>
//         </div>
//       </div>
//        `;
//     todolist.innerHTML += todoHTML;
//   });
// }

function removeItems() {
  localStorage.removeItem("userdata");
  const parent = event.target.parentElement.parentElement;
  parent.remove();
}