import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import ProductItem from "./ProductItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <ProductItem />
      </Grid>
      <Grid item xs={6}>
        <ProductItem />
      </Grid>
    </React.Fragment>
  );
}

const ProductList = () => {
  return (
    <Grid container spacing={1}>
      <Grid container item spacing={1}>
        <FormRow />
      </Grid>
      <Grid container item spacing={1}>
        <FormRow />
      </Grid>
      <Grid container item spacing={1}>
        <FormRow />
      </Grid>
    </Grid>
  );
};

export default ProductList;
