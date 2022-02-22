// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzCw-yVe58BAYAFdolY4oQqrTpfOjy1_s",
  authDomain: "instagram-clone-81232.firebaseapp.com",
  projectId: "instagram-clone-81232",
  storageBucket: "instagram-clone-81232.appspot.com",
  messagingSenderId: "725594022065",
  appId: "1:725594022065:web:989d7348aaca093ef84290"
};

// Initialize Firebase
const app =  !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export {app, db, storage};