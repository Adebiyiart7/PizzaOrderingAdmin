import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

// INITIALIZE AUTH STATE VARIABLES
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// REGISTER USER
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: (state) => {
    reset: {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase().addCase().addCase().addCase();
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
