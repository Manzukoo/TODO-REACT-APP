import './App.css';
import Button from './components/Button';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <div className="container">
        <input type="text" className='input-new-task' placeholder='Nueva Tarea'>

        </input>
        <div className="todo-container">
          <Tasks />
        </div>
        <div className="buttons">
          <Button
          btnName="Agregar" />
          <Button
          btnName="Reiniciar" />
        </div>
      </div>
    </div>
  );
}

export default App;
