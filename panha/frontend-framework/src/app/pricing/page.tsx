import { Container } from '@/components/layout'
import { Button, Card, CardHeader, CardTitle, CardContent } from '@/components/ui'
import Link from 'next/link'

export default function PricingPage() {
  const features = [
    'All 12+ Learning Lessons',
    '6 Different Categories',
    'Beginner to Advanced Content',
    'No Time Limits',
    'No Hidden Fees',
    'Learn at Your Own Pace',
    'Markdown-Formatted Content',
    'Mobile-Friendly Design',
    'No Ads or Distractions',
    'Community Support',
  ]

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-5xl font-bold text-black mb-4">
          100% Free. Forever.
        </h1>
        <p className="text-xl text-black max-w-2xl mx-auto">
          No credit card required. No hidden fees. Just pure learning.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="border-4 border-primary-500 shadow-2xl">
          <CardHeader className="text-center bg-gradient-to-r from-primary-50 to-primary-100">
            <div className="text-6xl mb-4">💯</div>
            <CardTitle className="text-4xl mb-4">Free Plan</CardTitle>
            <div className="mb-4">
              <span className="text-6xl font-bold text-primary-600">$0</span>
              <span className="text-2xl text-black"> / forever</span>
            </div>
            <p className="text-lg text-black">
              Access everything. Pay nothing. Ever.
            </p>
          </CardHeader>
          <CardContent className="pt-8">
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-black">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/login">
              <Button className="w-full" size="lg">
                Start Learning Now - It's Free! 🚀
              </Button>
            </Link>
            <p className="text-center text-sm text-black mt-4">
              No registration required - just enter your name!
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          <details className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary-300 transition-colors">
            <summary className="font-semibold text-lg cursor-pointer">
              Is this really free?
            </summary>
            <p className="text-black mt-3">
              Yes! 100% free, forever. No credit card required, no hidden fees, no premium upgrades.
              All lessons are available to everyone at no cost.
            </p>
          </details>
          <details className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary-300 transition-colors">
            <summary className="font-semibold text-lg cursor-pointer">
              Do I need to create an account?
            </summary>
            <p className="text-black mt-3">
              Nope! Just enter your name and start learning. We don't collect emails,
              passwords, or any personal information. It's that simple.
            </p>
          </details>
          <details className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary-300 transition-colors">
            <summary className="font-semibold text-lg cursor-pointer">
              What topics can I learn?
            </summary>
            <p className="text-black mt-3">
              We offer lessons in Web Development (HTML, CSS, JavaScript), React, Backend Development
              (Node.js, Express), UI/UX Design, and DevOps (Git & GitHub). More content coming soon!
            </p>
          </details>
          <details className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary-300 transition-colors">
            <summary className="font-semibold text-lg cursor-pointer">
              Who created this platform?
            </summary>
            <p className="text-black mt-3">
              This platform was created by <span className="font-semibold text-primary-600">Pheng Sopanha</span>
              {' '}with the mission to make quality education accessible to everyone, completely free.
            </p>
          </details>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <CardContent className="py-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of learners today. No barriers, just knowledge.
            </p>
            <Link href="/login">
              <Button variant="outline" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Started Free →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}