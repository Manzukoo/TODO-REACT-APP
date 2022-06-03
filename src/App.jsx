import './App.css';
import Boton from './components/Boton';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <ul className="tasks">
          <Task
            completed={true}>Prueba1</Task>
          <Task
            completed={false}>Prueba2</Task>
          <Task
          completed={false}>Prueba3</Task>
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
