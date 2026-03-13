import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Süti tájékoztató | Jegygo',
  description: 'A Jegygo süti (cookie) tájékoztatója – az általunk használt sütikről és kezelésükről.',
}

export default function SutiTajekoztato() {
  return (
    <>
      <section className="bg-[#0f172a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Süti tájékoztató</h1>
          <p className="text-slate-400">Utolsó módosítás: 2026</p>
        </div>
      </section>

      <div className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 flex flex-col gap-10 text-slate-600 leading-relaxed text-sm">

            <section aria-labelledby="what-title">
              <h2 id="what-title" className="text-xl font-bold text-slate-900 mb-3">1. Mi az a süti (cookie)?</h2>
              <p>
                A süti (angolul: cookie) egy kis szöveges fájl, amelyet a weboldal látogatásakor a böngésző
                elment a számítógépedre vagy mobileszközödre. A sütik segítik a weboldal megfelelő működését és
                jobb felhasználói élményt biztosítanak.
              </p>
            </section>

            <section aria-labelledby="types-title">
              <h2 id="types-title" className="text-xl font-bold text-slate-900 mb-4">2. Általunk használt sütik</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse" aria-label="Sütik táblázata">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-4 py-3 text-xs font-semibold text-slate-900 border border-slate-200">Süti neve</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-900 border border-slate-200">Típus</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-900 border border-slate-200">Cél</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-900 border border-slate-200">Lejárat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '_session', type: 'Szükséges', goal: 'Munkamenet fenntartása', expiry: 'Böngészés végén' },
                      { name: '_analytics', type: 'Analitika', goal: 'Látogatói statisztikák', expiry: '2 év' },
                      { name: '_preferences', type: 'Funkcionális', goal: 'Felhasználói beállítások', expiry: '1 év' },
                    ].map((row) => (
                      <tr key={row.name}>
                        <td className="px-4 py-3 border border-slate-200 font-mono text-xs text-slate-900">{row.name}</td>
                        <td className="px-4 py-3 border border-slate-200">{row.type}</td>
                        <td className="px-4 py-3 border border-slate-200">{row.goal}</td>
                        <td className="px-4 py-3 border border-slate-200">{row.expiry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="essential-title">
              <h2 id="essential-title" className="text-xl font-bold text-slate-900 mb-3">3. Szükséges sütik</h2>
              <p>
                A szükséges sütik nélkülözhetetlenek a weboldal alapvető működéséhez. Nem gyűjtenek
                személyes azonosításra alkalmas adatokat, és nem osztják meg azokat harmadik féllel.
                Letiltásuk esetén egyes funkciók nem fognak megfelelően működni.
              </p>
            </section>

            <section aria-labelledby="analytics-title">
              <h2 id="analytics-title" className="text-xl font-bold text-slate-900 mb-3">4. Analitikai sütik</h2>
              <p>
                Az analitikai sütikkel névtelen statisztikákat gyűjtünk a weboldal használatáról
                (pl. mely oldalakat látogatják, mennyi ideig tartózkodnak). Ezeket kizárólag a szolgáltatás
                fejlesztésére használjuk.
              </p>
              <p className="mt-3">
                Az analitikára a <strong className="text-slate-900">Vercel Analytics</strong> szolgáltatást
                használjuk, amely GDPR-kompatibilis és nem osztja meg az adatokat harmadik féllel.
              </p>
            </section>

            <section aria-labelledby="control-title">
              <h2 id="control-title" className="text-xl font-bold text-slate-900 mb-3">5. Sütik kezelése</h2>
              <p>
                A legtöbb böngésző alapból elfogadja a sütiket; beállíthatod viszont, hogy ne fogadja el,
                vagy minden alkalommal értesítsen. A főbb böngészőkben így kezelheted:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
                <li>Google Chrome: Beállítások → Adatvédelem és biztonság → Sütik</li>
                <li>Mozilla Firefox: Beállítások → Adatvédelem és biztonság</li>
                <li>Safari: Beállítások → Adatvédelem</li>
                <li>Microsoft Edge: Beállítások → Sütik és webhelyadatok</li>
              </ul>
            </section>

            <section aria-labelledby="more-title">
              <h2 id="more-title" className="text-xl font-bold text-slate-900 mb-3">6. További információk</h2>
              <p>
                Az adatkezeléssel kapcsolatos részletek az{' '}
                <Link href="/adatvedelmi-szabalyzat" className="text-[#0f172a] hover:underline font-medium">
                  Adatvédelmi szabályzatban
                </Link>{' '}
                találhatók. Kérdéseiddel írj nekünk:{' '}
                <a href="mailto:info@jegygo.com" className="text-[#0f172a] hover:underline font-medium">
                  info@jegygo.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
