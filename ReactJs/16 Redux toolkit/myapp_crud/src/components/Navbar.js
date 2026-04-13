import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar(){
    const [menuItem,setMenuItem] = useState();
    const userObj = useSelector(state=> state.user);
    useEffect(()=>{
        const timer = setInterval(()=>{
            if(userObj.navShow=="home"){
                setMenuItem(<div>
                    <Link to="/home">Home</Link>   |   
                    <Link to="/addUser">AddUser</Link>   |   
                    <Link to="/viewUsers">ViewUsers</Link>   
                </div>);
            }
        },200);
        return ()=> clearInterval(timer);
    },[]);
    return(<>
        {menuItem}
    </>);
}
export default Navbar;