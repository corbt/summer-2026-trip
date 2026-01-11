interface ImageCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  link?: string;
}

export default function ImageCard({ title, description, imageUrl, imageAlt, badge, link }: ImageCardProps) {
  const content = (
    <>
      <div className="relative h-48 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {badge && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="image-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow block"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="image-card bg-white rounded-xl overflow-hidden shadow-lg">
      {content}
    </div>
  );
}
