import { db } from "./../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const add = () => {
  return {
    type: "ADD",
  };
};

export const fetchStore = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    let products = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({ ...data, id: doc.id, precio: parseFloat(data.precio) });
    });

    if (products.length > 0) {
      dispatch({
        type: "FETCH_STORE",
        payload: products,
      });
    } else {
      console.log("No se encontraron productos");
      return;
    }
  };
};
