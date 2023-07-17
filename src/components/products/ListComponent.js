import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/productAPI";
import ListPageComponent from "../board/common/ListPageComponent";
import { useDispatch } from "react-redux";
import { bInc } from "../../reducers/basketSlice";




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

//     const rDispatch = useDispatch()

//     const handleClickInc = () => {
//         rDispatch(bInc())
//   }

    


    // const [board, setBoard] = useState(initState)

    // useEffect(() => {
    //     getOne(bno).then(data => {
    //         setBoard(data)
    //     })
    // },[bno])


    return ( 
        <div className="bg-sb-03">
                       
            
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
                <div className="m-4 text-2xl">상품리스트</div>
                <ul className="flex flex-wrap container justify-center mt-2">
                    {listData.dtoList.map(dto => 
                        <li
                        className="w-1/6 h-[400px] bg-white m-2 p-2 rounded-md shadow-xl"
                        key={dto.pno}
                        
                        >
                        
                        <div>
                            
                            <div className="text-red-500 font-extrabold">No. {dto.pno}</div>
                            <div 
                            className="flex justify-center items-center hover:cursor-pointer"
                            onClick={() => moveRead(dto.pno)} 
                            >
                                <img src={`http://localhost/s_${dto.fname}`} alt='ddd'></img>
                            </div>
                            
                            <div className="text-center text-gray-700 font-extrabold mt-10">
                                <div 
                                className="font-bold text-xl hover:cursor-pointer"
                                onClick={() => moveRead(dto.pno)}
                                >{dto.pname}
                                </div>
                                <div className="text-red-500">{(dto.price+'').replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원'}</div>
                                <div>리뷰 ({dto.reviewCnt}) 평점 ({dto.reviewAvg})</div>
                                                                                           
                            </div>

                            {/* <div>
                                <div 
                                className="text-right font-semibold hover:underline hover:cursor-pointer"
                                onClick={handleClickInc}
                                >[장바구니 추가]
                                </div> 
                            </div> */}
                            
                        </div>
                        </li>
                        )}
                </ul>
            </div>

            <div className="">
            <ListPageComponent movePage={movePage}{...listData}></ListPageComponent>
            </div>

            
            
        </div>
     );
}
 
export default ListComponent;