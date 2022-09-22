import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  displayMenuBar: false,
};

// SET APP STATE
export const setDisplayMenuBar = createAsyncThunk(
  "app/setDisplayMenuBar",
  async (bool) => {
    return bool;
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(setDisplayMenuBar.fulfilled, (state, actions) => {
      state.displayMenuBar = actions.payload;
    });
  },
});

export const { reset } = appSlice.actions;
export default appSlice.reducer;
