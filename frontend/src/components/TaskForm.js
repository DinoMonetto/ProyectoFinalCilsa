import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { name, description };
        axios.post('http://localhost:5000/api/tasks', newTask)

            .then(response => {
                onTaskAdded(response.data); // Agrega la tarea recién creada
                setName('');
                setDescription('');
            })
            .catch(error => console.error('Error adding task:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre de tarea" required />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción" />
            <button type="submit">Agregar tarea</button>
        </form>
    );
};

export default TaskForm;
