import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'; 
var display = function(){
    console.log("display method called");
}
function MyComponent(){
    const[message,setMessage] = useState('Exceutes only once');
    useEffect(()=>{
        display();
    },[display]);
    return(<>
        Message : {message} <br/>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);

