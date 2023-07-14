import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: "todoSlice",
  initialState: ['AAA','BBB'],
  reducers: {
    addTodo: (state, param) => {
      
      console.log("todo.. sate..",state)

      return [...state, param.payload]
    }
  }
})

// 고정적 사용
export const {addTodo} = todoSlice.actions

export default todoSlice.reducer