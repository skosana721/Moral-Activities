import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { clearCart, getTotalAmount } from "../redux/cart/actions";

export const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalAmount());
  });
  return (
    <div>
      {cart.length !== 0 &&
        cart.map((item) => {
          return (
            <div key={item.id}>
              <h1> {item.brand}</h1>;
            </div>
          );
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
