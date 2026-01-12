'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ImageCard from '@/components/ImageCard';

const highlights = [
  {
    title: 'La Barceloneta Beach',
    description: 'Sandy beaches right in the city - perfect for building sandcastles',
    image: '/images/barcelona/beach.jpg',
    badge: 'Beach',
    link: 'https://www.barcelonaturisme.com/wv3/en/page/391/la-barceloneta-beach.html',
  },
  {
    title: 'Park Guell',
    description: 'Gaudi\'s colorful mosaic wonderland with amazing city views',
    image: '/images/barcelona/park-guell.jpg',
    badge: 'Must See',
    link: 'https://parkguell.barcelona/',
  },
  {
    title: 'La Boqueria Market',
    description: 'Fresh fruits, juices, and all the treats kids (and adults) love',
    image: '/images/barcelona/boqueria.jpg',
    badge: 'Food',
    link: 'https://www.boqueria.barcelona/en',
  },
  {
    title: 'Gothic Quarter',
    description: 'Medieval streets made for exploring and gelato stops',
    image: '/images/barcelona/gothic-quarter.jpg',
    badge: 'Historic',
    link: 'https://www.barcelonaturisme.com/wv3/en/page/399/gothic-quarter.html',
  },
];

const familyActivities = [
  {
    title: 'Beach Days',
    description: 'Barceloneta and nearby beaches have calm waters and soft sand',
    image: '/images/barcelona/beach.jpg',
    link: 'https://www.barcelonaturisme.com/wv3/en/page/391/la-barceloneta-beach.html',
  },
  {
    title: 'Tibidabo Amusement Park',
    description: 'Century-old theme park on a mountain with incredible views',
    image: '/images/barcelona/ferris-wheel.jpg',
    link: 'https://www.tibidabo.cat/en',
  },
  {
    title: 'Barcelona Aquarium',
    description: 'Walk-through shark tunnel and 11,000 marine animals',
    image: '/images/barcelona/aquarium.jpg',
    link: 'https://www.aquariumbcn.com/en/',
  },
  {
    title: 'Boat Rides',
    description: 'Las Golondrinas boats tour the harbor and coastline',
    image: '/images/barcelona/boat.jpg',
    link: 'https://lasgolondrinas.com/en/',
  },
];

export default function BarcelonaPage() {
  const [pageEffect, setPageEffect] = useState<string | null>(null);
  const [floatingEmojis, setFloatingEmojis] = useState<string[]>([]);
  const [showCapybara, setShowCapybara] = useState(false);
  const [showDancing, setShowDancing] = useState(false);
  const [rainbowMode, setRainbowMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerFloatingEmojis = (emoji: string, count: number = 20) => {
    setFloatingEmojis(Array(count).fill(emoji));
    setTimeout(() => setFloatingEmojis([]), 3000);
  };

  const triggerPageWarp = (effect: string) => {
    setPageEffect(effect);
    setTimeout(() => setPageEffect(null), 2000);
  };

  const handleSunriseClick = () => triggerFloatingEmojis('🌅', 30);
  const handlePaellaClick = () => { setShowDancing(true); setTimeout(() => setShowDancing(false), 4000); };
  const handleMuseumClick = () => triggerPageWarp('spin');
  const handleMoonClick = () => triggerPageWarp('invert');
  const handleMoneyClick = () => { setShowConfetti(true); setTimeout(() => setShowConfetti(false), 3000); };
  const handleGrandpaClick = () => { setShowCapybara(true); };
  const handleSunClick = () => { setRainbowMode(true); setTimeout(() => setRainbowMode(false), 5000); };
  const handleFoodClick = () => triggerFloatingEmojis('🍕', 40);

  return (
    <div className={`${pageEffect === 'spin' ? 'animate-spin' : ''} ${pageEffect === 'invert' ? 'invert' : ''} ${rainbowMode ? 'animate-pulse hue-rotate-180' : ''} transition-all duration-500`}>
      {/* Floating Emojis */}
      {floatingEmojis.map((emoji, i) => (
        <div
          key={i}
          className="fixed text-4xl pointer-events-none z-50 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${1 + Math.random()}s`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Confetti Money */}
      {showConfetti && (
        <>
          {Array(50).fill('💰').map((_, i) => (
            <div
              key={i}
              className="fixed text-3xl pointer-events-none z-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-50px',
                animation: `fall ${2 + Math.random() * 2}s linear forwards`,
              }}
            >
              💰
            </div>
          ))}
          <style>{`
            @keyframes fall {
              to { transform: translateY(120vh) rotate(720deg); }
            }
          `}</style>
        </>
      )}

      {/* Dancing Shrimp */}
      {showDancing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="text-9xl animate-bounce" style={{ animation: 'wiggle 0.3s infinite' }}>🦐</div>
          <style>{`
            @keyframes wiggle {
              0%, 100% { transform: rotate(-10deg) scale(1.5); }
              50% { transform: rotate(10deg) scale(1.5); }
            }
          `}</style>
        </div>
      )}

      {/* Capybara Popup */}
      {showCapybara && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowCapybara(false)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80"
              alt="Surprise capybara!"
              className="rounded-2xl max-w-md animate-bounce"
              style={{ animation: 'pop 0.5s ease-out' }}
            />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-bold px-6 py-2 rounded-full text-xl animate-pulse">
              CAPYBARA SAYS HI!
            </div>
            <style>{`
              @keyframes pop {
                0% { transform: scale(0) rotate(-180deg); }
                100% { transform: scale(1) rotate(0deg); }
              }
            `}</style>
          </div>
        </div>
      )}

      <HeroSection
        title="Barcelona"
        subtitle="Two weeks of sun, sea, and family - staying with the grandparents"
        imageUrl="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1600&q=80"
        imageAlt="Park Guell, Barcelona"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/barcelona/barcelona-city.jpg"
                alt="Barcelona waterfront"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">
                June 23 - July 6, 2026
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                Quality time with the abuelos
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Two glorious weeks staying with the grandparents. The kids get to bond with
                their abuelos while we enjoy the Mediterranean lifestyle - tapas dinners that
                stretch past sunset, lazy beach mornings, and plenty of gelato breaks.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  2 Weeks
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  Free Lodging!
                </span>
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                  Family Time
                </span>
                <a
                  href="https://www.google.com/maps/place/Barcelona,+Spain"
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
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <p className="pull-quote pl-8 text-amber-900">
              The heart of the trip. Two weeks where the kids can just be kids,
              spoiled by grandparents and running free in the Spanish sun.
            </p>
          </div>
        </section>

        {/* Gallery Row */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/barcelona/sagrada-familia.jpg"
                alt="Sagrada Familia"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/barcelona/gothic-quarter.jpg"
                alt="Gothic Quarter streets"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/barcelona/beach.jpg"
                alt="Barcelona beach"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Barcelona highlights</h2>
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

        {/* Family Activities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Things to do with kids</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {familyActivities.map((activity) => (
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

        {/* Daily Life Section */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-16">
          <h3 className="font-bold text-xl text-gray-900 mb-6">A typical day in Barcelona</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div
                onClick={handleSunriseClick}
                className="text-3xl mb-2 cursor-pointer hover:scale-150 transition-transform select-none"
              >🌅</div>
              <div className="font-medium text-gray-900">Morning</div>
              <div className="text-sm text-gray-600">Beach or park with grandparents</div>
            </div>
            <div className="text-center">
              <div
                onClick={handlePaellaClick}
                className="text-3xl mb-2 cursor-pointer hover:scale-150 transition-transform select-none"
              >🥘</div>
              <div className="font-medium text-gray-900">Midday</div>
              <div className="text-sm text-gray-600">Long Spanish lunch and siesta</div>
            </div>
            <div className="text-center">
              <div
                onClick={handleMuseumClick}
                className="text-3xl mb-2 cursor-pointer hover:scale-150 transition-transform select-none"
              >🏛️</div>
              <div className="font-medium text-gray-900">Afternoon</div>
              <div className="text-sm text-gray-600">Explore, gelato, and adventures</div>
            </div>
            <div className="text-center">
              <div
                onClick={handleMoonClick}
                className="text-3xl mb-2 cursor-pointer hover:scale-150 transition-transform select-none"
              >🌙</div>
              <div className="font-medium text-gray-900">Evening</div>
              <div className="text-sm text-gray-600">Late tapas dinner with family</div>
            </div>
          </div>
        </section>

        {/* Info Box */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Why this is the perfect middle leg
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span
                onClick={handleMoneyClick}
                className="cursor-pointer hover:scale-150 transition-transform select-none"
              >💰</span>
              <span>Free lodging with family saves our budget for the Ireland cottages</span>
            </li>
            <li className="flex gap-3">
              <span
                onClick={handleGrandpaClick}
                className="cursor-pointer hover:scale-150 transition-transform select-none"
              >👴</span>
              <span>Quality grandparent time the kids don&apos;t get often enough</span>
            </li>
            <li className="flex gap-3">
              <span
                onClick={handleSunClick}
                className="cursor-pointer hover:scale-150 transition-transform select-none"
              >☀️</span>
              <span>Mediterranean summer weather - reliable sun and warm beaches</span>
            </li>
            <li className="flex gap-3">
              <span
                onClick={handleFoodClick}
                className="cursor-pointer hover:scale-150 transition-transform select-none"
              >🍽️</span>
              <span>Spanish meal timing works great with kids (late = more flexible!)</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
