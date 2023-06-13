import { useState, useEffect, useCallback } from "react";
const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const [num1] = useState(5);
  const [num2] = useState(9);

  const sum = useCallback(() => num1 + num2, [num1, num2]);

  const build = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    // let isMounted = true;
    // if (isMounted) {
    //   console.log("run useEffect");
    // }
    // return () => (isMounted = false);

    console.log(`value: ${build()}`);
    setResult(build());
  }, [build]);

  console.log("The component redered");
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default App;
