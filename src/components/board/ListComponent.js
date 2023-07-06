import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";


const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null
}

const ListComponent = ({queryObj, movePage}) => {

    const [listData, setListData] = useState(initState)

    //console.log(createSearchParams(queryObj).toString())

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })

    }, [queryObj])

    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }

    return ( 
        <div className="bg-red-100">
            <div>LIST COMPONENT</div>
            
            <table className="m-2 ">

            <thead>
                    <tr>
                        <th className="border-b-2 border-gray-500 m-2">No</th>
                        <th className="border-b-2 border-gray-500 m-2"
                        style={{ width: '15%' }}>title</th>
                        <th className="border-b-2 border-gray-500 m-2"
                        style={{ width: '85%' }}>ReCount</th>
                    </tr>
            </thead>

            <tbody>

                {listData.dtoList.map(dto =>
                <tr
                    className="text-center"
                    key={dto.bno}                                        
                >               
                    <td className="w-10 border-b-2 border-black">{dto.bno}</td>
                    <td className="w-96 border-b-2 border-black hover:underline hover:cursor-pointer">{dto.title}</td>
                    <td className="w-10 border-b-2 border-black">{dto.replyCount}</td>
                  
                  </tr>
                  )}

            </tbody>       
                

            </table>
            



            <div className="flex m-4 p-2 justify-center bg-sb-03">
                <ul className="flex ">
                    
                    {listData.prev ? <li 
                    className="m-2 p-2 bg-sb-02 border-2 text-white font-bold 
                    hover:underline hover:cursor-pointer rounded-md"
                    onClick={() => handleClickPage(listData.start -1)}
                    >PREV</li> : <></>}
                    
                    {listData.pageNums.map(num => 
                        <li 
                        className="m-2 p-2 w-9 text-center bg-sb-02 border-2
                         text-white font-bold hover:underline hover:cursor-pointer rounded-md"
                        onClick={() => handleClickPage(num)} 
                        key={num}
                        >
                            {num}
                        </li>)}

                        {listData.next ? <li 
                        className="m-2 p-2 bg-sb-02 border-2 text-white font-bold 
                        hover:underline hover:cursor-pointer rounded-md"
                        onClick={() => handleClickPage(listData.end +1)}
                        >NEXT</li> : <></>}
                </ul>
            </div>
        </div>
     );
}
 
export default ListComponent;