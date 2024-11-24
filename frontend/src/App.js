import React, { useState } from 'react';
import TaskList from './components/TaskForm';
import TaskForm from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Mi Lista de Tareas</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList />
    </div>
  );
};

export default App;
