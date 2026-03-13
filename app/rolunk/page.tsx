import type { Metadata } from 'next'
import { Shield, TrendingDown, Users, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rólunk | Jegygo',
  description: 'Ismerd meg a Jegygo küldetését: független jegyár-összehasonlítás Magyarországon.',
}

export default function RolunkPage() {
  return (
    <>
      {/* Header with angled bottom */}
      <section className="relative bg-slate-900 pt-14 pb-24 section-diagonal-bottom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Rólunk</h1>
          <p className="text-slate-400 text-lg">
            A Jegygo célja, hogy mindenki egyszerűen megtalálja a legjobb jegyárat – koncertre, meccsre vagy színházba.
          </p>
        </div>
      </section>

      <div className="bg-slate-50 -mt-12 relative z-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Mission – full width card with accent */}
          <section aria-labelledby="mission-title" className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="border-l-4 border-amber-500 bg-amber-50/50 px-6 py-3">
              <h2 id="mission-title" className="text-xl font-bold text-slate-900">Küldetésünk</h2>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-slate-600 leading-relaxed mb-4">
                A Jegygo azért jött létre, hogy a magyarországi jegyvásárlást átláthatóbbá és kedvezőbbé tegye.
                Ugyanaz a jegy akár 30–40%-kal többe kerülhet egyik oldalon, mint a másikon – a legtöbb vásárló viszont csak egy helyen nézi az árakat.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Mi összehasonlítunk helyetted. Egy helyen látod a megbízható partnerektől érkező árakat, és te döntöd el, hol vásárolsz. Mi nem értékesítünk jegyet.
              </p>
            </div>
          </section>

          {/* Values – horizontal cards with icons */}
          <section aria-labelledby="values-title">
            <h2 id="values-title" className="text-2xl font-bold text-slate-900 mb-6">Értékeink</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: 'Függetlenség', desc: 'Nem állunk egyetlen partner mellett sem. Minden platformot azonos feltételek mellett mutatunk be.', color: 'bg-slate-900 text-amber-400' },
                { icon: Eye, title: 'Átláthatóság', desc: 'Világosan jelezzük, mikor kerülsz át a partner oldalára. Nincsenek rejtett díjak.', color: 'bg-slate-800 text-white' },
                { icon: TrendingDown, title: 'Megtakarítás', desc: 'Az árösszehasonlítással valódi megtakarítás érhető el.', color: 'bg-slate-900 text-amber-400' },
                { icon: Users, title: 'Közösség', desc: 'Az élő események összekötnek – ezt a hozzáférést egyszerűbbé tesszük.', color: 'bg-slate-800 text-white' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <item.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer – same placement, new style */}
          <section aria-labelledby="disclaimer-title">
            <h2 id="disclaimer-title" className="text-2xl font-bold text-slate-900 mb-4">Fontos nyilatkozat</h2>
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white border-l-4 border-amber-500">
              <p className="font-semibold text-amber-400 mb-3">Független összehasonlítás – nem értékesítünk jegyeket</p>
              <p className="text-slate-300 leading-relaxed mb-4">
                A Jegygo kizárólag tájékoztató jellegű árösszehasonlítást nyújt. A megjelenő árak a következő partnerektől származnak:
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-300 mb-4">
                {['Jegy.hu', 'Eventim HU', 'StubHub', 'Viagogo', 'Tixa', 'Jegymester'].map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
              <p className="text-slate-400 text-sm leading-relaxed">
                Az &quot;Ajánlat megtekintése&quot; gombra kattintva a partner weboldalára kerülsz. A vásárlás a partner és veled között jön létre; a Jegygo nem részese az ügyletnek.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
