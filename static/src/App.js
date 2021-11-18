import logo from './logo.svg';
// import './App.css';
import './styles.css';
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fun Facts about React</h1>
        <ul>
          <li>First released in 2013</li>
          <li>Created by Jordan Walke</li>
          <li>Over 100k stars on GitHub</li>
          <li>Maintained by Facebook</li>
          <li>Powers many enterprise apps</li>
        </ul>
      </header> */}
    </div>
  );
}


export default App;
