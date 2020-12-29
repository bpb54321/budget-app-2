import "./App.css";
import Banner from "./Banner";
import Counter from "./Counter";
import CountProvider from "./CountProvider";
import logo from "./logo.svg";
import SingleTransactionEntry from "./SingleTransactionEntry";
import TransactionList from "./TransactionList";
import TransactionsProvider from "./TransactionsProvider";

function App() {
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
        <TransactionsProvider>
          <SingleTransactionEntry />
          <TransactionList />
        </TransactionsProvider>
        <CountProvider>
          <Banner />
          <Counter />
        </CountProvider>
      </main>
    </div>
  );
}

App.whyDidYouRender = true;

export default App;
