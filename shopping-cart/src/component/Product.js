import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 800,
  },
}));
export const Product = () => {
  const products = useSelector((state) => state.products.products);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight="auto"
        className={classes.gridList}
        cols={3}
        spacing={4}
      >
        {products.map((product) => (
          <GridListTile key={product.id}>
            <Paper variant="outlined" square>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              <Button variant="outlined">Add</Button>
            </Paper>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
