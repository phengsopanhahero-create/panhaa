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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-delay-1"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-delay-2"></div>
        </div>
        <Container className="relative">
          <div className="text-center animate-fade-in">
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 px-6 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="font-mono">{'<Code/>'}</span> Platform for Modern Developers
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 animate-slide-up">
              <span className="gradient-text font-mono">CODE-P</span>
              <br />
              <span className="text-white text-4xl sm:text-5xl mt-4 block">Learn. Build. Deploy.</span>
            </h1>

            <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Master programming with interactive coding lessons, real-world projects, and cutting-edge technology.
              Your journey to becoming a skilled developer starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transform hover:scale-105 transition-all font-semibold">
                  <span className="font-mono">{'<Start />'}</span> Learn Free
                </Button>
              </Link>
              <Link href="/examples">
                <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 backdrop-blur-sm">
                  <span className="font-mono">{'{ }'}</span> View Examples
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-cyan-500/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1 font-mono">50+</div>
                <div className="text-sm text-cyan-200/60">Coding Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1 font-mono">10k+</div>
                <div className="text-sm text-cyan-200/60">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1 font-mono">100%</div>
                <div className="text-sm text-cyan-200/60">Open Source</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <Container className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white font-mono">{'{ '}</span>
              <span className="gradient-text">Choose Your Path</span>
              <span className="text-white font-mono">{' }'}</span>
            </h2>
            <p className="text-xl text-cyan-100/70 max-w-2xl mx-auto">
              From beginner to expert, master coding with structured learning paths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="tech-card group cursor-pointer rounded-2xl p-8"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg tech-glow`}>
                  {path.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white font-mono">{path.title}</h3>
                <p className="text-cyan-100/70 mb-6">{path.description}</p>
                <ul className="space-y-3">
                  {path.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-cyan-200/80">
                      <span className="text-cyan-400 mr-2 font-mono">{'>'}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`mt-6 text-cyan-400 font-semibold flex items-center gap-2 font-mono ${hoveredCard === index ? 'translate-x-2' : ''} transition-transform duration-300`}>
                  <span>{'// '}</span>Start Learning
                  <span className="text-lg">→</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-900/50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <Container className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white font-mono">const </span>
              <span className="gradient-text">features</span>
              <span className="text-white font-mono"> = {'['}</span>
            </h2>
            <p className="text-xl text-cyan-100/70 max-w-2xl mx-auto">
              Built with modern tech stack for the best learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400/50 group backdrop-blur-sm circuit-pulse"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform filter drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white font-mono">{feature.title}</h3>
                <p className="text-cyan-100/60">{feature.desc}</p>
                <div className="mt-4 text-cyan-400/50 text-xs font-mono">
                  {'// Feature '}{index + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-white font-mono text-xl">{'];'}</p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-delay-1"></div>
        </div>
        <Container className="relative">
          <div className="text-center text-white">
            <div className="mb-6 inline-block">
              <span className="text-cyan-200/80 font-mono text-sm">{'/* Ready to code? */'}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-mono">
              <span className="text-white">{'function '}</span>
              <span className="text-yellow-300">startCoding</span>
              <span className="text-white">{'() {'}</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-cyan-50">
              Join thousands of developers building amazing projects with CODE-P
            </p>
            <Link href="/register">
              <Button className="bg-white text-blue-600 hover:bg-cyan-50 px-10 py-6 text-lg rounded-xl shadow-2xl shadow-black/30 hover:shadow-black/50 transform hover:scale-105 transition-all font-bold font-mono">
                <span className="mr-2">{'<>'}</span>
                Start Learning Now
                <span className="ml-2">{'</>'}</span>
              </Button>
            </Link>
            <div className="mt-8">
              <span className="text-cyan-200/80 font-mono text-sm">{'}'}</span>
            </div>
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-cyan-100/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-mono">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-mono">100% Free forever</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}