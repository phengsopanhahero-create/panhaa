import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  email?: string
}

interface AppState {
  user: User | null
  theme: 'light' | 'dark'
  isLoading: boolean
  setUser: (user: User | null) => void
  setTheme: (theme: 'light' | 'dark') => void
  setIsLoading: (isLoading: boolean) => void
}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        theme: 'light',
        isLoading: false,
        setUser: (user) => set({ user }),
        setTheme: (theme) => set({ theme }),
        setIsLoading: (isLoading) => set({ isLoading }),
      }),
      {
        name: 'app-storage',
      }
    )
  )
)