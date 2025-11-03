import Link from 'next/link'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <Container className="py-16">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
          ← Back to Blog
        </Link>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium mb-4">
            Tutorial
          </span>
          <h1 className="text-4xl font-bold mb-4">Getting Started with Next.js 15</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>By John Doe</span>
            <span>•</span>
            <span>Nov 1, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="text-6xl text-center my-12">📘</div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-6">
            Learn how to build modern web applications with the latest version of Next.js.
            This comprehensive guide will walk you through everything you need to know.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Next.js 15 brings exciting new features and improvements that make building web
            applications faster and more efficient than ever before. In this tutorial, we'll
            explore the key features and learn how to leverage them in your projects.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Improved App Router with better performance</li>
            <li>Enhanced Server Components</li>
            <li>New caching strategies</li>
            <li>Better TypeScript support</li>
            <li>Improved developer experience</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
          <p className="text-gray-700 mb-4">
            To get started with Next.js 15, you'll need to have Node.js installed on your
            machine. Then, you can create a new project using the following command:
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
            <code>npx create-next-app@latest my-app</code>
          </pre>

          <h2 className="text-2xl font-bold mt-8 mb-4">Building Your First Page</h2>
          <p className="text-gray-700 mb-4">
            With Next.js 15's App Router, creating pages is straightforward. Simply create
            a new file in the app directory, and Next.js will automatically handle the
            routing for you.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
            <code>{`export default function Page() {
  return <h1>Hello Next.js 15!</h1>
}`}</code>
          </pre>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-4">
            Next.js 15 is a powerful framework that makes building modern web applications
            a breeze. With its improved performance, better developer experience, and
            powerful features, it's the perfect choice for your next project.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600">
              JD
            </div>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">
                Full-stack developer and technical writer passionate about web technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Button variant="outline">← Previous Post</Button>
          <Button variant="outline">Next Post →</Button>
        </div>
      </article>
    </Container>
  )
}