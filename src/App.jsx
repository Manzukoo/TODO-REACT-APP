import './App.css';
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <ul className="tasks">
          
        </ul>
        <div className="buttons">
        <Boton
        btnName="Agregar" />
        <Boton
        btnName="Reiniciar" />
      </div>
      </div>
    </div>
  );
}

export default App;
