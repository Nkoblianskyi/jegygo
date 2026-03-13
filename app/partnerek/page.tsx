import type { Metadata } from 'next'
import { ExternalLink, ShieldCheck } from 'lucide-react'
import { partners } from '@/lib/events-data'

export const metadata: Metadata = {
  title: 'Partnereink | Jegygo',
  description: 'Ismerd meg a Jegygo partnereit: megbízható jegyértékesítők, akiktől összehasonlítjuk az árakat.',
}

const partnerDetails: Record<string, { country: string; type: string; founded?: string; note?: string }> = {
  'Jegy.hu': { country: 'Magyarország', type: 'Hivatalos forrás', founded: '2001', note: 'Ország legnagyobb jegyportálja.' },
  'Eventim HU': { country: 'Magyarország / Európa', type: 'Hivatalos forrás', founded: '1989', note: 'Európa-szerte elterjedt hálózat.' },
  'StubHub': { country: 'USA / Globális', type: 'Viszonteladó', founded: '2000', note: 'Biztonságos másodlagos piac.' },
  'Viagogo': { country: 'Svájc / Globális', type: 'Viszonteladó', founded: '2006', note: 'Nemzetközi jegyviszonteladó.' },
  'Tixa': { country: 'Magyarország', type: 'Hivatalos forrás', founded: '2010', note: 'Rendezvények és koncertek.' },
  'Jegymester': { country: 'Magyarország', type: 'Hivatalos forrás', founded: '2008', note: 'Egyszerű online jegyvásárlás.' },
}

export default function PartnerekPage() {
  return (
    <>
      <section className="bg-[#0f172a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Partnereink</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            A Jegygo kizárólag ellenőrzött, megbízható jegyértékesítő platformok árait gyűjti össze – átláthatóan és egy helyen.
          </p>
        </div>
      </section>

      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 max-w-3xl">
            <ShieldCheck className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-bold text-amber-900 mb-1">Fontos tudnivaló</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                A Jegygo egy <strong>független összehasonlító platform</strong>. A partnerekkel való együttműködésünk
                kizárólag az árösszehasonlítás céljából történik. Jegyvásárlás kizárólag a partner weboldalán lehetséges;
                a vásárlás a partner és veled között jön létre.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Partnerek listája">
            {partners.map((partner) => {
              const details = partnerDetails[partner.name]
              return (
                <div
                  key={partner.name}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-bold text-slate-900">{partner.name}</h2>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-[#0f172a] transition-colors p-1"
                      aria-label={`${partner.name} weboldal – új ablak`}
                    >
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="text-slate-600 leading-relaxed flex-1">{partner.description}</p>

                  {details && (
                    <div className="pt-4 border-t border-slate-200 flex flex-col gap-2 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <span>Ország</span>
                        <span className="font-medium text-slate-900">{details.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Típus</span>
                        <span className="font-medium text-slate-900">{details.type}</span>
                      </div>
                      {details.founded && (
                        <div className="flex justify-between">
                          <span>Alapítva</span>
                          <span className="font-medium text-slate-900">{details.founded}</span>
                        </div>
                      )}
                      {details.note && (
                        <p className="text-xs text-slate-500 pt-1">{details.note}</p>
                      )}
                    </div>
                  )}

                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-bold text-sm px-4 py-3 rounded-xl transition-colors"
                    aria-label={`${partner.name} weboldal`}
                  >
                    Weboldal felkeresése
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-[#0f172a] rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Jegyértékesítő platform vagy?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto text-base leading-relaxed">
              Ha megbízható jegyértékesítő platformod van és szeretnél megjelenni a Jegygo összehasonlítójában,
              vedd fel velünk a kapcsolatot.
            </p>
            <a
              href="mailto:info@jegygo.com"
              className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Kapcsolatfelvétel
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
