import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import HeaderNav from './HeaderNav';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNav color="light" fixed="top" expand="md"/>
        <Hero/>
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
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <img src={logo} className="App-logo" alt="logo" /><br/>

      </header>
    </div>
  );
}

export default App;
