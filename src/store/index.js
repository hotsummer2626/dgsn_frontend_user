import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
import brandReducer from "./slices/brands";

const store = configureStore({
  reducer: {
    productData: productReducer,
    brandData: brandReducer,
  },
});

export default store;
