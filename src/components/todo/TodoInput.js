import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoSlice";


const TodoInput = () => {

  const [text, setText] = useState('')

  const dispatch = useDispatch() // 뿌린다

  const handleClickSave = () => {
    dispatch(addTodo(text)) // addTodo의 결과를 스토어에 보관하고 모든 것들에게 뿌린다

  }


  return ( 
    <div>
      Todo Input
      <input 
        type="text" 
        value={text} 
        onChange={e => setText(e.target.value)} 
        className="border-2 border-black m-5"></input>
      <button 
        onClick={handleClickSave}
        className="border-2">SAVE</button>
    </div>
   );
}
 
export default TodoInput;