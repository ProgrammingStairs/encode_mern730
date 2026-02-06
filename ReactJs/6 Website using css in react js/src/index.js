import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import Header from './components/Header.js';
function MyComponent(){
    return(<div id="container">
        <Header/>
    </div>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);