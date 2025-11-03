# Frontend Framework - Complete Feature List

## Project Overview

A production-ready Next.js 15 frontend framework with TypeScript, Tailwind CSS, and comprehensive tooling.

## Tech Stack

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.16** - Utility-first CSS
- **Zustand 5.0.8** - State management
- **Axios 1.13.1** - HTTP client

## Project Structure

```
frontend-framework/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with Header/Footer
│   │   ├── page.tsx                  # Homepage with feature showcase
│   │   ├── about/page.tsx            # About page
│   │   ├── examples/page.tsx         # Component examples page
│   │   └── api/hello/route.ts        # Example API route
│   │
│   ├── components/
│   │   ├── ui/                       # Reusable UI components
│   │   │   ├── Button.tsx            # Button with variants & loading states
│   │   │   ├── Input.tsx             # Input with labels & error handling
│   │   │   ├── Card.tsx              # Card with header/content/footer
│   │   │   ├── Modal.tsx             # Modal with backdrop & animations
│   │   │   └── index.ts              # Component exports
│   │   │
│   │   └── layout/                   # Layout components
│   │       ├── Header.tsx            # Navigation header with theme toggle
│   │       ├── Footer.tsx            # Site footer with links
│   │       ├── Container.tsx         # Responsive container
│   │       └── index.ts              # Layout exports
│   │
│   ├── lib/
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useLocalStorage.ts    # LocalStorage state management
│   │   │   ├── useDebounce.ts        # Value debouncing
│   │   │   ├── useMediaQuery.ts      # Responsive breakpoint detection
│   │   │   └── index.ts              # Hook exports
│   │   │
│   │   ├── utils/                    # Utility functions
│   │   │   ├── cn.ts                 # Tailwind class merging
│   │   │   └── index.ts              # Common utilities (debounce, throttle, etc.)
│   │   │
│   │   ├── api/                      # API client
│   │   │   ├── client.ts             # Axios client with interceptors
│   │   │   └── index.ts              # API functions & types
│   │   │
│   │   └── store/                    # State management
│   │       └── useStore.ts           # Zustand store with persistence
│   │
│   ├── styles/
│   │   └── globals.css               # Global styles & Tailwind imports
│   │
│   └── types/
│       └── index.ts                  # TypeScript type definitions
│
├── public/                            # Static assets
├── .env.local                         # Environment variables
├── .env.local.example                 # Environment template
├── .eslintrc.json                     # ESLint configuration
├── .gitignore                         # Git ignore rules
├── next.config.js                     # Next.js configuration
├── package.json                       # Dependencies & scripts
├── postcss.config.js                  # PostCSS configuration
├── tailwind.config.ts                 # Tailwind CSS configuration
├── tsconfig.json                      # TypeScript configuration
├── README.md                          # Main documentation
└── FEATURES.md                        # This file
```

## UI Components

### Button Component
- **Variants**: primary, secondary, outline, ghost, danger
- **Sizes**: sm, md, lg
- **Features**: Loading state, disabled state, full TypeScript support
- **Location**: [src/components/ui/Button.tsx](src/components/ui/Button.tsx)

### Input Component
- **Features**: Label support, error handling, all HTML input types
- **Styling**: Tailwind with focus states and validation styles
- **Location**: [src/components/ui/Input.tsx](src/components/ui/Input.tsx)

### Card Component
- **Parts**: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Use Cases**: Content organization, data display, form containers
- **Location**: [src/components/ui/Card.tsx](src/components/ui/Card.tsx)

### Modal Component
- **Features**: Backdrop, ESC key to close, click outside to close, animations
- **Accessibility**: Keyboard navigation, focus management
- **Location**: [src/components/ui/Modal.tsx](src/components/ui/Modal.tsx)

## Layout Components

### Header
- Sticky navigation bar
- Theme toggle button
- Responsive navigation menu
- Location: [src/components/layout/Header.tsx](src/components/layout/Header.tsx)

### Footer
- Multi-column layout
- Link sections (Product, Company, Legal)
- Copyright information
- Location: [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)

### Container
- Responsive max-width container
- Size variants: sm, md, lg, xl, full
- Location: [src/components/layout/Container.tsx](src/components/layout/Container.tsx)

## Custom Hooks

### useLocalStorage
- Syncs React state with localStorage
- SSR-safe
- Type-safe with generics
- Location: [src/lib/hooks/useLocalStorage.ts](src/lib/hooks/useLocalStorage.ts)

### useDebounce
- Delays value updates
- Configurable delay
- Perfect for search inputs
- Location: [src/lib/hooks/useDebounce.ts](src/lib/hooks/useDebounce.ts)

### useMediaQuery
- Responsive breakpoint detection
- Real-time updates
- CSS media query syntax
- Location: [src/lib/hooks/useMediaQuery.ts](src/lib/hooks/useMediaQuery.ts)

## State Management

### Zustand Store
- Global application state
- User authentication state
- Theme management (light/dark)
- Loading states
- DevTools integration
- Persistence to localStorage
- Location: [src/lib/store/useStore.ts](src/lib/store/useStore.ts)

## API Client

### Axios Client
- Pre-configured base URL
- Request/response interceptors
- Automatic token injection
- Error handling (401 redirects)
- Type-safe methods (GET, POST, PUT, DELETE, PATCH)
- Location: [src/lib/api/client.ts](src/lib/api/client.ts)

## Utility Functions

- **cn()** - Tailwind class merging with clsx and tailwind-merge
- **formatDate()** - Date formatting utility
- **sleep()** - Async sleep function
- **debounce()** - Function debouncing
- **throttle()** - Function throttling

Location: [src/lib/utils/index.ts](src/lib/utils/index.ts)

## Pages

### Home Page (/)
- Framework introduction
- Feature showcase cards
- Interactive component demo
- Modal example
- Location: [src/app/page.tsx](src/app/page.tsx)

### About Page (/about)
- Framework architecture overview
- Technology stack details
- Project structure explanation
- Location: [src/app/about/page.tsx](src/app/about/page.tsx)

### Examples Page (/examples)
- Button variant showcase
- Input field examples
- Custom hook demonstrations
- Interactive demos
- Location: [src/app/examples/page.tsx](src/app/examples/page.tsx)

## Configuration Files

### TypeScript (tsconfig.json)
- Strict mode enabled
- Path aliases (@/*)
- Next.js plugin integration

### Tailwind (tailwind.config.ts)
- Custom color palette (primary shades)
- Custom animations (fade-in, slide-in)
- Extended theme configuration

### Next.js (next.config.js)
- React strict mode
- Image optimization configured
- Remote patterns for images

### ESLint (.eslintrc.json)
- Next.js recommended rules
- TypeScript integration
- Warning for unused vars

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME=Frontend Framework
NODE_ENV=development
```

## NPM Scripts

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

## Key Features

✅ **TypeScript** - Full type safety across the entire application
✅ **Responsive Design** - Mobile-first approach with Tailwind
✅ **Dark Mode Ready** - Theme system with Zustand
✅ **SEO Optimized** - Next.js metadata API
✅ **Performance** - Turbopack for fast development
✅ **Type-Safe APIs** - Axios client with TypeScript
✅ **Reusable Components** - Comprehensive UI library
✅ **Custom Hooks** - Common patterns encapsulated
✅ **State Persistence** - LocalStorage integration
✅ **Developer Experience** - ESLint, TypeScript, hot reload

## Usage Examples

### Using Components
```tsx
import { Button, Input, Card, Modal } from '@/components/ui'
import { Container } from '@/components/layout'

function MyPage() {
  return (
    <Container>
      <Card>
        <Input label="Email" />
        <Button variant="primary">Submit</Button>
      </Card>
    </Container>
  )
}
```

### Using Hooks
```tsx
import { useLocalStorage, useDebounce } from '@/lib/hooks'

function SearchComponent() {
  const [search, setSearch] = useLocalStorage('search', '')
  const debouncedSearch = useDebounce(search, 500)

  // Use debouncedSearch for API calls
}
```

### Using State
```tsx
import { useStore } from '@/lib/store/useStore'

function UserProfile() {
  const { user, setUser } = useStore()

  return <div>Welcome, {user?.name}</div>
}
```

### Using API Client
```tsx
import { apiClient } from '@/lib/api'

async function fetchData() {
  const data = await apiClient.get('/endpoint')
  return data
}
```

## Getting Started

1. Install dependencies: `npm install`
2. Copy environment file: `cp .env.local.example .env.local`
3. Start dev server: `npm run dev`
4. Open http://localhost:3000

## Deployment Ready

This framework is ready to deploy to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker containers
- Any Node.js hosting

Simply run `npm run build` and deploy the `.next` folder.

## License

MIT - Use freely in your projects!