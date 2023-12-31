import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil"
import { postLogin } from "../api/memberAPI"

export const postLoginThunk = createAsyncThunk('postLoginThunk', (params) => {

  return postLogin(params)
})


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
  nickname: '',
  admin: false,
  loading: false,
  errorMsg: null
}

const loginSlice = createSlice({
  name:'loginSlice',
  initialState: loadCookie(),
  reducers: {
    requestLogin: (state, action) => { // param의 공식 name은 action
      const payload = action.payload
      console.log("requestLogin" + payload)  // 리듀서 개발할때 로그먼저 찍어놓고 개발

      // const loginObj = {email: payload.email, signed:true}
      // JSON.stringify = loginObj를 문자열로 바꿔라
      setCookie("login", JSON.stringify(payload), 1)

      return payload
    },
    logout: (state) => {
      // const logoutObj = {initState}
      removeCookie("login")

      return initState
    }
       
  },
  extraReducers: (builder) => {
    builder.addCase(postLoginThunk.fulfilled, (state, action) => {
      console.log("fulfilled", action.payload)
      const {email, nickname, admin, errorMsg} = action.payload

      if(errorMsg) {
        state.errorMsg = errorMsg
        return
      }

      // state.loading = false
      // state.email = email
      // state.nickname = nickname
      // state.admin = admin
      state = action.payload
      

      // 쿠키값 보관
      setCookie("login", JSON.stringify(action.payload), 1)

    })
    .addCase(postLoginThunk.pending ,(state, action) => {
      console.log("pendding")
      state.loading = true
    })
    .addCase(postLoginThunk.rejected, (state, action) => {
      console.log("rejected")
    })
  }
})

// 고정적 사용
export const {requestLogin} = loginSlice.actions

export const {logout} = loginSlice.actions



export default loginSlice.reducer