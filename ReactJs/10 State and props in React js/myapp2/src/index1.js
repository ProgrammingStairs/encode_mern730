import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
function MyComponent(){
        const [tempObj,setTempObj] = useState({});
        const [data,setData] = useState([]);
        const getData = (event)=>{
            const {name,value} = event.target;
            setTempObj({
                ...tempObj,
                [name]:value
            });
        }
        const handleSubmit = (event)=>{
            event.preventDefault();
                setData([
                    ...data,
                    tempObj
                ]);
            event.target.reset();
        }
    
    return (<>
        <h2>Example of React Js</h2>
        <div style={{width:"25%",float:"left"}}>
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
        </div>
        <div style={{width:"75%",float:"left"}}>
        <table border={1} cellspacing={0} cellpadding={8}>
            <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            {
                data.map((obj,index)=>{
                    return (<tr>
                        <td>{index+1}</td>
                        <td>{obj.username}</td>
                        <td>{obj.email}</td>
                        <td>{obj.password}</td>
                    </tr>);
                })
            }
        </table>            
        </div>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);