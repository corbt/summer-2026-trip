import HeroSection from '@/components/HeroSection';
import ImageCard from '@/components/ImageCard';
import ActivityCard from '@/components/ActivityCard';

const highlights = [
  {
    title: 'Sesimbra Castle',
    description: '9th-century Moorish fortress perched on cliffs with panoramic views of the bay',
    image: '/images/sesimbra/sesimbra-castle.jpg',
    badge: 'Castle',
    link: 'https://www.visitportugal.com/en/content/castelo-de-sesimbra',
  },
  {
    title: 'Sesimbra Beach',
    description: 'Beautiful sheltered bay with calm waters perfect for families',
    image: '/images/sesimbra/sesimbra-beach.jpg',
    badge: 'Beach',
    link: 'https://www.visitportugal.com/en/destinos/lisboa-regiao/sesimbra',
  },
  {
    title: 'Arrábida Natural Park',
    description: 'Stunning protected coastline with hidden coves and crystal-clear waters',
    image: '/images/sesimbra/arrabida-beach.jpg',
    badge: 'Nature',
    link: 'https://www.visitportugal.com/en/content/parque-natural-da-arrabida',
  },
  {
    title: 'Fishing Village',
    description: 'Authentic working harbor with fresh seafood and traditional Portuguese life',
    image: '/images/sesimbra/sesimbra-beach.jpg',
    badge: 'Culture',
    link: 'https://www.visitportugal.com/en/destinos/lisboa-regiao/sesimbra',
  },
];

const activities = [
  {
    title: 'Sesimbra Castle Visit',
    description: 'Explore the medieval fortress with incredible views over the town and Atlantic Ocean',
    image: '/images/sesimbra/sesimbra-castle.jpg',
    ages: 'All ages',
    cost: 'Free!',
    link: 'https://www.visitportugal.com/en/content/castelo-de-sesimbra',
  },
  {
    title: 'Dinosaur Tracks at Pedra da Mua',
    description: 'See 170-million-year-old dinosaur footprints preserved in coastal rocks - kids will love it!',
    image: '/images/sesimbra/cabo-espichel.jpg',
    ages: 'All ages',
    cost: 'Free!',
    link: 'https://www.visitportugal.com/en/content/santuario-nossa-senhora-do-cabo-espichel',
  },
  {
    title: 'Arrábida Beach Day',
    description: 'Visit pristine beaches like Praia de Galapinhos - voted one of Europe\'s best',
    image: '/images/sesimbra/arrabida-beach.jpg',
    ages: 'All ages',
    cost: 'Free!',
    link: 'https://www.visitportugal.com/en/content/parque-natural-da-arrabida',
  },
  {
    title: 'Dolphin Watching Boat Trip',
    description: 'Spot dolphins in the Sado Estuary - resident population of bottlenose dolphins',
    image: '/images/sesimbra/sesimbra-beach.jpg',
    ages: '3+',
    cost: '~$120 family',
    link: 'https://www.vertigem-azul.com/',
  },
  {
    title: 'Snorkeling & Kayaking',
    description: 'Crystal-clear waters of Arrábida are perfect for spotting fish and exploring coves',
    image: '/images/sesimbra/arrabida-beach.jpg',
    ages: '5+',
    cost: '~$80 family',
    link: 'https://www.arrabidaexperience.com/',
  },
  {
    title: 'Fresh Seafood at the Harbor',
    description: 'Watch fishing boats come in and eat the catch of the day at harborside restaurants',
    image: '/images/sesimbra/sesimbra-beach.jpg',
    ages: 'All ages',
    cost: '~$60 family meal',
    link: 'https://www.tripadvisor.com/Restaurants-g189163-Sesimbra_Setubal_District_Alentejo.html',
  },
];

const lodgingOptions = [
  {
    name: 'Sesimbra Beach Apartment',
    rating: '4.85',
    price: '$1,400/week',
    note: 'Steps from beach, great value',
    link: 'https://www.airbnb.com/s/Sesimbra--Portugal/homes',
  },
  {
    name: 'Family Villa with Pool',
    rating: '4.92',
    price: '$1,800/week',
    note: 'Private pool, ocean views',
    link: 'https://www.airbnb.com/s/Sesimbra--Portugal/homes',
  },
  {
    name: 'Sana Sesimbra Hotel',
    rating: '4.5',
    price: '$1,600/week',
    note: 'Beachfront hotel, family rooms',
    link: 'https://www.booking.com/hotel/pt/sesimbra.html',
  },
];

export default function SesimbraPage() {
  return (
    <div>
      <HeroSection
        title="Sesimbra"
        subtitle="Medieval castle, dinosaur tracks, and a perfect family beach"
        imageUrl="/images/sesimbra/sesimbra-beach.jpg"
        imageAlt="Sesimbra coastline"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-medium text-teal-600 uppercase tracking-wide">
                July 10-12, 2026
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                A seaside escape with medieval charm
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Just 40 minutes south of Lisbon, Sesimbra is an authentic Portuguese
                fishing village with a 9th-century castle perched dramatically above.
                The sheltered bay has calm waters perfect for kids, and nearby you&apos;ll
                find actual dinosaur footprints and some of Europe&apos;s most beautiful
                hidden beaches in Arrábida Natural Park.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                  2-3 Nights
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  $1,400-1,800
                </span>
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  Castle + Beach
                </span>
                <a
                  href="https://www.google.com/maps/place/Sesimbra,+Portugal"
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
                src="/images/sesimbra/sesimbra-castle.jpg"
                alt="Sesimbra Castle view"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16">
          <div className="bg-teal-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-teal-900">
              A castle on the cliffs, dinosaur footprints on the rocks, and dolphins
              in the bay. Sesimbra is pure adventure for kids.
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What makes Sesimbra special</h2>
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

        {/* Dinosaur Callout */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🦕</div>
              <div>
                <h3 className="font-bold text-lg text-amber-900 mb-2">Don&apos;t Miss: Dinosaur Tracks!</h3>
                <p className="text-amber-800">
                  At Pedra da Mua near Cape Espichel, you can see 170-million-year-old sauropod
                  footprints preserved in the coastal limestone. The site also has a dramatic
                  clifftop sanctuary. It&apos;s about 20 minutes from Sesimbra and completely free.
                  The kids will talk about seeing &quot;real dinosaur footprints&quot; for years!
                </p>
              </div>
            </div>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">A glimpse of Sesimbra</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden col-span-2 md:col-span-1 md:row-span-2 md:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sesimbra/sesimbra-beach.jpg"
                alt="Sesimbra beach"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sesimbra/sesimbra-castle.jpg"
                alt="Castle views"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sesimbra/arrabida-beach.jpg"
                alt="Arrábida beaches"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sesimbra/arrabida-beach.jpg"
                alt="Marine life"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sesimbra/sesimbra-beach.jpg"
                alt="Fishing harbor"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-teal-50 rounded-2xl p-8">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Sesimbra tips from our research
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span>🏰</span>
              <span>Visit the castle in late afternoon for golden light and cooler temperatures</span>
            </li>
            <li className="flex gap-3">
              <span>🏖️</span>
              <span>Arrábida beaches require parking reservations in summer - book ahead online</span>
            </li>
            <li className="flex gap-3">
              <span>🦕</span>
              <span>Dinosaur tracks are best seen at low tide - check tide times before going</span>
            </li>
            <li className="flex gap-3">
              <span>🐟</span>
              <span>For the freshest fish, eat at restaurants near the fish market around 1pm when boats return</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
