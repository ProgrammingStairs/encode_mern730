import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'; 
function MyComponent(){
    const[data,setData] = useState([]);
    async function getData(){
        try{
            var response = await fetch("https://jsonplaceholder.typicode.com/posts");
            var arr = await response.json();
            setData(arr);
        }catch(error){
            console.log("Error occured : ",error);
        }
    }
    useEffect(()=>{
        getData();
    },[]);
    return(<>
        <h2>User Data</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {                    
                    data.map((obj,index)=>{
                        return(<tr>
                            <td>{index+1}</td>
                            <td>{obj.userId}</td>
                            <td>{obj.id}</td>
                            <td>{obj.title}</td>
                            <td>{obj.body}</td>
                        </tr>);
                    })
                }
            </tbody>
        </table>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);

