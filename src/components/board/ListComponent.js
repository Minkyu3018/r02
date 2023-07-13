import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
import ListSearchComponent from "./ListSearchComponent";
import ListPageComponent from "./common/ListPageComponent";


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
        <div className="">
            <div></div>           
            
            <table className="min-w-[1280px] ml-auto mr-auto">

            <thead>
                    <tr className="h-12 bg-gray-200">
                        <th className="border-2 font-bold m-2"
                        style={{ width: '5%' }}>No</th>
                        <th className="border-2 font-bold m-2"
                        style={{ width: '70%' }}>Title</th>
                        <th className="border-2 font-bold m-2"
                        style={{ width: '10%' }}>Writer</th>
                        <th className="border-2 font-bold m-2"
                        style={{ width: '15%' }}>Reg</th>
                    </tr>
            </thead>

            <tbody>

                {listData.dtoList.map(({bno,title,replyCount,writer,regDate}) =>
                <tr
                    className="text-center h-10 bg-amber-50 border-"
                    key={bno}
                    onClick={() => moveRead(bno)}                                        
                >               
                    <td className="w-10 border-2 ">{bno}</td>
                    <td className="w-96 border-2  hover:underline hover:cursor-pointer"
                    >{title}&nbsp;&nbsp;[{replyCount}]</td>
                    <td className="w-10 border-2 ">{writer}</td>
                    <td className="w-10 border-2 ">{regDate}</td>
                    
                  
                  </tr>
                  )}

            </tbody>               

            </table>

            <ListPageComponent movePage={movePage}{...listData}></ListPageComponent>
            
        </div>
     );
}
 
export default ListComponent;