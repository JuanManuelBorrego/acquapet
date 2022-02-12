import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer';
import CartWidget from './components/NavBar/CartWidget';

function App() { 
  return (
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting="HOLA MUNDO"/>
      </div>
    )
;
}

export default App;
