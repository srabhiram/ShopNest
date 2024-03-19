// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
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
const db = getFirestore(app);
export const fetchCartData = async (userId) => {
  try {
    const cartDocRef = doc(db, "carts", userId);
    const cartDocSnapshot = await getDoc(cartDocRef);
    if (cartDocSnapshot.exists()) {
      return cartDocSnapshot.data().cartData || [];
    } else {
      console.log("No cart data found for user:", userId);
      return [];
    }
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return [];
  }
};

export const updateCartData = async (userId, cartData) => {
  try {
    const cartDocRef = doc(db, "carts", userId);
    await setDoc(cartDocRef, { cartData });
    console.log("Cart data updated for user:", userId);
  } catch (error) {
    console.error("Error updating cart data:", error);
  }
};
