import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";

export const signup = async (email, password, name) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Signup successful:", result);
    await updateProfile(auth.currentUser, { displayName: name });

    // You can do further processing if needed
    console.log("User signed up successfully with name:", name);

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

    return result;
  } catch (error) {
    console.error("Signin error:", error);
    throw error;
  }
};
