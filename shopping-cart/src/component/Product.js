import React from "react";
import { useSelector } from "react-redux";

export const Product = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      {products.map((product) => {
        const { id, brand, model, img, price } = product;
        return (
          <div key={id}>
            <h1>{brand}</h1>
            <h2>{model}</h2>
          </div>
        );
      })}
    </div>
  );
};
