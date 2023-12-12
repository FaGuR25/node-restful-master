# Endpoint: `GET/medicos`

Permite obtener información detallada sobre un medico específico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del medico que se desea recuperar.

## Ejemplo de Solicitud `GET`

Permite visualizar un medico.
```http
GET/medicos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_medico": 1,
  "nombres": "juan",
  "apellidos": "perez",
  "especialidad": "medico general"
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

Permite reemplazar un dato de un medico.
```http
PATCH/medicos/1

Content-Type: application/json
{
    "nombres":"omar juan"
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

Permite agregar un medico.
```http
POST/medicos

Content-Type: application/json
{
  "nombres": "oscar",
  "apellidos": "alameda",
  "especialidad": "medico general"
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

- Código 400 Bad Request
  ```json
  {
    "errno": 400,
    "error": "Bad Request"
  }
  ```


## Ejemplo de Solicitud `PUT`
Permite reemplazar un medico.

```http
PUT/medicos

Content-Type: application/json
{
  "nombres": "jose",
  "apellidos": "perez",
  "especialidad": "medico general"
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
- La base de datos fue creada en DBeaver (Comento por casualidad).


