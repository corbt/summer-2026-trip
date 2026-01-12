'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const irelandNavItems = [
  { href: '/ireland', label: 'Overview', emoji: '🗺️' },
  { href: '/ireland/dublin', label: 'Dublin', emoji: '🍀' },
  { href: '/barcelona', label: 'Barcelona', emoji: '🌅' },
  { href: '/ireland/dingle', label: 'Dingle', emoji: '🐬' },
  { href: '/ireland/connemara', label: 'Connemara', emoji: '🏔️' },
];

const portugalNavItems = [
  { href: '/portugal', label: 'Overview', emoji: '🗺️' },
  { href: '/barcelona', label: 'Barcelona', emoji: '🌅' },
  { href: '/portugal/lisbon', label: 'Lisbon', emoji: '🏛️' },
  { href: '/portugal/sesimbra', label: 'Sesimbra', emoji: '🏰' },
  { href: '/portugal/porto', label: 'Porto', emoji: '🍷' },
];

export default function Navigation() {
  const pathname = usePathname();

  // Determine which itinerary we're in
  const isPortugal = pathname.startsWith('/portugal');
  const isIreland = pathname.startsWith('/ireland');
  const isBarcelona = pathname === '/barcelona';
  const isLandingPage = pathname === '/';

  // On landing page, show minimal nav
  if (isLandingPage) {
    return null; // Landing page has its own design
  }

  // Select nav items based on context
  let navItems = irelandNavItems;
  let accentColor = 'emerald';

  if (isPortugal) {
    navItems = portugalNavItems;
    accentColor = 'amber';
  }

  // Barcelona page - show a simple nav with links to both itineraries
  if (isBarcelona) {
    return (
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-semibold text-lg text-gray-900">
              Summer 2026
            </Link>
            <div className="flex gap-2">
              <Link
                href="/ireland"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                🍀 Ireland Trip
              </Link>
              <Link
                href="/portugal"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                🇵🇹 Portugal Trip
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg text-gray-900">
            Summer 2026
          </Link>
          <div className="flex gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="hidden sm:inline">{item.emoji} </span>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
