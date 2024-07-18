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
console.log(button);
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
              console.log(data.data().image);
              realImage.src = data.data().image;
            })
   } else {
     login_image.style.display="none";
     login_btn.style.display="block";
     button.style.display="none";
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
       console.log(`${doc.id} => ${doc.data()}`);
       const product = doc.data();
       console.log(product);
       showAllproducts.innerHTML += `
      
       <div id="div" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10">
    <a href="#">
        <img class="rounded-t-lg " style="width: 400px; height: 300px; object-fit: cover;"  src="${product.image}" alt="" />
    </a>
    <div class="p-5">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> ${product.description}.</p>
        <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><i>Price</i> = ${product.price}</h4>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <button id="adCart">Add to Cart</button>
        </a>
    </div>
</div>

       `

     });
     let addtoCart = document.querySelector("#adCart");
addtoCart.addEventListener("click", () => {
          console.log(addtoCart.parentElement.parentElement);
})
   });
   

 }
 

let currentuser = auth;






let logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  auth.signOut().then(() => {
    console.log("Signed out");
  });
 });




