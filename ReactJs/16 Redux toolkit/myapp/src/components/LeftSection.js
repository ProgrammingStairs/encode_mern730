import { useDispatch, useSelector } from 'react-redux';
import '../style.css';
import { reset } from '../store/userSlice.js';
function LeftSection(){
    const dispatch = useDispatch();
    const userObj = useSelector(state=>state.user);
    return (<center>
        <div id="leftSection">
            <br/> <br/>
            <p>
                Counter : {userObj.counter}
            </p> 
            <br/>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    </center>);
}

export default LeftSection;