import express from 'express'; // Importa express para crear la aplicación.
import cors from 'cors'; // Importa cors para permitir solicitudes desde otros orígenes.
import bodyParser from 'body-parser'; // Importa body-parser para manejar datos JSON en las solicitudes.
import connectDB from './config/database.js'; // Importa la función para conectar con la base de datos.
import taskRoutes from './routes/tasks.js'; // Importa las rutas de tareas.
import dotenv from 'dotenv'; // Importa dotenv para manejar variables de entorno.

dotenv.config(); // Configura dotenv.

const app = express(); // Crea la aplicación Express.
const PORT = process.env.PORT || 5000; // Toma el puerto del archivo .env o usa el puerto 5000 por defecto.

connectDB(); // Conecta con la base de datos.

app.use(cors({// Habilita CORS para todas las solicitudes.
  origin: 'http://localhost:3000'  // Esto permite solicitudes solo desde este puerto
}));
; 
app.use(bodyParser.json()); // Configura body-parser para procesar datos JSON.

app.use('/api/tasks', taskRoutes); // Configura las rutas para las tareas.

app.get('/', (req, res) => res.send('API funcionando')); // Ruta base de prueba.

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

export default app; // Exporta la aplicación para iniciar el servidor.
