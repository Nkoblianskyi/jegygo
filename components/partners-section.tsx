import { ShieldCheck, ExternalLink } from 'lucide-react'
import { partners } from '@/lib/events-data'

const partnerTypes: Record<string, string> = {
  'Jegy.hu': 'Hivatalos',
  'Eventim HU': 'Hivatalos',
  'StubHub': 'Viszonteladó',
  'Viagogo': 'Viszonteladó',
  'Tixa': 'Hivatalos',
  'Jegymester': 'Hivatalos',
}

export function PartnersSection() {
  return (
    <section
      className="py-16 md:py-20 bg-white bg-pattern-dots text-slate-600"
      aria-labelledby="partner-sources-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            Partnereink
          </div>
          <h2 id="partner-sources-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Egy helyen látod az összes partnert
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            A Jegygo csak ellenőrzött jegyértékesítő platformok árait gyűjti. Nem értékesítünk jegyet – mi összehasonlítunk.
          </p>
        </div>

        {/* Horizontal row of partner cards – alternating style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`flex gap-4 p-5 rounded-xl border transition-shadow hover:shadow-lg ${
                i % 2 === 0 ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-600 text-sm">
                {p.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-slate-900 truncate">{p.name}</h3>
                  <span className="text-xs font-medium text-slate-500 shrink-0">{partnerTypes[p.name] ?? 'Partner'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-2">{p.description}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-amber-600"
                  aria-label={`${p.name} weboldala`}
                >
                  Weboldal
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
