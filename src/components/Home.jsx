import React from "react";
import ProductList from "./ProductList";
import Carousel from "./Carousel";
import Tarjetas from "./Tarjetas";

export default function Home() {
  return (
    <div className="container">
      <Carousel />
      <ProductList />
      <Tarjetas />
    </div>
  );
}
