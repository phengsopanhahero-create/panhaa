interface TopicCardProps {
  number: number;
  title: string;
  description: string;
  points: string[];
  icon: string;
}

export default function TopicCard({ number, title, description, points, icon }: TopicCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">{icon}</span>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
      </div>

      <div className="ml-16 space-y-2">
        <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-3">
          What you'll learn:
        </h4>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="text-purple-500 mr-2 mt-1 flex-shrink-0">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
