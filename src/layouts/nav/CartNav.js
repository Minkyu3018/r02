import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";
import { logout } from "../../reducers/loginSlice";
import { useNavigate } from "react-router-dom";
import cart from "/reactex/r02/src/public/shoppingCart.png"


const CartNav = () => {

  

  const {email, nickname} = useSelector(state => state.login)

  const {items} = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const nav = useNavigate()

  useEffect(() => {

    if(!email) {
      return
    }

    dispatch(getCartThunk(email))

  },[email])

  const handleLogout = () => {
    dispatch(logout())
    nav("/")
  }

  return ( 
    <div className=" flex">

      
      <div 
      className="mt-3 hover:underline hover:cursor-pointer text-white inline-flex"> 
      <img src={cart} className="w-8 h-8" alt="none"/>        
       </div>

       <div className="inline-flex mt-2 pl-1 -m-2 font-extrabold text-red-600 bg-white h-5 w-5 rounded-full text-center">
       {items.length}
       </div>

      <button 
        className="border-white w-22 h-10 mb-2 mr-1 ml-auto mt-1 p-2 border-2 rounded-md
        hover:bg-white hover:text-sb-02"
        onClick={handleLogout}
        >
        SignOut
      </button>
      
    </div>
      
    
   );
}
 
export default CartNav;