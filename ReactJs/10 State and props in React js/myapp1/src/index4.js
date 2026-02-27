import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
    const [tempObj,setTempObj] = useState({});
    const [obj,setObject] = useState({});
    const getData = (event)=>{
        const {name,value} = event.target;
        setTempObj({
            ...tempObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
            setObject(tempObj);
        event.target.reset();
    }
    return (<>
        <h2>Example of React Js</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='Enter Username'
            name="username"
            id="username"
            onChange={getData}
        /> <br/>
        <input
            type="email"
            placeholder='Enter Email'
            name="email"
            id="email"
            onChange={getData}
        /><br/>
        <input
            type="password"
            placeholder='Enter Password'
            name="password"
            id="password"
            onChange={getData}
        /><br/>
        <input
            type="submit"
            value="Submit"
        />
        </form>
        {obj.username!=undefined ? `Username : ${obj.username}` : ""} <br/>
        {obj.email!=undefined ? `Email : ${obj.email}` : ""} <br/>
        {obj.password!=undefined ? `Password : ${obj.password}` : ""} <br/>

    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);