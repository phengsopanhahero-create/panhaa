import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  bgColor: string;
  topics: string[];
}

export default function CourseCard({ title, description, level, icon, bgColor, topics }: CourseCardProps) {
  const levelColors = {
    beginner: 'from-emerald-400 to-cyan-500',
    intermediate: 'from-violet-400 to-purple-500',
    advanced: 'from-orange-400 to-pink-500'
  };

  return (
    <Link href={`/courses/${level}`} className="group">
      <div className={`${bgColor} backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden`}>
        {/* Glowing effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${levelColors[level]} bg-clip-text text-transparent`}>
            {title}
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-cyan-400 text-sm uppercase tracking-wide flex items-center">
              <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 mr-2"></span>
              What you'll learn:
            </h4>
            <ul className="space-y-2">
              {topics.slice(0, 3).map((topic, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-center group/item">
                  <span className="mr-3 text-cyan-400 font-bold">✓</span>
                  <span className="group-hover/item:text-white transition-colors">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
            <span className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${levelColors[level]} bg-clip-text text-transparent`}>
              {level}
            </span>
            <span className="text-2xl text-cyan-400 group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
