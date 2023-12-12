# Endpoint: `GET/usuarios`

Permite obtener información detallada sobre un usuario específico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud `GET`

Permite visualizar un usuario.
```http
GET/usuario/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuarios": 1,
  "nombres": "jose",
  "apellidos": "perez",
  "fecha_nacimiento": "2000-05-12"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "Not Found"
  } 
  ```

- Código 500 Internal Server Error
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para   
    procesar la solicitud"
  }
  ``` 

## Ejemplo de Solicitud `PATCH`

Permite reemplazar un dato de un usuario.
```http
PATCH/usuario/1

Content-Type: application/json
{
    "nombres":"jose luis"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Successfull partial update"
}
```

## Respuestas de Errores Posibles

- Código 400 Bad Request
  ```json
  {
    "errno": 400,
    "error": "Bad Request"
  }
  ```

- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "Not Found"
  } 
  ```


## Ejemplo de Solicitud `POST`

Permite agregar un usuario.
```http
POST/usuarios

Content-Type: application/json
{
  "nombres": "manolo",
  "apellidos": "paz",
  "fecha_nacimiento": "1980-05-14"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Created"
}
```

## Respuestas de Errores Posibles

  Código 400 Bad Request
  ```json
  {
    "errno": 400,
    "error": "Bad Request"
  }
  ```


## Ejemplo de Solicitud `PUT`
Permite reemplazar un usuario.

```http
PUT/usuarios

Content-Type: application/json
{
  "nombres": "jose",
  "apellidos": "perez",
  "fecha_nacimiento": "2000-05-12"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Updated successfully"
}
```

## Respuestas de Errores Posibles

- Código 400 Bad Request
  ```json
  {
    "errno": 400,
    "error": "Bad Request"
  }
  ```

- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "Not Found"
  } 
  ```



## Notas Adicionales


- Al usar el ejemplo en el entorno de Postman se debe de tener un especial cuidado con los nombres de los campos y el ID ya que esos son los errores más comunes que se pueden tener.
- La base de datos fue creada en DBeaver (Comento por casulidad).