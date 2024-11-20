import express from 'express'; // Importa express para crear la aplicación.
import cors from 'cors'; // Importa cors para permitir solicitudes desde otros orígenes.
import bodyParser from 'body-parser'; // Importa body-parser para manejar datos JSON en las solicitudes.
import connectDB from './config/database.js'; // Importa la función para conectar con la base de datos.
import taskRoutes from './routes/tasks.js'; // Importa las rutas de tareas.
import dotenv from 'dotenv'; // Importa dotenv para manejar variables de entorno.

dotenv.config(); // Configura dotenv.

const app = express(); // Crea la aplicación Express.
connectDB(); // Conecta con la base de datos.

app.use(cors()); // Habilita CORS para todas las solicitudes.
app.use(bodyParser.json()); // Configura body-parser para procesar datos JSON.

app.use('/api/tasks', taskRoutes); // Configura las rutas para las tareas.

app.get('/', (req, res) => res.send('API funcionando')); // Ruta base de prueba.

export default app; // Exporta la aplicación para iniciar el servidor.
