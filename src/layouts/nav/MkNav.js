import { Link } from "react-router-dom";

const MkNav = () => {
    return ( 
        
        <>
            <div className="flex justify-between ml-6  text-white ">
                
                <div className="flex mt-5">
                <div className="m-5 text-2xl hover:underline">
                <Link to={"/"}>Home</Link>                
                </div>                

                <div className="m-5 ml-7 text-2xl hover:underline">
                <Link to={"/board/list"}>Board</Link>
                </div>

                <div className="m-5 ml-7 text-2xl hover:underline">
                <Link to={"/board/list"}>Menu1</Link>
                </div>

                <div className="m-5 ml-7 text-2xl hover:underline">
                <Link to={"/board/list"}>Q&A</Link>
                </div>

                <div className="m-5 ml-7 text-2xl hover:underline">
                <Link to={"/board/list"}>CS</Link>
                </div>

                <div className="m-5 ml-7 text-2xl hover:underline">
                <Link to={"/about"}>MyPage</Link>
                </div>


                </div>
                

                <div className="flex mr-4">
                    <button className="border-white w-20 h-10 m-3 mt-7 border-2 rounded-md hover:bg-white hover:text-sb-02">
                        SignIn
                    </button>
                    <button className="border-white w-20 h-10 m-3 mt-7 border-2 rounded-md hover:bg-white hover:text-sb-02">
                        Join
                    </button>

                </div>

                
                
            </div>

            
            </>
        


        
    );
}
 
export default MkNav;