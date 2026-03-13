'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

const navLinks = [
  { href: '/esemenyek', label: 'Események' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/partnerek', label: 'Partnerek' },
  { href: '/kapcsolat', label: 'Kapcsolat' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Logo – left */}
          <Logo variant="header" href="/" />

          {/* Nav – center (desktop) */}
          <nav
            className="hidden md:flex flex-1 justify-center items-center gap-1"
            aria-label="Főmenü"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                  pathname === link.href
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA – right */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/esemenyek"
              className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              Keresés
            </Link>
            <button
              className="md:hidden p-2.5 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Menü bezárása' : 'Menü megnyitása'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu – full-width dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg py-4 px-4"
          role="navigation"
          aria-label="Mobil menü"
        >
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium',
                  pathname === link.href
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/esemenyek"
              onClick={() => setMobileOpen(false)}
              className="mt-2 mx-4 flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold text-sm px-4 py-3 rounded-lg"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              Jegyek keresése
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
