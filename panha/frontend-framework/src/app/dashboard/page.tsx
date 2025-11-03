'use client'

import { useStore } from '@/lib/store/useStore'
import { Container } from '@/components/layout'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { user } = useStore()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) return null

  const stats = [
    { label: 'Total Users', value: '2,543', change: '+12.5%', trend: 'up' },
    { label: 'Revenue', value: '$45,231', change: '+23.1%', trend: 'up' },
    { label: 'Orders', value: '1,234', change: '-3.2%', trend: 'down' },
    { label: 'Conversion Rate', value: '3.24%', change: '+0.5%', trend: 'up' },
  ]

  const recentActivity = [
    { user: 'John Smith', action: 'Created new project', time: '2 minutes ago' },
    { user: 'Sarah Johnson', action: 'Updated profile', time: '1 hour ago' },
    { user: 'Mike Wilson', action: 'Completed task #234', time: '3 hours ago' },
    { user: 'Emily Brown', action: 'Added new comment', time: '5 hours ago' },
    { user: 'David Lee', action: 'Uploaded documents', time: '1 day ago' },
  ]

  return (
    <Container className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, {user.name}!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div
                  className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-medium">
                      {activity.user.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.user}
                    </p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                <div className="text-sm font-medium">Create New Project</div>
                <div className="text-xs text-gray-500">Start a new project</div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                <div className="text-sm font-medium">Invite Team Member</div>
                <div className="text-xs text-gray-500">Add someone to your team</div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                <div className="text-sm font-medium">View Reports</div>
                <div className="text-xs text-gray-500">Check analytics</div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                <div className="text-sm font-medium">Settings</div>
                <div className="text-xs text-gray-500">Configure your account</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Placeholder */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Your growth over the last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-600">Chart visualization would go here</p>
              <p className="text-sm text-gray-500">Integrate with Chart.js or Recharts</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}