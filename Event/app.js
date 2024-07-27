import { auth,
    app,
    db,
    storage,
    onAuthStateChanged,
    getDoc,
    doc,
    getDocs,
    collection,
 } from "./utilies/app.js";


let login_image = document.querySelector("#login_image");
let login_btn = document.querySelector("#login_btn");   
const realImage = document.getElementById("image");
let button = document.getElementById("addproducts");
const addToCartButtons = document.querySelectorAll("#adCart");

 onAuthStateChanged(auth, (user) => {
   if (user) {
       login_image.style.display="block";
       login_btn.style.display="none";
        const uid = user.uid;
        if (user.email == "danishrao299@gmail.com") {
          button.style.display="block";
        }else{
          button.style.display="none";
        }
        const userDBref = doc(db, "users", uid);
            getDoc(userDBref).then((data)=>{
              realImage.src = data.data().image;
            })
   } else {
     login_image.style.display="none";
     login_btn.style.display="block";
     button.style.display="none";
     addToCartButtons.forEach((button) => {
       button.disabled = true;
     });
   }
   
   

 });
 getAllproducts();
 let addProducts = document.getElementById("addproducts");
 let showAllproducts = document.querySelector(".container");

 addProducts.addEventListener("click",() => {
   window.location.href = "/products/index.html";
 })

 
 function getAllproducts () {
   const productsCollectionRef = collection(db, "products");
   getDocs(productsCollectionRef).then((snapshot) => {
     snapshot.forEach((doc) => {
       const product = doc.data();
       showAllproducts.innerHTML += `  
                  <div class="card">
            <div class="card_image">
                <img src="${product.image}" alt="">
            </div>
            <div class="card-details">
            <div class="title">
                <h1>${product.title}</h1>
            </div>
            <div class="description">
                <p>${product.description}</p>
            </div>
            <div class="price">
                <h3>${product.price}</h3>
                <button id="adCart">Add Cart</button>
            </div>
            </div>
        </div>
        `

   });

   const addToCartButtons = document.querySelectorAll("#adCart");
   const paragraphs = document.querySelectorAll("#paraa");
   const cartItems = document.querySelector(".cart-items");
   
   addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      button.innerText="Added";
      const parentEl =event.target.closest('#div'); // adjust the class name to match your HTML
      let prt=button.parentElement.parentElement.parentElement;
      console.log(prt);
      const product = {
        image: prt.querySelector('img').src,
        title: prt.querySelector('h1').innerText,
        description: prt.querySelector('p').innerText,
        price: prt.querySelector('h3').innerText,
      }
      const {image,title,description,price} = product;
      console.log(product);
      cartItems.innerHTML +=`
      
       <div id="div" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10">
    <a href="#">
        <img class="rounded-t-lg " style="width: 400px; height: 300px; object-fit: cover;"  src="${image}" alt="" />
    </a>
    <div class="p-5" id="paraa">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> ${description}.</p>
        <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><i>Price</i> = ${price}</h4>

    </div>
</div>

       `
    });
  });



   })
 } ;
 



 const cartItems = document.querySelector(".cart-items");
 let your_cart = document.querySelector("#cart-your")
 your_cart.addEventListener("click",() => {
  cartItems.style.display="flex";
  showAllproducts.style.display="none";
  addToCartButtons.disabled=true;
})

console.log(cartItems);


let logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  auth.signOut().then(() => {
  });
 });



