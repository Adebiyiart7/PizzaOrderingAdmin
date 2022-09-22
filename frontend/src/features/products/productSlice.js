import productService from "./productService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  productQuery: "/",
};

// GET PRODUCTS
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (query, thunkAPI) => {
    try {
      return await productService.getProducts(query);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// SET PRODUCT QUERY
export const setProductQuery = createAsyncThunk(
  "product/setQuery",
  async (query) => {
    return query;
  }
);

// const productQuery = createSlice({
//   name: "productQuery",
//   initialState: "?category=pizza",
//   reducers: {
//     reset: () => "?category=pizza",
//   },
// });

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = actions.payload;
      })
      .addCase(getProducts.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.message = actions.payload;
      })
      .addCase(setProductQuery.fulfilled, (state, actions) => {
        state.productQuery = actions.payload;
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
