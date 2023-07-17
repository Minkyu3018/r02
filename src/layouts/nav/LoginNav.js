import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartNav from "./CartNav";


const LoginNav = () => {

  const {email, nickname} = useSelector(state => state.login) // email,signed
  
  console.log("LoginNav....." + email, nickname)

  const todoArr = useSelector(state => state.todo)

  if(email !== '') {
    return (
      <div className="">
        
        <div className="mt-2">Member : {email} - [{nickname}]
        
        <CartNav></CartNav>         
          
        </div>
               
      </div>
      
    )
  }

  return ( 
    <div>
      <Link to="/member/login">
        <button 
        className="border-white w-20 h-10 m-3 mt-7 p-2 border-2 rounded-md
         hover:bg-white hover:text-sb-02 text-center">
            SignIn
        </button>
      </Link>
      
        <button 
        className="border-white w-20 h-10 m-3 mt-7 p-2 border-2 rounded-md
         hover:bg-white hover:text-sb-02 text-center">
            Join
        </button>
    </div>
   );
}
 
export default LoginNav;