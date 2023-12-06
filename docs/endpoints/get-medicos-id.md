# Endpoint: `GET /medicos/{id}`

Permite obtener información detallada sobre un medico específico mediante su identificador único.


## Parámetros de URL
- `{id}` (obligatorio): Identificador único del medico que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /medico/123
POST /medico
PUT /medico/123
PATCH /medico/123
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
    "error": "not_found",
    "error_description": "No se encontró al medico."
  }
  ```

- Código 400 The client request is not valid or is corrupt
  ```json
  {
    "errno": 400,
    "error": "Bad RequestError: insert into `medicos` (`nombre`) values ('juan') - Unknown column 'nombre' in 'field list'"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.
- Al usar el ejemplo en el entorno de Postman se debe de tener un especial cuidado con los nombres de los campos y el ID ya que esos son los errores más comunes que se pueden tener
- La base de datos fue creada en DBeaver (Comento por casulidad).