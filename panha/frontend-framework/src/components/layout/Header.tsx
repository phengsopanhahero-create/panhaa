'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useStore } from '@/lib/store/useStore'
import { Button } from '@/components/ui'

export function Header() {
  const { user, theme, setTheme } = useStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/features', label: 'Features', icon: '✨' },
    { href: '/pricing', label: 'Free Access', icon: '🎉' },
    { href: '/blog', label: 'Blog', icon: '📝' },
    { href: '/contact', label: 'Contact', icon: '💬' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-100 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              L
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              LearnHub
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-10 w-10 px-0 rounded-xl hover:bg-primary-50"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
          {user ? (
            <>
              <Link href="/dashboard" className="hidden sm:block">
                <Button variant="ghost" size="sm" className="rounded-xl">
                  📊 Dashboard
                </Button>
              </Link>
              <Link href="/profile">
                <Button className="btn-gradient text-white rounded-xl shadow-lg hover:shadow-xl">
                  {user.name}
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost" size="sm" className="rounded-xl">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="btn-gradient text-white rounded-xl shadow-lg hover:shadow-xl px-6">
                  Get Started Free
                </Button>
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-lg hover:bg-primary-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary-100 bg-white/95 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}