'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useStore } from '@/lib/store/useStore'
import { Container } from '@/components/layout'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@/components/ui'
import { getLessonById, Lesson } from '@/lib/data/lessons'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default function LessonPage() {
  const { user } = useStore()
  const router = useRouter()
  const params = useParams()
  const [lesson, setLesson] = useState<Lesson | null>(null)

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }

    const lessonId = params.id as string
    const foundLesson = getLessonById(lessonId)

    if (!foundLesson) {
      router.push('/dashboard')
      return
    }

    setLesson(foundLesson)
  }, [user, router, params.id])

  if (!user || !lesson) return null

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Container className="py-8">
      {/* Back Button */}
      <Link href="/dashboard">
        <Button variant="outline" className="mb-6">
          ← Back to Dashboard
        </Button>
      </Link>

      {/* Lesson Header */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start gap-4 mb-4">
            <div className="text-6xl">{lesson.image}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(
                    lesson.difficulty
                  )}`}
                >
                  {lesson.difficulty}
                </span>
                <span className="text-sm text-black">⏱️ {lesson.duration}</span>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {lesson.category}
                </span>
              </div>
              <CardTitle className="text-3xl mb-2">{lesson.title}</CardTitle>
              <CardDescription className="text-lg">
                {lesson.description}
              </CardDescription>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {lesson.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 bg-primary-50 text-primary-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardHeader>
      </Card>

      {/* Lesson Content */}
      <Card>
        <CardContent className="pt-6">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ ...props }) => (
                  <h1 className="text-3xl font-bold text-black mt-8 mb-4" {...props} />
                ),
                h2: ({ ...props }) => (
                  <h2 className="text-2xl font-bold text-black mt-6 mb-3" {...props} />
                ),
                h3: ({ ...props }) => (
                  <h3 className="text-xl font-bold text-black mt-4 mb-2" {...props} />
                ),
                p: ({ ...props }) => (
                  <p className="text-black leading-relaxed mb-4" {...props} />
                ),
                ul: ({ ...props }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
                ),
                ol: ({ ...props }) => (
                  <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
                ),
                li: ({ ...props }) => (
                  <li className="text-black ml-4" {...props} />
                ),
                code: ({ className, children, ...props }) => {
                  const isInline = !className
                  if (isInline) {
                    return (
                      <code
                        className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono"
                        {...props}
                      >
                        {children}
                      </code>
                    )
                  }
                  return (
                    <code
                      className={`block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm ${className}`}
                      {...props}
                    >
                      {children}
                    </code>
                  )
                },
                pre: ({ children, ...props }) => (
                  <pre className="mb-4 overflow-x-auto" {...props}>
                    {children}
                  </pre>
                ),
                blockquote: ({ ...props }) => (
                  <blockquote
                    className="border-l-4 border-primary-500 pl-4 italic text-black my-4"
                    {...props}
                  />
                ),
                a: ({ ...props }) => (
                  <a
                    className="text-primary-600 hover:text-primary-700 underline"
                    {...props}
                  />
                ),
                strong: ({ ...props }) => (
                  <strong className="font-bold text-black" {...props} />
                ),
              }}
            >
              {lesson.content}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Footer */}
      <Card className="mt-6 bg-gradient-to-r from-primary-50 to-primary-100">
        <CardContent className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-black">Completed this lesson?</h3>
              <p className="text-sm text-black">
                Head back to the dashboard to continue learning!
              </p>
            </div>
            <Link href="/dashboard">
              <Button size="lg">
                Back to Dashboard →
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Owner Credit */}
      <div className="text-center mt-6 text-sm text-black">
        Platform created by <span className="font-semibold text-primary-600">Pheng Sopanha</span>
      </div>
    </Container>
  )
}