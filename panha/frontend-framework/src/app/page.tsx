'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const learningPaths = [
    {
      icon: '🎓',
      title: 'Beginner Friendly',
      description: 'Start your learning journey with easy-to-follow tutorials and examples',
      color: 'from-blue-400 to-blue-600',
      features: ['Step-by-step guides', 'Interactive examples', 'Visual learning']
    },
    {
      icon: '💡',
      title: 'Interactive Learning',
      description: 'Learn by doing with hands-on projects and real-time feedback',
      color: 'from-purple-400 to-purple-600',
      features: ['Live coding', 'Instant feedback', 'Practice exercises']
    },
    {
      icon: '🚀',
      title: 'Advanced Topics',
      description: 'Master complex concepts with detailed explanations and examples',
      color: 'from-green-400 to-green-600',
      features: ['Advanced patterns', 'Best practices', 'Production ready']
    },
  ]

  const features = [
    { icon: '⚡', title: 'Fast & Modern', desc: 'Built with Next.js 15 for optimal performance' },
    { icon: '🎨', title: 'Beautiful UI', desc: 'Stunning components with Tailwind CSS' },
    { icon: '📱', title: 'Fully Responsive', desc: 'Works perfectly on all devices' },
    { icon: '🔒', title: 'Type Safe', desc: 'TypeScript for better code quality' },
    { icon: '🎯', title: 'Easy to Use', desc: 'Intuitive API and clear documentation' },
    { icon: '🌈', title: 'Customizable', desc: 'Flexible theming and styling options' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <Container className="relative">
          <div className="text-center animate-fade-in">
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-6 py-2 text-sm font-medium text-primary-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                New: Student Learning Platform
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 animate-slide-up">
              <span className="gradient-text">Learn. Build. Succeed.</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Your journey to becoming a skilled developer starts here.
              Interactive lessons, beautiful UI, and everything you need to master modern web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/register">
                <Button className="btn-gradient text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                  Start Learning Free
                  <span className="ml-2">→</span>
                </Button>
              </Link>
              <Link href="/examples">
                <Button variant="outline" className="px-8 py-6 text-lg rounded-2xl border-2 border-primary-300 hover:bg-white hover:border-primary-500">
                  Explore Examples
                  <span className="ml-2">📚</span>
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-1">10k+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Free</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white/50 backdrop-blur">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're just starting out or looking to advance your skills, we have the perfect path for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="learning-card group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {path.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{path.title}</h3>
                <p className="text-gray-600 mb-6">{path.description}</p>
                <ul className="space-y-3">
                  {path.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-accent-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`mt-6 text-primary-600 font-semibold flex items-center gap-2 ${hoveredCard === index ? 'translate-x-2' : ''} transition-transform duration-300`}>
                  Start Learning
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Students <span className="gradient-text">Love Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:animate-bounce-slow transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of students already learning and building amazing projects
            </p>
            <Link href="/register">
              <Button className="bg-white text-primary-600 hover:bg-gray-50 px-10 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                Get Started Today - It's Free!
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}