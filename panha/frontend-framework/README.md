# Frontend Framework

A comprehensive, production-ready Next.js frontend framework with TypeScript, Tailwind CSS, and a complete UI component library.

## Features

- **Next.js 15** with App Router
- **TypeScript** with strict mode for type safety
- **Tailwind CSS** for utility-first styling
- **Zustand** for state management
- **Axios** API client with interceptors
- **Custom React Hooks** (useLocalStorage, useDebounce, useMediaQuery)
- **UI Component Library** (Button, Input, Card, Modal, etc.)
- **Layout Components** (Header, Footer, Container)
- **ESLint** and TypeScript configuration
- **Responsive Design** out of the box

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd frontend-framework
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
frontend-framework/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── examples/       # Examples page
│   │   └── api/            # API routes
│   ├── components/
│   │   ├── ui/             # UI components (Button, Input, Card, Modal)
│   │   └── layout/         # Layout components (Header, Footer, Container)
│   ├── lib/
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Utility functions
│   │   ├── api/            # API client and functions
│   │   └── store/          # Zustand store
│   ├── styles/             # Global styles
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## UI Components

### Button
```tsx
import { Button } from '@/components/ui'

<Button variant="primary" size="md">Click me</Button>
```

Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`
Sizes: `sm`, `md`, `lg`

### Input
```tsx
import { Input } from '@/components/ui'

<Input
  label="Email"
  placeholder="Enter email"
  error="Error message"
/>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Modal
```tsx
import { Modal } from '@/components/ui'

<Modal isOpen={isOpen} onClose={handleClose} title="Modal Title">
  Modal content
</Modal>
```

## Custom Hooks

### useLocalStorage
```tsx
import { useLocalStorage } from '@/lib/hooks'

const [value, setValue] = useLocalStorage('key', 'default')
```

### useDebounce
```tsx
import { useDebounce } from '@/lib/hooks'

const debouncedValue = useDebounce(value, 500)
```

### useMediaQuery
```tsx
import { useMediaQuery } from '@/lib/hooks'

const isMobile = useMediaQuery('(max-width: 768px)')
```

## State Management

```tsx
import { useStore } from '@/lib/store/useStore'

function Component() {
  const { user, setUser, theme, setTheme } = useStore()
  // Use state...
}
```

## API Client

```tsx
import { apiClient } from '@/lib/api'

// GET request
const data = await apiClient.get('/endpoint')

// POST request
const result = await apiClient.post('/endpoint', { data })

// PUT, DELETE, PATCH also available
```

## Styling

This project uses Tailwind CSS with a custom configuration. The theme can be extended in `tailwind.config.ts`.

### Using the cn utility
```tsx
import { cn } from '@/lib/utils'

<div className={cn('base-class', conditional && 'conditional-class')} />
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME=Frontend Framework
NODE_ENV=development
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the application:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting platform.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this framework for your projects!

## Support

For issues and questions, please open an issue on the GitHub repository.