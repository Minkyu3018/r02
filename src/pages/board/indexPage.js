import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div className="mt-1 p-4 bg-sb-01 h-18 text-xl text-gray-500 flex">
                <div className="hover:underline font-medium p-2">List</div>
                <div className="hover:underline font-medium  p-2 pl-8">Regist</div>
                <div className="hover:underline font-medium  p-2 pl-8">Modify</div>
                <div className="hover:underline font-medium  p-2 pl-8">Delete</div>
            </div>
            <div className="h-[50vh] bg-white w-full">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;