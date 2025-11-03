'use client'

import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'

interface LearningCardProps {
  icon: string | ReactNode
  title: string
  description: string
  level?: 'beginner' | 'intermediate' | 'advanced'
  duration?: string
  tags?: string[]
  progress?: number
  className?: string
  onClick?: () => void
}

export function LearningCard({
  icon,
  title,
  description,
  level = 'beginner',
  duration,
  tags = [],
  progress,
  className,
  onClick,
}: LearningCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const levelColors = {
    beginner: 'from-green-400 to-green-600',
    intermediate: 'from-yellow-400 to-orange-500',
    advanced: 'from-red-400 to-purple-600',
  }

  const levelBadgeColors = {
    beginner: 'bg-green-100 text-green-700 border-green-200',
    intermediate: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    advanced: 'bg-purple-100 text-purple-700 border-purple-200',
  }

  return (
    <div
      className={cn(
        'group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200 cursor-pointer overflow-hidden',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Decorative Background Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -mr-16 -mt-16"></div>

      {/* Header with Icon */}
      <div className="relative flex items-start justify-between mb-4">
        <div
          className={cn(
            'w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300',
            `bg-gradient-to-br ${levelColors[level]}`,
            isHovered && 'scale-110 rotate-6'
          )}
        >
          {typeof icon === 'string' ? icon : icon}
        </div>

        {/* Level Badge */}
        <span
          className={cn(
            'px-3 py-1 rounded-full text-xs font-semibold border',
            levelBadgeColors[level]
          )}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </span>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Duration */}
        {duration && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{duration}</span>
          </div>
        )}

        {/* Progress Bar */}
        {progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-600">Progress</span>
              <span className="text-xs font-bold text-primary-600">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div
          className={cn(
            'flex items-center gap-2 text-primary-600 font-semibold text-sm transition-transform duration-300',
            isHovered && 'translate-x-2'
          )}
        >
          <span>{progress !== undefined && progress > 0 ? 'Continue Learning' : 'Start Learning'}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
