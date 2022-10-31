import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  filters: {
    keyWord: "",
    brandName: "",
  },
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilter: (state, action) => {
      state.filters = {
        ...state.filters,
        [action.payload.filterName]: action.payload.value,
      };
    },
  },
});

export const { setProducts, setFilter } = productSlice.actions;

export default productSlice.reducer;
