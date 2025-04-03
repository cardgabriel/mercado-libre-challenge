# Mercado Libre Challenge

Este proyecto incluye una aplicación full stack con un cliente React y un servidor Express.

## Instalación

Para instalar todas las dependencias del proyecto (cliente y servidor):

```bash
npm run install-all
```

## Desarrollo

Para ejecutar el cliente y el servidor en modo desarrollo:

```bash
npm run dev
```

Para ejecutar solo el cliente:

```bash
npm run client
```

Para ejecutar solo el servidor:

```bash
npm run server
```

## Construcción

Para construir el cliente y el servidor:

```bash
npm run build
```

## Tests

### Ejecutar todos los tests

Para ejecutar todos los tests del proyecto (cliente y servidor):

```bash
npm test
```

### Ejecutar tests específicos

Tests del cliente:

```bash
npm run test:client
```

Tests del servidor:

```bash
npm run test:server
```

Tests críticos (componentes principales del cliente):

```bash
npm run test:critical
```

### Cobertura de tests

Para generar informes de cobertura de tests:

```bash
npm run test:coverage
```

## Estructura del Proyecto

- `/client`: Aplicación frontend React
- `/server`: API backend Express

## Tests Críticos

Los tests críticos comprueban la funcionalidad de:

1. **useFetch**: El hook principal para realizar peticiones a la API
2. **ProductListPage**: Componente que muestra la lista de productos
3. **ProductItem**: Componente que muestra cada producto individual

Estos componentes son fundamentales para el funcionamiento de la aplicación y garantizan que las funcionalidades principales funcionan correctamente.
