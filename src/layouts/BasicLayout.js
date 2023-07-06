import MkNav from "./nav/MkNav";
import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 
        <>
        <div className="container mx-auto min-w-[1280px] bg-sb-02">
            
            <div>
               <MkNav>Menu</MkNav> 
            </div>

        </div>

        {/* <div className="container mx-auto min-w-[1280px] h-[80vh] bg-sb-01">

            <div>
                {children}
            </div>
        </div> */}

        <div className="container mx-auto min-w-[1280px] h-[10vh] bg-sb-03">

        <div>
            {children} basic
        </div>
        
        </div>
        
        
        </>
        

        
        


     );
}
 
export default BasicLayout;