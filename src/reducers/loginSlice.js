import { createSlice } from "@reduxjs/toolkit"
import { getCookie, setCookie } from "../util/cookieUtil"

const loadCookie = () => {

  const loginObj = getCookie("login")

  console.log("login..........obj........")
  console.log(loginObj)

  if(!loginObj) {
    return initState
  }

  return loginObj


}

const initState = {
  email:'',
  signed:false
}

const loginSlice = createSlice({
  name:'loginSlice',
  initialState: loadCookie(),
  reducers: {
    requestLogin: (state, param) => { // param의 공식 name은 action
      const payload = param.payload
      console.log("requestLogin" + payload)  // 리듀서 개발할때 로그먼저 찍어놓고 개발

      const loginObj = {email: payload.email, signed:true}
      // JSON.stringify = loginObj를 문자열로 바꿔라
      setCookie("login", JSON.stringify(loginObj), 1)

      return loginObj
    }  
  }
})

// 고정적 사용
export const {requestLogin} = loginSlice.actions

export default loginSlice.reducer