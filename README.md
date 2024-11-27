# Proyecto de Mocking

## Rutas

### GET /api/mocks/mockingpets
Genera 50 mascotas de prueba.

### GET /api/mocks/mockingusers
Genera 50 usuarios de prueba.

### POST /api/mocks/generateData
Genera usuarios y mascotas basándose en los parámetros recibidos.
- Parámetros:
  - `users`: Número de usuarios a generar.
  - `pets`: Número de mascotas a generar.

### GET /api/mocks/users
Consulta los usuarios generados.

### GET /api/mocks/pets
Consulta las mascotas generadas.

## Instalación

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Configurar la URL de MongoDB en el archivo principal.
4. Ejecutar `npm start` para iniciar el servidor.
