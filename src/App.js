import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          JIL - Team X
        </p>
        <p>Members</p>
        <ul>
          <li>Mofi</li>
          <li>Precious</li>
          <li>Joshua</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
