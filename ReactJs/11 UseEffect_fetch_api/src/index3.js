import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'; 
function MyComponent(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        var timer = setInterval(()=>{
            setCount(count+1);
        },1000);
        return ()=> clearInterval(timer);
    },[]);
    return(<>
        Count : {count}
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);