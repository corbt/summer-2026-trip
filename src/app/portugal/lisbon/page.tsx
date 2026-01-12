import HeroSection from '@/components/HeroSection';
import ImageCard from '@/components/ImageCard';
import ActivityCard from '@/components/ActivityCard';

const highlights = [
  {
    title: 'Alfama District',
    description: 'Ancient Moorish neighborhood with narrow streets, fado music, and stunning views',
    image: '/images/lisbon/alfama-district.jpg',
    badge: 'Historic',
    link: 'https://www.visitlisboa.com/en/places/alfama',
  },
  {
    title: 'Belém Tower',
    description: 'Iconic 16th-century fortress and UNESCO World Heritage Site',
    image: '/images/lisbon/belem-tower.jpg',
    badge: 'Landmark',
    link: 'https://www.torrebelem.gov.pt/',
  },
  {
    title: 'Tram 28',
    description: 'Iconic yellow tram winding through historic neighborhoods',
    image: '/images/lisbon/tram-28.jpg',
    badge: 'Experience',
    link: 'https://www.visitlisboa.com/en/places/tram-28',
  },
  {
    title: 'Pastéis de Belém',
    description: 'World-famous custard tarts since 1837 - a must-try!',
    image: '/images/lisbon/pasteis-de-belem.jpg',
    badge: 'Food',
    link: 'https://pasteisdebelem.pt/',
  },
];

const activities = [
  {
    title: 'Oceanário de Lisboa',
    description: 'One of Europe\'s largest aquariums with sharks, rays, otters, and penguins',
    image: '/images/lisbon/oceanario.jpg',
    ages: 'All ages',
    cost: '~$90 family',
    link: 'https://www.oceanario.pt/en',
  },
  {
    title: 'Hippotrip Amphibious Tour',
    description: 'Bus that turns into a boat! Kids love the splash into the Tagus River',
    image: '/images/lisbon/alfama-district.jpg',
    ages: 'All ages',
    cost: '~$150 family',
    link: 'https://www.hippotrip.com/',
  },
  {
    title: 'Sintra Day Trip',
    description: 'Fairytale castles including colorful Pena Palace and mysterious Quinta da Regaleira',
    image: '/images/lisbon/sintra-pena-palace.jpg',
    ages: 'All ages',
    cost: '~$200 family',
    link: 'https://www.sintra-portugal.com/',
  },
  {
    title: 'LX Factory',
    description: 'Creative hub with quirky shops, street art, and the coolest bookstore in a warehouse',
    image: '/images/lisbon/alfama-district.jpg',
    ages: 'All ages',
    cost: 'Free!',
    link: 'https://lxfactory.com/',
  },
  {
    title: 'Tuk-Tuk Tour',
    description: 'Zip through Lisbon\'s hills in a fun three-wheeled adventure',
    image: '/images/lisbon/tram-28.jpg',
    ages: 'All ages',
    cost: '~$120 family',
    link: 'https://www.getyourguide.com/lisbon-l42/lisbon-tuk-tuk-tours-tc175/',
  },
  {
    title: 'Cable Car at Parque das Nações',
    description: 'Scenic ride over the modern waterfront district near the aquarium',
    image: '/images/lisbon/oceanario.jpg',
    ages: 'All ages',
    cost: '~$40 family',
    link: 'https://www.telecabinelisboa.pt/',
  },
];

const lodgingOptions = [
  {
    name: 'Family Apartment Alfama',
    rating: '4.85',
    price: '$2,200/week',
    note: 'Central location, great value',
    link: 'https://www.airbnb.com/s/Lisbon--Portugal/homes',
  },
  {
    name: 'Modern Home Belém',
    rating: '4.92',
    price: '$3,050/week',
    note: 'Near monuments, kid-friendly',
    link: 'https://www.airbnb.com/s/Lisbon--Portugal/homes',
  },
  {
    name: 'Luxury Flat Chiado',
    rating: '4.95',
    price: '$3,900/week',
    note: 'Premium location, stunning views',
    link: 'https://www.airbnb.com/s/Lisbon--Portugal/homes',
  },
];

export default function LisbonPage() {
  return (
    <div>
      <HeroSection
        title="Lisbon"
        subtitle="Seven hills of history, tiled facades, and the world's best custard tarts"
        imageUrl="/images/lisbon/alfama-district.jpg"
        imageAlt="Lisbon cityscape with Alfama district"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">
                July 6-13, 2026
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                A week in Portugal&apos;s sun-drenched capital
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Lisbon is made for families. Ride vintage trams up impossible hills,
                explore one of Europe&apos;s best aquariums, and take a bus that splashes
                into the river. Plus, the fairytale castles of Sintra are just 40 minutes
                away. And did we mention the custard tarts?
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  1 Week
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  $2,200-3,900
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Kid-friendly city
                </span>
                <a
                  href="https://www.google.com/maps/place/Lisbon,+Portugal"
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
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lisbon/belem-tower.jpg"
                alt="Belém Tower Lisbon"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-amber-900">
              Trams, castles, custard tarts, and an aquarium the kids won&apos;t want to leave.
              Lisbon is pure magic for families.
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What makes Lisbon special</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Activities for the kids (ages 2, 4, 7, 10)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.title}
                title={activity.title}
                description={activity.description}
                imageUrl={activity.image}
                ages={activity.ages}
                cost={activity.cost}
                link={activity.link}
              />
            ))}
          </div>
        </section>

        {/* Lodging Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Where we might stay</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {lodgingOptions.map((option, idx) => (
              <a
                key={option.name}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white rounded-xl p-6 shadow-sm border-2 block hover:shadow-md transition-shadow ${
                  idx === 0 ? 'border-green-500' : 'border-transparent hover:border-gray-200'
                }`}
              >
                {idx === 0 && (
                  <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mb-3">
                    Best Value
                  </span>
                )}
                <h3 className="font-semibold text-gray-900 mb-2">{option.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-gray-600">{option.rating}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{option.price}</div>
                <p className="text-sm text-gray-500">{option.note}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">A glimpse of Lisbon</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden col-span-2 md:col-span-1 md:row-span-2 md:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lisbon/alfama-district.jpg"
                alt="Lisbon street"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lisbon/belem-tower.jpg"
                alt="Belém Tower"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lisbon/tram-28.jpg"
                alt="Yellow tram"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lisbon/sintra-pena-palace.jpg"
                alt="Sintra Palace"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lisbon/pasteis-de-belem.jpg"
                alt="Pastéis de Belém"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-amber-50 rounded-2xl p-8">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Lisbon tips from our research
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span>🚃</span>
              <span>Take Tram 28 early morning or late afternoon to avoid crowds</span>
            </li>
            <li className="flex gap-3">
              <span>🏰</span>
              <span>Book Sintra tickets online in advance - Pena Palace sells out</span>
            </li>
            <li className="flex gap-3">
              <span>🥧</span>
              <span>Pastéis de Belém opens at 8am - go early for warm tarts with no line</span>
            </li>
            <li className="flex gap-3">
              <span>🐠</span>
              <span>The Oceanário is best on weekday mornings - give it at least 3 hours</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
