import { useState } from "react";
import "./App.css";
import UseStateLayout from "./layouts/UseStateLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseStateLayout />
    </>
  );
}

export default App;
