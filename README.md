# React Component Library

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Storybook](https://img.shields.io/badge/Storybook-7.0-FF4785?style=flat-square&logo=storybook)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A modern, accessible React UI component library built with TypeScript, featuring comprehensive documentation via Storybook and full test coverage.

## Features

- **Accessible** - WCAG 2.1 AA compliant components
- **TypeScript** - Full type safety and IntelliSense support
- **Themeable** - CSS variables for easy customization
- **Dark Mode** - Built-in dark mode support
- **Tree Shakeable** - Only import what you need
- **Well Tested** - Jest + React Testing Library
- **Documented** - Interactive Storybook documentation

## Installation

```bash
npm install @marwantech/react-component-library
```

## Quick Start

```tsx
import { Button, Card, Input } from '@marwantech/react-component-library';

function App() {
  return (
    <Card>
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Versatile button with multiple variants and sizes |
| `Input` | Accessible form input with validation states |
| `Card` | Flexible container component |
| `Modal` | Accessible modal dialog |
| `Badge` | Status indicators and labels |
| `Spinner` | Loading indicator |
| `Alert` | Notification messages |
| `Avatar` | User profile images |

## Documentation

Run Storybook locally to explore all components:

```bash
npm run storybook
```

## Theming

Customize the library using CSS variables:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #6b7280;
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
}
```

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Color contrast compliance

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm run test

# Build library
npm run build

# Lint code
npm run lint
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Card/
│   │   ├── Modal/
│   │   └── Badge/
│   ├── hooks/
│   │   └── useClickOutside.ts
│   ├── utils/
│   │   └── cn.ts
│   └── index.ts
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-component`)
3. Add tests for your changes
4. Ensure all tests pass (`npm run test`)
5. Commit your changes (`git commit -m 'Add new component'`)
6. Push to the branch (`git push origin feature/new-component`)
7. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with care by [Marwan Saleh](https://github.com/marwantech91)
