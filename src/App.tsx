import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./App.css";

const App: React.FC = () => {
  const [value, setValue] = useLocalStorage("TEST_KEY");

  const onChange = (e: any) => setValue(e.target.value);

  return (
    <div>
      <h1>Hello React with Local Storage!</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

export default App;
