import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";
import { logout } from "../../reducers/loginSlice";
import { useNavigate } from "react-router-dom";


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
    <div className="flex">

      <div 
      className="text-3xl mt-2 hover:underline hover:cursor-pointer text-yellow-300"
      
      >Cart {items.length} </div>

      <button 
        className="border-white w-22 h-10 mt-1 mb-2 ml-32 p-2 border-2 rounded-md
        hover:bg-white hover:text-sb-02"
        onClick={handleLogout}
        >
        SignOut
      </button>
      
    </div>
      
    
   );
}
 
export default CartNav;