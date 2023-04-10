import { useState, useEffect, useRef } from "react";


function App() {
  const [inputRefEle, setinputRefEle] = useState("");
  const inputRef = useRef();
  const count = useRef(0);
  const previousInput = useRef("");

  const focusInput = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    count.current = count.current + 1;
    previousInput.current = inputRefEle;
  }, [inputRefEle])


  return (
    <div>
      <input type="text" ref={inputRef} value={inputRefEle} onChange={(e) => setinputRefEle(e.target.value)}></input>
      <button onClick={focusInput}>Focus to input</button>
      <p>Changed {count.current} times</p>
      <p>Previous input: {previousInput.current}</p>
      <p>New input: {inputRefEle}</p>

    </div>
  );
}

export default App;
