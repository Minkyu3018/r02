import { createSlice } from "@reduxjs/toolkit";



const basketSlice = createSlice({
  name: "basketSlice",
  initialState: {num: 0},  //상태를 관리해야할 초기상태
  //비동기처리를 안하면 reducers, 비동기처리를 하면 extraReducers
  reducers:{
    bInc: (state, param) => {
      console.log(state)
      console.log(param)
      
      console.log("------------------")

      //리턴해주는 것은 새로운 상태
      return {num: state.num + 1} // state가 가지고있던 num값은 5인데, +1을 해준다
    }

  }
})

export const {bInc} = basketSlice.actions

export default basketSlice.reducer
