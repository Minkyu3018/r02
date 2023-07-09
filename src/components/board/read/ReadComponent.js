import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";


const initState = {
    bno:0,
    title:'',
    content:'',
    wirter:'',
    reg:'',
    modDate:''
}

const ReadComponent = ({bno}) => {

    const [board, setBoard] = useState(initState)

    useEffect(() => {
        getOne(bno).then(data => {
            setBoard(data)
        })
    },[bno])


    return ( 
        <div>


            <table className="readList">
                <thead className="">
                    <tr className="bg-gray-200">
                        <td className="border-2 font-medium w-32 text-center ">No</td>
                        <td className="border-2">{board.bno}</td>
                    </tr>

                    <tr >
                        <td className="border-2 font-medium text-center">Wirter</td>
                        <td className="border-2">{board.writer}</td>
                    </tr>

                    <tr >
                        <td className="border-2 font-medium text-center">Title</td>
                        <td className="border-2">{board.title}</td>
                    </tr>

                    <tr >
                        <td className="border-2 font-medium text-center">RegDate</td>
                        <td className="border-2">{board.reg}</td>
                    </tr>

                    <tr >
                        <td className="border-2 font-medium text-center">ModDate</td>
                        <td className="border-2">{board.modDate}</td>
                    </tr>
                    
                    <tr >
                        <td className="border-2 font-medium h-80 text-center">Content</td>
                        <td className="border-2">{board.content}</td>
                    </tr>


                    
                </thead>
            
            </table>
            
        </div>

        
     );
}
 
export default ReadComponent;