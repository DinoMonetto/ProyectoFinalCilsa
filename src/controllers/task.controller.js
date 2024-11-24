import Task from '../models/task.model.js'; // Importa el modelo de tareas.

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Busca todas las tareas en la base de datos.
    res.json(tasks); // Devuelve las tareas en formato JSON.
  } catch (error) {
    res.status(500).json({ error: error.message }); // Maneja errores y responde con un estado 500.
  }
};

export const createTask = async (req, res) => {
  const { name, description } = req.body; // Extrae los datos enviados en la solicitud.
  try {
    const newTask = new Task({ name, description }); // Crea una nueva tarea con los datos proporcionados.
    await newTask.save(); // Guarda la tarea en la base de datos.
    res.status(201).json(newTask); // Responde con la tarea creada y un estado 201 (creado).
  } catch (error) {
    res.status(400).json({ error: error.message }); // Maneja errores y responde con un estado 400.
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params; // Obtiene el ID de la tarea desde los parámetros de la URL.
  const { name, description, status } = req.body; // Extrae los datos enviados en la solicitud.
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id, // Busca la tarea por su ID.
      { name, description, status }, // Actualiza los campos con los datos proporcionados.
      { new: true } // Devuelve el documento actualizado.
    );
    if (!updatedTask) return res.status(404).json({ error: 'Tarea no encontrada' }); // Si no se encuentra la tarea, responde con 404.
    res.json(updatedTask); // Devuelve la tarea actualizada.
  } catch (error) {
    res.status(400).json({ error: error.message }); // Maneja errores y responde con un estado 400.
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params; // Obtiene el ID de la tarea desde los parámetros de la URL.
  try {
    const deletedTask = await Task.findByIdAndDelete(id); // Busca y elimina la tarea por su ID.
    if (!deletedTask) return res.status(404).json({ error: 'Tarea no encontrada' }); // Si no se encuentra, responde con 404.
    res.json({ message: 'Tarea eliminada' }); // Responde con un mensaje de éxito.
  } catch (error) {
    res.status(500).json({ error: error.message }); // Maneja errores y responde con un estado 500.
  }
};
