import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Test() {
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState(false);

  //upload image to cloudinary with fetch method
  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "SuperCualquiera");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkr9yv2oa/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setPhoto(file.secure_url);
  };

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
            {product.nombre} || {product.desc}
          </p>
        </div>
      ))}
      <br />
      Cloudinary
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={uploadImage}>Upload</button>
      {photo && <img src={photo} alt="product" />}
    </div>
  );
}
