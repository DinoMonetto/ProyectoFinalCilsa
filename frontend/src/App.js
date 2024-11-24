import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (task) => {
    setTasks([...tasks, task]); // Añadir la tarea recién creada al estado
  };

  return (
    <div>
      <h1>Mi Lista de Tareas</h1>
      <TaskForm onTaskAdded={handleTaskAdded} /> {/* Pasar la función */}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
