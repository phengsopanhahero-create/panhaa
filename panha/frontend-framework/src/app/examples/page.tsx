'use client'

import { useState } from 'react'
import { Container } from '@/components/layout'
import { Button, Card, CardHeader, CardTitle, CardContent, Input, LearningCard, ProgressTracker } from '@/components/ui'
import { useDebounce, useLocalStorage } from '@/lib/hooks'

export default function ExamplesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)
  const [savedValue, setSavedValue] = useLocalStorage('example-value', '')
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  // Progress tracker demo data
  const progressSteps = [
    { label: 'Complete Introduction', completed: true },
    { label: 'Learn Basic Components', completed: true },
    { label: 'Practice with Examples', completed: false, current: true },
    { label: 'Build Your First Project', completed: false },
    { label: 'Take the Final Quiz', completed: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Container className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Interactive Examples</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful, student-friendly components designed to make learning enjoyable
          </p>
        </div>

        <div className="space-y-12">
          {/* Learning Cards Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">📚 Learning Cards</h2>
            <p className="text-gray-600 mb-8">
              Beautiful, interactive cards designed specifically for educational content
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LearningCard
                icon="🎨"
                title="UI Design Basics"
                description="Learn the fundamentals of user interface design with practical examples"
                level="beginner"
                duration="2 hours"
                tags={['Design', 'UI/UX']}
                progress={75}
              />
              <LearningCard
                icon="⚛️"
                title="React Fundamentals"
                description="Master React hooks, components, and state management"
                level="intermediate"
                duration="4 hours"
                tags={['React', 'JavaScript']}
                progress={45}
              />
              <LearningCard
                icon="🚀"
                title="Advanced TypeScript"
                description="Deep dive into TypeScript generics, decorators, and advanced patterns"
                level="advanced"
                duration="6 hours"
                tags={['TypeScript', 'Advanced']}
              />
            </div>
          </section>

          {/* Progress Tracker Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">📊 Progress Tracker</h2>
            <p className="text-gray-600 mb-8">
              Help students track their learning journey with visual progress indicators
            </p>
            <div className="max-w-2xl mx-auto">
              <ProgressTracker steps={progressSteps} />
            </div>
          </section>

          {/* Buttons Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">🎯 Buttons</h2>
            <Card>
              <CardHeader>
                <CardTitle>Button Variants & Sizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button className="btn-gradient text-white">Gradient Button</Button>
                  <Button isLoading={isLoading} onClick={handleLoadingDemo}>
                    Click for Loading State
                  </Button>
                  <Button disabled>Disabled</Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Inputs Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">✏️ Input Fields</h2>
            <Card>
              <CardHeader>
                <CardTitle>Form Inputs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  label="Standard Input"
                  placeholder="Type something..."
                />
                <Input
                  label="Input with Error"
                  placeholder="This has an error"
                  error="This field is required"
                />
                <Input
                  type="email"
                  label="Email Input"
                  placeholder="email@example.com"
                />
                <Input
                  type="password"
                  label="Password Input"
                  placeholder="Enter password"
                />
              </CardContent>
            </Card>
          </section>

          {/* Hooks Demo Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">🪝 Custom Hooks Demo</h2>
            <Card>
              <CardHeader>
                <CardTitle>Interactive Hook Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-lg">useDebounce Hook</h3>
                  <Input
                    placeholder="Type to see debounced value..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="mt-3 p-4 bg-primary-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Immediate value: <strong className="text-primary-600">{searchTerm || '(empty)'}</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      Debounced value (500ms): <strong className="text-secondary-600">{debouncedSearch || '(empty)'}</strong>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-lg">useLocalStorage Hook</h3>
                  <Input
                    placeholder="Value persists in localStorage"
                    value={savedValue}
                    onChange={(e) => setSavedValue(e.target.value)}
                  />
                  <p className="mt-3 p-4 bg-accent-50 rounded-lg text-sm text-gray-700">
                    💾 This value is saved to localStorage and persists across page reloads!
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Card Variants Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">📦 Card Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Cards are perfect for organizing content into distinct, easy-to-read sections.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Cards can contain any type of content - text, forms, images, or interactive elements.
                  </p>
                  <Button variant="primary" size="sm">Take Action</Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}