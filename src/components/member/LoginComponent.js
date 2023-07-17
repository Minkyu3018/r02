import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin } from "../../reducers/loginSlice";
import { Link, useNavigate } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";

const initState = {
  email:'user00@aaa.con',
  pw:'1111'
}

const LoginComponent = () => {

  const loginState = useSelector(state => state.login)

  const [loginInfo, setLoginInfo] = useState({...initState})  

  const dispatch = useDispatch()

  const errorMsg = loginState.errorMsg

  console.log("errorMsg: " + errorMsg)

  
  return ( 
    <div className="border-2 bg-gray-200 rounded-md w-[600px] h-[550px]">

      {/* 추후 모달로 빼줄것! */}
      <div className="text-3xl bg-red-500">
        {loginState.loading ? '로그인중':''}</div>

      {errorMsg ? <div className="text-3xl bg-red-500">이메일과 패스워드를 다시 확인해 주세요</div> : <></>}  

      <div className="m-2">
        <label className="text-orange-500 font-bold">Email</label>
        <div>
          <input type="text" name="email" value={loginInfo.email}
          onChange={()=>{}}
          className="border-2 m-2 rounded-md w-[500px]">            
          </input>
        </div>
        
      </div>
      <div className="m-2">
        <label className="text-orange-500 font-bold">Password</label>
        <div>
          <input type="password" name="pw" value={loginInfo.pw}
          onChange={()=>{}}
          className="border-2 m-2 rounded-md w-[500px]">            
          </input>
        </div>
        
      </div>
      <div>
      {/* <Link to="/products/list"> */}
        <button 
        className="border-2 bg-blue-300 font-normal mt-1 ml-1 p-1 rounded-md" 
        onClick={() => dispatch(postLoginThunk(loginInfo))}
        >
          LOGIN
        </button>
        {/* </Link> */}
      </div>
    </div>
   );
}
 
export default LoginComponent;