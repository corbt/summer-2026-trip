import HeroSection from '@/components/HeroSection';
import ImageCard from '@/components/ImageCard';
import ActivityCard from '@/components/ActivityCard';

const highlights = [
  {
    title: 'Ribeira District',
    description: 'UNESCO World Heritage waterfront with colorful buildings along the Douro',
    image: '/images/porto/ribeira-waterfront.jpg',
    badge: 'Historic',
    link: 'https://www.visitporto.travel/en/what-to-see/ribeira',
  },
  {
    title: 'Livraria Lello',
    description: 'Stunning neo-Gothic bookstore that inspired Harry Potter\'s Hogwarts',
    image: '/images/porto/livraria-lello.jpg',
    badge: 'Iconic',
    link: 'https://www.livrarialello.pt/en-us/',
  },
  {
    title: 'São Bento Station',
    description: 'Railway station with 20,000 stunning blue and white azulejo tiles',
    image: '/images/porto/sao-bento-station.jpg',
    badge: 'Architecture',
    link: 'https://www.visitporto.travel/en/what-to-see/monuments/sao-bento-train-station',
  },
  {
    title: 'Dom Luís I Bridge',
    description: 'Iconic double-deck iron bridge with panoramic city views',
    image: '/images/porto/dom-luis-bridge.jpg',
    badge: 'Landmark',
    link: 'https://www.visitporto.travel/en/what-to-see/monuments/d-luis-bridge',
  },
];

const activities = [
  {
    title: 'World of Discoveries',
    description: 'Interactive museum with boat ride through Portuguese maritime history',
    image: '/images/porto/ribeira-waterfront.jpg',
    ages: 'All ages',
    cost: '~$70 family',
    link: 'https://www.worldofdiscoveries.com/',
  },
  {
    title: 'Douro River Cruise',
    description: 'Six bridges cruise along Porto\'s stunning riverfront',
    image: '/images/porto/dom-luis-bridge.jpg',
    ages: 'All ages',
    cost: '~$90 family',
    link: 'https://www.visitporto.travel/en/what-to-do/tours-cruises',
  },
  {
    title: 'Crystal Palace Gardens',
    description: 'Beautiful gardens with roaming peacocks and amazing views',
    image: '/images/porto/ribeira-waterfront.jpg',
    ages: 'All ages',
    cost: 'Free!',
    link: 'https://www.visitporto.travel/en/what-to-see/parks-gardens/jardins-do-palacio-de-cristal',
  },
  {
    title: 'Matosinhos Beach Day',
    description: 'Porto\'s best beach - calm waters, fresh seafood, and sandcastles',
    image: '/images/sesimbra/arrabida-beach.jpg',
    ages: 'All ages',
    cost: 'Free!',
    link: 'https://www.visitporto.travel/en/what-to-see/beaches/matosinhos',
  },
  {
    title: 'Douro Valley Day Trip',
    description: 'Scenic train ride through UNESCO World Heritage vineyard landscapes',
    image: '/images/porto/dom-luis-bridge.jpg',
    ages: 'All ages',
    cost: '~$100 family',
    link: 'https://www.visitporto.travel/en/what-to-do/tours-cruises/douro-valley',
  },
  {
    title: 'Sea Life Porto',
    description: 'Aquarium with tunnel walkway, touch pools, and shark encounters',
    image: '/images/lisbon/oceanario.jpg',
    ages: 'All ages',
    cost: '~$80 family',
    link: 'https://www.visitsealife.com/porto/',
  },
];

const lodgingOptions = [
  {
    name: 'Riverside Apartment Ribeira',
    rating: '4.88',
    price: '$2,000/week',
    note: 'Waterfront views, walkable',
    link: 'https://www.airbnb.com/s/Porto--Portugal/homes',
  },
  {
    name: 'Family Home Foz do Douro',
    rating: '4.91',
    price: '$2,250/week',
    note: 'Near beach, quiet area',
    link: 'https://www.airbnb.com/s/Porto--Portugal/homes',
  },
  {
    name: 'Luxury Flat Downtown',
    rating: '4.95',
    price: '$2,500/week',
    note: 'Premium location, modern',
    link: 'https://www.airbnb.com/s/Porto--Portugal/homes',
  },
];

export default function PortoPage() {
  return (
    <div>
      <HeroSection
        title="Porto"
        subtitle="Riverside charm, port wine, and the most magical bookstore in the world"
        imageUrl="/images/porto/ribeira-waterfront.jpg"
        imageAlt="Porto riverfront with Dom Luís I Bridge"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                July 13-20, 2026
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                A week in Portugal&apos;s charming northern gem
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Porto is smaller and more walkable than Lisbon, with a cozy riverside
                atmosphere. Visit the bookstore that inspired Harry Potter, cruise under
                six historic bridges, watch peacocks in crystal-palace gardens, and take
                a scenic train ride through wine country. The Douro Valley is breathtaking.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  1 Week
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  $2,000-2,500
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Walkable city
                </span>
                <a
                  href="https://www.google.com/maps/place/Porto,+Portugal"
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
                src="/images/porto/dom-luis-bridge.jpg"
                alt="Porto Ribeira waterfront"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16">
          <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-purple-900">
              Peacocks in the gardens, boats on the river, and a bookstore straight out
              of Hogwarts. Porto is pure enchantment.
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What makes Porto special</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">A glimpse of Porto</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden col-span-2 md:col-span-1 md:row-span-2 md:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/porto/ribeira-waterfront.jpg"
                alt="Porto waterfront"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/porto/livraria-lello.jpg"
                alt="Livraria Lello"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/porto/sao-bento-station.jpg"
                alt="São Bento Station tiles"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/porto/dom-luis-bridge.jpg"
                alt="Dom Luís I Bridge"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sesimbra/arrabida-beach.jpg"
                alt="Matosinhos Beach"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-purple-50 rounded-2xl p-8">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Porto tips from our research
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span>📚</span>
              <span>Book Livraria Lello tickets online - buy a book and the €5 entry is refunded</span>
            </li>
            <li className="flex gap-3">
              <span>🚂</span>
              <span>The Douro Valley train leaves from São Bento - stunning 2-hour scenic ride</span>
            </li>
            <li className="flex gap-3">
              <span>🦚</span>
              <span>Crystal Palace Gardens are magical at sunset - bring a picnic</span>
            </li>
            <li className="flex gap-3">
              <span>🏖️</span>
              <span>Matosinhos beach is 20 min by metro - stay for fresh grilled fish at the seafront restaurants</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
