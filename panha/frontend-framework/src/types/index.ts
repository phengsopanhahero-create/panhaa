// Common types used across the application

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role?: 'admin' | 'user'
  createdAt?: Date
  updatedAt?: Date
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface ApiError {
  message: string
  code?: string
  errors?: Record<string, string[]>
}

export type Theme = 'light' | 'dark'

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'