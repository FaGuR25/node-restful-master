# API RESTful con Node.js

Proyecto de demostración para clases de desarrollo de APIs utilizando Node.js,
con implementación en contenedores de Docker.

## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Descripción del proyecto](#descripción-del-proyecto)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/francerz/node-restful.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd node-restful
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```
4. Ejecutar el siguiente comando para bajar los contenedores:

    ```sh
    docker-compose down
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.
    > Si se encuentra con un problema primero pueden usar el comando para bajar el contenedor.

4. La API estará disponible en `http://localhost:3100`.

## Descripción del proyecto

Mi proyecto será desarrollada en una aplicación en Android en el entorno de desarrollo de Android Studio, trata principalmente como un recordatorio para que los usuarios puedan administrar y organizar sus enfermedades, citas medicas notas etc. Y si, esta app está dedicada completamente al entorno de la salud digital más en especifico de enfermedes tipo cronicas.  

En esta actividad lo que hicimos fue iniciar con las entidades y tablas de estas para poder hacer un trabajo de un CRUD 

- GET
- PUT
- POST
- PATCH

En mi caso hice el uso de cuatro tablas relacionadas a lo que vendrá en mi app claro estas pueden cambiar pero por el momento tengo especificadas estas.



## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)