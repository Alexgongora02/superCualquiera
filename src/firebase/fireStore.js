import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";

export const addProduct = async () => {
  try {
    const docRef = await addDoc(collection(db, "productos"), {
      nombre: "Harina",
      imgURL: "2",
      desc: "1kg, De arroz",
      categ: ["almacen", "panaderia"],
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
