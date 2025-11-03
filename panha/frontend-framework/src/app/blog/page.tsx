'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout'
import { Card, CardContent } from '@/components/ui'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 15',
      excerpt: 'Learn how to build modern web applications with the latest version of Next.js.',
      author: 'John Doe',
      date: 'Nov 1, 2025',
      category: 'Tutorial',
      readTime: '5 min read',
      image: '🚀',
    },
    {
      id: 2,
      title: 'Mastering TypeScript in 2025',
      excerpt: 'Essential TypeScript patterns and best practices for modern development.',
      author: 'Jane Smith',
      date: 'Oct 28, 2025',
      category: 'Development',
      readTime: '8 min read',
      image: '💻',
    },
    {
      id: 3,
      title: 'Building Scalable React Applications',
      excerpt: 'Architecture patterns and techniques for large-scale React projects.',
      author: 'Mike Johnson',
      date: 'Oct 25, 2025',
      category: 'Architecture',
      readTime: '10 min read',
      image: '⚛️',
    },
    {
      id: 4,
      title: 'State Management with Zustand',
      excerpt: 'A comprehensive guide to managing state in React with Zustand.',
      author: 'Sarah Williams',
      date: 'Oct 20, 2025',
      category: 'Tutorial',
      readTime: '6 min read',
      image: '🗄️',
    },
    {
      id: 5,
      title: 'Tailwind CSS Best Practices',
      excerpt: 'Tips and tricks for writing maintainable Tailwind CSS code.',
      author: 'David Brown',
      date: 'Oct 15, 2025',
      category: 'Design',
      readTime: '7 min read',
      image: '🎨',
    },
    {
      id: 6,
      title: 'API Design Principles',
      excerpt: 'Creating robust and developer-friendly REST APIs.',
      author: 'Emily Davis',
      date: 'Oct 10, 2025',
      category: 'Backend',
      readTime: '9 min read',
      image: '🔌',
    },
  ]

  const categories = ['All', 'Tutorial', 'Development', 'Architecture', 'Design', 'Backend']

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  return (
    <Container className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Thoughts, tutorials, and insights from our team
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 hover:bg-primary-100 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4 text-center">{post.image}</div>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">{post.date}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <Card className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100">
          <CardContent className="py-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Get the latest posts delivered right to your inbox. No spam, unsubscribe anytime.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button type="button" className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}