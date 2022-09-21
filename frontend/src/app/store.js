import { configureStore } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
