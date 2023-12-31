import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initState = {
  items: [],
  loading: false,


}

export const addCartThunk = createAsyncThunk('addCartThunk', async (item) => {

  const res = await axios.post('http://localhost:8080/api/cart/add', item)

  return res.data

})

export const getCartThunk = createAsyncThunk('getCartThunk', async(email) => {

  if(!email) {

    return new Promise((resolve, reject) => {
      resolve([])
    })
  }

  const res = await axios.get(`http://localhost:8080/api/cart/${email}`)

  return res.data

})

const cartSlice = createSlice({
  
  name: "cartSlice", 

  initialState: initState,   // 쿠키로 바꿀것인지, 그대로 유지 할 것인지

  extraReducers: (builder) => {
    builder.addCase(addCartThunk.fulfilled, (state,action)=> {
      console.log(action.payload)

      state.items = action.payload
    })
    .addCase(getCartThunk.fulfilled, (state, action) => {
      console.log("getCartThunk fulfield....")
      console.log(action.payload)
      state.items = action.payload // 카트 리스트 담겨있다
    })
  }

})

export default cartSlice.reducer