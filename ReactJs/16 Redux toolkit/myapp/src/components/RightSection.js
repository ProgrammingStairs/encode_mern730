import { useDispatch } from 'react-redux';
import '../style.css';
import { decrement, increment, reset, setTagLine } from '../store/userSlice.js';
import { useState } from 'react';
function RightSection(){
    const dispatch = useDispatch(); 
    const [tgLine,setTgLine] = useState('');
    const getData = (event)=>{
        setTgLine(event.target.value); 
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(setTagLine(tgLine));
        event.target.reset();
    }
    return (<>
        <div id="rightSection">
            <blockquote> <br/><br/>
               <center>
                <form onSubmit={handleSubmit}>
                <label>Enter Tag Line</label> &nbsp;&nbsp;:&nbsp;&nbsp;

                    <input 
                        type="text"
                        placeholder='Enter Tag Line'
                        name="tagLine"
                        id="tagLine"
                        onChange={getData}
                    /> &nbsp;
                    <button>Set Tag Line</button> <br/><br/>                
                </form>
                <hr width={300}/> <br/><br/>
            &nbsp;
                <button onClick={()=>{dispatch(increment())}}>Increment</button>
            &nbsp;
                <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            &nbsp;
                <button onClick={()=>{dispatch(reset())}}>Reset</button>
            </center>
            </blockquote>
        </div>
    </>);
}

export default RightSection;