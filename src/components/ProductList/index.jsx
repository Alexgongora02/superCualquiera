import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function Index() {
  const products = useSelector((state) => state.products);
  return (
    <div className="d-flex flex-wrap mx-auto justify-content-evenly">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
