// example showing the concept of contextAPI
import React, { createContext, useContext, useState } from 'react';
import {createRoot} from 'react-dom/client';
const context = createContext(null);
function A(){
    const [fname,setFname] = useState("Andrew");
    const [lname,setLname] = useState("Anderson");
    return(<context.Provider value={{fname,lname}}>
        <B/>
    </context.Provider>);
}
function B(){
    return(<>
        <C/>
    </>);
}
function C(){
    return(<>
        <D/>
    </>);
}
function D(){
    const {fname,lname} = useContext(context);
    return(<>
        <h2>First Name : {fname}</h2>
        <h2>Last Name : {lname}</h2>
    </>);
}

createRoot(document.getElementById("root")).render(<A/>);