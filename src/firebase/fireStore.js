import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "productos"), product);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
