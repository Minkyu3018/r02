import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";


const ReadPage = () => {

    const {queryObj, moveList} = useQueryObj()
    const { bno } = useParams()

    console.log(bno)
    console.log(queryObj)

    return (
        <div className="">
            Board Read Page
            <ReadComponent bno={bno}></ReadComponent>
            <button 
            className="border-2 w-20 mt-4 p-2 rounded-md bg-gray-600 text-xl text-white center float-right"
            onClick={e => moveList()}>List</button>
        </div>
    );
}

export default ReadPage;