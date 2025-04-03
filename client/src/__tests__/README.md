# Tests - Mercado Libre Challenge

## Test Structure

```
__tests__/
  ├── useFetch.test.ts       # Tests for the useFetch hook
  ├── ProductListPage.test.tsx  # Tests for the product list page component
  ├── ProductItem.test.tsx   # Tests for the product item component
  └── README.md              # This file
```

## Key Tests

1. **useFetch Hook**: Tests API requests and caching functionality
2. **ProductListPage**: Tests loading states and product list rendering
3. **ProductItem**: Tests product information display and shipping icon

## Running Tests

```bash
# Run all tests
npm test

# Run a specific test
npm test -- src/__tests__/useFetch.test.ts

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## Test Implementation

- Framework: **Vitest**
- Libraries: **@testing-library/react**, **@testing-library/jest-dom**
- Patterns: Mocking, Router simulation, Accessibility checks, State verification
