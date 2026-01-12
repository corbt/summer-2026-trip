import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import TripMap from '@/components/TripMap';
import TripCalendar from '@/components/TripCalendar';

const timelineItems = [
  {
    date: 'Sun, June 21',
    location: 'Seattle to Dublin',
    description: 'Aer Lingus direct flight (9h 5m). Arrive Monday noon.',
    emoji: '✈️',
  },
  {
    date: 'Jun 22-23',
    location: 'Dublin',
    description: '2 nights to explore the city and adjust to the time zone.',
    emoji: '🍀',
  },
  {
    date: 'Tue, June 23',
    location: 'Dublin to Barcelona',
    description: 'Evening Ryanair flight (2h 30m).',
    emoji: '🛫',
  },
  {
    date: 'Jun 23 - Jul 6',
    location: 'Barcelona with Grandparents',
    description: 'Two weeks of quality time with the grandparents. Beaches, tapas, and family fun.',
    emoji: '🌅',
    highlight: true,
  },
  {
    date: 'Jul 6-13',
    location: 'Dingle Peninsula, Ireland',
    description: 'Dolphins, ancient ruins, and the most colorful town in Ireland.',
    emoji: '🐬',
    highlight: true,
  },
  {
    date: 'Jul 13-20',
    location: 'Connemara, Ireland',
    description: 'Wild ponies, fairy-tale castles, and dramatic landscapes.',
    emoji: '🏔️',
    highlight: true,
  },
  {
    date: 'Jul 21-22',
    location: 'Back to Seattle',
    description: 'Arrive home just in time for the family reunion!',
    emoji: '🏠',
  },
];

const destinations = [
  {
    href: '/dublin',
    title: 'Dublin',
    subtitle: 'Our gateway to adventure',
    image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80',
    duration: '2 nights',
    mapUrl: 'https://www.google.com/maps/place/Dublin,+Ireland',
  },
  {
    href: '/barcelona',
    title: 'Barcelona',
    subtitle: 'Sun, sea, and family',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
    duration: '2 weeks',
    mapUrl: 'https://www.google.com/maps/place/Barcelona,+Spain',
  },
  {
    href: '/dingle',
    title: 'Dingle Peninsula',
    subtitle: 'Ireland\'s magical southwest',
    image: '/images/dingle/slea-head.jpg',
    duration: '1 week',
    mapUrl: 'https://www.google.com/maps/place/Dingle+Peninsula,+Ireland',
  },
  {
    href: '/connemara',
    title: 'Connemara',
    subtitle: 'Wild Atlantic beauty',
    image: 'https://images.unsplash.com/photo-1570426606723-9c8991639efd?w=800&q=80',
    duration: '1 week',
    mapUrl: 'https://www.google.com/maps/place/Connemara,+Ireland',
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Summer 2026"
        subtitle="31 days of adventure across Ireland and Spain with our crew of 6"
        imageUrl="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1600&q=80"
        imageAlt="Cliffs of Moher, Ireland"
      />

      {/* Quick Stats */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">31</div>
              <div className="text-gray-500 text-sm">Days</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">4</div>
              <div className="text-gray-500 text-sm">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">2</div>
              <div className="text-gray-500 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">6</div>
              <div className="text-gray-500 text-sm">Adventurers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Destinations Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Destinations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {destinations.map((dest) => (
              <div key={dest.href} className="image-card group relative h-64 rounded-2xl overflow-hidden">
                <Link href={dest.href} className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="hero-gradient absolute inset-0" />
                </Link>
                <a
                  href={dest.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-colors z-10"
                  title={`View ${dest.title} on Google Maps`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </a>
                <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full mb-2">
                    {dest.duration}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{dest.title}</h3>
                  <p className="text-white/80">{dest.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Map & Calendar */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Route & Schedule</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <TripMap />
            </div>
            <div>
              <TripCalendar />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">The Journey</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <Timeline items={timelineItems} />
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-amber-900">
              Five weeks of beaches, castles, dolphins, and the best ice cream in Ireland.
              A trip the kids will remember forever.
            </p>
          </div>
        </section>

        {/* Budget Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Budget Snapshot</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="text-sm text-gray-500 mb-1">Budget Option</div>
              <div className="text-3xl font-bold text-gray-900">$12,066</div>
              <div className="text-sm text-green-600 mt-2">Within budget</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="text-sm text-gray-500 mb-1">Recommended</div>
              <div className="text-3xl font-bold text-gray-900">$13,866</div>
              <div className="text-sm text-amber-600 mt-2">Best value</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="text-sm text-gray-500 mb-1">Premium</div>
              <div className="text-3xl font-bold text-gray-900">$17,466</div>
              <div className="text-sm text-purple-600 mt-2">Top properties</div>
            </div>
          </div>
        </section>

        {/* Flights Confirmed */}
        <section className="bg-green-50 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">✅</div>
            <div>
              <h3 className="font-bold text-lg text-green-900 mb-2">Flights - $5,382</h3>
              <p className="text-green-800 mb-4">
                Prices as of January 2026 for all 6 passengers. Direct Seattle to Dublin on Aer Lingus,
                plus easy Dublin-Barcelona hops on Ryanair.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/travel/flights/search?tfs=CBwQAhojEgoyMDI2LTA2LTIxagwIAhIIL20vMGQ5anJyBwgBEgNEVUIaIxIKMjAyNi0wNy0yMWoHCAESA0RVQnIMCAISCC9tLzBkOWpyQAFAAUACQAJAAkAESAFwAYIBCwj___________8BmAEB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/80 px-3 py-1 rounded-full text-sm text-green-700 hover:bg-white transition-colors"
                >
                  SEA ↔ DUB: $4,169 &rarr;
                </a>
                <a
                  href="https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA2LTIzagcIARIDRFVCcgcIARIDQkNOGh4SCjIwMjYtMDctMDZqBwgBEgNCQ05yBwgBEgNEVUJAAUABQAJAAkACQARIAXABggELCP___________wGYAQE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/80 px-3 py-1 rounded-full text-sm text-green-700 hover:bg-white transition-colors"
                >
                  DUB ↔ BCN: $1,213 &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            June 21 - July 22, 2026 • Family of 6 • The adventure of a lifetime
          </p>
        </div>
      </footer>
    </div>
  );
}
