import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";


const CountButtons = () => {

  const dispatch = useDispatch()

  const handleClickInc = () => {
    dispatch(inc(2,"inc"))
  }

  const handleClickDec = () => {
    dispatch(dec(-2,"dec"))
  }

  return ( 
    <div>
      <button 
      className="border-2 text-3xl"
      onClick={handleClickInc}
      > INC </button>
      <button 
      className="border-2 text-3xl"
      onClick={handleClickDec}
      > DEC </button>
    </div>
   );
}
 
export default CountButtons;