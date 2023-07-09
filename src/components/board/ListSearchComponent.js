import { useEffect, useState } from "react";


const ListSearchComponent = ({moveSearch, queryObj, chgSize}) => {


    const[searchObj, setSearchObj] = useState({type:'', keyword:''})
    const [changeSize, setChangeSize] = useState({ size: 10 })

    // 랜더링 끝났는데, queryObj 바뀌면 내용물 변경
    useEffect(() => {
        
        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''
        changeSize.size = queryObj.size || 10

        setSearchObj({...searchObj})
        setChangeSize({...changeSize})

    },[queryObj])

    const handleSize = (e) => {
        changeSize.size = e.target.value
        chgSize(changeSize.size)

    }

    console.log("changeSize====" + changeSize.size)

    console.log("SearchComponent===========")
    console.log(queryObj)

    return ( 

        <div className="m-4 p-4  ">

            <button 
            className="border-2 m-2 p-2 w-16 rounded-md bg-blue-300 text-white"
            
            
            > ADD
            
            </button>
            
            <select 
            className="border-2 m-2 p-2 " 
            value={searchObj.type}
            onChange={ e => {
                searchObj.type = e.target.value
                setSearchObj({...searchObj})
            }}
            >


                <option value={''}>---</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목+내용</option>
                <option value={'tcw'}>제목+내용+작성자</option>
               
            </select>
            
            <input 
            type="text" 
            className="border-2 m-2 p-2"
            value={searchObj.keyword}
            onChange={ e => {
                searchObj.keyword = e.target.value
                setSearchObj({...searchObj})}}
            ></input>
            
            <button 
            className="border-2 m-2 p-2 rounded-md bg-gray-600 text-white"
            onClick={ e => moveSearch(searchObj.type, searchObj.keyword)}
            
            > SEARCH
            
            </button>

            <select className="border-2 mt-2 h-10 w-20 float-right"
                value={chgSize.size}
                onChange={e => handleSize(e)}                
            >
                <option value={10}></option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={50}>50</option>


            </select>

        </div>
        
     );
}
 
export default ListSearchComponent;