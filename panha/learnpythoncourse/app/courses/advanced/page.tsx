import Navbar from '@/components/Navbar';
import TopicCard from '@/components/TopicCard';
import Link from 'next/link';

export default function AdvancedCourse() {
  const topics = [
    {
      number: 1,
      title: "Advanced Decorators and Metaclasses",
      icon: "🎭",
      description: "Master Python's metaprogramming capabilities",
      points: [
        "Advanced decorator patterns",
        "Class decorators in depth",
        "Metaclasses and __new__",
        "Descriptor protocol",
        "Dynamic class creation",
        "Practical metaclass applications"
      ]
    },
    {
      number: 2,
      title: "Asynchronous Programming",
      icon: "⚡",
      description: "Write high-performance async code with asyncio",
      points: [
        "Understanding async/await syntax",
        "Coroutines and tasks",
        "Event loops and asyncio",
        "Async context managers and iterators",
        "Concurrent execution with asyncio",
        "aiohttp for async HTTP requests",
        "Best practices for async code"
      ]
    },
    {
      number: 3,
      title: "Design Patterns",
      icon: "🏛️",
      description: "Implement professional software design patterns",
      points: [
        "Creational patterns (Singleton, Factory, Builder)",
        "Structural patterns (Adapter, Decorator, Facade)",
        "Behavioral patterns (Observer, Strategy, Command)",
        "When to use which pattern",
        "SOLID principles in Python",
        "Design patterns in real projects"
      ]
    },
    {
      number: 4,
      title: "Performance Optimization",
      icon: "🚀",
      description: "Make your Python code blazingly fast",
      points: [
        "Profiling with cProfile and line_profiler",
        "Memory profiling and optimization",
        "Time complexity analysis",
        "Using built-in functions efficiently",
        "Caching and memoization",
        "Cython for performance-critical code",
        "Just-in-time compilation with Numba"
      ]
    },
    {
      number: 5,
      title: "Advanced Data Structures",
      icon: "🗃️",
      description: "Implement and use complex data structures",
      points: [
        "Collections module (deque, Counter, defaultdict)",
        "Heaps and priority queues",
        "Trees and graphs implementation",
        "Trie data structures",
        "LRU cache implementation",
        "Custom data structures",
        "Algorithm complexity and Big O"
      ]
    },
    {
      number: 6,
      title: "Type Hints and Static Analysis",
      icon: "📝",
      description: "Write type-safe Python code",
      points: [
        "Type hints syntax and basics",
        "Generic types and TypeVar",
        "Protocol and structural subtyping",
        "mypy for static type checking",
        "Type stubs and .pyi files",
        "Advanced typing patterns",
        "Benefits of type hints in large projects"
      ]
    },
    {
      number: 7,
      title: "Context Managers and Resource Management",
      icon: "🔧",
      description: "Handle resources professionally",
      points: [
        "Creating custom context managers",
        "The contextlib module",
        "Context manager protocols",
        "ExitStack for multiple contexts",
        "Resource management best practices",
        "Cleanup and exception handling",
        "Reusable context managers"
      ]
    },
    {
      number: 8,
      title: "Advanced Python Internals",
      icon: "🔬",
      description: "Understand how Python works under the hood",
      points: [
        "CPython internals overview",
        "Python memory management",
        "Garbage collection and weak references",
        "The GIL in depth",
        "Bytecode and disassembly",
        "Import system and module loading",
        "Performance implications"
      ]
    },
    {
      number: 9,
      title: "Building CLI Applications",
      icon: "💻",
      description: "Create professional command-line tools",
      points: [
        "argparse for complex CLIs",
        "Click framework",
        "Typer for modern CLIs",
        "Rich library for beautiful output",
        "Progress bars and interactive prompts",
        "Configuration management",
        "Packaging CLI apps"
      ]
    },
    {
      number: 10,
      title: "Advanced Web Development",
      icon: "🌐",
      description: "Build production-ready web applications",
      points: [
        "FastAPI advanced features",
        "Dependency injection patterns",
        "Background tasks and WebSockets",
        "Database migrations with Alembic",
        "Authentication and authorization",
        "API versioning and documentation",
        "Deployment and scaling strategies"
      ]
    },
    {
      number: 11,
      title: "Testing at Scale",
      icon: "🧪",
      description: "Master advanced testing techniques",
      points: [
        "Property-based testing with Hypothesis",
        "Integration and end-to-end testing",
        "Test doubles (mocks, stubs, fakes)",
        "Continuous integration setup",
        "Mutation testing",
        "Performance testing and benchmarking",
        "Testing async code"
      ]
    },
    {
      number: 12,
      title: "Security Best Practices",
      icon: "🔒",
      description: "Write secure Python applications",
      points: [
        "Common security vulnerabilities",
        "Input validation and sanitization",
        "Cryptography with cryptography library",
        "Secure password handling",
        "SQL injection prevention",
        "OWASP Top 10 for Python",
        "Security auditing tools"
      ]
    },
    {
      number: 13,
      title: "Data Science and Machine Learning",
      icon: "🤖",
      description: "Introduction to ML with Python",
      points: [
        "NumPy advanced operations",
        "Pandas for complex data analysis",
        "Scikit-learn basics",
        "Data preprocessing and feature engineering",
        "Model training and evaluation",
        "Introduction to neural networks",
        "Practical ML projects"
      ]
    },
    {
      number: 14,
      title: "DevOps and Deployment",
      icon: "🚢",
      description: "Deploy Python applications to production",
      points: [
        "Docker containerization",
        "Docker Compose for multi-service apps",
        "CI/CD pipelines",
        "Cloud deployment (AWS, GCP, Azure)",
        "Monitoring and logging",
        "Configuration management",
        "Scaling and load balancing"
      ]
    },
    {
      number: 15,
      title: "Advanced Project Architecture",
      icon: "🏗️",
      description: "Structure large Python projects professionally",
      points: [
        "Project structure best practices",
        "Package management with Poetry",
        "Pre-commit hooks and code quality",
        "Documentation with Sphinx",
        "Versioning and changelog management",
        "Monorepos vs microservices",
        "Code review and team workflows"
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-peach-50 pt-24 pb-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-cute-coral to-cute-peach text-gray-800 px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⚡ Advanced Level
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Advanced Python Mastery
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Become a Python expert! Master advanced concepts, design patterns, performance optimization, and build production-ready applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all"
              >
                ← Back to Home
              </Link>
              <a
                href="#topics"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                View Course Content
              </a>
            </div>
          </div>

          {/* Course Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cute-coral/30">
              <div className="text-4xl mb-3">⏱️</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">16 Weeks</div>
              <div className="text-gray-600">Duration</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cute-peach/30">
              <div className="text-4xl mb-3">📚</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">15 Topics</div>
              <div className="text-gray-600">Expert-level Lessons</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cute-coral/30">
              <div className="text-4xl mb-3">💻</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">10+ Projects</div>
              <div className="text-gray-600">Production Apps</div>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mb-16 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-8 border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📋</span> Prerequisites
            </h3>
            <p className="text-gray-700 mb-4">
              This course is designed for experienced Python developers. You should have:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Strong OOP understanding
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Experience with APIs and databases
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Knowledge of decorators and generators
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Built at least 3-5 Python projects
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/courses/intermediate"
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Review Intermediate Course →
              </Link>
            </div>
          </div>

          {/* What You'll Achieve */}
          <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg border-2 border-cute-peach/30">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>🎯</span> What You'll Achieve
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Expert-Level Skills</h4>
                  <p className="text-gray-600 text-sm">
                    Master advanced Python features used by senior developers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Production-Ready Code</h4>
                  <p className="text-gray-600 text-sm">
                    Write scalable, maintainable, and secure applications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Performance Optimization</h4>
                  <p className="text-gray-600 text-sm">
                    Optimize code for speed and efficiency
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Career Advancement</h4>
                  <p className="text-gray-600 text-sm">
                    Qualify for senior developer and architect positions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics Section */}
          <div id="topics" className="space-y-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Curriculum</h2>
              <p className="text-xl text-gray-600">
                Master advanced Python topics for professional development
              </p>
            </div>

            {topics.map((topic) => (
              <TopicCard key={topic.number} {...topic} />
            ))}
          </div>

          {/* Completion */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Congratulations on Your Journey!</h3>
            <p className="text-lg mb-6 opacity-90">
              You're ready to become a Python expert. Start building amazing things!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#topics"
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Start Learning
              </a>
              <Link
                href="/"
                className="bg-orange-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-800 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
