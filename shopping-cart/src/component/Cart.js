import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import {
  clearCart,
  getTotalAmount,
  removeProduct,
  increaseAmount,
  decreaseAmount,
} from "../redux/cart/actions";
import RemoveItem from "@material-ui/icons/RemoveShoppingCart";
import Increase from "@material-ui/icons/ExpandLessSharp";
import Decrease from "@material-ui/icons/ExpandMoreSharp";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
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
      <Link to="/">
        <Button variant="contained" color="primary" endIcon={<HomeIcon />}>
          Return Home
        </Button>
      </Link>
      {amount}
      {cart.length !== 0 &&
        cart.map((item) => {
          const { id, brand, model, price, amount } = item;
          return (
            <div key={id}>
              <h2> {brand}</h2>
              <Increase onClick={() => dispatch(increaseAmount(id))} />
              {amount}
              <Decrease onClick={() => dispatch(decreaseAmount(id, amount))} />
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
        Checkout
      </Button>
    </div>
  );
};
