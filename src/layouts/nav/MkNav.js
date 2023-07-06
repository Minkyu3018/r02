import { Link } from "react-router-dom";

const MkNav = () => {
    return ( 
        
        <>
            <div className="flex justify-between p-4 text-white ">
                
                <div className="flex">
                <div className="m-5 text-2xl hover:underline">
                <Link to={"/"}>Main</Link>
                
                </div>

                <div className="m-5 text-2xl hover:underline">
                <Link to={"/about"}>About</Link>
                </div>

                <div className="m-5 text-2xl hover:underline">
                <Link to={"/board/list"}>Board</Link>
                </div>

                <div className="m-5 text2xl hover:underline">
                <Link to={"/board/list"}>Menu1</Link>
                </div>

                <div className="m-5 text-2xl hover:underline">
                <Link to={"/board/list"}>Menu2</Link>
                </div>

                <div className="m-5 text-2xl hover:underline">
                <Link to={"/board/list"}>Menu3</Link>
                </div>

                <div className="m-5 text-2xl hover:underline">
                <Link to={"/board/list"}>Menu4</Link>
                </div>


                </div>
                

                <div className="flex">
                    <button className="border-white w-20 h-10 m-3 border-2 rounded-md hover:bg-white hover:text-sb-02">
                        SignIn
                    </button>
                    <button className="border-white w-20 h-10 m-3 border-2 rounded-md hover:bg-white hover:text-sb-02">
                        Join
                    </button>

                </div>

                
                
            </div>

            
            </>
        


        
    );
}
 
export default MkNav;