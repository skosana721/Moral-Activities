import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import {
  clearCart,
  getTotalAmount,
  removeProduct,
} from "../redux/cart/actions";
import RemoveItem from "@material-ui/icons/RemoveShoppingCart";

export const Cart = () => {
  const { cart, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cart) {
      dispatch(getTotalAmount());
    }
  }, [cart, dispatch]);

  return (
    <div>
      {amount}
      {cart.length !== 0 &&
        cart.map((item) => {
          const { id, brand, model, price } = item;
          return (
            <div key={id}>
              <h2> {brand}</h2>
              <h3>{model}</h3>
              <h4>R {price}</h4>
              <RemoveItem onClick={() => dispatch(removeProduct(id))} />
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
