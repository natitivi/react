import logo from './logo.svg';
import './App.css';

function App() {
  const name= 'HOME'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Discover the new <strong>{name}</strong> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          2022
        </a>
      </header>
    </div>
  );
}

export default App;
