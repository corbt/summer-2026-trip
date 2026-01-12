'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ImageCard from '@/components/ImageCard';

const highlights = [
  {
    title: 'Temple Bar',
    description: 'Colorful cobblestone streets, live music, and the famous Irish pub scene',
    image: '/images/dublin/temple-bar.jpg',
    badge: 'Must See',
    link: 'https://www.visitdublin.com/see-do/details/temple-bar',
  },
  {
    title: 'Trinity College',
    description: 'Home to the legendary Book of Kells and stunning old library',
    image: '/images/dublin/trinity-college.jpg',
    badge: 'Historic',
    link: 'https://www.tcd.ie/visitors/',
  },
  {
    title: "St. Stephen's Green",
    description: 'Beautiful Victorian park perfect for kids to run around after the flight',
    image: '/images/dublin/st-stephens-green.jpg',
    badge: 'Family',
    link: 'https://ststephensgreen.ie/',
  },
  {
    title: 'Phoenix Park',
    description: 'One of Europe\'s largest parks with wild deer roaming free',
    image: '/images/dublin/phoenix-park-deer.jpg',
    badge: 'Nature',
    link: 'https://phoenixpark.ie/',
  },
];

const hotel = {
  name: 'Maldron Hotel Parnell Square',
  rating: '8.5',
  reviews: '9,608',
  price: '$545',
  priceNote: '2 nights',
  location: 'Parnell Square, Dublin City Centre',
  features: ['4-star hotel', 'Family rooms available', 'Free cancellation', 'Walking distance to attractions'],
  link: 'https://www.booking.com/hotel/ie/maldron-hotel-parnell-square.html?checkin=2026-06-22&checkout=2026-06-24&group_adults=2&group_children=4',
  image: '/images/dublin/maldron-hotel.jpg',
};

export default function DublinPage() {
  const [deerClicks, setDeerClicks] = useState(0);
  const [showGuineaPig, setShowGuineaPig] = useState(false);
  const [floatingIceCream, setFloatingIceCream] = useState(false);
  const [showJuggler, setShowJuggler] = useState(false);
  const [spinningClocks, setSpinningClocks] = useState(false);

  const handleDeerClick = () => {
    const newClicks = deerClicks + 1;
    setDeerClicks(newClicks);
    if (newClicks >= 5) setShowGuineaPig(true);
  };

  const handleIceCreamClick = () => {
    setFloatingIceCream(true);
    setTimeout(() => setFloatingIceCream(false), 3000);
  };

  const handleTheaterClick = () => {
    setShowJuggler(true);
  };

  const handleClockClick = () => {
    setSpinningClocks(true);
    setTimeout(() => setSpinningClocks(false), 3000);
  };

  return (
    <div>
      <style>{`
        @keyframes juggle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-30px) rotate(90deg); }
          50% { transform: translateY(0) rotate(180deg); }
          75% { transform: translateY(-30px) rotate(270deg); }
        }
        @keyframes spin-float {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(1080deg); }
        }
      `}</style>

      {/* Floating Ice Cream */}
      {floatingIceCream && (
        <>
          {Array(25).fill(0).map((_, i) => (
            <div
              key={i}
              className="fixed text-5xl pointer-events-none z-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: 'bounce 0.5s infinite',
                animationDelay: `${Math.random() * 0.3}s`,
              }}
            >
              {['🍦', '🍨', '🧁', '🍰'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </>
      )}

      {/* Spinning Clocks */}
      {spinningClocks && (
        <>
          {Array(20).fill(0).map((_, i) => (
            <div
              key={i}
              className="fixed text-4xl pointer-events-none z-50"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '-50px',
                animation: `spin-float ${2 + Math.random() * 2}s linear forwards`,
              }}
            >
              ⏰
            </div>
          ))}
        </>
      )}

      {/* Guinea Pig Easter Egg */}
      {showGuineaPig && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowGuineaPig(false)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&q=80"
              alt="Guinea pig"
              className="rounded-2xl max-w-md"
              style={{ animation: 'pop 0.5s ease-out' }}
            />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange-400 text-black font-bold px-6 py-2 rounded-full text-xl animate-bounce">
              GUINEA PIG FRIEND!
            </div>
            <style>{`@keyframes pop { 0% { transform: scale(0) rotate(-180deg); } 100% { transform: scale(1) rotate(0deg); } }`}</style>
          </div>
        </div>
      )}

      {/* Juggler Easter Egg */}
      {showJuggler && (
        <div className="fixed inset-0 bg-purple-900/80 flex items-center justify-center z-50 p-4" onClick={() => setShowJuggler(false)}>
          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-center gap-4 mb-8">
              <div className="text-6xl" style={{ animation: 'juggle 0.8s infinite' }}>🎾</div>
              <div className="text-6xl" style={{ animation: 'juggle 0.8s infinite 0.2s' }}>🎾</div>
              <div className="text-6xl" style={{ animation: 'juggle 0.8s infinite 0.4s' }}>🎾</div>
            </div>
            <div className="text-9xl mb-4">🤹</div>
            <div className="bg-white text-purple-900 font-bold px-8 py-4 rounded-full text-2xl">
              GRAFTON STREET JUGGLER!
            </div>
          </div>
        </div>
      )}

      <HeroSection
        title="Dublin"
        subtitle="Our gateway to adventure - 2 nights to explore"
        imageUrl="https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1600&q=80"
        imageAlt="Temple Bar, Dublin"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                June 22-23, 2026
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                Where the adventure begins
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                After our overnight flight from Seattle, we&apos;ll have two days to shake off the
                jet lag and soak in the charm of Ireland&apos;s capital. Colorful Georgian doors,
                cozy pubs with live music, and plenty of green spaces for the kids to explore.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  2 Nights
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Maldron Hotel
                </span>
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  $545 total
                </span>
                <a
                  href="https://www.google.com/maps/place/Dublin,+Ireland"
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
                src="https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80"
                alt="Dublin streets"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16">
          <div className="bg-green-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-green-900">
              Just enough time to fall in love with Dublin before
              heading south to the sunshine.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What we might see</h2>
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

        {/* Where We're Staying */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Where we&apos;re staying</h2>
          <a
            href={hotel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl shadow-sm border-2 border-green-500 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="grid md:grid-cols-3 gap-0">
              <div className="relative h-64 md:h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mb-2">
                      Booked
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                    <p className="text-gray-500 text-sm">{hotel.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">
                        {hotel.rating}
                      </span>
                      <span className="text-sm text-gray-500">Very Good</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{hotel.reviews} reviews</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">{hotel.price}</span>
                    <span className="text-gray-500 text-sm ml-2">{hotel.priceNote}</span>
                  </div>
                  <span className="text-green-600 font-medium text-sm">
                    View on Booking.com &rarr;
                  </span>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Family Tips */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Family tips for Dublin with kids
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span
                onClick={handleIceCreamClick}
                className="cursor-pointer hover:scale-125 transition-transform select-none"
              >🍦</span>
              <span>Murphy&apos;s Ice Cream has a Dublin location - get a preview of what&apos;s coming in Dingle!</span>
            </li>
            <li className="flex gap-3">
              <span
                onClick={handleDeerClick}
                className="cursor-pointer hover:scale-125 transition-transform select-none"
                title={deerClicks > 0 ? `${5 - deerClicks} more clicks...` : undefined}
              >🦌</span>
              <span>Phoenix Park has free-roaming deer - the kids will love spotting them</span>
            </li>
            <li className="flex gap-3">
              <span
                onClick={handleTheaterClick}
                className="cursor-pointer hover:scale-125 transition-transform select-none"
              >🎭</span>
              <span>Street performers on Grafton Street are always a hit with little ones</span>
            </li>
            <li className="flex gap-3">
              <span
                onClick={handleClockClick}
                className="cursor-pointer hover:scale-125 transition-transform select-none"
              >⏰</span>
              <span>Irish pubs welcome kids until 9pm - great for early family dinners with live music</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
