import React from "react";
import ProductList from "./ProductList";
import Carousel from "./Carousel";
import Categorias from "./Categorias";
import Tarjetas from "./Tarjetas";
import Navbar from "./Navbar/Navbar";


export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Carousel />
      <Categorias />
      <ProductList />
      <Tarjetas />
    </div>
  );
}
