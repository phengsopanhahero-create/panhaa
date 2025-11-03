import { Container } from '@/components/layout'
import { Button, Card, CardHeader, CardTitle, CardContent } from '@/components/ui'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        '10 Projects',
        '5 GB Storage',
        'Basic Support',
        'Community Access',
        'Monthly Updates',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Best for growing teams',
      features: [
        'Unlimited Projects',
        '100 GB Storage',
        'Priority Support',
        'Advanced Analytics',
        'Custom Integrations',
        'API Access',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited Storage',
        '24/7 Phone Support',
        'Dedicated Account Manager',
        'Custom Contracts',
        'SLA Guarantee',
      ],
      highlighted: false,
    },
  ]

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              'relative',
              plan.highlighted && 'border-2 border-primary-500 shadow-xl scale-105'
            )}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          <details className="bg-white p-4 rounded-lg border">
            <summary className="font-medium cursor-pointer">
              Can I change plans later?
            </summary>
            <p className="text-gray-600 mt-2 text-sm">
              Yes! You can upgrade or downgrade your plan at any time. Changes will be
              reflected in your next billing cycle.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg border">
            <summary className="font-medium cursor-pointer">
              What payment methods do you accept?
            </summary>
            <p className="text-gray-600 mt-2 text-sm">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise
              plans.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg border">
            <summary className="font-medium cursor-pointer">
              Is there a discount for annual billing?
            </summary>
            <p className="text-gray-600 mt-2 text-sm">
              Yes! Save 20% when you pay annually. Contact our sales team for more
              details.
            </p>
          </details>
        </div>
      </div>
    </Container>
  )
}

// Import cn utility at the top
import { cn } from '@/lib/utils'