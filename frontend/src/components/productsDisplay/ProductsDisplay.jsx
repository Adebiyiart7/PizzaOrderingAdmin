import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

// LOCAL IMPORTS
import Product from "./Product";
import "../productsDisplay/ProductsDisplay.css";
import { getProducts, reset } from "../../features/products/productSlice";

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
  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getProducts());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return console.log("Loading...")
  }

  return (
    <div className="products-display">
      <div className="products-list">
        <Grid container>
          {products.map((product, index) => (
            <Grid className="product" xs={12} md={6} item key={product.id}>
              <Product product={product} />
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
