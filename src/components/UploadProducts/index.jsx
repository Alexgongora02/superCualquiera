import React, { useState } from "react";
import { addProduct } from "../../firebase/fireStore.js";

export default function UploadProducts() {
  const [categorias, setCategorias] = useState([]);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    producto: "",
    img: "https://via.placeholder.com/150",
    desc: "",
    categ: "",
    precio: "",
    stock: "",
  });
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: !e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    if (Object.entries(errors).length > 0 && image) {
      setLoading(true);
      let product = {
        ...input,
        categ: categorias.length > 0 ? categorias : "",
      };
      //check if product has empty fields
      if (Object.values(product).some((value) => value === "")) {
        setLoading(false);
        alert("Completa todos los campos");
        return;
      }
      const imgURL = await uploadImage();
      product.img = imgURL;
      addProduct(product);

      //reset form
      e.target.parentNode.parentNode.reset();
      setImagePreview(false);
      setCategorias([]);

      setLoading(false);
    } else {
      alert("Completa todos los campos");
    }
  };
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
    return new Promise((resolve, reject) => {
      if (file.secure_url) {
        resolve(file.secure_url);
      } else {
        reject(file.error);
      }
    });
  };
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", function () {
        setImagePreview(this.result);
      });
    }
    setErrors({
      ...errors,
      [e.target.name]: !e.target.value,
    });
  };
  const handleCategoryChange = (e) => {
    if (categorias.length < 1) {
      setErrors({
        ...errors,
        categorias: true,
      });
    }
    if (e.key === "Enter" && e.target.value !== "") {
      setCategorias([...categorias, e.target.value]);
      e.target.value = "";
      setErrors({
        ...errors,
        categorias: false,
      });
    }
  };

  return (
    <form className="p-4 mx-auto" style={{ maxWidth: "25rem" }}>
      <fieldset>
        <legend>Cargar Productos</legend>

        {/* IMAGEN */}
        <div className="form-group">
          <label htmlFor="productImage" className="form-label mt-4">
            {imagePreview ? (
              <img
                className="mx-auto"
                src={imagePreview}
                alt="product"
                width="100"
              />
            ) : (
              "Imagen"
            )}
          </label>
          <input
            name="productImage"
            id="productImage"
            type="file"
            className={`form-control ${errors.productImage && "is-invalid"}`}
            accept="image/*"
            onChange={handleImagePreview}
          />
        </div>

        {/* PRODUCTO */}
        <div className="form-group">
          <label htmlFor="producto" className="form-label mt-4">
            Producto:
          </label>
          <input
            type="text"
            name="producto"
            className={`form-control ${errors.producto && "is-invalid"}`}
            id="producto"
            placeholder="Ej: Polenta"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        {/* DESCRIPCIÓN */}
        <div className="form-group">
          <label htmlFor="descripcion" className="form-label mt-4">
            Descripción:
          </label>
          <input
            type="text"
            name="desc"
            className={`form-control ${errors.desc && "is-invalid"}`}
            id="descripcion"
            placeholder="Ej: Presto Pronta 1kg sin sodio"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        {/* CATEGORIAS */}
        <div className="form-group">
          <label htmlFor="categoria" className="form-label mt-4">
            Categorías:
          </label>
          <div
            className={`form-control d-flex flex-wrap gap-1 ${
              errors.categorias && "is-invalid"
            }`}
            id="categoria"
          >
            {categorias.map((categoria, index) => {
              return (
                <div key={index}>
                  <span className="badge rounded-pill bg-primary">
                    {categoria}
                    <button
                      type="button"
                      className="btn badge rounded-pill bg-danger"
                      aria-label="Close"
                      onClick={() => {
                        setCategorias(
                          categorias.filter((item, i) => i !== index)
                        );
                      }}
                    >
                      x
                    </button>
                  </span>
                </div>
              );
            })}

            <input
              type="text"
              id="categoria"
              placeholder="Enter para agregar"
              style={{ border: "none" }}
              onKeyUp={(e) => handleCategoryChange(e)}
            />
          </div>
        </div>

        {/* PRECIO */}
        <div className="form-group">
          <label className="form-label mt-4">Precio:</label>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                name="precio"
                id="precio"
                type="number"
                className={`form-control ${errors.precio && "is-invalid"}`}
                aria-label="Precio"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>

        {/* STOCK */}
        <div className="form-group mb-3">
          <label htmlFor="stock" className="form-label mt-4">
            Stock:
          </label>
          <input
            type="number"
            name="stock"
            className={`form-control ${errors.stock && "is-invalid"}`}
            id="stock"
            placeholder="Cantidad de producto disponible"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
          disabled={loading}
        >
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "Upload"
          )}
        </button>
      </fieldset>
    </form>
  );
}
