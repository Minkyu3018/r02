import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const MkNav = () => {

    const obj = useSelector(state => state.basketCounter)

    return ( 
        
        <>
            <div className="flex justify-between ml-6  text-white ">
                
                <div className="flex mt-2">
                <div className="m-5 text-xl hover:underline">
                <Link to={"/"}>Home</Link>                                           
                </div>                

                <div className="m-5 ml-7 text-xl hover:underline">
                <Link to={"/board/list"}>Board</Link>
                </div>

                <div className="m-5 ml-7 text-xl hover:underline">
                <Link to={"/products/list"}>Products</Link>
                </div>

                <div className="m-5 ml-7 text-xl hover:underline">
                <Link to={"/board/list"}>Q&A</Link>
                </div>

                <div className="m-5 ml-7 text-xl hover:underline">
                <Link to={"/board/list"}>CS</Link>
                </div>

                <div className="m-5 ml-7 text-xl hover:underline">
                <Link to={"/about"}>MyPage</Link>
                </div>

                <div className="m-5 ml-32">
                    <span
                    className="bg-gray-300 text-gray-500 border-2 p-2 w-12 h-12 text-xl font-extrabold text-center"
                    > Basket : [ {obj.num} ]
                    </span>
                </div>

                
               


                </div>
                

                <div className="flex mr-4">
                    
                    {/* 기존 로그인 버튼 */}
                    {/* <button className="border-white w-20 h-10 m-3 mt-7 border-2 rounded-md hover:bg-white hover:text-sb-02">
                        SignIn
                    </button>
                    <button className="border-white w-20 h-10 m-3 mt-7 border-2 rounded-md hover:bg-white hover:text-sb-02">
                        Join
                    </button> */}

                    {/* Count 표현 */}
                     

                    <div><LoginNav></LoginNav>
                        
                    </div>


                </div>

                
                
            </div>

            
            </>
        


        
    );
}
 
export default MkNav;