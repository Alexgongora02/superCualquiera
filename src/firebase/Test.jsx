import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Test() {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    onSnapshot(collection(db, "productos"), (collection) => {
      const items = [];
      collection.docs.forEach((doc) => {
        console.log(doc.id);
        items.push({ ...doc.data(), id: doc.id });
      });

      setProducts(items);
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <p>
            {product.nombre} // {product.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
