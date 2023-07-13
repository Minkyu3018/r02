import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct, putProduct } from "../../api/productAPI"

const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0,
    images:[]
}

const ModifyComponent = ({pno, moveList, moveRead}) => {

    const [product, setProduct] = useState(initState)
    const fileRef = useRef()

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        })

    },[pno])

    const handleClickDelete = () => {
        deleteProduct(pno).then(data => {
            alert("상품이 삭제되었습니다.")

            
        })
    }

    const handleChange = (e) => {
        product[e.target.name] = e.target.value

        setProduct({...product})
    }

    const handleClickModify = () => {

        const formData = new FormData();

        formData.append("pno", product.pno)
        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        if(product.images){
            for (let pi of product.images) {
                formData.append("images", pi)
            }
        }

        const arr = fileRef.current.files

        for(let file of arr){
            formData.append("files", file) // files : 컨트롤러에서 받을 때 이름
        }

        putProduct(formData).then(data => {
            alert("수정되었습니다!")
            moveRead(pno)
        })
    }

    // 파일 삭제버튼, 필터링 기능
    const handleClickDelImg = (fname) => {
              
        const newArr = product.images.filter(ele => ele !== fname)

        product.images = newArr

        setProduct({...product})
    }


    return ( 
        <div>
            
            <div>

                <div className="m-2 p-2 border-2">
                    <div className="text-orange-500 font-bold">No</div>                
                    <div>{product.pno}</div>
                </div>

                <div className="m-2 p-2 border-2">
                    <div className="text-orange-500 font-bold">P.Name</div>
                    <input
                    className="border-2"
                    type="text" 
                    name="pname" 
                    value={product.pname}
                    onChange={handleChange}
                    ></input> 
                </div>

                <div className="m-2 p-2 border-2">
                    <div className="text-orange-500 font-bold">P.Desc</div>
                    <input
                    className="border-2"
                    type="text" 
                    name="pdesc" 
                    value={product.pdesc}
                    onChange={handleChange}
                    ></input>
                </div>

                <div className="m-2 p-2 border-2">
                    <div className="text-orange-500 font-bold">Price</div>
                    <input
                    className="border-2"
                    type="number" 
                    name="price" 
                    value={product.price}
                    onChange={handleChange}
                    ></input>
                </div>

                <div className="m-2 p-2 border-2"> 
                    <input type='file' ref={fileRef} multiple name='images'></input>
                </div>

                <div className="m-2 p-2 border-2">
                    <ul className="list-none flex">
                        {product.images.map( (fname,idx) => 
                        
                        <li 
                        key={idx}
                        className="m-2 border-2"
                        >
                            <button 
                            className="bg-gray-200 w-8 text-center font-light"
                            onClick={() => handleClickDelImg(fname)}
                            > X </button>

                            <img src={`http://localhost/s_${fname}`} alt='ddd'></img>
                            
                        </li>)}
                    </ul>
                </div>
               
                <button 
                    onClick={handleClickModify}
                    className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
                    >Modify
                </button>

                <button 
                    onClick={handleClickDelete} 
                    className="bg-red-600 rounded-md w-20 p-2 m-2 text-white"
                    >Delete
                </button>

                <button 
                    onClick={moveList}
                    className="bg-green-600 rounded-md w-20 p-2 m-2 ml-20 text-white"
                    >List
                </button>

            </div>

        </div>
     );
}
 
export default ModifyComponent;