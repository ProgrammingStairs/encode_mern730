import '../style.css';
import logo from '../images/logo.jpg';
function Header(){
    return(<div id="header">
            <img src={logo} id="logo" alt=""/>
            <span id="heading">Digital Library</span>
            <div id="address">
                202, Veda Business Park, <br/>
                Bhawarkua, Indore MP <br/>
                452010, +91-9090909090 <br/>
                bookStore@gmail.com
            </div>
        </div>)
}
export default Header;