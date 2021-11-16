import { db } from "./../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchStore = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    let products = [];
    let categs = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      categs.push(...data.categ);
      products.push({ ...data, id: doc.id, precio: parseFloat(data.precio) });
    });
    const uniqueCategs = [...new Set(categs)];
    if (products.length > 0) {
      dispatch({
        type: "FETCH_STORE",
        payload: { products, uniqueCategs },
      });
    } else {
      console.log("No se encontraron productos");
      return;
    }
  };
};

export const addCarrito = (product, cantidad = 1) => {
  const payload = {
    ...product,
    cantidad,
  };
  return {
    type: "ADD_TO_CART",
    payload,
  };
};

export const removeCarrito = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
}
