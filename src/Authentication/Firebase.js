// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXFiFqS9Uw9ui0UBIdn-pi2aXCF_AuFk8",
  authDomain: "shopify-f995c.firebaseapp.com",
  projectId: "shopify-f995c",
  storageBucket: "shopify-f995c.appspot.com",
  messagingSenderId: "643740857511",
  appId: "1:643740857511:web:086c2cc44d39a79e451782",
  measurementId: "G-40MEVY69LL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
