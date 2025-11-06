'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/30 backdrop-blur-md shadow-lg shadow-cyan-500/10 fixed w-full top-0 z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all">
              <span className="text-white text-2xl font-bold">🐍</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              PyLearn
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors relative group">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/courses/beginner" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors relative group">
              <span>Beginner</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/courses/intermediate" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors relative group">
              <span>Intermediate</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/courses/advanced" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors relative group">
              <span>Advanced</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#courses"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 font-medium transition-all"
            >
              Home
            </Link>
            <Link
              href="/courses/beginner"
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 font-medium transition-all"
            >
              Beginner
            </Link>
            <Link
              href="/courses/intermediate"
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 font-medium transition-all"
            >
              Intermediate
            </Link>
            <Link
              href="/courses/advanced"
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 font-medium transition-all"
            >
              Advanced
            </Link>
            <Link
              href="#courses"
              className="block px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
