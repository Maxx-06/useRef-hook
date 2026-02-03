import { useState, useRef, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  let prevCount = prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = count;
  });
  return (
    <div>
      <div>
        Current : {count} || Previous : {prevCount}
      </div>
      <button onClick={() => setCount( count + 1)}>Click</button>
    </div>
  );
}

export default Counter;
