import './App.css';
import Button from './components/Button';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder='Nueva Tarea'>
        
      </input>
      <div className="todo-container">
        <ul className="tasks">
          <Task
            completed={true}>Prueba1</Task>
          <Task
            completed={false}>Prueba2</Task>
          <Task
          completed={false}>Prueba3</Task>
        </ul>
      </div>
      <div className="buttons">
        <Button
        btnName="Agregar" />
        <Button
        btnName="Reiniciar" />
      </div>
    </div>
  );
}

export default App;
