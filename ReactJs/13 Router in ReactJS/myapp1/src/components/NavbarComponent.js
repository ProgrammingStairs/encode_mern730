import {Link} from 'react-router-dom';
function NavbarComponent(){
    return(<div style={{height:"40px",backgroundColor:"black",color:"white"}}>
        <Link to='/home' style={{color:"white",textDecoration:"none", fontSize:"20px"}}>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/about' style={{color:"white",textDecoration:"none", fontSize:"20px"}}>About</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/contact' style={{color:"white",textDecoration:"none", fontSize:"20px"}}>Contact</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/services' style={{color:"white",textDecoration:"none", fontSize:"20px"}}>Services</Link>
    </div>);
}
export default NavbarComponent;