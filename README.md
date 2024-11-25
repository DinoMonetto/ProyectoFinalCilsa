
# ProyectoFinalCilsa

Proyecto Final CILSA - To-Do List
Descripción
Este proyecto es una aplicación web para gestionar una lista de tareas. Los usuarios pueden crear, leer, actualizar y eliminar tareas. La aplicación está diseñada con una arquitectura modular, separando el frontend, backend y la configuración de la base de datos en ramas específicas.

Estructura del Proyecto
El repositorio contiene las siguientes ramas:

main: Rama principal que integra las funcionalidades completas del proyecto.
DB: Configuración de la base de datos MongoDB.
backend: Implementación de la API RESTful con Node.js y Express.
frontend: Desarrollo de la interfaz de usuario.
Tecnologías Utilizadas
Frontend: HTML, CSS, JavaScript.
Backend: Node.js, Express.
Base de Datos: MongoDB (a través de MongoDB Atlas).
Requisitos Previos
Instalar Node.js (versión 14 o superior).

Clonar el repositorio:


git clone https://github.com/DinoMonetto/ProyectoFinalCilsa.git
cd ProyectoFinalCilsa
Seleccionar la rama deseada:

git checkout main
git checkout backend
git checkout DB
git checkout frontend

Configurar MongoDB: Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

PORT=5000
MONGO_URI=mongodb+srv://dinolmonetto:123456dD.@monetto.iz9zzbq.mongodb.net/?retryWrites=true&w=majority
REACT_APP_API_URL=http://localhost:5000/api/tasks


Instalación
Instalar dependencias:


npm install
Iniciar el servidor backend:


npm start
El servidor estará disponible en:

Local: http://localhost:5000
Base de datos: Conexión activa a MongoDB Atlas.
Endpoints del Backend
1. Obtener todas las tareas
Método: GET
URL: /api/tasks
Descripción: Devuelve una lista de todas las tareas almacenadas.
2. Crear una nueva tarea
Método: POST
URL: /api/tasks
Body:
json

{
  "name": "Hacer ejercicio",
  "description": "Ir al gimnasio por la tarde"
}
3. Actualizar una tarea
Método: PUT
URL: /api/tasks/:id
Body:
json

{
  "name": "Leer un libro",
  "description": "Leer al menos 30 páginas",
  "status": "completed"
}
4. Eliminar una tarea
Método: DELETE
URL: /api/tasks/:id
Pruebas con Postman
Configuración:
Descarga Postman: Postman.
Crea una colección en Postman para los siguientes métodos:
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
Ejemplo de Prueba:
Realiza una solicitud POST para crear una tarea.
Verifica que puedes obtenerla con una solicitud GET.
Actualiza la tarea con PUT.
Elimina la tarea con DELETE.




## Pruebas

### 1. Verificar Conexión a la Base de Datos
- Asegúrate de que el archivo `.env` contenga la conexión correcta.
- Ejecuta `npm start` y confirma que el mensaje de conexión aparece en la consola.

### 2. Pruebas de API con Postman
- Prueba los endpoints CRUD utilizando los datos de ejemplo proporcionados.
- Confirma los resultados esperados para cada operación.

### 3. Flujo Completo
- Crea tareas, obtén la lista, actualiza estados y elimina tareas.
- Asegúrate de que el sistema maneje correctamente los errores.


