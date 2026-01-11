import HeroSection from '@/components/HeroSection';
import ImageCard from '@/components/ImageCard';
import ActivityCard from '@/components/ActivityCard';

const highlights = [
  {
    title: 'Dingle Town',
    description: 'Ireland\'s most colorful harbor town with painted shopfronts and cozy pubs',
    image: '/images/dingle/dingle-harbor.jpg',
    badge: 'Town',
    link: 'https://www.theirishroadtrip.com/dingle-town/',
  },
  {
    title: 'Slea Head Drive',
    description: 'Dramatic clifftop road with ancient beehive huts and ocean views',
    image: '/images/dingle/slea-head.jpg',
    badge: 'Scenic',
    link: 'https://www.theirishroadtrip.com/slea-head-drive/',
  },
  {
    title: 'Inch Beach',
    description: '3 kilometers of golden sand - Ireland\'s most famous beach',
    image: '/images/dingle/inch-beach.jpg',
    badge: 'Beach',
    link: 'https://www.dingle-peninsula.ie/newsite/explore/townlands-and-villages-dingle-peninsula.html?view=article&id=115&catid=10',
  },
  {
    title: 'Traditional Music',
    description: 'Pubs with live Irish sessions - kids welcome until 9pm!',
    image: '/images/dingle/irish-pub.jpg',
    badge: 'Culture',
    link: 'https://www.theirishroadtrip.com/pubs-in-dingle/',
  },
];

const activities = [
  {
    title: 'Dingle Oceanworld Aquarium',
    description: 'Penguins, otters, sharks, and sea turtles. The kids will love it!',
    image: '/images/dingle/oceanworld.jpg',
    ages: 'All ages',
    cost: '~$65 family',
    link: 'https://dingle-oceanworld.ie/',
  },
  {
    title: 'Dingle Sheepdogs',
    description: 'Watch border collies herd sheep on a real Irish farm',
    image: '/images/dingle/sheepdogs.jpg',
    ages: '4+',
    cost: '~$60 family',
    link: 'https://dinglesheepdogs.com/',
  },
  {
    title: 'Sea Safari',
    description: 'RIB boat adventure to see dolphins, seals, and the Star Wars island',
    image: '/images/dingle/sea-safari.jpg',
    ages: '5+',
    cost: '~$300 family',
    link: 'https://dingleseasafari.com/',
  },
  {
    title: 'Kingdom Falconry',
    description: 'Handle hawks, falcons, and owls in a hands-on experience',
    image: '/images/dingle/falconry.jpg',
    ages: '6+',
    cost: '~$180 family',
    link: 'https://kingdomfalconry.com/',
  },
  {
    title: 'Beach Days',
    description: 'Inch Beach and Ventry Beach - sandcastles, paddling, and picnics',
    image: '/images/dingle/inch-beach.jpg',
    ages: 'All ages',
    cost: 'Free!',
    link: 'https://www.dingle-peninsula.ie/newsite/explore/townlands-and-villages-dingle-peninsula.html?view=article&id=115&catid=10',
  },
  {
    title: 'Murphy\'s Ice Cream',
    description: 'The most famous ice cream in Ireland - Dingle sea salt is legendary',
    image: '/images/dingle/murphys-ice-cream.jpg',
    ages: 'All ages',
    cost: '~$25 family',
    link: 'https://murphysicecream.ie/',
  },
];

const lodgingOptions = [
  {
    name: 'Stone Cottage in Cloghane',
    rating: '4.83',
    price: '$1,577/week',
    note: 'Traditional stone cottage, great value',
    link: 'https://www.airbnb.com/rooms/32892355',
  },
  {
    name: 'Harbourview Home',
    rating: '4.9',
    price: '$2,729/week',
    note: 'Beachfront, child-friendly',
    link: 'https://www.airbnb.com/rooms/42656518',
  },
  {
    name: 'Modern Home near Dingle',
    rating: '4.98',
    price: '$4,052/week',
    note: '5 min to town, beautiful views',
    link: 'https://www.airbnb.com/rooms/53721701',
  },
];

export default function DinglePage() {
  return (
    <div>
      <HeroSection
        title="Dingle Peninsula"
        subtitle="Dolphins, ancient ruins, and the most colorful town in Ireland"
        imageUrl="/images/dingle/slea-head.jpg"
        imageAlt="Dingle Peninsula Cliffs"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                July 6-13, 2026
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                A week in Ireland&apos;s magical southwest
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our first week in rural Ireland. The Dingle Peninsula is known as the most
                family-friendly part of Ireland - colorful fishing villages, calm beaches
                perfect for kids, and enough activities to fill a month. Plus, the ice cream
                is legendary.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  1 Week
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  $1,577-2,729
                </span>
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  414 homes available
                </span>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dingle/dingle-harbor.jpg"
                alt="Dingle landscape"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-blue-900">
              The kids will be talking about the dolphins and sheepdogs for years.
              This is Ireland at its most magical.
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What makes Dingle special</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">A glimpse of Dingle</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden col-span-2 md:col-span-1 md:row-span-2 md:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dingle/dingle-harbor.jpg"
                alt="Dingle harbor boats"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dingle/inch-beach.jpg"
                alt="Inch Beach"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dingle/slea-head.jpg"
                alt="Slea Head Drive"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dingle/irish-pub.jpg"
                alt="Irish pub"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dingle/murphys-ice-cream.jpg"
                alt="Ice cream"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-blue-50 rounded-2xl p-8">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Dingle tips from our research
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span>🚗</span>
              <span>Slea Head Drive is only 30 minutes but you&apos;ll want half a day to stop at all the viewpoints</span>
            </li>
            <li className="flex gap-3">
              <span>🐑</span>
              <span>Book the sheepdog demo in advance - it&apos;s one of the most popular activities</span>
            </li>
            <li className="flex gap-3">
              <span>🍦</span>
              <span>Murphy&apos;s Dingle Sea Salt ice cream is a must - the kids will beg for seconds</span>
            </li>
            <li className="flex gap-3">
              <span>🎵</span>
              <span>Hit a pub around 7pm for live traditional music - kids welcome!</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
