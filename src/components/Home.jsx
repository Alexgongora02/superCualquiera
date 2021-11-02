import React from "react";
import ProductList from "./ProductList";
import Carousel from "./Carousel";
import Categorias from "./Categorias";

export default function Home() {
  return (
    <div className="container">
      <Carousel />
      <Categorias />
      <ProductList />
    </div>
  );
}
