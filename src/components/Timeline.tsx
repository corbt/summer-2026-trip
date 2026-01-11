interface TimelineItem {
  date: string;
  location: string;
  description: string;
  emoji: string;
  highlight?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Circle marker */}
            <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
              item.highlight ? 'bg-amber-100 ring-4 ring-amber-50' : 'bg-gray-100'
            }`}>
              {item.emoji}
            </div>

            {/* Content */}
            <div className={`flex-1 pb-6 ${item.highlight ? 'pt-1' : ''}`}>
              <div className="text-sm text-gray-500 mb-1">{item.date}</div>
              <div className={`font-semibold text-lg ${item.highlight ? 'text-amber-700' : 'text-gray-900'}`}>
                {item.location}
              </div>
              <div className="text-gray-600 mt-1">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
