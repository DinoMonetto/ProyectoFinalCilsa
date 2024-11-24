import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskForm = ({ taskToEdit, onTaskAddedOrUpdated }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setName(taskToEdit.name);
      setDescription(taskToEdit.description);
    } else {
        setName(""); // Limpiar los campos si es nuevo
        setDescription("");
      }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { name, description };
    if (taskToEdit) {
      axios
        .put(`http://localhost:5000/api/tasks/${taskToEdit._id}`, taskData) // solicitud PUT para actualizar
        .then(() => {
            onTaskAddedOrUpdated();
          setName(''); // Limpiar el formulario
        setDescription('');
        }).catch((error) => console.error("Error editing task:", error));
    } else {
      axios
        .post("http://localhost:5000/api/tasks", taskData) // solicitud POST para agregar
        .then(() => { onTaskAddedOrUpdated(); // Llamar la función pasada como prop
          setName(''); // Limpiar el formulario
        setDescription('');
        }).catch((error) => console.error("Error adding task:", error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            className="form-control"
            pattern=".*\S.*" // Al menos un carácter no blanco
            required
          />
        </div>
        <div className="col-5">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción"
            className="form-control"
            style={{ height: "calc(1.5em + .75rem + 2px)" }}
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-bd-primary w-100">
          {taskToEdit ? "Guardar cambios" : "Agregar tarea"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
