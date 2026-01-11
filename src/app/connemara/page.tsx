import HeroSection from '@/components/HeroSection';
import ImageCard from '@/components/ImageCard';
import ActivityCard from '@/components/ActivityCard';

const highlights = [
  {
    title: 'Kylemore Abbey',
    description: 'A fairy-tale castle on a lake with gardens and wild ponies',
    image: '/images/connemara/kylemore-abbey.jpg',
    badge: 'Must See',
    link: 'https://www.kylemoreabbey.com/',
  },
  {
    title: 'Connemara National Park',
    description: 'Wild ponies, hiking trails, and stunning mountain views',
    image: '/images/connemara/connemara-pony.jpg',
    badge: 'Free!',
    link: 'https://www.nationalparks.ie/connemara/',
  },
  {
    title: 'Sky Road',
    description: 'One of Ireland\'s most scenic drives with Atlantic views',
    image: '/images/connemara/sky-road.jpg',
    badge: 'Scenic',
    link: 'https://www.theirishroadtrip.com/sky-road-clifden/',
  },
  {
    title: 'Galway City',
    description: 'Vibrant university town with street performers and great food',
    image: '/images/connemara/galway-city.jpg',
    badge: 'Day Trip',
    link: 'https://www.theirishroadtrip.com/things-to-do-in-galway/',
  },
];

const activities = [
  {
    title: 'Connemara National Park',
    description: 'Spot wild Connemara ponies, explore trails, free playground',
    image: '/images/connemara/connemara-pony.jpg',
    ages: 'All ages',
    cost: 'FREE',
    link: 'https://www.nationalparks.ie/connemara/',
  },
  {
    title: 'Kylemore Abbey',
    description: 'Fairy-tale castle, History Hunters trail for kids, Victorian gardens',
    image: '/images/connemara/kylemore-abbey.jpg',
    ages: 'All ages',
    cost: '~$96 (kids free!)',
    link: 'https://www.kylemoreabbey.com/',
  },
  {
    title: 'Wildlands Adventure Park',
    description: 'Zip-lining, aerial trekking, climbing walls - adventure awaits!',
    image: '/images/connemara/wildlands.jpg',
    ages: '4+',
    cost: '~$100-200 family',
    link: 'https://www.wildlands.ie/',
  },
  {
    title: 'Glengowla Mines',
    description: 'Explore underground mines and pan for gold - keep what you find!',
    image: '/images/connemara/glengowla-mines.jpg',
    ages: '5+',
    cost: '~$48 family',
    link: 'https://glengowlamines.ie/',
  },
  {
    title: 'Killary Sheep Farm',
    description: 'Watch sheepdogs work, bottle-feed lambs, stunning fjord views',
    image: '/images/connemara/killary-sheep-farm.png',
    ages: 'All ages',
    cost: '~$60 family',
    link: 'https://killarysheepfarm.com/',
  },
  {
    title: 'Brigit\'s Garden',
    description: 'Celtic fairy village, nature trails, giant playground',
    image: '/images/connemara/brigits-garden.jpg',
    ages: 'All ages',
    cost: '~$45 family',
    link: 'https://brigitsgarden.ie/',
  },
];

const lodgingOptions = [
  {
    name: 'Cottage in Lettermore',
    rating: '5.0',
    price: '$2,056/week',
    note: 'Irish-Kiwi family home',
    link: 'https://www.airbnb.com/s/Connemara--Ireland/homes?checkin=2026-07-13&checkout=2026-07-20&adults=2&children=4',
  },
  {
    name: 'Gamekeepers Lodge',
    rating: '4.94',
    price: '$2,062/week',
    note: 'On Ashford Castle Estate!',
    link: 'https://www.airbnb.com/rooms/32120199',
  },
  {
    name: 'Lakeside Lodge',
    rating: '5.0',
    price: '$4,003/week',
    note: '4BR with lake views',
    link: 'https://www.airbnb.com/rooms/1028126824166569456',
  },
];

export default function ConnemaraPage() {
  return (
    <div>
      <HeroSection
        title="Connemara"
        subtitle="Wild Atlantic beauty - ponies, castles, and untamed landscapes"
        imageUrl="/images/connemara/kylemore-abbey.jpg"
        imageAlt="Kylemore Abbey"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/connemara/sky-road.jpg"
                alt="Connemara landscape"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                July 13-20, 2026
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                Ireland&apos;s wild, dramatic west
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                From the colorful buzz of Dingle, we head north to something completely
                different. Connemara is wilder, quieter, more dramatic. Mountain bogs,
                wild ponies, a fairy-tale abbey, and the kind of landscapes that make you
                understand why Ireland inspires so many stories.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  1 Week
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  $1,437-2,062
                </span>
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  547 homes available
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16">
          <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-purple-900">
              When the kids spot their first wild Connemara pony,
              you&apos;ll see the magic of Ireland in their eyes.
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Connemara highlights</h2>
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

        {/* The Drive */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">🚗</div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">The drive from Dingle</h3>
              <p className="text-gray-600">~2.5 hours via scenic coastal routes</p>
            </div>
          </div>
          <p className="text-gray-600">
            The drive itself is part of the adventure. Winding roads through green hills,
            past ancient stone walls, with surprise views of the Atlantic around every corner.
            Pack snacks and plan for photo stops!
          </p>
        </section>

        {/* Activities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Things to do with kids (ages 2, 4, 7, 10)
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

        {/* Galway Day Trip */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
            <h3 className="font-bold text-xl text-gray-900 mb-6">
              Galway City - a perfect day trip
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Just 1.5 hours from Connemara, Galway is one of Ireland&apos;s most vibrant cities.
                  Cobblestone streets, amazing street performers, and a lively waterfront.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2">
                    <span>🎭</span>
                    <span>Street performers on Quay Street</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🐠</span>
                    <span>Galway Atlantaquaria (aquarium)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🏰</span>
                    <span>Spanish Arch & riverside walks</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🎡</span>
                    <span>South Park playground</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-48 md:h-auto rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/connemara/galway-city.jpg"
                  alt="Galway city"
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
                  idx === 1 ? 'border-purple-500' : 'border-transparent hover:border-gray-200'
                }`}
              >
                {idx === 1 && (
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full mb-3">
                    Our Pick
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">The wild west of Ireland</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/connemara/kylemore-abbey.jpg"
                alt="Kylemore Abbey"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/connemara/connemara-pony.jpg"
                alt="Connemara ponies"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/connemara/sky-road.jpg"
                alt="Sky Road views"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/connemara/galway-city.jpg"
                alt="Galway city"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Final leg info */}
        <section className="bg-gray-900 text-white rounded-2xl p-8">
          <h3 className="font-bold text-lg mb-4">Getting home</h3>
          <p className="text-gray-300 mb-4">
            From Connemara, it&apos;s about 3.5 hours to Dublin Airport. We&apos;ll take our time on
            July 20th, maybe with one last stop along the way, to catch our flight home on the 21st.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏠</span>
            <span className="text-gray-300">
              Home to Seattle just in time for the family reunion on July 23rd!
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
