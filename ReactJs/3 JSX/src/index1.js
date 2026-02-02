import React from 'react';
import { createRoot } from 'react-dom/client';

const data=<blockquote>
    <h2>Welcome to ReactJs</h2>
    <p>This is an example of React js. This is an example of React js. This is an example of React js. This is an example of React js. This is an example of React js. This is an example of React js.This is an example of React js. This is an example of React js. This is an example of React js. </p>
</blockquote>

createRoot(document.getElementById("root")).render(data);