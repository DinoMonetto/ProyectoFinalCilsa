import React from 'react';
import axios from 'axios';

const TaskItem = ({ task }) => {
    const deleteTask = () => {
        axios.delete(`http://localhost:5001/api/tasks/${task._id}`)
            .then(response => console.log(response.data))
            .catch(error => console.error('Error deleting task:', error));
    };

    const toggleStatus = () => {
        axios.put(`http://localhost:5001/api/tasks/${task._id}`, { status: task.status === 'pending' ? 'completed' : 'pending' })
            .then(response => console.log(response.data))
            .catch(error => console.error('Error updating task:', error));
    };

    return (
        <div>
            <p>{task.name} - {task.status}</p>
            <button onClick={toggleStatus}>{task.status === 'pending' ? 'Marcar como completada' : 'Marcar como pendiente'}</button>
            <button onClick={deleteTask}>Eliminar</button>
        </div>
    );
};

export default TaskItem;
