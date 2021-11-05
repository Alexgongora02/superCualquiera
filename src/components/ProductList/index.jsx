import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function Index() {
  const products = useSelector((state) => state.products);
  return (
    <div className="mx-auto bg-light p-4 rounded gap-1 row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
