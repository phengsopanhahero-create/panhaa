import { Container } from '@/components/layout'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'

export default function FeaturesPage() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with performance in mind. Optimized for speed and efficiency.',
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Industry-standard security practices built into every component.',
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Works seamlessly across all devices and screen sizes.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, clean interface that users love.',
    },
    {
      icon: '🔌',
      title: 'Easy Integration',
      description: 'Connect with your favorite tools and services effortlessly.',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Gain insights with powerful analytics and reporting tools.',
    },
    {
      icon: '🚀',
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise.',
    },
    {
      icon: '💡',
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and focus on what matters.',
    },
    {
      icon: '🌐',
      title: 'Global CDN',
      description: 'Fast content delivery worldwide with our global network.',
    },
  ]

  return (
    <Container className="py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-6">
            Everything You Need to Succeed
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our platform provides all the tools and features you need to build, launch,
            and scale your product.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-black text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Built for Developers</h2>
              <p className="text-black mb-6">
                Clean, well-documented APIs and comprehensive SDKs make integration a
                breeze. Get up and running in minutes with our detailed documentation
                and code examples.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>RESTful API with GraphQL support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Webhooks for real-time updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SDKs for all major languages</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-8xl">👨‍💻</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-80 flex items-center justify-center order-2 lg:order-1">
              <div className="text-8xl">📈</div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Powerful Analytics</h2>
              <p className="text-black mb-6">
                Track every metric that matters. Understand your users, measure
                performance, and make data-driven decisions with our comprehensive
                analytics dashboard.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom reports and exports</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Predictive insights with AI</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Enterprise Ready</h2>
              <p className="text-black mb-6">
                Security, compliance, and reliability that enterprise teams demand.
                SOC 2 certified with 99.99% uptime SLA.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SSO and SAML support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced user permissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated support team</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-8xl">🏢</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}