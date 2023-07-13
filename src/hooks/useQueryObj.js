import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const checkNull = (obj) => {

    const result = {}

    for (const attr in obj) {
        const attrName = attr
        const attrValue = obj[attr]

        if (attrValue && attrValue !== 'null') {
            result[attrName] = attrValue
        }
    }

    return result
}

const useQueryObj = () => {
    // 쿼리스트링 처리
    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate()

    console.log(search)

    // page, size 값이 없으면 초기값 설정
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    // object로 묶는다
    const queryObj = checkNull({ page, size, type, keyword })

    const moveList = () => {
        const queryString = createSearchParams(queryObj).toString()

        navigate(`../list?${queryString}`) // 경로에 상관없이 list에 적용
    }
    const moveRead = (bno) => {
        console.log("moveRead: " + bno)

        const queryString = createSearchParams(queryObj).toString()

        navigate(`../read/${bno}?${queryString}`)

    }

    const moveModify = (bno) => {
        console.log("moveModify: " + bno)

        const queryString = createSearchParams(queryObj).toString()

        navigate(`../modify/${bno}?${queryString}`)

    }

    

    return {queryObj, setSearch, moveRead, moveList, moveModify}
}

export default useQueryObj