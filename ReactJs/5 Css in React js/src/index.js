import React from 'react';
import {createRoot} from 'react-dom/client';
// function MyComponent(){
//     return(<div style={{backgroundColor:"black",color:"white"}}>
//         <h1>CSS in ReactJS</h1>
//         <p>This is an example of css in react js</p>
//     </div>);
// }

// function MyComponent(){
//     const styleDemo = {
//         backgroundColor:"crimson",
//         color:"white",
//         padding:"10px"
//     }
//     return(<div style={styleDemo}>
//         <h1>CSS in ReactJS</h1>
//         <p>This is an example of css in react js</p>
//     </div>);
// }


// function MyComponent(){
//     const styleDemo = {
//         style1:{
//             backgroundColor:"crimson",
//             color:"white"
//         },
//         style2:{
//             backgroundColor:"orange",
//             color:"red"
//         }
//     }
//     return(<div>
//         <h1 style={styleDemo.style1}>CSS in ReactJS</h1>
//         <p style={styleDemo.style2}>This is an example of css in react js</p>
//     </div>);
// }

// import './style.css';
// function MyComponent(){
//     return(<div>
//         <h1 id="style1">CSS in ReactJS</h1>
//         <p className="style2">This is an example of css in react js</p>
//     </div>);
// }

import styled from 'styled-components';
const MyParagraph = styled.div`
    background-color:#234567;
    color:#ffffff;
    font-family:cursive;
`
function MyComponent(){
    return (<MyParagraph>
        <h2>Example of styled component</h2>
        <p>This is an example of styled component</p>
    </MyParagraph>)
}
createRoot(document.getElementById("root")).render(<MyComponent/>);