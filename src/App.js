import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greetings="Martin"/>
        <h4>
          Tu tienda de Skate
        </h4>
      </main>
    </div>
  );
}

export default App;
