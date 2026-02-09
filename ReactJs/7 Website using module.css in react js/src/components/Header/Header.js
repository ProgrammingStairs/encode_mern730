import headerStyle from './headerStyle.module.css';
import logo from '../../images/logo.jpg';
function Header(){
    return(<div className={headerStyle.header}>
            <img src={logo} className={headerStyle.logo} alt=""/>
            <span className={headerStyle.heading}>Digital Library</span>
            <div className={headerStyle.address}>
                202, Veda Business Park, <br/>
                Bhawarkua, Indore MP <br/>
                452010, +91-9090909090 <br/>
                bookStore@gmail.com
            </div>
        </div>)
}
export default Header;