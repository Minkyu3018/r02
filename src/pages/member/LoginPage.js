import KakaoLoginComponent from "../../components/member/KakaoLoginComponent";
import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";


const LoginPage = () => {
  return ( 
    <div className="">
    <BasicLayout>
      <div className="m-3 items-center">
        <div>Login Page</div>
        <LoginComponent></LoginComponent>
        
      </div>
    </BasicLayout>
    </div>
   );
}
 
export default LoginPage;