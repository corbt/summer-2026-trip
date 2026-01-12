import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-amber-500" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Summer 2026
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            31 days of adventure across Europe with our crew of 6
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              June 21 - July 22
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              Family of 6
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              2 Countries
            </span>
          </div>
        </div>
      </div>

      {/* Itinerary Options */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Adventure</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Both itineraries include two weeks in Barcelona with the grandparents.
            The difference is where we go for our second two weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ireland Option */}
          <Link
            href="/ireland"
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200&q=80"
                alt="Cliffs of Moher, Ireland"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent" />
            </div>
            <div className="relative p-8 min-h-[400px] flex flex-col justify-end">
              <div className="mb-4">
                <span className="inline-block bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                  Option A
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">Ireland Adventure</h3>
                <p className="text-emerald-100 text-lg">
                  Dolphins, castles, and the Wild Atlantic Way
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  Dublin
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  Barcelona
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  Dingle Peninsula
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  Connemara
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-emerald-200 text-sm">From</span>
                  <span className="text-white font-bold text-xl ml-2">$12,066</span>
                </div>
                <span className="text-white group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Portugal Option */}
          <Link
            href="/portugal"
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=80"
                alt="Lisbon, Portugal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/40 to-transparent" />
            </div>
            <div className="relative p-8 min-h-[400px] flex flex-col justify-end">
              <div className="mb-4">
                <span className="inline-block bg-amber-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                  Option B
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">Portugal Adventure</h3>
                <p className="text-amber-100 text-lg">
                  Tiled streets, trams, and the world&apos;s best custard tarts
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  Barcelona
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  Lisbon
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  Sintra
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  Porto
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-amber-200 text-sm">From</span>
                  <span className="text-white font-bold text-xl ml-2">$11,783</span>
                </div>
                <span className="text-white group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Comparison Quick Facts */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Quick Comparison</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Flights</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-emerald-600 font-bold">$5,382</div>
                  <div className="text-xs text-gray-500">Ireland</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-amber-600 font-bold">$5,483</div>
                  <div className="text-xs text-gray-500">Portugal</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Transportation</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-emerald-600 font-bold">Car rental</div>
                  <div className="text-xs text-gray-500">Ireland</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-amber-600 font-bold">Trains</div>
                  <div className="text-xs text-gray-500">Portugal</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Weather</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-emerald-600 font-bold">~18°C</div>
                  <div className="text-xs text-gray-500">Ireland</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-amber-600 font-bold">~28°C</div>
                  <div className="text-xs text-gray-500">Portugal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's the Same */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Both Options Include</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              2 weeks in Barcelona with grandparents
            </span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              31 days total
            </span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              June 21 - July 22, 2026
            </span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Back for family reunion
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            Summer 2026 • Family of 6 • The adventure of a lifetime
          </p>
        </div>
      </footer>
    </div>
  );
}
