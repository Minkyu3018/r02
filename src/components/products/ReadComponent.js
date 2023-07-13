import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";

const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    images:[]
}

const ReadComponent = ({pno, moveModify, moveList}) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        }).catch(e => {
            console.log(e)
            moveList()
        })

    },[pno])




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
                        <img src={`http://localhost/${fname}`} alt='ddd'></img>
                    </li>)}
                </ul>
            </div>

            <div>
                <button 
                onClick={moveList}
                className="bg-green-600 rounded-md w-20 p-2 m-2 text-white"
                >List</button>

                <button 
                onClick={() => moveModify(product.pno)}
                className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
                >Modify</button>
            </div>


        </div>

     );
}
 
export default ReadComponent;