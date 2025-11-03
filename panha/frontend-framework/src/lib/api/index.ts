export * from './client'

// Example API functions
import { apiClient } from './client'

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export const api = {
  posts: {
    getAll: () => apiClient.get<Post[]>('/posts'),
    getById: (id: number) => apiClient.get<Post>(`/posts/${id}`),
    create: (data: Omit<Post, 'id'>) => apiClient.post<Post>('/posts', data),
    update: (id: number, data: Partial<Post>) =>
      apiClient.put<Post>(`/posts/${id}`, data),
    delete: (id: number) => apiClient.delete<void>(`/posts/${id}`),
  },
}