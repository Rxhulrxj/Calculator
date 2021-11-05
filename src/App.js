import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", ".", "%"];

  const updateCalc = (val) => {
    if (
      (ops.includes(val) && calc === "") ||
      (ops.includes(val) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + val);
    if (!ops.includes(val)) {
      setResult(eval(calc + val).toString());
    }
  };
  const createdigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const dellast = () => {
    if (calc === "") {
      return;
    }
    const val = calc.slice(0, -1);
    setCalc(val);
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={dellast}>DEL</button>
        </div>
        <div className="numbers">
          {createdigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
