import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from "axios";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null); // Estado para la tarea a editar

  // Cargar las tareas desde el backend
  const fetchTasks = () => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  useEffect(() => {
    fetchTasks(); // Cargar tareas al iniciar la aplicación
  }, []);

  const handleTaskAddedOrUpdated = () => {
    fetchTasks(); // Volver a cargar las tareas después de agregar o editar
    setTaskToEdit(null); // Limpiar la tarea a editar
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task); // Establecer la tarea seleccionada para editar
  };

  return (
    <div className='task-page'>
      <Navbar />
      <h1>Mis tareas</h1>
      <div className='card'>
        <TaskForm taskToEdit={taskToEdit}
          onTaskAddedOrUpdated={handleTaskAddedOrUpdated}
          />
      </div>
        <TaskList tasks={tasks}
          reload={taskToEdit} 
          handleEditTask={handleEditTask} 
          taskToEdit={taskToEdit}  
        />
      <Footer />
    </div>
  );
};

export default App;
