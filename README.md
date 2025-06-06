# Mercado Libre Challenge

Full-stack application that allows users to search and view Mercado Libre products through a user-friendly interface developed with React and supported by an API built with Express.

[https://mercado-libre-challenge.up.railway.app/](https://mercado-libre-challenge.up.railway.app/)

> **Note:** Since the application is deployed using Railway's free tier, there may be intermittent service interruptions.

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cardgabriel/mercado-libre-challenge.git
   cd mercado-libre-challenge
   ```

2. Install all dependencies:
   ```bash
   npm run install-all
   ```

## Usage

### Development

Run client and server simultaneously:

```bash
npm run dev
```

Run only client:

```bash
npm run client
```

Run only server:

```bash
npm run server
```

### Production

Build and start:

```bash
npm run build
npm start
```

## Architecture

This project implements a product search and display platform with a clear separation between the client-facing application and the API layer that interacts with Mercado Libre services.

### Frontend

- **React + TypeScript**: Custom components to display products in list and detail views
- **Vite**: Configured for fast refresh and optimal production builds
- **React Router**: Routing for product search results (/items?search=) and detail pages (/items/:id)
- **Axios**: Custom hooks for API data fetching with loading/error states
- **Sass**: Modular CSS styling with component-scoped stylesheets
- **Testing**: Component and integration tests using Testing Library

### Backend

- **Express + TypeScript**: Lightweight API with specific endpoints for Mercado Libre product searches
- **Axios**: Middleware that transforms Mercado Libre API responses to a simplified format
- **Jest**: Mocks and fixtures to test API transformation logic
- **Service Layer Pattern**: Controller → Service architecture for proper separation of concerns

### Project Structure

- **Modular Organization**: Features divided into coherent modules (product-list, product-detail, etc.)
- **Common Components**: Shared UI elements like Loading, NotFound, Breadcrumb
- **Custom Hooks**: Reusable logic for API fetching and state management
- **Type Definitions**: Strongly typed interfaces for API responses and domain models

## Key Features

### Usability

- Intuitive interface with familiar design and clear navigation
- Complete accessibility (ARIA, keyboard navigation, image alt text)
- Visible loading states and effective error handling
- User-friendly fallback UI components for error states

### SEO

- Dynamic metadata with React Helmet
- Optimized titles, descriptions, and keywords
- Social media support (Open Graph, Twitter Cards)
- Custom metadata for product listing and detail pages

### Performance

- On-demand loading (lazy loading) of components and images
- API request caching system (TTL: 5 min)
- Resource optimization (WebP images, limited fonts)
- Optimized images and efficient API response caching

### Scalability

- Modular architecture organized by features
- Client-server separation with independent API
- TypeScript throughout the project and automated testing
- Clean API abstraction: Server transforms complex Mercado Libre API responses into a simpler format
- Consistent code organization and comprehensive type definitions

## Testing

Run all tests:

```bash
npm test
```

Client tests:

```bash
npm run test:client
```

Server tests:

```bash
npm run test:server
```

Coverage reports:

```bash
npm run test:coverage
```
