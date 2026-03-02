import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import Display from './Display.js';

class MyComponent extends React.Component{
    state={
        tempObj : {},
        data : [],
        index : -1
    }

        // const [tempObj,setTempObj] = useState({});
        // const [data,setData] = useState([]);
        // const [index,setIndex] = useState(-1);
    getData = (event)=>{
        const {name,value} = event.target;
        this.setState({
                tempObj : {
                    ...this.state.tempObj,
                    [name] : value
                }
        });
    }
        const updateData = (userObj)=>{
            setTempObj(userObj.obj);
            setIndex(userObj.index);
        }
        const deleteData = (index)=>{
            data.splice(index,1);
            setData([...data]);
        }
        const handleSubmit = (event)=>{
            event.preventDefault();
                if(index==-1){
                    setData([
                        ...data,
                        tempObj
                    ]);
                }else{
                    data.splice(index,1,tempObj);
                    setData([...data]);
                    setIndex(-1);
                }

            // event.target.reset();
            var obj = {
                username:"",
                email:"",
                password:""
            }
            setTempObj(obj);
        }
    
    return (<>
        <h2>Example of React Js...</h2>
        <div style={{width:"25%",float:"left"}}>
<form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='Enter Username'
            name="username"
            id="username"
            onChange={getData}
            value={tempObj.username}
        /> <br/>
        <input
            type="email"
            placeholder='Enter Email'
            name="email"
            id="email"
            onChange={getData}
            value={tempObj.email}
        /><br/>
        <input
            type="password"
            placeholder='Enter Password'
            name="password"
            id="password"
            onChange={getData}
            value={tempObj.password}
        /><br/>
        <input
            type="submit"
            value={index==-1 ? "Submit" : "Update User"}
        />
        </form>
        </div>
        <div style={{width:"75%",float:"left"}}>
            <Display data={data} updateData={updateData} deleteData={deleteData}/>
        </div>
    </>);
}

// function MyComponent(){
//         const [tempObj,setTempObj] = useState({});
//         const [data,setData] = useState([]);
//         const [index,setIndex] = useState(-1);
//         const getData = (event)=>{
//             const {name,value} = event.target;
//             setTempObj({
//                 ...tempObj,
//                 [name]:value
//             });
//         }
//         const updateData = (userObj)=>{
//             setTempObj(userObj.obj);
//             setIndex(userObj.index);
//         }
//         const deleteData = (index)=>{
//             data.splice(index,1);
//             setData([...data]);
//         }
//         const handleSubmit = (event)=>{
//             event.preventDefault();
//                 if(index==-1){
//                     setData([
//                         ...data,
//                         tempObj
//                     ]);
//                 }else{
//                     data.splice(index,1,tempObj);
//                     setData([...data]);
//                     setIndex(-1);
//                 }

//             // event.target.reset();
//             var obj = {
//                 username:"",
//                 email:"",
//                 password:""
//             }
//             setTempObj(obj);
//         }
    
//     return (<>
//         <h2>Example of React Js...</h2>
//         <div style={{width:"25%",float:"left"}}>
// <form onSubmit={handleSubmit}>
//         <input
//             type="text"
//             placeholder='Enter Username'
//             name="username"
//             id="username"
//             onChange={getData}
//             value={tempObj.username}
//         /> <br/>
//         <input
//             type="email"
//             placeholder='Enter Email'
//             name="email"
//             id="email"
//             onChange={getData}
//             value={tempObj.email}
//         /><br/>
//         <input
//             type="password"
//             placeholder='Enter Password'
//             name="password"
//             id="password"
//             onChange={getData}
//             value={tempObj.password}
//         /><br/>
//         <input
//             type="submit"
//             value={index==-1 ? "Submit" : "Update User"}
//         />
//         </form>
//         </div>
//         <div style={{width:"75%",float:"left"}}>
//             <Display data={data} updateData={updateData} deleteData={deleteData}/>
//         </div>
//     </>);
// }
createRoot(document.getElementById("root")).render(<MyComponent/>);