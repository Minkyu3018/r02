import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import todoSlice from "../reducers/todoSlice";
import loginSlice from "../reducers/loginSlice";
import basketSlice from "../reducers/basketSlice";

// 이 함수의 결과물이 store
export default configureStore({
  reducer : { 
    counter: countSlice,  // reducer setting
    todo: todoSlice,
    login: loginSlice,
    basketCounter: basketSlice
   }

})

