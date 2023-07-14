import { useNavigate } from "react-router-dom";
import RegisterComponent from "../../components/products/RegisterComponent";


const RegisterPage = () => {

    const navigate = useNavigate()

    const moveList = () => {

        navigate("../list")
    }

    return ( 
        <div>
            <div className="text-2xl m-4">상품등록 페이지</div>
            
            <RegisterComponent moveList={moveList}></RegisterComponent>
        </div>
     );
}
 
export default RegisterPage;