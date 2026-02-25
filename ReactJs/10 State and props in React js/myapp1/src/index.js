import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [obj,setObject] = useState({username:"",email:"",password:""});
    const handleSubmit = (event)=>{
        event.preventDefault();
            setObject({
                username,
                email,
                password
            });
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
            onChange={(event)=>{
                setUsername(event.target.value);
            }}
        /> <br/>
        <input
            type="email"
            placeholder='Enter Email'
            name="email"
            id="email"
            onChange={(event)=>{
                setEmail(event.target.value);
            }}
        /><br/>
        <input
            type="password"
            placeholder='Enter Password'
            name="password"
            id="password"
            onChange={(event)=>{
                setPassword(event.target.value);
            }}
        /><br/>
        <input
            type="submit"
            value="Submit"
        />
        </form>
        {obj.username!="" ? `Username : ${obj.username}` : ""} <br/>
        {obj.email!="" ? `Email : ${obj.email}` : ""} <br/>
        {obj.password!="" ? `Password : ${obj.password}` : ""} <br/>

    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);