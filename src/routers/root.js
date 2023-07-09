import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";
import IndexPage from "../pages/board/indexPage";

import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";

const Loding = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/indexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))


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
    }

])

export default router;