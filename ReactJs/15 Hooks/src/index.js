// example showing the concept of useMemo and memo
import React, { useReducer, useState } from 'react';
import {createRoot} from 'react-dom/client';

const initialState = {
    count : 0
};
const reducer = (state,action)=>{
    switch(action.type){
        case 'increment' : return {...state,count:state.count+action.value}; break;
        case 'decrement' : return {...state,count:state.count-action.value}; break;
        case 'reset' : return {...state,count:0}; break;
        default : return state; break;
    }
}
function App(){
    const [counter,dispatch] = useReducer(reducer,initialState);
    return(<> 
       Counting : {counter.count} <br/>
       <button onClick={()=>{dispatch({type:'increment',value:1})}}>Increment</button>     
       <button onClick={()=>{dispatch({type:'decrement',value:2})}}>Decrement</button>     
       <button onClick={()=>{dispatch({type:'reset1'})}}>Reset</button>     

    </>);
}

createRoot(document.getElementById("root")).render(<App/>);