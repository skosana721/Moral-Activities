import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile, Paper, Button } from "@material-ui/core";
import Add from "@material-ui/icons/AddBox";
import { addToCart } from "../redux/cart/actions";
import ViewCart from "@material-ui/icons/ShoppingCartTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 900,
  },
}));
export const Product = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const classes = useStyles();
  const cartProduct = (id) => {
    let cart = products.filter((product) => product.id === id);
    dispatch(addToCart(cart[0]));
  };
  return (
    <div>
      <div className={classes.root} style={{ marginTop: 15 }}>
        <GridList cellHeight="auto" className={classes.gridList} cols={3}>
          {products.map((product) => (
            <GridListTile key={product.id}>
              <Paper variant="outlined" square>
                <h2>{product.brand}</h2>
                <h3>{product.model}</h3>
                <h4>R {product.price}</h4>
                <Button
                  onClick={() => cartProduct(product.id)}
                  variant="outlined"
                  endIcon={<Add />}
                  style={{ marginBottom: 10 }}
                >
                  Add To Cart
                </Button>
              </Paper>
            </GridListTile>
          ))}
        </GridList>
      </div>
      <Button variant="contained" endIcon={<ViewCart />} color="primary">
        View Cart
      </Button>
    </div>
  );
};
