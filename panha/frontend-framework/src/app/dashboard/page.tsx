'use client'

import { useStore } from '@/lib/store/useStore'
import { Container } from '@/components/layout'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { lessonCategories, getAllLessons, getLessonsByCategory } from '@/lib/data/lessons'

export default function DashboardPage() {
  const { user } = useStore()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) return null

  const allLessons = getAllLessons()
  const displayLessons = selectedCategory
    ? getLessonsByCategory(selectedCategory)
    : allLessons

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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Welcome, {user.name}! 🎓
        </h1>
        <p className="text-lg text-black">
          Start learning today - all lessons are completely free!
        </p>
        <p className="text-sm text-black mt-2">
          Owner: <span className="font-semibold text-primary-600">Pheng Sopanha</span>
        </p>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">📚</div>
              <div>
                <p className="text-3xl font-bold text-black">{allLessons.length}</p>
                <p className="text-sm text-black font-medium">Total Lessons</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🎯</div>
              <div>
                <p className="text-3xl font-bold text-black">{lessonCategories.length}</p>
                <p className="text-sm text-black font-medium">Categories</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">💯</div>
              <div>
                <p className="text-3xl font-bold text-black">FREE</p>
                <p className="text-sm text-black font-medium">No Payment Required</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-4">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            All Lessons
          </button>
          {lessonCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Lessons Grid */}
      <div>
        <h2 className="text-2xl font-bold text-black mb-4">
          {selectedCategory
            ? lessonCategories.find((c) => c.id === selectedCategory)?.name
            : 'All Lessons'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayLessons.map((lesson) => (
            <Link key={lesson.id} href={`/lessons/${lesson.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-4xl">{lesson.image}</div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(
                        lesson.difficulty
                      )}`}
                    >
                      {lesson.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{lesson.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {lesson.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-black font-medium">
                    <span>⏱️ {lesson.duration}</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs text-black">
                      {lesson.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {lesson.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-primary-50 text-primary-800 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Message */}
      <Card className="mt-8 bg-gradient-to-r from-primary-50 to-primary-100">
        <CardContent className="py-8 text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-black mb-2">
            Ready to Start Learning?
          </h3>
          <p className="text-black mb-4 font-medium">
            Click on any lesson above to begin your learning journey. All content is free forever!
          </p>
          <p className="text-sm text-black font-medium">
            Platform created by <span className="font-semibold">Pheng Sopanha</span>
          </p>
        </CardContent>
      </Card>
    </Container>
  )
}