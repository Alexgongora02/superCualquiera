import React, { useState } from "react";

export function validate(input) {
  let errors = {};
  if (!input.producto) {
    errors.producto = true;
  }
  if (!input.descripcion) {
    errors.descripcion = true;
  }
  if (!input.precio) {
    errors.precio = true;
  }
  return errors;
}

export default function UploadProducts() {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    producto: "",
    img: "",
    desc: "",
    categ: "",
    precio: "",
  });
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categorias, setCategorias] = useState([]);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    if (Object.entries(errors).length > 0 && image) {
      setLoading(true);
      setInput({
        ...input,
        img: await uploadImage(),
      });

      const producto = e.target.producto.value;
      const descripcion = e.target.descripcion.value;
      const precio = e.target.precio.value;
      if ((producto && imagePreview && descripcion, categorias, precio)) {
        const PRODUCT = {
          producto: producto,
          img: await uploadImage(),
          desc: descripcion,
          categ: categorias,
          precio: precio,
        };
        console.log(PRODUCT);
      } else {
        alert("Completa todos los campos");
      }

      setLoading(false);
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
    return file.secure_url;
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
  };
  const handleCategoryChange = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setCategorias([...categorias, e.target.value]);
      e.target.value = "";
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
            id="productImage"
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImagePreview}
          />
        </div>

        {/* PRODUCTO */}
        <div className="form-group position-relative">
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
            name="descripcion"
            className={`form-control ${errors.descripcion && "is-invalid"}`}
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
          <div className="form-control d-flex flex-wrap gap-1" id="categoria">
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
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                name="precio"
                id="precio"
                type="number"
                className={`form-control ${errors.descripcion && "is-invalid"}`}
                aria-label="Precio"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
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
