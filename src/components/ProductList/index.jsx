import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Categorias from "./Categorias";

export default function Index() {
  const products = useSelector((state) => state.products);
  return (
    <>
    <Categorias />
      <div className="mx-auto bg-light p-4 rounded row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
