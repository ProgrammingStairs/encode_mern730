import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from './component/Header.js';
import Navbar from './component/Navbar.js';
import Section from './component/Section.js';
import Footer from './component/Footer.js';

// functional component
function MyComponent(){
    return(<> 
        <Header/>
        <Navbar/>
        <Section/>
        <Footer/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);