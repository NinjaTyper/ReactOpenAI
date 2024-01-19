import logo from './logo.svg';
import './App.css';
import Openai from './OpenAiComponent';

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
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Openai/>
    </div>
  );
}

export default App;
