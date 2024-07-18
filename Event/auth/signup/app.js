import {
    auth,
    doc,
    createUserWithEmailAndPassword,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    db,
    setDoc
} from '../../utilies/app.js'


let signUp_btn = document.querySelector("#SignUp_user");
let signUp_btn_text = document.getElementById("btn");



 signUp_btn.addEventListener("submit", (e) => {
    e.preventDefault();
   let image =  e.target[0].files[0];
   let email =  e.target[1].value;
   let password =  e.target[2].value;
   let first_Name =  e.target[3].value;
   let last_Name =  e.target[4].value;
   
    signUp_btn_text.disabled=true;
    signUp_btn_text.innerHTML="Signing Up...";

   const userinfo = {
     image,
     email,
     password,
     first_Name,
     last_Name,
   }
   
   createUserWithEmailAndPassword(auth, email, password).then ( (user) => {
    console.log(user.user.uid);
    let storageRef = ref(storage, `user/${user.user.uid}`);
    uploadBytes(storageRef, image).then( () => {
        console.log("uploded");
    
        getDownloadURL(storageRef).then( (url) => {
            console.log("url agye hai",url);

             userinfo.image = url;
             const userDBref = doc(db, "users", user.user.uid);
             setDoc(userDBref, userinfo).then(() => {
                 console.log("data inserted");
                window.location.href="/";
                signUp_btn_text.disabled=false;
                signUp_btn_text.innerHTML="Submit";
             })

        }).catch((e)=>{
            alert(e)
            signUp_btn_text.disabled=false;
            signUp_btn_text.innerHTML="Submit";
        })
    
    })
   }).catch ( (e) => {
    alert(e)
   })
   
})