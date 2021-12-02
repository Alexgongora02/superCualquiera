import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStore } from "./../../store/actions/actions";
import ProductCard from "./ProductCard";
import Categorias from "./Categorias";

export default function Index() {
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const isSearch = useSelector((state) => state.productsFiltered);

  //use useEffect to call one time when component is mounted
  useEffect(() => {
    dispatch(fetchStore());
  }, [dispatch]);

  const lista = (() => {
    if (filter) {
      return products.filter((product) => product.categ.includes(filter));
    } else {
      return products;
    }
  })();

  if (isSearch) {
    return (
      <div className="mx-auto bg-light p-4 rounded row">
        {isSearch.length > 0 ? (
          isSearch.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="text-center">
            <h1>No hay resultados</h1>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Categorias setFilter={setFilter} filter={filter} />
      <div className="mx-auto bg-light p-4 rounded row">
        {lista.length > 0 ? (
          lista.map((product) => {
            if (filter) {
              return <ProductCard key={product.id} product={product} />;
            }
            if (!product.categ.indexOf("Ofertas")) return null;
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <div className="text-center">
            <div className="spinner-grow text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
