import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../productsDisplay/ProductsDisplay.css";

const Side = () => {
  return (
    <div
      style={{
        width: 270,
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, odit.
    </div>
  );
};

const ProductsDisplay = () => {
  return (
    <div className="products-display">
      <div className="products-list">
        <Grid container spacing={3}>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 1
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 2
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 3
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 4
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 5
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 6
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 7
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 8
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 9
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 10
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 11
            </div>
          </Grid>
          <Grid xs={12} md={6} className="product">
            <div className="inner">

            Item 12
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="right-aside">
        <Side />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProductsDisplay;
