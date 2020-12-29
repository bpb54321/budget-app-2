import { useState } from "react";
import incrementCount from "./incrementCount";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h2>Counter</h2>
        <p data-testid="count">{count}</p>
        <button onClick={() => incrementCount(setCount)}>Increment</button>
      </main>
    </div>
  );
}

App.whyDidYouRender = true;

export default App;
