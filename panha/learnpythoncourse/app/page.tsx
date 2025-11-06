import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';

export default function Home() {
  const courses = [
    {
      title: "Python Beginner",
      description: "Start your programming journey with Python! Learn the fundamentals and build your first programs.",
      level: 'beginner' as const,
      icon: "💻",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30",
      topics: [
        "Variables and Data Types",
        "Control Flow (if/else, loops)",
        "Functions and Modules",
        "Lists, Dictionaries, Sets"
      ]
    },
    {
      title: "Python Intermediate",
      description: "Level up your skills! Master advanced concepts and build real-world applications.",
      level: 'intermediate' as const,
      icon: "🚀",
      bgColor: "bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30",
      topics: [
        "Object-Oriented Programming",
        "File I/O and Exception Handling",
        "Working with APIs",
        "Database Integration"
      ]
    },
    {
      title: "Python Advanced",
      description: "Become a Python expert! Deep dive into advanced topics and professional development.",
      level: 'advanced' as const,
      icon: "⚡",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/30",
      topics: [
        "Decorators and Generators",
        "Async/Await Programming",
        "Design Patterns",
        "Performance Optimization"
      ]
    }
  ];

  return (
    <>
      {/* Animated Tech Background */}
      <div className="tech-bg"></div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`
            }}
          />
        ))}
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-pulse">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-cyan-500/50 border border-cyan-400/30">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              100% Free Python Course
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Master Python
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Programming
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From complete beginner to advanced developer. Learn Python with cutting-edge curriculum designed for the modern tech industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#courses"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all overflow-hidden"
            >
              <span className="relative z-10">Start Learning Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Tech Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">100+</div>
              <div className="text-gray-400 text-sm">Lessons</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all">
              <div className="text-4xl mb-2">💻</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">50+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all">
              <div className="text-4xl mb-2">⏱️</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">40h</div>
              <div className="text-gray-400 text-sm">Content</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">Free</div>
              <div className="text-gray-400 text-sm">Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Select the course that matches your skill level and start learning today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Why Learn Python?
            </h2>
            <p className="text-gray-300 text-lg">Unlock your potential with the world's most versatile programming language</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Easy to Learn</h3>
              <p className="text-gray-300">
                Python's simple syntax makes it perfect for beginners. Start coding in minutes!
              </p>
            </div>

            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌟</div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Versatile</h3>
              <p className="text-gray-300">
                Use Python for web development, data science, AI, automation, and more!
              </p>
            </div>

            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">High Demand</h3>
              <p className="text-gray-300">
                Python developers are in high demand with excellent career opportunities.
              </p>
            </div>

            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Great Community</h3>
              <p className="text-gray-300">
                Join millions of Python developers worldwide with amazing support and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-transparent to-black/50 backdrop-blur-sm border-t border-cyan-500/20 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <span className="text-white text-2xl font-bold">🐍</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">PyLearn</span>
          </div>
          <p className="text-gray-300 mb-4 text-lg">
            Your journey to Python mastery starts here
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#courses" className="text-gray-400 hover:text-cyan-400 transition-colors">Courses</a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 PyLearn. Empowering developers worldwide.
          </p>
        </div>
      </footer>
    </>
  );
}
