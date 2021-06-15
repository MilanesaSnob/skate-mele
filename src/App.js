import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/*import CardContainer from './components/CardContainer/CardContainer';
import CardWithClass from './practice/CardWithClass';*/
import CardContainerHooks from './components/CardContainer/CardContainerHooks';



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
        <CardContainerHooks />
      </main>
    </div>
  );
}

export default App;
