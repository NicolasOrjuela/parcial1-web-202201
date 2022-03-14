# User chart repository

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio del fork creado

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

Agregue aquí al documentación del endpoint elaborado.

Se recibe por parametro el nombre de usuario y se hace un get a la url 'localhost:3000/api/users/nombredeusuario', para luego obtener la informacion de las 2 apis (amigos y pistas), de esta informacion se filtra unicamente la del usuario solicitado y se crea un objeto usuario con la informacion solicitada. Finalmente se renderiza la informacion del objeto usuario creado. Si el nombre de usuario es nulo o no existe en la base de datos se envia un mensaje de error y no se renderiza nada.
