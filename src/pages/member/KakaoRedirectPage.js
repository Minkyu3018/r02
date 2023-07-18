import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { requestLogin } from "../../reducers/loginSlice";

// import { getAccessToken, getUserEmail } from "../../api/kakaoAPI";


const KakaoRedirectPage = () => {

  const [searchParmas] = useSearchParams()

  //redirectURI에 부여되는 code의 값을 알아와야 함
  const authCode = searchParmas.get('code')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  //이 값이 바뀔때마다 호출
  useEffect(() => {

    //boot 연결
    axios.get(`http://localhost:8080/api/member/kakao?code=${authCode}`).then(res => {

      console.log(res.data)

      const memberInfo = res.data //memberInfo 추출해서 회원 닉네임 수정

      const nickname = memberInfo.nickname

      dispatch(requestLogin(memberInfo))
        // alert("로그인 성공")
        if(nickname === 'SOCIAL_MEMBER') {
          navigate('/member/modify')
        } else {
          navigate("/")
        }        
      
    })


    // 리액트만으로 설정 시.... (하단)
    // getAccessToken(authCode).then(accessToken => {
    //   console.log(accessToken)
    //   getUserEmail(accessToken).then(email => {
    //     console.log("Email: " + email)
    //   })
    // })

  },[authCode])

  return ( 

    <div>
      {authCode}
    </div>

   );
}
 
export default KakaoRedirectPage;