import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Runs once on mount
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  // Runs on every count change
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<ExampleComponent/>);