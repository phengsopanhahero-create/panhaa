'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { useStore } from '@/lib/store/useStore'

export default function RegisterPage() {
  const router = useRouter()
  const { setUser } = useStore()
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!name.trim()) {
      setError('Please enter your name')
      return
    }

    setIsLoading(true)

    // Simulate API call and auto-login
    setTimeout(() => {
      setUser({
        id: Date.now().toString(),
        name: name.trim(),
      })
      setIsLoading(false)
      router.push('/dashboard')
    }, 500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Start Learning!</CardTitle>
          <CardDescription>Enter your name to access all lessons for free</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Your Name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={error}
            />

            <Button type="submit" className="w-full" isLoading={isLoading}>
              Start Learning
            </Button>

            <div className="text-center text-sm text-black">
              <p className="mb-2">No registration required!</p>
              <p>Access all learning materials completely free.</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}