import React from 'react';
import {createRoot} from 'react-dom/client';
import Footer,{Header,Navbar,Section} from './demo2.jsx';

function MyComponent(){
    return(<> 
        <Header/>
        <Navbar/>
        <Section/>
        <Footer/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);