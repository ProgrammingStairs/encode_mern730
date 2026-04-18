import { useEffect, useState } from "react";

function Navbar(){
    const [menuItem,setMenuItem] = useState();
    useEffect(()=>{
        const timer = setInterval(()=>{

        },200);
        return ()=> clearInterval(timer);
    },[]);
    return (<>
        {menuItem}
    </>);
}
export default Navbar;