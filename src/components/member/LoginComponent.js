import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../reducers/loginSlice";
import { Link, useNavigate } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";

const initState = {
  email:'koreamanggu@gmail.com',
  pw:'1111'
}

const LoginComponent = () => {

  const [loginInfo, setLoginInfo] = useState({...initState})  

  const dispatch = useDispatch()

  
  return ( 
    <div className="border-2 bg-gray-200 rounded-md w-[600px] h-[550px]">
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
      <Link to="/products/list">
        <button 
        className="border-2 bg-blue-300 font-normal mt-1 ml-1 p-1 rounded-md" 
        onClick={() => dispatch(requestLogin(loginInfo))}       
        >
          LOGIN
        </button>
        </Link>
      </div>
    </div>
   );
}
 
export default LoginComponent;