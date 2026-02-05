import React from 'react';
import {createRoot} from 'react-dom/client';

// functional component

// function MyComponent(){
//     return "This is an example of React Js";
// }

// function MyComponent(){
//     return <h1>This is an example of React Js</h1>;
// }

// function MyComponent(){
//     return(<div> 
//            <h1>This is an example of React Js</h1>
//            <h1>This is an example of React Js</h1>
//     </div>);
// }

// function MyComponent(){
//     return(<React.Fragment> 
//            <h1>This is an example of React Js</h1>
//            <h1>This is an example of React Js</h1>
//     </React.Fragment>);
// }

function MyComponent(){
    return(<> 
           <h1>This is an example of React Js</h1>
           <h1>This is an example of React Js</h1>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);