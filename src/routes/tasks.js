import express from 'express'; // Importa express para crear rutas.
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/task.controller.js'; // Importa las funciones del controlador.

const router = express.Router(); // Crea un nuevo router.

router.get('/', getTasks); // Ruta para obtener todas las tareas.
router.post('/', createTask); // Ruta para crear una nueva tarea.
router.put('/:id', updateTask); // Ruta para actualizar una tarea existente.
router.delete('/:id', deleteTask); // Ruta para eliminar una tarea.

export default router; // Exporta el router para usarlo en la aplicación principal.
