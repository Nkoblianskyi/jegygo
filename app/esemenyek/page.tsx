'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { events, type EventCategory } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'

const ALL_CATS: EventCategory[] = ['Koncert', 'Sport', 'Színház', 'Fesztivál', 'Komédia']

export default function EsemenyekPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<EventCategory | null>(null)

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchCat = activeCategory ? e.category === activeCategory : true
      const q = query.toLowerCase()
      const matchQ = !q || e.title.toLowerCase().includes(q) || e.city.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q) || (e.artist?.toLowerCase().includes(q) ?? false)
      return matchCat && matchQ
    })
  }, [query, activeCategory])

  return (
    <>
      {/* Page header – full width with angled bottom */}
      <section className="relative bg-slate-900 pt-14 pb-20 section-diagonal-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Összes esemény</h1>
          <p className="text-slate-400">
            Hasonlítsd össze a jegyárakat {events.length} eseményre több partnertől.
          </p>
        </div>
      </section>

      {/* Filters – pill bar, sticky */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-slate-200" aria-label="Szűrők">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" aria-hidden="true" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Esemény, előadó, helyszín..."
                className="w-full pl-12 pr-10 py-3 border border-slate-200 rounded-full text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                aria-label="Esemény keresése"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  aria-label="Keresés törlése"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Kategória">
              <Filter className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === null ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                aria-pressed={activeCategory === null}
              >
                Összes
              </button>
              {ALL_CATS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results – striped background */}
      <section className="bg-slate-50 bg-stripe-subtle py-10 min-h-[50vh]" aria-live="polite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500 mb-6">
            <span className="font-semibold text-slate-700">{filtered.length}</span> esemény
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 rounded-2xl bg-white border border-slate-200">
              <p className="text-xl font-bold text-slate-900 mb-2">Nincs találat</p>
              <p className="text-slate-600 text-sm mb-4">Próbálj más keresési feltételeket.</p>
              <button
                onClick={() => { setQuery(''); setActiveCategory(null) }}
                className="text-sm font-semibold text-slate-900 hover:text-amber-600 transition-colors"
              >
                Szűrők törlése
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
