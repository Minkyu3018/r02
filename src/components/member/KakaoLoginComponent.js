import { Link } from "react-router-dom";
import kakao from "/reactex/r02/src/public/kakaoicon.png";


const REST_KEY= '7d2e52f15abb22986464ad9d312823d9'
const REDIRECT_URI= 'http://localhost:3000/member/kakao'

const kakaoURL= `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoLoginComponent = () => {



  return ( 
    <div className="">
     
      <Link to={kakaoURL}>

        <img src={kakao} alt="aaa" className="h-16 mt-12 ml-auto mr-auto"/>
     
      </Link>        
    </div>
   );
}
 
export default KakaoLoginComponent;