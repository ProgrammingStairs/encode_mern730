import React from 'react';
import { createRoot } from 'react-dom/client';
import m3, { m1, m2 } from './demo5.jsx';

createRoot(document.getElementById("root1")).render(m1);
createRoot(document.getElementById("root2")).render(m2);
createRoot(document.getElementById("root3")).render(m3);