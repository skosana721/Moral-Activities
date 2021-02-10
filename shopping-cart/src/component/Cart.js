import React from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { clearCart } from "../redux/cart/actions";

export const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.length !== 0 &&
        cart.map((item) => {
          return <h1> {item.brand}</h1>;
        })}
      <h2>Total: R {total}</h2>
      <Button
        onClick={() => dispatch(clearCart())}
        variant="contained"
        color="secondary"
        endIcon={<ClearIcon />}
      >
        Clear
      </Button>
    </div>
  );
};
