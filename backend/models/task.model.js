import mongoose from 'mongoose'; // Importa mongoose para definir el modelo de datos.

const taskSchema = new mongoose.Schema({
  name: {
    type: String, // El nombre de la tarea debe ser una cadena.
    required: true, // Este campo es obligatorio.
  },
  description: {
    type: String, // La descripción de la tarea también es una cadena.
    required: false, // Este campo es opcional.
  },
  status: {
    type: String, // El estado de la tarea será una cadena.
    enum: ['pending', 'completed'], // Solo se permiten estos dos valores.
    default: 'pending', // Por defecto, las tareas son "pendientes".
  },
}, { timestamps: true }); // Agrega marcas de tiempo automáticamente (createdAt y updatedAt).

const Task = mongoose.model('Task', taskSchema); // Crea un modelo llamado "Task" basado en el esquema.

export default Task; // Exporta el modelo para usarlo en otros archivos.
