import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, ChevronLeft, ExternalLink, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { events, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'
import { PartnersSection } from '@/components/partners-section'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return events.map((e) => ({ id: e.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) return {}
  return {
    title: `${event.title} – Jegyár összehasonlítás | Jegygo`,
    description: `Hasonlítsd össze a(z) ${event.title} jegyárait. Legjobb ár: ${formatPrice(getMinPrice(event.offers))}`,
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) notFound()

  const minPrice = getMinPrice(event.offers)
  const sortedOffers = [...event.offers].sort((a, b) => {
    if (a.available && !b.available) return -1
    if (!a.available && b.available) return 1
    return a.price - b.price
  })

  const relatedEvents = events
    .filter((e) => e.id !== event.id && e.category === event.category)
    .slice(0, 4)

  return (
    <>
      {/* Breadcrumb – compact pill bar */}
      <nav className="bg-slate-100 border-b border-slate-200 py-2" aria-label="Navigációs útvonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm">
          <Link href="/" className="text-slate-500 hover:text-slate-900">Főoldal</Link>
          <span className="text-slate-400">/</span>
          <Link href="/esemenyek" className="text-slate-500 hover:text-slate-900">Események</Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 font-medium truncate max-w-[180px] sm:max-w-none">{event.title}</span>
        </div>
      </nav>

      <div className="bg-slate-50 min-h-screen">
        {/* Hero: full-width image with title overlay */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded mb-2 ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              {event.title}
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: details + disclaimer */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Dátum</p>
                      <p className="font-semibold text-slate-900">
                        {new Date(event.date).toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Kezdés</p>
                      <p className="font-semibold text-slate-900">{event.time}</p>
                    </div>
                  </div>
                  <div className="col-span-2 flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-slate-700" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">Helyszín</p>
                      <p className="font-semibold text-slate-900">{event.venue}, {event.city}</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{event.description}</p>
              </div>

              {/* Disclaimer – same placement */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 flex gap-3" role="note" aria-label="Fontos megfelelőségi nyilatkozat">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm space-y-1">
                  <p className="font-bold text-amber-900">Fontos megfelelőségi nyilatkozat</p>
                  <p className="text-amber-800 leading-relaxed">
                    A <strong>Jegygo (jegygo.com)</strong> független árösszehasonlító platform. Nem értékesítünk jegyeket; csak összehasonlítjuk a viszonteladók ajánlatait.
                  </p>
                  <p className="text-amber-800 leading-relaxed">
                    Az <strong>árak meghaladhatják a névértéket</strong>. A vásárlást a kiválasztott partnernél hajtja végre.
                  </p>
                  <p className="text-amber-800 leading-relaxed">
                    <strong>Partnereink:</strong> Jegy.hu, Eventim HU, StubHub, Viagogo, Tixa, Jegymester
                  </p>
                </div>
              </div>
            </div>

            {/* Right: sticky sidebar – price + offers */}
            <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
              {minPrice > 0 && (
                <div className="bg-slate-900 text-white rounded-2xl p-6 text-center">
                  <p className="text-slate-400 text-sm mb-0.5">Legjobb ár</p>
                  <p className="text-3xl font-extrabold text-amber-400">{formatPrice(minPrice)}</p>
                  <p className="text-slate-500 text-xs mt-1">{sortedOffers.filter((o) => o.available).length} ajánlat</p>
                </div>
              )}

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
                  <h2 className="font-bold text-slate-900">Jegyajánlatok</h2>
                </div>
                <ul className="divide-y divide-slate-100">
                  {sortedOffers.map((offer, i) => (
                    <li key={offer.partner} className="px-5 py-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        {offer.available ? (
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" aria-label="Elérhető" />
                        ) : (
                          <XCircle className="w-5 h-5 text-slate-300 shrink-0" aria-label="Nem elérhető" />
                        )}
                        <span className="font-semibold text-slate-900 truncate">{offer.partner}</span>
                        {i === 0 && offer.available && (
                          <span className="text-xs font-medium text-emerald-600 shrink-0">Legjobb</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`font-bold ${offer.available ? 'text-slate-900' : 'text-slate-400 line-through'}`}>
                          {formatPrice(offer.price)}
                        </span>
                        {offer.available && (
                          <a
                            href={offer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                            aria-label={`${offer.partner} ajánlat`}
                          >
                            Megtekintés
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/esemenyek"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                <ChevronLeft className="w-4 h-4" />
                Vissza az eseményekhez
              </Link>
            </div>
          </div>

          <PartnersSection />

          {relatedEvents.length > 0 && (
            <section className="mt-14" aria-labelledby="related-title">
              <h2 id="related-title" className="text-xl font-bold text-slate-900 mb-6">
                Hasonló {event.category.toLowerCase()} események
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedEvents.map((e) => (
                  <EventCard key={e.id} event={e} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  )
}
