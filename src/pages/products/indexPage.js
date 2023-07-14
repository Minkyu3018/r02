import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div className="mt-1 p-4 bg-zinc-200 h-16 text-xl text-gray-500 flex">
                <div className="hover:underline hover:cursor-pointer font-medium p-1 ml-4">
                    <Link to={"/products/list"}>List</Link>
                </div>
                <div className="hover:underline hover:cursor-pointer font-medium  p-1 pl-10">
                    <Link to={'register'}>Register</Link>
                </div>
                <div className="hover:underline hover:cursor-pointer font-medium  p-1 pl-10">---</div>
                <div className="hover:underline hover:cursor-pointer font-medium  p-1 pl-10">---</div>
                <div className="hover:underline hover:cursor-pointer font-medium  p-1 pl-10">---</div>
            </div>
            <div className="h-[50vh] bg-white w-full">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;