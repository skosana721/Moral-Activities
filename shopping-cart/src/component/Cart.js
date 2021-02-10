import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { cart, total } = useSelector((state) => state);
  console.log("cart", cart);
  return (
    <div>
      {cart.length !== 0 &&
        cart.map((item) => {
          return <h1> {item.brand}</h1>;
        })}
      <h2>{total}</h2>
    </div>
  );
};
