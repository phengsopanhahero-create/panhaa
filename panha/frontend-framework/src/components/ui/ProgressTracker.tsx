'use client'

import { cn } from '@/lib/utils'

interface ProgressStep {
  label: string
  completed: boolean
  current?: boolean
}

interface ProgressTrackerProps {
  steps: ProgressStep[]
  className?: string
}

export function ProgressTracker({ steps, className }: ProgressTrackerProps) {
  const completedCount = steps.filter(step => step.completed).length
  const totalSteps = steps.length
  const progressPercentage = (completedCount / totalSteps) * 100

  return (
    <div className={cn('w-full', className)}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">
            Your Progress
          </span>
          <span className="text-sm font-bold text-primary-600">
            {completedCount}/{totalSteps} Completed
          </span>
        </div>
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>
        <div className="text-center mt-2">
          <span className="text-2xl font-bold gradient-text">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              'flex items-center gap-4 p-4 rounded-xl transition-all duration-300',
              step.current && 'bg-primary-50 border-2 border-primary-300 shadow-md',
              step.completed && !step.current && 'bg-green-50 border border-green-200',
              !step.completed && !step.current && 'bg-gray-50 border border-gray-200'
            )}
          >
            {/* Step Icon */}
            <div
              className={cn(
                'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300',
                step.completed && 'bg-gradient-to-br from-accent-400 to-accent-600 text-white',
                step.current && 'bg-gradient-to-br from-primary-400 to-primary-600 text-white animate-pulse-slow',
                !step.completed && !step.current && 'bg-gray-300 text-gray-600'
              )}
            >
              {step.completed ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                index + 1
              )}
            </div>

            {/* Step Label */}
            <div className="flex-1">
              <p
                className={cn(
                  'font-medium transition-colors',
                  step.current && 'text-primary-700 font-semibold',
                  step.completed && !step.current && 'text-green-700',
                  !step.completed && !step.current && 'text-gray-600'
                )}
              >
                {step.label}
              </p>
            </div>

            {/* Status Badge */}
            {step.current && (
              <span className="text-xs font-semibold px-3 py-1 bg-primary-600 text-white rounded-full">
                In Progress
              </span>
            )}
            {step.completed && !step.current && (
              <span className="text-xs font-semibold px-3 py-1 bg-accent-600 text-white rounded-full">
                ✓ Done
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Motivational Message */}
      {completedCount > 0 && completedCount < totalSteps && (
        <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-200">
          <p className="text-center text-sm font-medium text-gray-700">
            {completedCount === totalSteps - 1
              ? "🎉 Almost there! One more step to complete!"
              : `💪 Great job! Keep going, you're ${Math.round(progressPercentage)}% there!`}
          </p>
        </div>
      )}

      {/* Completion Message */}
      {completedCount === totalSteps && (
        <div className="mt-6 p-6 bg-gradient-to-r from-accent-400 to-accent-600 rounded-xl text-center animate-slide-up">
          <p className="text-2xl font-bold text-white mb-2">🎉 Congratulations!</p>
          <p className="text-white/90">You've completed all the steps!</p>
        </div>
      )}
    </div>
  )
}
