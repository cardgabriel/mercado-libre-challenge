# MercadoLibre API Server

A Node.js backend service that provides API endpoints for searching MercadoLibre products and retrieving detailed product information.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Usage

### Development Mode

```bash
npm run dev
```

This will start the server in development mode using nodemon, which will automatically restart the server when file changes are detected.

### Production Mode

```bash
npm run build
npm start
```

This will compile the TypeScript code and start the server using the compiled JavaScript.

### API Endpoints

- `GET /api/items?q=:query` - Search for products with the given query term
- `GET /api/items/:id` - Get detailed information about a specific product

## Architecture & Technologies

- **Express.js**: Web framework for handling HTTP requests
- **TypeScript**: Programming language for type safety and better code organization
- **Jest**: Testing framework for unit tests
- **Axios**: HTTP client for making requests to the MercadoLibre API
- **CORS**: Middleware for enabling cross-origin resource sharing

### Project Structure

- `src/index.ts`: Main entry point, sets up Express server and routes
- `src/product.controller.ts`: Handles HTTP requests and responses
- `src/mercadoLibre.service.ts`: Contains business logic and external API calls
- `src/product.interface.ts`: TypeScript interfaces for data models
- `src/urls.ts`: Configuration for API endpoints

## Testing

Run tests with:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate test coverage report:

```bash
npm run test:coverage
```

## Design Decisions

1. **Service Layer Pattern**: Separation of concerns between controllers (handling HTTP) and services (business logic)

2. **TypeScript**: Used for type safety, better IDE support, and easier maintenance

3. **Error Handling**: Comprehensive error catching and appropriate error responses

4. **API Abstraction**: The server provides a simplified and normalized interface to the MercadoLibre API, transforming data to a consistent format for the frontend

5. **Testing Focus**: Unit tests ensure the service correctly processes data and handles errors from external APIs
