import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function NavbarComponent() {
    const [menuItem, setMenuItem] = useState();
    useEffect(() => {
        var timer = setInterval(() => {
            var navShow = localStorage.getItem("navShow");
            if (navShow == "home") {
                setMenuItem(<div style={{ height: "40px", backgroundColor: "black", color: "white" }}>
                    <Link to='/' style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/login' style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>Login</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/register' style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>Register</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>);
            } else if (navShow == "login") {
                setMenuItem(<div style={{ height: "40px", backgroundColor: "black", color: "white" }}>
                    <Link to='/' style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/register' style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>Register</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>);
            } else if (navShow == "register") {
                setMenuItem(<div style={{ height: "40px", backgroundColor: "black", color: "white" }}>
                    <Link to='/' style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/login' style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>Login</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>);
            }
        }, 200);
        return () => clearInterval(timer);
    }, []);
    return (<>
        {menuItem}
    </>);
}
export default NavbarComponent;