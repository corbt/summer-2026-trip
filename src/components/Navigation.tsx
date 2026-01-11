'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Overview', emoji: '🗺️' },
  { href: '/dublin', label: 'Dublin', emoji: '🍀' },
  { href: '/barcelona', label: 'Barcelona', emoji: '🌅' },
  { href: '/dingle', label: 'Dingle', emoji: '🐬' },
  { href: '/connemara', label: 'Connemara', emoji: '🏔️' },
];

export default function Navigation() {
  const pathname = usePathname();

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
