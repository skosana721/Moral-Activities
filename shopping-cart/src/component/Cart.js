import React from "react";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);
  console.log("cart", cart);
  return (
    <div>
      {cart.length !== 0 &&
        cart.map((item) => {
          return <h1> {item.brand}</h1>;
        })}
      <h2>Total: R {total}</h2>
      <Button variant="contained" color="secondary">
        Clear
      </Button>
    </div>
  );
};
