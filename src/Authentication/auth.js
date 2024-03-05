import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";

export const signup = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Signup successful:", result);
    if (createUserWithEmailAndPassword) {
      alert("Signup Succesfull");
    }
    return result;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const signin = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log("Signin successful:", result);
    if (signInWithEmailAndPassword) {
      alert("Login Succesfull");
    }
    return result;
  } catch (error) {
    console.error("Signin error:", error);
    throw error;
  }
};
