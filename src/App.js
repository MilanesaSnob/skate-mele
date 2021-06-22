import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListCont from './components/ItemListContainer/ItemListCont';
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
      
        <ItemListCont greetings="Martin"/>
        <h4>
          Tu tienda de Skate
        </h4>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
