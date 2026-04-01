// example showing the concept of prop drilling
import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
function A(){
    const [fname,setFname] = useState("Andrew");
    const [lname,setLname] = useState("Anderson");
    return(<>
        <B fname={fname} lname={lname}/>
    </>);
}
function B(props){
    return(<>
        <C fname={props.fname} lname={props.lname}/>
    </>);
}
function C(props){
    return(<>
        <D fname={props.fname} lname={props.lname}/>
    </>);
}
function D(props){
    return(<>
        <h2>First Name : {props.fname}</h2>
        <h2>Last Name : {props.lname}</h2>
    </>);
}

createRoot(document.getElementById("root")).render(<A/>);