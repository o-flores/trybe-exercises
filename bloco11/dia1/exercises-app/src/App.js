import './App.css';

const tarefas = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"]

function App() {
  return (
    <ul>
      {tasks.map((task) => tarefas(task))}
    </ul>
  );
}

export default App;
