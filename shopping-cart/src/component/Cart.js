import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { clearCart, getTotalAmount } from "../redux/cart/actions";

export const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cart) {
      dispatch(getTotalAmount());
    }
  }, [cart, dispatch]);
  return (
    <div>
      {cart.length !== 0 &&
        cart.map((item) => {
          return (
            <div key={item.id}>
              <h2> {item.brand}</h2>
              <h3>{item.model}</h3>
              <h4>R {item.price}</h4>
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
