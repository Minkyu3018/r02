import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import useCustomLogin from "../hooks/useCustomLogin";
import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {

    const {loginInfo} = useCustomLogin()
    
    console.log("aboutPage")
    return ( 
        <BasicLayout>

            <TodoInput></TodoInput>

            <div>
                mainpage
                <TodoList></TodoList>
            </div>
            
            <CountDisplay></CountDisplay>
            <CountButtons></CountButtons>


            
        </BasicLayout>
     );
}
 
export default AboutPage;