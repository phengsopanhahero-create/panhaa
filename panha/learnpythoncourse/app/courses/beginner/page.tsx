import Navbar from '@/components/Navbar';
import TopicCard from '@/components/TopicCard';
import Link from 'next/link';

export default function BeginnerCourse() {
  const topics = [
    {
      number: 1,
      title: "Getting Started with Python",
      icon: "🎯",
      description: "Set up your Python environment and write your first program",
      points: [
        "Installing Python and IDEs (VS Code, PyCharm)",
        "Understanding the Python interpreter",
        "Writing and running your first 'Hello World' program",
        "Using Python REPL and interactive mode",
        "Basic syntax and indentation rules"
      ]
    },
    {
      number: 2,
      title: "Variables and Data Types",
      icon: "📦",
      description: "Learn how to store and manipulate different types of data",
      points: [
        "Variables and naming conventions",
        "Numbers (integers, floats, complex)",
        "Strings and string operations",
        "Booleans and None type",
        "Type conversion and casting",
        "Input and output operations"
      ]
    },
    {
      number: 3,
      title: "Operators and Expressions",
      icon: "🔢",
      description: "Master arithmetic, comparison, and logical operations",
      points: [
        "Arithmetic operators (+, -, *, /, //, %, **)",
        "Comparison operators (==, !=, <, >, <=, >=)",
        "Logical operators (and, or, not)",
        "Assignment operators (=, +=, -=, etc.)",
        "Identity and membership operators",
        "Operator precedence and expressions"
      ]
    },
    {
      number: 4,
      title: "Control Flow - Conditionals",
      icon: "🔀",
      description: "Make decisions in your code with if statements",
      points: [
        "If statements and conditions",
        "If-else statements",
        "If-elif-else chains",
        "Nested conditionals",
        "Ternary operators",
        "Boolean logic in conditions"
      ]
    },
    {
      number: 5,
      title: "Loops and Iteration",
      icon: "🔄",
      description: "Repeat actions efficiently with loops",
      points: [
        "For loops and the range() function",
        "While loops and conditions",
        "Break and continue statements",
        "Nested loops",
        "Loop else clause",
        "Iterating over sequences"
      ]
    },
    {
      number: 6,
      title: "Lists and Tuples",
      icon: "📝",
      description: "Work with ordered collections of data",
      points: [
        "Creating and accessing lists",
        "List methods (append, insert, remove, pop, sort)",
        "List slicing and indexing",
        "List comprehensions",
        "Tuples and immutability",
        "Packing and unpacking sequences"
      ]
    },
    {
      number: 7,
      title: "Dictionaries and Sets",
      icon: "🗂️",
      description: "Store data in key-value pairs and unique collections",
      points: [
        "Creating and using dictionaries",
        "Dictionary methods and operations",
        "Iterating through dictionaries",
        "Dictionary comprehensions",
        "Sets and set operations",
        "When to use which data structure"
      ]
    },
    {
      number: 8,
      title: "Functions",
      icon: "⚙️",
      description: "Create reusable blocks of code",
      points: [
        "Defining and calling functions",
        "Parameters and arguments",
        "Return values and multiple returns",
        "Default arguments and keyword arguments",
        "Variable scope (local vs global)",
        "*args and **kwargs"
      ]
    },
    {
      number: 9,
      title: "Modules and Packages",
      icon: "📚",
      description: "Organize and reuse code across files",
      points: [
        "Importing modules (import, from...import)",
        "Creating your own modules",
        "The Python Standard Library",
        "Understanding __name__ == '__main__'",
        "Installing packages with pip",
        "Popular Python packages overview"
      ]
    },
    {
      number: 10,
      title: "String Manipulation",
      icon: "✍️",
      description: "Master advanced string operations",
      points: [
        "String methods (upper, lower, strip, split, join)",
        "String formatting (f-strings, format(), %)",
        "String slicing and concatenation",
        "Searching and replacing in strings",
        "Regular expressions basics",
        "Working with multiline strings"
      ]
    },
    {
      number: 11,
      title: "File Handling",
      icon: "📄",
      description: "Read from and write to files",
      points: [
        "Opening and closing files",
        "Reading files (read, readline, readlines)",
        "Writing to files (write, writelines)",
        "File modes (r, w, a, rb, wb)",
        "Using 'with' statement for file handling",
        "Working with CSV and JSON files"
      ]
    },
    {
      number: 12,
      title: "Error Handling",
      icon: "🛡️",
      description: "Handle errors gracefully in your programs",
      points: [
        "Understanding exceptions",
        "Try-except blocks",
        "Handling multiple exceptions",
        "Finally and else clauses",
        "Raising exceptions",
        "Creating custom exceptions",
        "Debugging techniques"
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-mint-50 pt-24 pb-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-cute-mint to-cute-blue text-gray-800 px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                🌱 Beginner Level
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Python for Beginners
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Start your programming journey! This course covers all the fundamentals you need to become proficient in Python. No prior programming experience required.
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
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                View Course Content
              </a>
            </div>
          </div>

          {/* Course Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cute-mint/30">
              <div className="text-4xl mb-3">⏱️</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">12 Weeks</div>
              <div className="text-gray-600">Duration</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cute-blue/30">
              <div className="text-4xl mb-3">📚</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">12 Topics</div>
              <div className="text-gray-600">Comprehensive Lessons</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-cute-mint/30">
              <div className="text-4xl mb-3">💻</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">20+ Projects</div>
              <div className="text-gray-600">Hands-on Practice</div>
            </div>
          </div>

          {/* Topics Section */}
          <div id="topics" className="space-y-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Curriculum</h2>
              <p className="text-xl text-gray-600">
                Master Python fundamentals through structured lessons
              </p>
            </div>

            {topics.map((topic) => (
              <TopicCard key={topic.number} {...topic} />
            ))}
          </div>

          {/* Next Steps */}
          <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
            <p className="text-lg mb-6 opacity-90">
              Complete this course and move on to Intermediate Python!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#topics"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Start Learning
              </a>
              <Link
                href="/courses/intermediate"
                className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-all"
              >
                Preview Intermediate →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
