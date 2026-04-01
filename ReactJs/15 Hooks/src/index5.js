// example showing the concept of useMemo and memo
import React, { memo, useMemo, useState } from 'react';
import {createRoot} from 'react-dom/client';

const Memoized = memo((props)=>{
    console.log(`memo : Hello ${props.fname} ${props.lname}`);
    return `Hello ${props.fname} ${props.lname}`;
});
const UnMemoized = (props)=>{
    console.log(`unmemo : Hello ${props.fname} ${props.lname}`);
    return `Hello ${props.fname} ${props.lname}`;
}
function A(){
    const [fname,setFname] = useState("Andrew");
    const [lname,setlname] = useState("Anderson");
    const [count,setCount] = useState(0);    
    const memoized = useMemo(()=> <Memoized fname={fname} lname={lname}/>,[fname,lname]);
    return(<> 
        Count : {count} <br/>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
        <button onClick={()=>{setFname("jack")}}>Change name</button>

        <h2>Memoized</h2>
        {memoized}

        <h2>UnMemoized</h2>
        <UnMemoized fname={fname} lname={lname}/>
    </>);
}

createRoot(document.getElementById("root")).render(<A/>);