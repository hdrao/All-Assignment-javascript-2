import {
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    db,
    setDoc,
    collection,
    addDoc,
    doc,
    getDoc,
   
} from '../utilies/app.js'

let createProduct = document.querySelector("#prdt");

createProduct.addEventListener("submit", (e)=>{
    e.preventDefault();
    let product = {
        image: createProduct.elements[0].files[0],
        title: createProduct.elements[1].value,
        description: createProduct.elements[2].value,
        price: createProduct.elements[3].value
    }
    console.log("process start");
    const imgeref = ref(storage, product.image.name);
    uploadBytes(imgeref, product.image).then((snapshot) => {
        console.log("process is being process");
        console.log(snapshot);
        console.log("image uploded");
        

        getDownloadURL(imgeref).then((data)=>{
            console.log(data);
            product.image = data;

            const productDBref = collection(db, "products");
            addDoc(productDBref, product).then(() => {
                console.log("data inserted");
                window.location.href="/";
            })
        })
    })


})




