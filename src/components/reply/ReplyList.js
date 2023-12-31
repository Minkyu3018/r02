import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/repliesAPI";
import ListPageComponent from "../board/common/ListPageComponent";


const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null,
    regDate:''
}


const ReplyList = ({ bno, page, last, refresh, movePage, changeCurrent }) => {

    console.log("Reply List...bno: " + bno)

    // rendering시 에러방지
    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getRepliesOfBoard(bno, page, last).then(data => {
            console.log("ReplyList(data)....:" + data)
            setListData(data)
            console.log("ReplyList(data)....:" + data)
        })

    }, [bno, page, last, refresh])


    return (

        <div className="mt-4 bg-sb-03 border-2">
            <div className="mb-2 ml-2 font-extrabold text-orange-400">Reply List</div>


            <tbody>

                {listData.dtoList.map( reply => <tr
                    onClick={ () => changeCurrent(reply.rno) } 
                    key={reply.rno}
                    className="border-2 "
                    >
                    <td className="w-auto border-2 font-semibold text-center">{reply.rno}</td>
                    <td className="w-[1000px] border-2 hover:underline hover:cursor-pointer"
                    >&nbsp;&nbsp;{reply.replyText}</td>
                    <td className="w-32 border-2 ">{reply.replyer}</td>                                                         
                  
                  </tr>
                  )}

            </tbody>           

            <div>

                <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>

            </div>

        </div>

    );
}

export default ReplyList;