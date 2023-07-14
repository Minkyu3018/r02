import { useRef, useState } from "react"
import { postProduct } from "../../api/productAPI"


const initState = {
    pname:'Ice Coffee',
    pdesc:'Coffee.....',
    price:'4000'

}

const RegisterComponent = ({moveList}) => {

    const fileRef = useRef()

    const [product, setProduct] = useState({...initState})

    const handleChange = (e) => {
        product[e.target.name] = e.target.value

        setProduct({...product})
    }

    const handleClickSave = (e) => {
        
        const formData = new FormData();

        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        console.dir(fileRef.current)

        const arr = fileRef.current.files

        for(let file of arr){
            formData.append("files", file) // files : 컨트롤러에서 받을 때 이름
        }

        postProduct(formData).then(data => {
            const rno = data.result
            alert(`${rno}번 상품이 등록되었습니다.`)
            moveList()
        })
        
    }

    const handleClickClear = (e) => {
        
        fileRef.current.value = ''
    }


    return ( 

        <div className="m-2 p-2">
            
            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">P.name</div>
                <input 
                type='text'
                name='pname' 
                value={product.pname}
                onChange={handleChange}
                className="border-2 mt-2 mb-2 h-10"
                >

                </input>
            </div>

            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">P.Desc</div>
                <input 
                type='text' 
                name='pdesc' 
                value={product.pdesc} 
                onChange={handleChange}
                className="border-2 mt-2 mb-2 h-10"
                >

                </input>
            </div>

            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">Price</div>
                <input 
                type='number' 
                name='price' 
                value={product.price} 
                onChange={handleChange}
                className="border-2 mt-2 mb-2 h-10">

                </input>
            </div>

            <div className="m-2 p-2 border-2">                 
                <input 
                type='file' 
                ref={fileRef} 
                multiple 
                name='images' 
                onChange={handleChange}></input>
            </div>

            <div className="m-2">
                <button 
                onClick={handleClickSave}
                className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
                >Save
                </button>

                <button 
                onClick={handleClickClear}
                className="bg-orange-500 rounded-md w-auto p-2 m-2 text-white"
                >ClearFiles
                </button>                
            </div>
        </div>
     );
}
 
export default RegisterComponent;