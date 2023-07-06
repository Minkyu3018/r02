import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";

const checkNull = (obj) => {

    for (const attr in obj) {
        console.log(attr)
        console.log(obj[attr])
        console.log("==================")
    }

    return obj
}


const ListPage = () => {

    const [search, setSearch] = useSearchParams()

    console.log(search)


    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type") 
    const keyword = search.get("keyword")

    const queryObj = checkNull({page, size, type, keyword})

    console.log("queryObj-------")
    console.log(queryObj)

    // 페이지 번호 받도록
    const movePage = (num) => {
        console.log("NUM----------" + num)
        setSearch({page:num,size:queryObj.size,type:queryObj.type,keyword:queryObj.keyword})

    }


    return ( 
        <div>
            Board List Page
            <ListComponent queryObj={queryObj} movePage={movePage}></ListComponent>
        </div>
     );
}
 
export default ListPage;