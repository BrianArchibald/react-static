import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fun Facts about React</h1>
        <ul>
          <li>First released in 2016</li>
          <li>Created by Jordan Walke</li>
          <li>Over 100k stars on GitHub</li>
          <li>Maintained by Facebook</li>
          <li>Powers many enterprise apps</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
