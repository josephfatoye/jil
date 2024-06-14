import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
          fontWeight: 'bold',
        }}>
          JIL - (Team X)
          <br />
          Members:</p>
        <ul style={{
          textAlign: 'left'
        }}>
          <li>Mofi</li>
          <li>Precious</li>
          <li>Joshua</li>
          <li>Goodness</li>
          <li>Joseph</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
