# Endpoint: `GET/medicamentos`

Permite obtener información detallada sobre un medicamento específico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del medicamento que se desea recuperar.

## Ejemplo de Solicitud `GET`

Permite visualizar un medicamento.
```http
GET/medicamentos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_medicamentos": 1,
  "nombre": "losartan",
  "dosis": "dos al dia"
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

Permite reemplazar un dato de un medicamento.
```http
PATCH/medicamentos/1

Content-Type: application/json
{
    "nombre": "losartano"
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

Permite agregar un medicamento.
```http
POST/medicamento

Content-Type: application/json
{
  "nombre": "losartan",
  "dosis": "dos al dia"
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
Permite reemplazar un medicamento.

```http
PUT/medicamento

Content-Type: application/json
{
  "nombre": "metformina",
  "dosis": "una al dia"
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


