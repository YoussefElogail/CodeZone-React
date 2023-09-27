import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/products-slice";
import CartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer:{
    products : ProductsSlice,
    cart : CartSlice
  }
})

