import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div className="mt-1 p-4 bg-sb-01 h-16 text-xl text-gray-500 flex">
                <div className="hover:underline hover:cursor-pointer font-medium p-2">
                    <Link to={"/products/list"}>List</Link>
                </div>
                <div className="hover:underline hover:cursor-pointer font-medium  p-2 pl-8">
                    <Link to={'register'}>Register</Link>
                </div>
                <div className="hover:underline hover:cursor-pointer font-medium  p-2 pl-8">---</div>
                <div className="hover:underline hover:cursor-pointer font-medium  p-2 pl-8">---</div>
                <div className="hover:underline hover:cursor-pointer font-medium  p-2 pl-8">---</div>
            </div>
            <div className="h-[50vh] bg-white w-full">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;