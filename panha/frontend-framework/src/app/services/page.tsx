import { Container } from '@/components/layout'
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'

export default function ServicesPage() {
  const services = [
    {
      icon: '🎯',
      title: 'Strategy & Consulting',
      description: 'Expert guidance to define your digital strategy and roadmap.',
      features: [
        'Business Analysis',
        'Technology Consulting',
        'Digital Transformation',
        'Roadmap Planning',
      ],
      price: 'Custom',
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build modern, scalable web applications with cutting-edge technology.',
      features: [
        'React & Next.js',
        'Full-Stack Development',
        'Progressive Web Apps',
        'API Development',
      ],
      price: 'Starting at $5,000',
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: [
        'React Native',
        'iOS Development',
        'Android Development',
        'App Store Optimization',
      ],
      price: 'Starting at $10,000',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Create beautiful, user-friendly interfaces that users love.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
      ],
      price: 'Starting at $3,000',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Deploy and manage your applications on cloud infrastructure.',
      features: [
        'AWS & Azure',
        'DevOps & CI/CD',
        'Infrastructure as Code',
        'Monitoring & Scaling',
      ],
      price: 'Starting at $2,000/mo',
    },
    {
      icon: '🔍',
      title: 'SEO & Marketing',
      description: 'Improve your online visibility and drive more traffic.',
      features: [
        'Search Engine Optimization',
        'Content Strategy',
        'Analytics & Reporting',
        'Conversion Optimization',
      ],
      price: 'Starting at $1,500/mo',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Discovery',
      description: 'We learn about your business, goals, and challenges.',
    },
    {
      step: '2',
      title: 'Planning',
      description: 'We create a detailed plan and timeline for your project.',
    },
    {
      step: '3',
      title: 'Design',
      description: 'We design beautiful interfaces that match your brand.',
    },
    {
      step: '4',
      title: 'Development',
      description: 'We build your solution using best practices and modern tools.',
    },
    {
      step: '5',
      title: 'Testing',
      description: 'We rigorously test to ensure quality and performance.',
    },
    {
      step: '6',
      title: 'Launch',
      description: 'We deploy your solution and provide ongoing support.',
    },
  ]

  return (
    <Container className="py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to launch, we provide end-to-end solutions to bring your
            digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-semibold text-primary-600 mb-4">
                  {service.price}
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <CardContent className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary-600">
                View Portfolio
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-4">
                    "Excellent service and professional team. They delivered exactly what we
                    needed on time and within budget."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600">
                      {i}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Client Name</p>
                      <p className="text-xs text-gray-500">Company Name</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}