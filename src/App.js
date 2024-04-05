import logo from './logo.svg';
import './App.css';
import Openai from './OpenAiComponent.js';
import MessagesContainer from './components/MessagesContainer/MessagesContainer.js';

function App() {
  return (
    <div className="App">
      {/* <div className="login-form-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username"/>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password"/>
          <button type="button">Sign In!</button>
      </div> */}
      {/* <Openai/> */}
      <MessagesContainer />
    </div>
  );
}

export default App;
