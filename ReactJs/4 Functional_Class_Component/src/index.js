import React from 'react';
import {createRoot} from 'react-dom/client';

// functional component

function MyComponent(){
    return "This is an example of React Js";
}

createRoot(document.getElementById("root")).render(<MyComponent/>);