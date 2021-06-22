import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/CardContainer/ItemListContainer';
//import CardContainer from './components/CardContainer/CardContainer';
//import CardWithClass from './practice/CardWithClass';
//import CardContainerHooks from './components/CardContainer/CardContainerHooks';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <h4>
          Tu tienda de Skate
        </h4>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
