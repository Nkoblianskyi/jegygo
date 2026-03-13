import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Logo } from '@/components/logo'

const partnerNames = [
  'Jegy.hu',
  'Eventim HU',
  'StubHub',
  'Viagogo',
  'Tixa',
  'Jegymester',
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-footer text-slate-300 overflow-hidden">
      {/* Optional subtle pattern overlay */}
      <div className="absolute inset-0 bg-pattern-dots text-white/[0.03] pointer-events-none" aria-hidden />

      {/* Disclaimer – full width, with left accent bar (same placement) */}
      <div
        className="relative border-l-4 border-amber-500 bg-black/30 py-8 px-4 md:px-6"
        role="note"
        aria-label="Megfelelőségi nyilatkozat"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-bold text-sm mb-3">Fontos megfelelőségi nyilatkozat</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-2">
            A <strong className="text-white">Jegygo (jegygo.com)</strong> független árösszehasonlító platform (aggregátor). Nem értékesítünk közvetlenül jegyeket, csak összehasonlítjuk az engedélyezett viszonteladók ajánlatait.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-2">
            Az <strong className="text-white">árak meghaladhatják a névértéket</strong>. Minden ár átláthatóan megjelenik. A vásárlást a kiválasztott partnernél hajtja végre.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            <strong className="text-white">Partnereink:</strong> Jegy.hu, Eventim HU, StubHub, Viagogo, Tixa, Jegymester
          </p>
        </div>
      </div>

      {/* Main footer – single column layout, then one row */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* One row: logo | inline nav | email */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <Logo variant="footer" href="/" className="inline-flex items-center gap-2" />

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
            aria-label="Lábléc navigáció"
          >
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              Főoldal
            </Link>
            <Link href="/esemenyek" className="text-slate-400 hover:text-white transition-colors">
              Események
            </Link>
            <Link href="/rolunk" className="text-slate-400 hover:text-white transition-colors">
              Rólunk
            </Link>
            <Link href="/partnerek" className="text-slate-400 hover:text-white transition-colors">
              Partnerek
            </Link>
            <Link href="/kapcsolat" className="text-slate-400 hover:text-white transition-colors">
              Kapcsolat
            </Link>
          </nav>

          <a
            href="mailto:info@jegygo.com"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm w-fit"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            info@jegygo.com
          </a>
        </div>

        {/* Partner pills – horizontal list with dots */}
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs">
          {partnerNames.map((p, i) => (
            <span key={p} className="flex items-center gap-2">
              <span className="text-slate-500">{p}</span>
              {i < partnerNames.length - 1 && (
                <span className="text-slate-600" aria-hidden>·</span>
              )}
            </span>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-4 text-xs" aria-label="Jogi dokumentumok">
            <Link href="/adatvedelmi-szabalyzat" className="text-slate-500 hover:text-white transition-colors">
              Adatvédelmi szabályzat
            </Link>
            <Link href="/suti-tajekoztato" className="text-slate-500 hover:text-white transition-colors">
              Süti tájékoztató
            </Link>
          </nav>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            &copy; {new Date().getFullYear()} Jegygo – jegygo.com. Az árak tájékoztató jellegűek.
          </p>
        </div>
      </div>
    </footer>
  )
}
