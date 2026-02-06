import React from 'react';
import {createRoot} from 'react-dom/client';

// class component

class Header extends React.Component{
    render(){
        return(<> 
           <h1>Header</h1>
           <p>This is an example of Header</p>
        </>);
    }
}
class Navbar extends React.Component{
    render(){
        return(<> 
            <h1>Navbar</h1>
            <p>This is an example of Navbar</p>
        </>);
    }
}
class Section extends React.Component{
    render(){
        return(<> 
            <h1>Section....</h1>
            <p>This is an example of Section</p>
        </>);
    }
}
function Footer(){
    return(<> 
           <h1>Footer</h1>
           <p>This is an example of Footer</p>
    </>);
}

function MyComponent(){
    return(<> 
        <Header/>
        <Navbar/>
        <Section/>
        <Footer/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);