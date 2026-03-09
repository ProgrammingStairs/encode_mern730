import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'; 
function MyComponent(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        if(count<10){
            var timer = setInterval(()=>{
                setCount(count+1);
            },1000);
            return ()=> clearInterval(timer);
        }else{
            clearInterval(timer);
        }    
    },[count]);
    return(<>
        Count : {count}
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);