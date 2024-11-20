import mongoose from 'mongoose'; // Importa la librería mongoose para conectar con MongoDB.
import dotenv from 'dotenv'; // Importa dotenv para manejar variables de entorno.

dotenv.config(); // Configura dotenv para que lea las variables de entorno del archivo .env.

const connectDB = async () => {
  try {
    // Intenta establecer la conexión con MongoDB usando la URI proporcionada.
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado'); // Mensaje de éxito si se conecta correctamente.
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message); // Muestra el error en caso de fallo.
    process.exit(1); // Detiene el proceso si falla la conexión.
  }
};

export default connectDB; // Exporta la función para usarla en otros archivos.
