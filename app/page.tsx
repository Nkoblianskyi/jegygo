import Link from 'next/link'
import Image from 'next/image'
import { Search, Shield, TrendingDown, Users, ChevronRight, Info } from 'lucide-react'
import { events, formatPrice, getMinPrice } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'
import { PartnersSection } from '@/components/partners-section'

const featuredEvents = events.filter((e) => e.featured)
const faqItems = [
  { q: 'Hogyan működik a Jegygo?', a: 'A Jegygo összegyűjti a jegyárakat több megbízható partnertől, és egyetlen helyen mutatja meg. Nem kell minden oldalt külön böngészni – mi összehasonlítunk helyetted.' },
  { q: 'A Jegygon keresztül vásárolhatok jegyet?', a: 'Nem. A Jegygo független összehasonlító platform. A jegyvásárlás mindig a kiválasztott partner weboldalán történik.' },
  { q: 'Megbízhatók a feltüntetett árak?', a: 'Az árakat rendszeresen frissítjük. Az árak tájékoztató jellegűek – a pontos ár mindig a partner oldalán ellenőrizendő.' },
  { q: 'Miért különböznek az árak?', a: 'Minden partner saját árszabályzattal dolgozik. Ezért éri meg összehasonlítani az árakat egy helyen.' },
  { q: 'Ingyenes a Jegygo?', a: 'Igen, teljesen ingyenes. Nem kell regisztrálnod, és nem számítunk fel díjat.' },
]

export default function HomePage() {
  const [firstFeatured, ...restFeatured] = featuredEvents

  return (
    <>
      {/* Hero – split layout: left content, right image */}
      <section className="relative min-h-[85vh] flex flex-col lg:flex-row">
        <div className="relative flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-14 lg:py-20 bg-slate-900">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            {/* Disclaimer – same placement: top of hero content */}
            <div className="mb-8 p-4 rounded-lg bg-slate-800/80 border-l-4 border-amber-500" role="note" aria-label="Fontos információ">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-white">Fontos – Kérjük, olvassa el</p>
                  <ul className="space-y-0.5">
                    <li><strong className="text-white">Jegygo (jegygo.com)</strong> független összehasonlító. Nem értékesítünk jegyeket.</li>
                    <li>Partnerek: Jegy.hu, Eventim HU, StubHub, Viagogo, Tixa, Jegymester.</li>
                    <li>Árak meghaladhatják a névértéket – minden ár átláthatóan megjelenik.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Egy helyen a <span className="text-amber-400">legjobb jegyár</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Összehasonlítjuk a nagy platformok árait. Te csak kiválasztod a legjobb ajánlatot.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700">
                <Search className="w-5 h-5 text-slate-500 shrink-0" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Esemény, előadó, helyszín..."
                  className="w-full bg-transparent text-white placeholder:text-slate-500 text-sm outline-none"
                  aria-label="Esemény keresése"
                />
              </div>
              <Link
                href="/esemenyek"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition-colors shrink-0"
              >
                Keresés
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 min-h-[40vh] lg:min-h-[85vh]">
          <Image
            src="/images/hero-concert.jpg"
            alt="Koncertélmény"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-slate-900/40" />
        </div>
      </section>

      {/* Stats – diagonal strip, with dividers */}
      <section className="relative bg-white py-12 section-diagonal-top" aria-label="Statisztikák">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {[
              { value: '8', label: 'Megbízható partner' },
              { value: '15+', label: 'Aktív esemény' },
              { value: '100%', label: 'Ingyenes' },
              { value: '24/7', label: 'Friss árak' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-6 md:py-8 px-4">
                <span className="text-3xl md:text-4xl font-extrabold text-slate-900">{stat.value}</span>
                <span className="text-sm text-slate-500 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured events – 1 big horizontal + 3 vertical */}
      <section className="py-16 md:py-20 bg-slate-50 bg-stripe-subtle" aria-labelledby="featured-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 id="featured-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                Kiemelt események
              </h2>
              <p className="text-slate-600 mt-1">A legjobb ajánlatok egy helyen</p>
            </div>
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-amber-600 transition-colors"
            >
              Összes esemény
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {firstFeatured && (
            <div className="mb-8">
              <EventCard event={firstFeatured} priority variant="horizontal" />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {restFeatured.slice(0, 3).map((event, index) => (
              <EventCard key={event.id} event={event} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works – horizontal timeline */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="how-it-works-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-it-works-title" className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            Hogyan működik?
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200" aria-hidden />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {[
                { step: '1', icon: Search, title: 'Keress eseményt', desc: 'Böngészd kategória, dátum vagy helyszín szerint.' },
                { step: '2', icon: TrendingDown, title: 'Hasonlítsd össze', desc: 'Egy oldalon látod az összes partner árait.' },
                { step: '3', icon: ChevronRight, title: 'Vásárolj a partnernél', desc: 'A legjobb ajánlatra kattintva a partner oldalára jutsz.' },
              ].map((item) => (
                <div key={item.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4">
                    <span className="absolute -top-1 -right-1 z-10 w-6 h-6 rounded-full bg-amber-500 text-slate-900 font-bold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us – asymmetric: one large block left, 3 small right */}
      <section className="py-16 md:py-20 bg-slate-50" aria-labelledby="why-us-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="why-us-title" className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            Miért a Jegygo?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-slate-300 mb-4">
                Nem állunk egyetlen partner mellett sem. Objektívan mutatjuk az összes elérhető ajánlatot – így mindig a legjobb árat választhatod.
              </p>
              <p className="text-slate-400">
                Az árösszehasonlítással gyakran <strong className="text-amber-400">15–30% megtakarítás</strong> érhető el.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {[
                { icon: Shield, title: 'Független', desc: 'Minden platformot azonos feltételek mellett mutatunk.' },
                { icon: TrendingDown, title: 'Megtakarítás', desc: 'Valódi megtakarítás minden vásárlás előtt.' },
                { icon: Users, title: 'Megbízható partnerek', desc: 'Csak ellenőrzött, hazai és nemzetközi platformok.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />

      {/* FAQ – card per question with left border */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="faq-title">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-title" className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Gyakori kérdések
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4 font-semibold text-slate-900 border-l-4 border-transparent group-open:border-amber-500">
                  {item.q}
                  <ChevronRight className="w-5 h-5 text-slate-500 group-open:rotate-90 transition-transform shrink-0 ml-2" />
                </summary>
                <p className="px-5 pb-4 pt-0 text-sm text-slate-600 leading-relaxed border-l-4 border-amber-500 ml-0 pl-5">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – full width, angled top */}
      <section className="relative py-20 bg-slate-900 section-diagonal-bottom" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="text-2xl md:text-3xl font-bold text-white mb-3">
            Készen állsz a legjobb árra?
          </h2>
          <p className="text-slate-400 mb-8">
            Böngészd az eseményeket és hasonlítsd össze az árakat ingyen.
          </p>
          <Link
            href="/esemenyek"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors"
          >
            <Search className="w-5 h-5" />
            Események böngészése
          </Link>
        </div>
      </section>
    </>
  )
}
