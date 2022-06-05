import './App.css';
import Button from './components/Button';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Tasks />
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
