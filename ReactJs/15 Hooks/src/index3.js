// example showing the concept of useCallback
import React, { useCallback, useState } from 'react';
import {createRoot} from 'react-dom/client';
function A(){
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [result,setResult] = useState();
    const res = useCallback(()=>{
        console.log("Sum : "+(parseInt(num1)+parseInt(num2)));
        setResult(parseInt(num1)+parseInt(num2));
    },[num1,num2]);

    // const res = function(){
    //     console.log("Sum : "+(parseInt(num1)+parseInt(num2)));
    //     setResult(parseInt(num1)+parseInt(num2));
    // };
    
    console.log(res);
    return(<>
        
            <input
                type="number"
                placeholder='Enter first number'
                name="num1"
                id="num1"
                onChange={(event)=>{
                    setNum1(event.target.value);
                }}
            /> <br/>
            <input
                type="number"
                placeholder='Enter second number'
                name="num2"
                id="num2"
                onChange={(event)=>{
                    setNum2(event.target.value);
                }}
            /> <br/>
            <input
                type="submit"
                onClick={res}
            /> <br/>
            Result : {result}
        
    </>);
}

createRoot(document.getElementById("root")).render(<A/>);
