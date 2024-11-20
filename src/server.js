import app from './app.js'; // Importa la aplicación Express.

const PORT = process.env.PORT || 5000; // Define el puerto en el que se ejecutará el servidor.

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`)); // Inicia el servidor y muestra un mensaje.
