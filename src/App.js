import { useState, createContext } from "react";
import Counter from "./Counter";
import logo from "./logo.svg";
import "./App.css";

export const countContext = createContext(undefined);

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
        <countContext.Provider value={count}>
          <Counter setCount={setCount} />
        </countContext.Provider>
      </main>
    </div>
  );
}

App.whyDidYouRender = true;

export default App;
