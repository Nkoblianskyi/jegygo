'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function KapcsolatPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-[#0f172a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Kapcsolat</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Kérdésed van, javaslatod vagy hiányzó eseményt találtál? Írj nekünk – 1–2 munkanapon belül válaszolunk.
          </p>
        </div>
      </section>

      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-5">
                <h2 className="font-bold text-slate-900 text-xl">Elérhetőségeink</h2>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0f172a]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">Email</p>
                    <a href="mailto:info@jegygo.com" className="text-sm font-semibold text-[#0f172a] hover:text-[#f59e0b] transition-colors">
                      info@jegygo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0f172a]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">Székhely</p>
                    <p className="text-sm font-semibold text-slate-900">1132 Budapest, Váci út 45.<br /><span className="text-slate-500 font-normal">Millennial Park irodaház</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#0f172a]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">Válaszidő</p>
                    <p className="text-sm font-semibold text-slate-900">1–2 munkanapon belül</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm">
                <p className="font-bold text-amber-900 mb-2">Emlékeztető</p>
                <p className="text-amber-800 leading-relaxed">
                  A Jegygo független összehasonlító platform. Jegyvásárlással kapcsolatos kérdésekkel
                  kérjük, közvetlenül a jegypartnerhez fordulj.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 flex flex-col items-center gap-4 text-center">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-emerald-600" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Üzeneted megérkezett!</h2>
                  <p className="text-slate-600 max-w-sm leading-relaxed">
                    Köszönjük! 1–2 munkanapon belül válaszolunk az általad megadott email-címre.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-4 text-sm font-semibold text-[#0f172a] hover:text-[#f59e0b] transition-colors"
                  >
                    Új üzenet küldése
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-5"
                  aria-label="Kapcsolatfelvételi űrlap"
                >
                  <h2 className="font-bold text-slate-900 text-2xl">Üzenet küldése</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-slate-900">
                        Név <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="pl. Kovács János"
                        className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/10 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-slate-900">
                        Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="pl. kovacs.janos@email.hu"
                        className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/10 placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-900">
                      Tárgy <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/10"
                    >
                      <option value="">Válassz kategóriát...</option>
                      <option value="hiba">Hibás vagy elavult adat bejelentése</option>
                      <option value="hianyzó">Hiányzó esemény beküldése</option>
                      <option value="partner">Partneri együttműködés</option>
                      <option value="egyeb">Egyéb kérdés</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-slate-900">
                      Üzenet <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Írd ide üzeneted..."
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0f172a] focus:ring-2 focus:ring-[#0f172a]/10 placeholder:text-slate-400 resize-none"
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Az adatvédelmi szabályzatunkat{' '}
                    <a href="/adatvedelmi-szabalyzat" className="text-[#0f172a] hover:underline font-medium">itt</a> olvashatod.
                  </p>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors"
                  >
                    <Send className="w-5 h-5" aria-hidden="true" />
                    Üzenet küldése
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
