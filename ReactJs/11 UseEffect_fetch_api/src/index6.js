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


/*
import React, { useEffect, useState, useCallback } from 'react';

function MyComponent(){
  const [count, setCount] = useState(0);

  const display = useCallback(() => {
    console.log("display");
  }, []); // ✅ stable function

  useEffect(()=>{
    display();
    setCount(prev => prev + 1); // ✅ safe update
  }, [display]);

  return (
    <>
      Count: {count}
    </>
  );
}

*/