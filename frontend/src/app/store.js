import { configureStore } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import appReducer from "../features/app/appSlice";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    product: productReducer,
  },
});
