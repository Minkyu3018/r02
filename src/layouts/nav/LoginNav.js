import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const LoginNav = () => {

  const {email, signed} = useSelector(state => state.login) // email,signed
  
  console.log("LoginNav....." + email, signed)

  const todoArr = useSelector(state => state.todo)

  if(signed) {
    return (
      <div className="">
        <div className="mt-2">Member : {email}
          
          <button 
            className="border-white w-22 h-10 mt-1 mb-2 ml-4 p-2 border-2 rounded-md
             hover:bg-white hover:text-sb-02">
            SignOut
          </button>
          
          
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