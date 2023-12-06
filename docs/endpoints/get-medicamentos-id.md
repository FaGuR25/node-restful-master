# Endpoint: `GET /medicamentos/{id}`

Permite obtener información detallada sobre un medicamento específico mediante su identificador único.


## Parámetros de URL
- `{id}` (obligatorio): Identificador único del medicamento que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /medicamento/123
POST /medicamento
PUT /medicamento/123
PATCH /medicamento/123
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_medicamentos": 123,
  "nombre": "losartan",
  "dosis": "dos al dia"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el medicamento."
  }
  ```

- Código 400 The client request is not valid or is corrupt
  ```json
  {
    "errno": 400,
    "error": "Bad RequestError: insert into `medicamentos` (`nombres`) values ('losar') - Unknown column 'nombres' in 'field list'"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.
- Al usar el ejemplo en el entorno de Postman se debe de tener un especial cuidado con los nombres de los campos y el ID ya que esos son los errores más comunes que se pueden tener
- La base de datos fue creada en DBeaver (Comento por casulidad).