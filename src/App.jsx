
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"HOLA"}/>
    </div>
  );
}

export default App;
