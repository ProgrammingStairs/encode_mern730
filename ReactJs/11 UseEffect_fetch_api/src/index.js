import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'; 
function MyComponent(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("useeffect executes");
        setCount(count+1);
    },[count]);
    return(<>
        {count}
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);