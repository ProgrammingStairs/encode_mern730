import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function MyComponent(){
    return(<div class="container" style={{backgroundColor:"dodgerblue",color:"white"}}>
        <h2>Welcome to Bootstrap</h2>
        <p>This is an example of Bootstrap</p>
        <button class="btn btn-danger">Click Me</button>
    </div>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);