import HeroSection from '@/components/HeroSection';
import ImageCard from '@/components/ImageCard';

const travelOptions = [
  {
    title: 'TGV High-Speed Train',
    description: 'Scenic 6h 46m journey through the Pyrenees at 320 km/h',
    image: '/images/paris/tgv-train.jpg',
    badge: 'Recommended',
    link: 'https://www.thetrainline.com/en-us/train-times/barcelona-to-paris',
  },
  {
    title: 'Return Flight',
    description: 'Transavia 3:45 PM from Paris Orly - quick 1h 40m hop back',
    image: '/images/paris/seine-river.jpg',
    badge: 'Flight',
    link: 'https://www.google.com/travel/flights?q=Paris%20ORY%20to%20Barcelona%20BCN%20July%204%202026%202%20passengers',
  },
];

const lodgingOptions = [
  {
    title: 'Hôtel Le Presbytère',
    description: '9.2 rating - Charming boutique hotel in the heart of Le Marais',
    image: '/images/paris/hotel-le-presbytere.jpg',
    badge: '$361',
    link: 'https://www.booking.com/hotel/fr/hotel-le-presbytere.html?checkin=2026-07-02&checkout=2026-07-04&group_adults=2&no_rooms=1',
  },
  {
    title: 'Hôtel Jules & Jim',
    description: '8.9 rating - Stylish design hotel with courtyard garden',
    image: '/images/paris/hotel-jules-jim.jpg',
    badge: '$283',
    link: 'https://www.booking.com/hotel/fr/jules-et-jim.html?checkin=2026-07-02&checkout=2026-07-04&group_adults=2&no_rooms=1',
  },
];

const activities = [
  {
    title: 'Eiffel Tower at Sunset',
    description: 'Book summit tickets in advance for the most romantic view',
    image: '/images/paris/eiffel-tower-sunset.jpg',
    link: 'https://www.toureiffel.paris/en/rates-opening-times',
  },
  {
    title: 'Musee d\'Orsay',
    description: 'Impressionist masterpieces in a stunning former train station',
    image: '/images/paris/musee-dorsay.jpg',
    link: 'https://www.musee-orsay.fr/en/visit/admission',
  },
  {
    title: 'Montmartre & Sacre-Coeur',
    description: 'Cobblestone streets, artists, and panoramic Paris views',
    image: '/images/paris/montmartre.jpg',
    link: 'https://www.sacre-coeur-montmartre.com/english/',
  },
  {
    title: 'Cafe Culture',
    description: 'Sidewalk cafes, croissants, and people-watching',
    image: '/images/paris/paris-cafe.jpg',
    link: 'https://www.timeout.com/paris/restaurants/best-paris-cafes',
  },
];

export default function ParisPage() {
  return (
    <div>
      <HeroSection
        title="Paris Getaway"
        subtitle="A romantic 2-night escape - just the two of you"
        imageUrl="/images/paris/eiffel-tower-sunset.jpg"
        imageAlt="Eiffel Tower at sunset"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/paris/seine-river.jpg"
                alt="Seine River in Paris"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-medium text-rose-600 uppercase tracking-wide">
                July 2-4, 2026
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                A couples side quest from Barcelona
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                While the kids enjoy quality time with the grandparents in Barcelona,
                slip away for 2 magical nights in the City of Light. Train through
                the Pyrenees, explore Le Marais, catch the Eiffel Tower at sunset,
                and stroll along the Seine.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                  2 Nights
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  Couples Only
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  ~$1,150 Budget
                </span>
                <a
                  href="https://www.google.com/maps/place/Le+Marais,+Paris,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Map
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16">
          <div className="bg-rose-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-rose-900">
              Two days in Paris to reconnect as a couple. No diaper bags, no
              bedtime negotiations - just croissants, wine, and romance.
            </p>
          </div>
        </section>

        {/* Gallery Row */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/paris/montmartre.jpg"
                alt="Montmartre and Sacre-Coeur"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/paris/place-des-vosges.jpg"
                alt="Place des Vosges in Le Marais"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/paris/paris-cafe.jpg"
                alt="Parisian cafe"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Travel Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Getting there & back</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {travelOptions.map((item) => (
              <ImageCard
                key={item.title}
                title={item.title}
                description={item.description}
                imageUrl={item.image}
                imageAlt={item.title}
                badge={item.badge}
                link={item.link}
              />
            ))}
          </div>
          <div className="mt-6 bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Travel Summary</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600"><strong>Outbound:</strong> TGV train from Barcelona Sants</p>
                <p className="text-gray-500">Departs 9:26 AM, arrives Paris Gare de Lyon 4:12 PM</p>
                <p className="text-rose-600 font-medium">$291 for 2 passengers</p>
              </div>
              <div>
                <p className="text-gray-600"><strong>Return:</strong> Transavia flight from Paris Orly</p>
                <p className="text-gray-500">Departs 3:45 PM, arrives Barcelona 5:25 PM</p>
                <p className="text-rose-600 font-medium">$234 for 2 passengers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lodging Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Where to stay: Le Marais</h2>
          <p className="text-gray-600 mb-6">
            Le Marais is perfect for a couples getaway - charming cobblestone streets,
            trendy boutiques, excellent restaurants, and walkable to major sights.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {lodgingOptions.map((item) => (
              <ImageCard
                key={item.title}
                title={item.title}
                description={item.description}
                imageUrl={item.image}
                imageAlt={item.title}
                badge={item.badge}
                link={item.link}
              />
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Romantic Paris activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <a
                key={activity.title}
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                className="image-card flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-40 h-40 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{activity.title}</h4>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Day by Day Section */}
        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 mb-16">
          <h3 className="font-bold text-xl text-gray-900 mb-6">Day by day itinerary</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-center">
                <div className="text-2xl mb-1">Thu</div>
                <div className="text-sm text-gray-500">Jul 2</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">Arrival Day</div>
                <div className="text-sm text-gray-600">
                  Morning TGV from Barcelona. Arrive 4:12 PM at Gare de Lyon. Metro to Le Marais,
                  check in, then evening stroll through the neighborhood. Dinner at a cozy bistro.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-center">
                <div className="text-2xl mb-1">Fri</div>
                <div className="text-sm text-gray-500">Jul 3</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">Full Paris Day</div>
                <div className="text-sm text-gray-600">
                  Morning at Musee d&apos;Orsay. Afternoon in Montmartre exploring Sacre-Coeur.
                  Eiffel Tower at sunset, then romantic Seine-side dinner.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-center">
                <div className="text-2xl mb-1">Sat</div>
                <div className="text-sm text-gray-500">Jul 4</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">Departure</div>
                <div className="text-sm text-gray-600">
                  Leisurely breakfast at a cafe. Final stroll through Le Marais and Place des Vosges.
                  Head to Orly by 2 PM for 3:45 flight back to Barcelona.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Section */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Budget breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">TGV train (2 passengers)</span>
              <span className="font-medium">$291</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Return flight (2 passengers)</span>
              <span className="font-medium">$234</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Hotel (2 nights)</span>
              <span className="font-medium">$283 - $361</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Meals & drinks</span>
              <span className="font-medium">~$200</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Activities & metro</span>
              <span className="font-medium">~$120</span>
            </div>
            <div className="flex justify-between items-center py-3 font-bold text-lg">
              <span>Estimated Total</span>
              <span className="text-rose-600">$1,128 - $1,206</span>
            </div>
          </div>
        </section>

        {/* Info Box */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Why this side trip works
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span>👴</span>
              <span>Kids are safe and happy with grandparents in Barcelona</span>
            </li>
            <li className="flex gap-3">
              <span>🚄</span>
              <span>Scenic TGV ride is part of the experience (faster than flying!)</span>
            </li>
            <li className="flex gap-3">
              <span>💕</span>
              <span>Rare opportunity for quality couple time mid-trip</span>
            </li>
            <li className="flex gap-3">
              <span>🥐</span>
              <span>Paris in summer - long days, outdoor cafes, magic</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
