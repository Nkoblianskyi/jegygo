'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, Check } from 'lucide-react'

const CONSENT_KEY = 'jegygo_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Süti hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-end md:justify-center"
    >
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-t-2xl shadow-2xl overflow-hidden md:rounded-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5 text-amber-600" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-slate-900 text-sm mb-1">Sütik</p>
            <p className="text-slate-600 text-xs leading-relaxed">
              A Jegygo sütiket használ a működéshez és statisztikákhoz. Részletek:{' '}
              <Link href="/suti-tajekoztato" className="text-amber-600 hover:underline font-medium" onClick={() => setVisible(false)}>
                Süti tájékoztató
              </Link>
              {' · '}
              <Link href="/adatvedelmi-szabalyzat" className="text-amber-600 hover:underline font-medium" onClick={() => setVisible(false)}>
                Adatvédelem
              </Link>
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={decline}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors"
              aria-label="Csak szükséges sütik"
            >
              <X className="w-4 h-4 inline sm:mr-1" aria-hidden="true" />
              <span className="hidden sm:inline">Csak szükséges</span>
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
              aria-label="Összes süti elfogadása"
            >
              <Check className="w-4 h-4" aria-hidden="true" />
              Elfogadom
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
