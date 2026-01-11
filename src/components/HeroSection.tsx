interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
}

export default function HeroSection({ title, subtitle, imageUrl, imageAlt }: HeroSectionProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
