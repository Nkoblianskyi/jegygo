import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jegygo – Összehasonlítod a jegyárakat, mi megmutatjuk a legjobbat',
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
  description:
    'Jegygo független jegyár-összehasonlító. Egy helyen látod a Jegy.hu, Eventim és további megbízható partnerek árait – válaszd a legjobb ajánlatot.',
  keywords: 'jegy, esemény, koncert, sport, színház, árösszehasonlítás, jegygo, Magyarország',
  authors: [{ name: 'Jegygo', url: 'https://jegygo.com' }],
  metadataBase: new URL('https://jegygo.com'),
  openGraph: {
    title: 'Jegygo – Jegyárak összehasonlítása egy helyen',
    description: 'Hasonlítsd össze a jegyárakat több megbízható partnertől. Ingyenes, átlátható, független.',
    url: 'https://jegygo.com',
    siteName: 'Jegygo',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
