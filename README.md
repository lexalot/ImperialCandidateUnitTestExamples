# Interview Test Project Setup

## Overview

This project serves as a platform for evaluating unit testing skills. It's built using modern web technologies including Vite, React, Tailwind CSS, and TypeScript. The setup provides a clean slate for you to demonstrate your testing abilities on a real-world application.

## Project Structure

```
project-root/
├── src/
│   ├── components/
│   │   └── component.tsx
│   │   └── component.test.tsx
│   │   └── ...
│   └── index.tsx
├── public/
│   └── ...
├── vite.config.ts
└── package.json
```

## Setup Instructions

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at <http://localhost:5173>.

```bash
pnpm run dev
```

### Lint

```bash
pnpm run lint
```

### Typecheck

```bash
pnpm run typecheck
```

### Build

```bash
pnpm run build
```

### Test

```bash
pnpm run test
```

View and interact with your tests via UI.

```bash
pnpm run test:ui
```

## Additional Notes

- Tailwind CSS is integrated for rapid UI development.
- TypeScript ensures type safety throughout the project.
- Vitest is used as the testing framework, replacing Jest.
- React Testing Library is utilized for component testing.
- JSDOM is set up for running tests in an environment similar to a web browser.
