import ListComponent from "../../components/products/ListComponent";
import useQueryObj from "../../hooks/useQueryObj";


const ListPage = () => {

    const {queryObj, setSearch, moveRead, moveList} = useQueryObj() // 반환해주는 항목 {}

    const movePage = (num) => {
        console.log("NUM----------" + num)
        queryObj.page = num
        setSearch({...queryObj})

    }

    return ( 
        <div className="">Products List Page
            
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