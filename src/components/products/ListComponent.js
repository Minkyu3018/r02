import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/productAPI";
import ListPageComponent from "../board/common/ListPageComponent";




const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null,
    regDate:''
}

const ListComponent = ({queryObj, movePage, moveRead}) => {

    const [listData, setListData] = useState(initState)
    
    useEffect(() => {

        getList(queryObj).then(data => {
            console.log("data-----"+data)
            setListData(data)
            
           
        })

    }, [queryObj])

    // const [board, setBoard] = useState(initState)

    // useEffect(() => {
    //     getOne(bno).then(data => {
    //         setBoard(data)
    //     })
    // },[bno])


    return ( 
        <div className="bg-sb-01">
                       
            
            {/* <table className="min-w-[1280px] ml-auto mr-auto">

            <thead>
                    <tr className="h-12 bg-gray-200">
                        <th className="border-2 font-bold m-2"
                        style={{ width: '5%' }}>No</th>
                        <th className="border-2 font-bold m-2"
                        style={{ width: '70%' }}>P.Name</th>
                        <th className="border-2 font-bold m-2"
                        style={{ width: '10%' }}>Price</th>
                        
                    </tr>
            </thead>

            <tbody>

                {listData.dtoList.map(dto =>
                <tr
                    className="text-center h-10 bg-amber-50 border-"
                    key={dto.pno}
                    onClick={() => moveRead(dto.pno)}                                        
                >               
                    <td className="w-10 border-2 ">{dto.pno}</td>
                    <td className="w-96 border-2  hover:underline hover:cursor-pointer"
                    >{dto.pname}</td>
                    <td className="w-10 border-2 ">{dto.price}</td>
                    
                    
                  
                  </tr>
                  )}

            </tbody>               

            </table> */}

            <div>
                <ul className="flex flex-wrap container justify-center">
                    {listData.dtoList.map(dto => 
                        <li
                        className="w-2/5 h-[300px] bg-sb-03 m-2 p-2 rounded-md shadow-lg"
                        key={dto.pno}
                        onClick={() => moveRead(dto.pno)} 
                        >
                        
                        <div>
                            
                            <div className="text-red-400 font-extrabold">{dto.pno}</div>
                            <div className="flex justify-center items-center">
                                <img src={`http://localhost/s_${dto.fname}`} alt='ddd'></img>
                            </div>

                            <div className="text-center text-red-400 font-extrabold">
                                {dto.pname}-{dto.price} 리뷰 {dto.reviewCnt} - {dto.reviewAvg}                            
                            </div>
                            
                        </div>
                        </li>
                        )}
                </ul>
            </div>

            <ListPageComponent movePage={movePage}{...listData}></ListPageComponent>
            
        </div>
     );
}
 
export default ListComponent;