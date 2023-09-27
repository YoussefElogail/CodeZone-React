import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "products-slice/fetch-products",
  async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    return data;
  }
);
const productsSlice = createSlice({
  initialState: [],
  name: "products-slice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled,(state,action) => {
      return action.payload
    })
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
