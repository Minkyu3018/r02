import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";

const ListPage = () => {

    const {queryObj, setSearch, moveRead} = useQueryObj()
    
    console.log("queryObj-------")
    console.log(queryObj)

    // 페이지 번호 받도록
    const movePage = (num) => {
        console.log("NUM----------" + num)
        queryObj.page = num
        setSearch({...queryObj})

    }

    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword

        setSearch({...queryObj})
    }

    const chgSize = (size) => {

        queryObj.size = size

        setSearch({...queryObj})
    }




    return ( 
        <div>
            
            <ListSearchComponent 
            moveSearch={moveSearch} 
            queryObj={queryObj}
            chgSize={chgSize}
            >                
            </ListSearchComponent>

            <ListComponent
            queryObj={queryObj} 
            movePage={movePage} 
            moveRead={moveRead}
            >

            </ListComponent>
        </div>
     );
}
 
export default ListPage;