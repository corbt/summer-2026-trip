import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';

const timelineItems = [
  {
    date: 'Sun, June 21',
    location: 'Seattle to Barcelona',
    description: 'Aer Lingus via Dublin (18h 30m). Arrive Monday evening.',
    emoji: '✈️',
  },
  {
    date: 'Jun 22 - Jul 6',
    location: 'Barcelona with Grandparents',
    description: 'Two weeks of quality time with the grandparents. Beaches, tapas, and family fun.',
    emoji: '🌅',
    highlight: true,
  },
  {
    date: 'Mon, July 6',
    location: 'Barcelona to Lisbon',
    description: 'Vueling evening flight (2h 10m). Arrive 9:30 PM.',
    emoji: '🛫',
  },
  {
    date: 'Jul 6-10',
    location: 'Lisbon, Portugal',
    description: 'Historic neighborhoods, amazing aquarium, and day trip to Sintra\'s fairytale castles.',
    emoji: '🏛️',
    highlight: true,
  },
  {
    date: 'Jul 10-12',
    location: 'Sesimbra, Portugal',
    description: 'Medieval castle on the cliffs, dinosaur tracks, and beautiful beaches in Arrábida.',
    emoji: '🏰',
    highlight: true,
  },
  {
    date: 'Sat, July 12',
    location: 'Drive to Porto',
    description: 'Scenic 2.5-hour drive up the coast (or train from Lisbon).',
    emoji: '🚗',
  },
  {
    date: 'Jul 12-20',
    location: 'Porto, Portugal',
    description: 'Charming riverside city, Harry Potter bookstore, and Douro Valley wine country.',
    emoji: '🍷',
    highlight: true,
  },
  {
    date: 'Jul 20-22',
    location: 'Back to Seattle',
    description: 'Return via Barcelona. Arrive home for the family reunion!',
    emoji: '🏠',
  },
];

const destinations = [
  {
    href: '/barcelona',
    title: 'Barcelona',
    subtitle: 'Sun, sea, and family',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
    duration: '2 weeks',
    mapUrl: 'https://www.google.com/maps/place/Barcelona,+Spain',
  },
  {
    href: '/portugal/lisbon',
    title: 'Lisbon',
    subtitle: 'Historic hills & ocean views',
    image: '/images/lisbon/alfama-district.jpg',
    duration: '4 nights',
    mapUrl: 'https://www.google.com/maps/place/Lisbon,+Portugal',
  },
  {
    href: '/portugal/sesimbra',
    title: 'Sesimbra',
    subtitle: 'Castle, beach & dinosaurs',
    image: '/images/sesimbra/sesimbra-beach.jpg',
    duration: '2 nights',
    mapUrl: 'https://www.google.com/maps/place/Sesimbra,+Portugal',
  },
  {
    href: '/portugal/porto',
    title: 'Porto',
    subtitle: 'Riverside charm & port wine',
    image: '/images/porto/ribeira-waterfront.jpg',
    duration: '8 nights',
    mapUrl: 'https://www.google.com/maps/place/Porto,+Portugal',
  },
];

export default function PortugalItinerary() {
  return (
    <div>
      {/* Back to options */}
      <div className="bg-amber-600 text-white py-2">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="text-amber-100 hover:text-white text-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            View Ireland option
          </Link>
        </div>
      </div>

      <HeroSection
        title="Portugal Adventure"
        subtitle="31 days exploring Lisbon, Porto, and Spain with our crew of 6"
        imageUrl="/images/lisbon/alfama-district.jpg"
        imageAlt="Lisbon, Portugal"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">The Journey</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <Timeline items={timelineItems} />
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Portugal Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Lisbon Must-Dos</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center gap-2">
                  <span>🐠</span> Oceanario - One of Europe&apos;s best aquariums
                </li>
                <li className="flex items-center gap-2">
                  <span>🚃</span> Tram 28 through historic neighborhoods
                </li>
                <li className="flex items-center gap-2">
                  <span>🏰</span> Day trip to Sintra&apos;s fairytale castles
                </li>
                <li className="flex items-center gap-2">
                  <span>🥧</span> Pasteis de Belem custard tarts
                </li>
                <li className="flex items-center gap-2">
                  <span>🌊</span> Hippotrip amphibious bus tour
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-purple-900 mb-3">Porto Must-Dos</h3>
              <ul className="space-y-2 text-purple-800">
                <li className="flex items-center gap-2">
                  <span>📚</span> Livraria Lello - &quot;Harry Potter&quot; bookstore
                </li>
                <li className="flex items-center gap-2">
                  <span>🚢</span> World of Discoveries museum boat ride
                </li>
                <li className="flex items-center gap-2">
                  <span>🦚</span> Crystal Palace gardens with peacocks
                </li>
                <li className="flex items-center gap-2">
                  <span>🍇</span> Douro Valley day trip
                </li>
                <li className="flex items-center gap-2">
                  <span>🏖️</span> Matosinhos beach day
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-amber-900">
              Sun-drenched tiles, river cruises, and the world&apos;s best custard tarts.
              Portugal is pure magic for families.
            </p>
          </div>
        </section>

        {/* Budget Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Budget Snapshot</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="text-sm text-gray-500 mb-1">Budget Option</div>
              <div className="text-3xl font-bold text-gray-900">$11,783</div>
              <div className="text-sm text-green-600 mt-2">Within budget</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500">
              <div className="text-sm text-gray-500 mb-1">Recommended</div>
              <div className="text-3xl font-bold text-gray-900">$13,233</div>
              <div className="text-sm text-amber-600 mt-2">Best value</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="text-sm text-gray-500 mb-1">Premium</div>
              <div className="text-3xl font-bold text-gray-900">$15,033</div>
              <div className="text-sm text-purple-600 mt-2">Top properties</div>
            </div>
          </div>
        </section>

        {/* Flights Confirmed */}
        <section className="bg-green-50 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">✅</div>
            <div>
              <h3 className="font-bold text-lg text-green-900 mb-2">Flights - $5,483</h3>
              <p className="text-green-800 mb-4">
                Prices as of January 2026 for all 6 passengers. Seattle to Barcelona via Dublin,
                plus quick Barcelona-Lisbon hops on Vueling.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA2LTIxagcIARIDU0VBcgcIARIDQkNOGh4SCjIwMjYtMDctMjFqBwgBEgNCQ05yBwgBEgNTRUFAAUABQAJAAkACQAJIAXABggELCP___________wGYAQE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/80 px-3 py-1 rounded-full text-sm text-green-700 hover:bg-white transition-colors"
                >
                  SEA ↔ BCN: $4,973 &rarr;
                </a>
                <a
                  href="https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTA3LTA2agcIARIDQkNOcgcIARIDTElTGh4SCjIwMjYtMDctMjBqBwgBEgNMSVNyBwgBEgNCQ05AAUABQAJAAkACQAJIAXABggELCP___________wGYAQE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/80 px-3 py-1 rounded-full text-sm text-green-700 hover:bg-white transition-colors"
                >
                  BCN ↔ LIS: $510 &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Portugal */}
        <section className="mt-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
          <h3 className="font-bold text-xl text-amber-900 mb-4">Why Portugal?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-amber-800">
            <div>
              <h4 className="font-semibold mb-2">Great for Kids</h4>
              <ul className="space-y-1 text-sm">
                <li>• World-class aquariums in both cities</li>
                <li>• Beautiful beaches with calm water</li>
                <li>• Fun trams, tuk-tuks, and boat rides</li>
                <li>• Kid-friendly food (custard tarts!)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Practical Benefits</h4>
              <ul className="space-y-1 text-sm">
                <li>• No car needed - trains work great</li>
                <li>• English widely spoken</li>
                <li>• Very safe for families</li>
                <li>• Slightly cheaper than Ireland option</li>
              </ul>
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
