// example showing the concept of useMemo and memo
import React, { useReducer, useState } from 'react';
import {createRoot} from 'react-dom/client';

const initialState = 0;
const reducer = (state,action)=>{
    switch(action){
        case 'increment' : return state+1; break;
        case 'decrement' : return state-1; break;
        case 'reset' : return 0; break;
        default : return state; break;
    }
}
function App(){
    const [count,dispatch] = useReducer(reducer,initialState);
    return(<> 
       Counting : {count} <br/>
       <button onClick={()=>{dispatch('increment')}}>Increment</button>     
       <button onClick={()=>{dispatch('decrement')}}>Decrement</button>     
       <button onClick={()=>{dispatch('reset')}}>Reset</button>     

    </>);
}

createRoot(document.getElementById("root")).render(<App/>);
