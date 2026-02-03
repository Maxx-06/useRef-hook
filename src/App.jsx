import { useRef } from "react";
import Counter from "./Counter";
import "./App.css";

/*
useRef Hook in React

The useRef hook in React is used to create a mutable reference that persists across re-renders of a component. It can be used to access DOM elements directly or to store any mutable value that does not cause a re-render when updated.  
*/
function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Directly access the DOM element
    inputRef.current.focus();
    console.log(inputRef);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <Counter />
    </div>
  );
}

export default App;
