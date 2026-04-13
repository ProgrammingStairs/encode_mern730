import { useSelector } from 'react-redux';
import '../style.css';
function Header(){
    const userObj = useSelector(state=>state.user);
    return (<div id="header">
        <center>
            <br/>
            <h2>Example of React Redux-toolkit</h2>
            <h3>{userObj.tagLine} | Counter : {userObj.counter}</h3>
        </center>
    </div>);
}
export default Header;