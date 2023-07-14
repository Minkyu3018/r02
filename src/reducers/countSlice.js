import { createSlice } from "@reduxjs/toolkit";



const countSlice = createSlice({
  name: "countSlice",
  initialState: {num: 5},  //상태를 관리해야할 초기상태
  //비동기처리를 안하면 reducers, 비동기처리를 하면 extraReducers
  reducers:{
    inc: (state, param, third) => {
      console.log(state)
      console.log(param)
      console.log(third)
      console.log("------------------")

      //리턴해주는 것은 새로운 상태
      return {num: state.num + param.payload} // state가 가지고있던 num값은 5인데, +1을 해준다
    },
    dec: (state, param, third) => {
      console.log(state)
      console.log(param)
      console.log(third)
      console.log("------------------")

      return {num: state.num - + param.payload} // state가 가지고있던 num값은 5인데, -1을 해준다
    }

  }    
})

// 고정적 사용
export const {inc, dec} = countSlice.actions

export default countSlice.reducer