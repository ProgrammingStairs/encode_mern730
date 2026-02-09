import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Section from './components/Section.js';
import Box from './components/Box.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function MyComponent(){
    return(<div id="container">
        <Header/>
        <Navbar/>  
        <Banner/>
        <Section/>
        <Box/>
        <About/>
        <Contact/>
        <Footer/>
    </div>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);