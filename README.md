<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar el repositario
2. Ejecutar

```
npm install
```
3. Tener Nest CLI instalado
```
npm install -g @nest/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar el Archivo __.env.template__ y renombar la copia a ___.env__

6. Llenar las variable de entorno definidos en el ``.env``

7. Ejecutar la aplicacion en dev:
``````
npm  install star:dev
``````

8. Reconstruir la base de datos con la semilla
``````
localhost:3000/api/v2/seed
``````
## Stack usado
 * MongoDB
 * Nest