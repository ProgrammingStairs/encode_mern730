import React from 'react';
import { createRoot } from 'react-dom/client';

//createRoot(document.getElementById("root")).render("This is an example of ReactJS");

// var content = "This is an example of ReactJS..!!";
// var rootElement = document.getElementById("root");
// createRoot(rootElement).render(content);

var content = <div>
    <blockquote>
        <h2>Welcome to ReactJS</h2>
        <p>This is an example of React js</p>
    </blockquote>
</div>
var rootElement = document.getElementById("root");
createRoot(rootElement).render(content);
