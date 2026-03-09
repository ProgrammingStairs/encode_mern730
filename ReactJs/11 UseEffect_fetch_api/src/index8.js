import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'; 
function MyComponent(){
    const[data,setData] = useState([]);
    function getData(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
            .then(arr=>{setData(arr)})
                .catch((error)=>{
                    console.log("Error occured : ",error);
                })
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

