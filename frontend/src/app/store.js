import { configureStore } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
