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
    <header className="sticky top-0 z-50 w-full border-b border-cyan-500/20 bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50 tech-glow">
              <span className="font-mono text-sm">{'<C/>'}</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-mono">
              CODE-P
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-cyan-100/80 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200 border border-transparent hover:border-cyan-500/30"
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
            className="h-10 w-10 px-0 rounded-xl hover:bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
          {user ? (
            <>
              <Link href="/dashboard" className="hidden sm:block">
                <Button variant="ghost" size="sm" className="rounded-xl text-cyan-100 hover:text-cyan-300 hover:bg-cyan-500/10 border border-cyan-500/20">
                  📊 Dashboard
                </Button>
              </Link>
              <Link href="/profile">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
                  {user.name}
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost" size="sm" className="rounded-xl text-cyan-100 hover:text-cyan-300 hover:bg-cyan-500/10 border border-cyan-500/20 font-mono">
                  {'<Login />'}
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 px-6 font-mono">
                  {'{ Start Free }'}
                </Button>
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-lg hover:bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
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
        <div className="lg:hidden border-t border-cyan-500/20 bg-slate-900/98 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-cyan-100/80 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all border border-transparent hover:border-cyan-500/30"
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