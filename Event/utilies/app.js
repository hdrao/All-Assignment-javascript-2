
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
 import { getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
 import {  getFirestore,
          getDoc,
          getDocs,
          doc,
          setDoc,
          collection,
          addDoc
  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
 import {  getStorage,
    ref,
    uploadBytes,
    getDownloadURL
  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBBYPr-qsm1WbWSAJ4gr9MI1Frh7YMgekc",
   authDomain: "weather-app-5cc6c.firebaseapp.com",
   projectId: "weather-app-5cc6c",
   storageBucket: "weather-app-5cc6c.appspot.com",
   messagingSenderId: "691858355607",
   appId: "1:691858355607:web:823f818588c459371800d2",
   measurementId: "G-N5X9X4033X"
 };


 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);
 const storage = getStorage(app)

 export { auth,
  app,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  getDoc,
  doc,
  ref,
  uploadBytes,
  getDownloadURL,
  setDoc,
  addDoc,
  getDocs,
  collection,
  signInWithEmailAndPassword
};
