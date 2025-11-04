import Link from 'next/link'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-black mb-4">Page Not Found</h2>
        <p className="text-xl text-black mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved
          or deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-8xl">🔍</div>
      </div>
    </div>
  )
}