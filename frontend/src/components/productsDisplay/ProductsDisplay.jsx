import Grid from "@mui/material/Grid";

// LOCAL IMPORTS
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
        <Grid container>
          {Array.from(Array(6)).map((_, index) => (
            <Grid className="product" xs={12} md={6} item key={index}>
              <div style={{ border: "1px solid blue", margin: "8px 16px" }}>
                xs=2
              </div>
            </Grid>
          ))}
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
