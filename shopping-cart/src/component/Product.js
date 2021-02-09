import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Add from "@material-ui/icons/AddBox";
import { addToCart } from "../redux/cart/actions";

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
    height: 800,
  },
}));
export const Product = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const classes = useStyles();
  const cartProduct = products.filter((id) => products.id === id);
  return (
    <div className={classes.root} style={{ marginTop: 15 }}>
      <GridList cellHeight="auto" className={classes.gridList} cols={3}>
        {products.map((product) => (
          <GridListTile key={product.id}>
            <Paper variant="outlined" square>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              <Button
                onclick={() => dispatch(addToCart())}
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
  );
};
