import {createSlice,createAsyncThunk, isFulfilled} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts",async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  // console.log(data)
})

export const productsSlice = createSlice({
  initialState : [{id:1,title:"product 1"}],
  name : "productsSlice",
  reducers : {
    addProduct : (state , action) => {
      // console.log(action)
      state.push(action.payload)
    },
    // getProducts : (state , action) => {
      
    // },
    // fetchProducts : (state , action) => {
      
    // },
  },
  extraReducers : (builder) => {
    // pending: initial state, neither fulfilled nor rejected. 
    // builder.addCase(fetchProducts.pending,(state , action)=>{
    //   // logic here
    // })
    // 200
    builder.addCase(fetchProducts.fulfilled,(state , action)=>{
      // logic here
      state = action.payload
    })
    // 400
    // builder.addCase(fetchProducts.rejected,(state , action)=>{
    //   // logic here
    // })
  }
})

export const {addProduct} = productsSlice.actions
export default productsSlice.reducer