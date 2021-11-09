import React, { useState } from "react";

export default function UploadProducts() {
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categorias, setCategorias] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const producto = e.target.producto.value;
    const descripcion = e.target.descripcion.value;
    const precio = e.target.precio.value;
    if ((producto && photo && descripcion, categorias, precio)) {
      const PRODUCT = {
        producto: producto,
        img: await uploadImage(),
        desc: descripcion,
        categ: categorias,
        precio: precio,
      };
      console.log(PRODUCT);
    } else {
      alert("Completa todos los campos")
    }

    setLoading(false);
  };
  //upload image to cloudinary with fetch method
  const uploadImage = async () => {
    if (photo) {
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
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", function () {
        setPhoto(this.result);
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
    <form
      className="p-4 mx-auto"
      onSubmit={(e) => handleSubmit(e)}
      style={{ maxWidth: "25rem" }}
    >
      <fieldset>
        <legend>Cargar Productos</legend>
        <div className="form-group">
          <label htmlFor="productImage" className="form-label mt-4">
            {photo ? (
              <img className="mx-auto" src={photo} alt="product" width="100" />
            ) : (
              "Imagen"
            )}
          </label>
          <input
            id="productImage"
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="producto" className="form-label mt-4">
            Producto:
          </label>
          <input
            type="text"
            className="form-control"
            id="producto"
            placeholder="Ej: Polenta"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion" className="form-label mt-4">
            Descripción:
          </label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            placeholder="Ej: Presto Pronta 1kg sin sodio"
          />
        </div>
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
        <div className="form-group">
          <label className="form-label mt-4">Precio:</label>
          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                id="precio"
                type="number"
                className="form-control"
                aria-label="Precio"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
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
