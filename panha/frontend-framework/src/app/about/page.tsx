import { Container } from '@/components/layout'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About This Framework</h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Built with Modern Technologies</CardTitle>
            <CardDescription>
              A production-ready frontend framework
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-black mb-4">
              This framework is built using the latest web technologies and best practices
              to help you build scalable, maintainable, and performant web applications.
            </p>
            <p className="text-black">
              It includes everything you need to get started with a professional-grade
              Next.js application, from UI components to state management and API integration.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Architecture</h2>
            <ul className="space-y-2 text-black">
              <li><strong>src/app/</strong> - Next.js App Router pages and layouts</li>
              <li><strong>src/components/</strong> - Reusable UI and layout components</li>
              <li><strong>src/lib/</strong> - Utilities, hooks, API client, and state management</li>
              <li><strong>src/styles/</strong> - Global styles and Tailwind configuration</li>
              <li><strong>src/types/</strong> - TypeScript type definitions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
            <ul className="space-y-2 text-black">
              <li>Server and Client Components with Next.js 15</li>
              <li>Type-safe development with TypeScript</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>Global state management with Zustand</li>
              <li>HTTP client with request/response interceptors</li>
              <li>Custom React hooks for common patterns</li>
              <li>Accessible and customizable UI components</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}