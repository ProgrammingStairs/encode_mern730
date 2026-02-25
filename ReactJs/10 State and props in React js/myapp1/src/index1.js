import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
    const [count,setCount] = useState(0);
    const [title,setTitle] = useState("Counting");
    var decrement = function(){
        setCount(count-1);
    }
    return (<>
        <h2>{title} : {count}</h2>
        <button onClick={function(){setCount(count+1)}}>Click to Increment</button>
        <button onClick={decrement}>Click to Decrement</button>
        <button onClick={()=>{ setTitle("Counter") }}>Click to change Title</button>
        <button onClick={()=>{ setCount(count+3) }}>Click to IncrementByThree</button>
        <button onClick={()=>{ setCount(0) }}>Reset</button>
 
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);