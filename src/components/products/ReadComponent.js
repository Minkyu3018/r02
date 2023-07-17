import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";
import ReplyWrapper from "../reply/ReplyWrapper";
import useQueryObj from "../../hooks/useQueryObj";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";

const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    images:[]
}

const ReadComponent = ({pno, moveModify, moveList}) => {
    
    const {email} = useSelector(state => state.login)
    const dispatch = useDispatch()
    
    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        }).catch(e => {
            console.log(e)
            moveList()
        })

    },[pno])

    // const {queryObj} = useQueryObj()
    // const { bno } = useParams()




    return ( 

        <div className="m-2 p-2">

            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">No</div>                
                <div>{product.pno}</div>
            </div>
            
            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">P.Name</div>
                <div>{product.pname}</div>
            </div>

            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">P.Desc</div>
                <div>{product.pdesc}</div>
            </div>

            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">Price</div>
                <div>
                    <input type="text" value={(product.price + '').replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원'}>
                    </input>
                </div>
            </div>

            <div className="m-2 p-2 border-2">
                <ul className="list-none">
                    {product.images.map( (fname,idx) => 
                    
                    <li key={idx}>
                        <img src={`http://localhost/${fname}`} alt='ddd' className="w-[600px] h-[600px]"></img>
                    </li>)}
                </ul>
            </div>

            <div className="mb-10">

                <button
                className="bg-orange-500 rounded-md w-24 p-2 m-2 text-white"
                onClick={() => {
                    dispatch(addCartThunk({email, pno}))
                }}
                
                >AddCart</button>

                <button 
                className="bg-green-600 rounded-md w-20 p-2 m-2 text-white"
                onClick={moveList}                
                >List</button>

                <button 
                className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
                onClick={() => moveModify(product.pno)}
               
                >Modify</button>

                

                
            </div>

            {/* <ReplyWrapper bno={bno}></ReplyWrapper> */}


        </div>

     );
}
 
export default ReadComponent;