import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStore } from "./../../store/actions/actions";
import ProductCard from "./ProductCard";

export default function Index() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  //use useEffect to call one time when component is mounted
  useEffect(() => {
    dispatch(fetchStore());
  }, [dispatch]);

  return (
    <div className="mx-auto bg-light p-4 rounded row">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="text-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </div>
  );
}
