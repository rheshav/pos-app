import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

let tambah = () => {
  let a = prompt(`masukkan nilai a`);
  let b = parseInt(prompt(`masukkan nilai b`));

  console.log(`nilai a = ` + a);
  console.log(`nilai b = ` + b);
  return console.log(`a + b = `, a + b);
};
tambah();
