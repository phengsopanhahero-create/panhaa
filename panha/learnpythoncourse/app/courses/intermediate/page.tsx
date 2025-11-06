import Navbar from '@/components/Navbar';
import TopicCard from '@/components/TopicCard';
import Link from 'next/link';

export default function IntermediateCourse() {
  const topics = [
    {
      number: 1,
      title: "Object-Oriented Programming Basics",
      icon: "🎨",
      description: "Learn the fundamentals of OOP in Python",
      points: [
        "Classes and objects",
        "Instance and class attributes",
        "Methods and the self parameter",
        "Constructors and __init__ method",
        "__str__ and __repr__ methods",
        "Instance vs class vs static methods"
      ]
    },
    {
      number: 2,
      title: "OOP Advanced Concepts",
      icon: "🏗️",
      description: "Master inheritance, polymorphism, and encapsulation",
      points: [
        "Inheritance and super()",
        "Multiple inheritance and MRO",
        "Polymorphism and method overriding",
        "Encapsulation and private attributes",
        "Property decorators and getters/setters",
        "Abstract classes and interfaces"
      ]
    },
    {
      number: 3,
      title: "Advanced File Operations",
      icon: "📁",
      description: "Work with different file formats and binary data",
      points: [
        "Working with JSON data",
        "CSV file reading and writing",
        "XML and YAML processing",
        "Binary files and pickling",
        "File and directory operations (os, pathlib)",
        "Context managers and the with statement"
      ]
    },
    {
      number: 4,
      title: "Exception Handling Advanced",
      icon: "⚠️",
      description: "Handle complex error scenarios professionally",
      points: [
        "Exception hierarchy in Python",
        "Creating custom exception classes",
        "Exception chaining",
        "Best practices for error handling",
        "Logging errors and debugging",
        "Using assertions effectively"
      ]
    },
    {
      number: 5,
      title: "Working with APIs",
      icon: "🌐",
      description: "Interact with web services and REST APIs",
      points: [
        "HTTP methods (GET, POST, PUT, DELETE)",
        "Using the requests library",
        "Handling JSON responses",
        "API authentication and headers",
        "Error handling in API calls",
        "Building your own REST API with Flask/FastAPI"
      ]
    },
    {
      number: 6,
      title: "Database Integration",
      icon: "💾",
      description: "Connect Python to databases",
      points: [
        "SQL basics and database concepts",
        "SQLite with Python",
        "Using sqlite3 module",
        "Working with PostgreSQL/MySQL",
        "SQLAlchemy ORM basics",
        "Database CRUD operations",
        "Connection pooling and best practices"
      ]
    },
    {
      number: 7,
      title: "Regular Expressions",
      icon: "🔍",
      description: "Master pattern matching and text processing",
      points: [
        "Regex syntax and metacharacters",
        "The re module (match, search, findall)",
        "Groups and capturing",
        "Lookahead and lookbehind assertions",
        "Regex flags and options",
        "Practical regex applications"
      ]
    },
    {
      number: 8,
      title: "Iterators and Generators",
      icon: "♻️",
      description: "Create memory-efficient iterables",
      points: [
        "Understanding iterators and the iterator protocol",
        "Creating custom iterators",
        "Generator functions and yield",
        "Generator expressions",
        "itertools module",
        "When to use generators vs lists"
      ]
    },
    {
      number: 9,
      title: "Decorators",
      icon: "✨",
      description: "Modify and enhance functions dynamically",
      points: [
        "Function decorators basics",
        "Creating custom decorators",
        "Decorators with arguments",
        "Class decorators",
        "Built-in decorators (@property, @staticmethod, @classmethod)",
        "Functools and wraps",
        "Practical decorator examples"
      ]
    },
    {
      number: 10,
      title: "Testing and Debugging",
      icon: "🧪",
      description: "Write tests and debug your code effectively",
      points: [
        "Unit testing with unittest",
        "pytest framework basics",
        "Test fixtures and parametrization",
        "Mocking and patching",
        "Code coverage",
        "Debugging with pdb",
        "Best practices for testing"
      ]
    },
    {
      number: 11,
      title: "Virtual Environments and Packages",
      icon: "📦",
      description: "Manage project dependencies professionally",
      points: [
        "Virtual environments (venv, virtualenv)",
        "Managing dependencies with pip",
        "requirements.txt and lock files",
        "Poetry and modern dependency management",
        "Creating your own packages",
        "Publishing to PyPI"
      ]
    },
    {
      number: 12,
      title: "Web Scraping",
      icon: "🕷️",
      description: "Extract data from websites",
      points: [
        "HTML basics for scraping",
        "BeautifulSoup library",
        "Parsing HTML and XML",
        "CSS selectors and XPath",
        "Handling dynamic content with Selenium",
        "Web scraping ethics and robots.txt",
        "Rate limiting and best practices"
      ]
    },
    {
      number: 13,
      title: "Working with Data",
      icon: "📊",
      description: "Process and analyze data with Python",
      points: [
        "Introduction to NumPy arrays",
        "Pandas DataFrames basics",
        "Reading and writing data files",
        "Data cleaning and manipulation",
        "Basic data analysis and statistics",
        "Data visualization with Matplotlib/Seaborn"
      ]
    },
    {
      number: 14,
      title: "Multithreading and Multiprocessing",
      icon: "⚡",
      description: "Write concurrent and parallel programs",
      points: [
        "Threading basics and the threading module",
        "Thread synchronization (locks, semaphores)",
        "Multiprocessing module",
        "Process pools and executor",
        "GIL (Global Interpreter Lock) explained",
        "When to use threading vs multiprocessing",
        "Asyncio preview"
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-lavender-50 pt-24 pb-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-cute-purple to-cute-lavender text-gray-800 px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                🚀 Intermediate Level
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Intermediate Python
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take your Python skills to the next level! Master advanced concepts like OOP, APIs, databases, and more to build real-world applications.
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
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                View Course Content
              </a>
            </div>
          </div>

          {/* Course Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cute-purple/30">
              <div className="text-4xl mb-3">⏱️</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">14 Weeks</div>
              <div className="text-gray-600">Duration</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cute-lavender/30">
              <div className="text-4xl mb-3">📚</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">14 Topics</div>
              <div className="text-gray-600">In-depth Lessons</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cute-purple/30">
              <div className="text-4xl mb-3">💻</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">15+ Projects</div>
              <div className="text-gray-600">Real-world Apps</div>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mb-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📋</span> Prerequisites
            </h3>
            <p className="text-gray-700 mb-4">
              Before starting this course, you should be comfortable with:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-purple-500">✓</span>
                Python syntax and basic data types
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">✓</span>
                Control flow (if/else, loops)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">✓</span>
                Functions and modules
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">✓</span>
                Data structures (lists, dicts, sets)
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/courses/beginner"
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Review Beginner Course →
              </Link>
            </div>
          </div>

          {/* Topics Section */}
          <div id="topics" className="space-y-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Curriculum</h2>
              <p className="text-xl text-gray-600">
                Advanced topics to build professional Python applications
              </p>
            </div>

            {topics.map((topic) => (
              <TopicCard key={topic.number} {...topic} />
            ))}
          </div>

          {/* Next Steps */}
          <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready for Advanced Python?</h3>
            <p className="text-lg mb-6 opacity-90">
              Master these concepts and take on advanced topics!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#topics"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Start Learning
              </a>
              <Link
                href="/courses/advanced"
                className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-all"
              >
                Preview Advanced →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
