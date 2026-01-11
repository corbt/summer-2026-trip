interface ActivityCardProps {
  title: string;
  description: string;
  imageUrl: string;
  ages?: string;
  cost?: string;
  link?: string;
}

export default function ActivityCard({ title, description, imageUrl, ages, cost, link }: ActivityCardProps) {
  const content = (
    <>
      <div className="relative w-32 h-32 flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex gap-3 text-xs">
          {ages && (
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              Ages {ages}
            </span>
          )}
          {cost && (
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
              {cost}
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="image-card flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="image-card flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg">
      {content}
    </div>
  );
}
