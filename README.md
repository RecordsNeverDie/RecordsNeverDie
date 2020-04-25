# RecordsNeverDie

## Referencia de endpoints

| Id | Method | Path | Description |
|:----:|:-------:|:-----:|:-----------:|
| 1 | GET | / | Muestra la página principal. |
| 2 | GET | /signup | Muestra el formulario de registro de usuarios. |
| 3 | POST | /signup | Guarda el nuevo usuario en la base de datos. |
| 4 | GET | /login | Muestra el formularo de inicio sesión. |
| 5 | POST | /login | Muestra la vista del perfil. |
| 6 | GET | /logout | Muestra la vista de la página principal. |
| 7 | GET | /profile | Muestra la vista del perfil. |
| 8 | GET | /shop | Muestra la vista de la tienda con todos los productos |
| 9 | GET | /shop/new | Muestra el formulario para añadir un nuevo producto. |
| 10 | POST | /shop/new | Guarda el nuevo producto en la base de datos. |
| 11 | GET | /shop/edit?id=xxx | Muestra el formulario para editar un producto. |
| 12 | POST | /shop/edit?id=xxx | Guarda los cambios realizados en la base de datos. |
| 13 | GET  | /shop/details/:id | Muestra los detalles de un producto. |
| 14 | GET | /shop/delete?id=xxx | Elimina un producto de la base de datos. |
| 15 | GET | /shop/details/:id/buy | Muestra la vista para completar la compra. |
| 16 | GET | /shop/my-products/:id | Muestra el listado de productos creados por el propio usuario. |
| 17 | GET | /places | Muestra la vista de los lugares con su ubiación en el mapa. |
| 18 | GET | /places/new |  Muestra el formulario para añadir un nuevo lugar. |
| 19 | POST | /places/new | Guarda el nuevo lugar en la base de datos. |
| 20 | GET | /places/edit?id=xxx | Muestra el formulario para editar un lugar. |
| 21 | POST | /places/edit?id=xxx | Guarda los cambios realizados en la base de datos. |
| 22 | GET | /places/delete?id=xxx | Elimina un lugar de la base de datos. |
| 23 | GET | /places/details/:id | Muestra los detalles los lugares. |
| 24 | GET | /music | Muestra la vista para buscar artistas.  |
| 25 | GET | /music/artist-search | Muestra el listado de artistas coincidentes. |
| 26 | GET | /music/albums/:artistId | Muestra el listado de albums del artista. |
| 27 | GET | /music/tracks/:albumId | Muestra el listado de canciones el album seleccionado. |
