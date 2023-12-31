import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
// import ListPage from "../pages/board/ListPage";
// import IndexPage from "../pages/board/indexPage";

import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";
import KakaoRedirectPage from "../pages/member/KakaoRedirectPage";
import KakaoModifyPage from "../pages/member/KakaoModifyPage";

const Loding = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/indexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))

const Products_Index = lazy(() => import("../pages/products/indexPage"))
const Products_List = lazy(() => import("../pages/products/ListPage"))
const Products_Register = lazy(() => import("../pages/products/RegisterPage"))
const Products_Read = lazy(() => import("../pages/products/ReadPage"))
const Products_Modify = lazy(() => import("../pages/products/ModifyPage"))

const Member_Login = lazy(() => import("../pages/member/LoginPage"))


// nestied routing
const router = createBrowserRouter([
    {
        path:"",
        element: <MainPage></MainPage>
    },
    {
        path:"about",
        element: <AboutPage></AboutPage>
    },
    {
        path:"member/login",
        element:<Suspense fallback={Loding}><Member_Login/></Suspense>
    },
    {
        path:"member/kakao",
        element:<KakaoRedirectPage></KakaoRedirectPage>
    },
    {
        path:"member/modify",
        element:<KakaoModifyPage></KakaoModifyPage>
    },
    {
        path:"board",
        element: <Suspense fallback={Loding}><Board_Index/></Suspense>, //outlet 설정 잡기 위해 필요함
        children: [
            {
                path:"list",
                element:<Suspense fallback={Loding}><Board_List/></Suspense>

                
            },
            {
                path:"read/:bno",
                element:<Suspense fallback={Loding}><Board_Read/></Suspense>
            }

            ]
    },
    {
        path:"products",
        element: <Suspense fallback={Loding}><Products_Index/></Suspense>, //outlet 설정 잡기 위해 필요함
        children: [
            {
                path:"list",
                element:<Suspense fallback={Loding}><Products_List/></Suspense>

                
            },
            {
                path:"register",
                element:<Suspense fallback={Loding}><Products_Register/></Suspense>

                
            },
            {
                path:"read/:pno",
                element:<Suspense fallback={Loding}><Products_Read/></Suspense>
            },
            {
                path:"modify/:pno",
                element:<Suspense fallback={Loding}><Products_Modify/></Suspense>
            }
            

            ]
    },
          

])

export default router;