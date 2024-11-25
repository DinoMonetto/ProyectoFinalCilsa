import React, { useEffect } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, reload, handleEditTask, taskToEdit }) => {
  // Filtrar tareas pendientes y completadas, excluyendo la tarea en edición
  const pendingTasks = tasks.filter(
    (task) => task.status === 'pending' && task._id !== taskToEdit?._id
  );
  const completedTasks = tasks.filter(
    (task) => task.status === 'completed' && task._id !== taskToEdit?._id
  );

  return (
    <div>
    {pendingTasks.length > 0 && (
    <div className='card'>
      <h2 className='pb-2'>Pendientes</h2>
      <ul>
        {pendingTasks.map(task => (
          <TaskItem key={task._id} task={task} onActionCompleted={reload} handleEditTask={handleEditTask} />
        ))}
      </ul>

      </div>
    )}

    {completedTasks.length > 0 && (
      <div className='card'>
      <h2 className='pb-2'>Completadas</h2>
      <ul>
        {completedTasks.map(task => (
          <TaskItem key={task._id} task={task} onActionCompleted={reload} handleEditTask={handleEditTask}/>
        ))}
      </ul>
      </div>
    )}
    </div>
  );
};

export default TaskList;
