import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: null,
};

export const brandSlice = createSlice({
  name: "Brand",
  initialState,
  reducers: {
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
  },
});

export const { setBrands } = brandSlice.actions;

export default brandSlice.reducer;
