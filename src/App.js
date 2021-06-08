import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';


const styles = {
  backgroundColor:'white',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {console.log('holaa', 1 + 1)}
        <img src={logo} className="App-logo" alt="logo" />
        <p style = {{backgroundColor: 'green'}}>
          Tu tienda de Skate especial
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
    </div>
  );
}

export default App;
