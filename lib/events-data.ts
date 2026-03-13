export type EventCategory = 'Koncert' | 'Sport' | 'Színház' | 'Fesztivál' | 'Komédia'

export interface TicketOffer {
  partner: string
  price: number
  url: string
  available: boolean
}

export interface Event {
  id: string
  title: string
  artist?: string
  category: EventCategory
  date: string
  time: string
  venue: string
  city: string
  image: string
  description: string
  offers: TicketOffer[]
  featured?: boolean
}

export const partners = [
  { name: 'Jegy.hu', url: 'https://jegy.hu', description: 'Magyarország legnagyobb jegyértékesítő platformja.' },
  { name: 'Eventim HU', url: 'https://www.eventim.hu', description: 'Európa egyik vezető jegyértékesítő hálózata.' },
  { name: 'StubHub', url: 'https://stubhub.com', description: 'Globális másodlagos jegypiac, biztonságos vásárlással.' },
  { name: 'Viagogo', url: 'https://viagogo.com', description: 'Nemzetközi jegyviszonteladó platform.' },
  { name: 'Tixa', url: 'https://tixa.hu', description: 'Magyar jegyrendszer rendezvényekhez és koncertekhez.' },
  { name: 'Jegymester', url: 'https://jegymester.hu', description: 'Online jegyvásárlás egyszerűen és megbízhatóan.' },
]

export const events: Event[] = [
  {
    id: '1',
    title: 'Ed Sheeran – Mathematics Tour',
    artist: 'Ed Sheeran',
    category: 'Koncert',
    date: '2026-06-14',
    time: '20:00',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    image: '/images/ed-sheeran.jpg',
    description: 'Ed Sheeran visszatér Budapestre a Mathematics Tour keretében. A brit énekes-dalszerző legjobb slágereit adja elő az este folyamán.',
    featured: true,
    offers: [
      { partner: 'Jegy.hu', price: 18500, url: 'https://jegy.hu', available: true },
      { partner: 'Eventim HU', price: 19500, url: 'https://www.eventim.hu', available: false },
      { partner: 'StubHub', price: 22000, url: 'https://stubhub.com', available: true },
    ],
  },
  {
    id: '2',
    title: 'Fradi vs. Ferencváros Derby',
    artist: undefined,
    category: 'Sport',
    date: '2026-04-19',
    time: '18:00',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    image: '/images/fradi-derby.jpg',
    description: 'A szezon legizgalmasabb meccse: a Budapest-derby a Groupama Arénában. Szurkolj csapatodnak élőben!',
    featured: true,
    offers: [
      { partner: 'Jegy.hu', price: 4500, url: 'https://jegy.hu', available: true },
      { partner: 'Tixa', price: 4600, url: 'https://tixa.hu', available: true },
    ],
  },
  {
    id: '3',
    title: 'Mamma Mia! – A musical',
    artist: undefined,
    category: 'Színház',
    date: '2026-05-02',
    time: '19:30',
    venue: 'Madách Színház',
    city: 'Budapest',
    image: '/images/mamma-mia.jpg',
    description: 'Az ABBA dallamaira épülő, világhírű musical ismét a Madách Színház deszkáin! Romantika, humor és felejthetetlen zenei élmény.',
    featured: true,
    offers: [
      { partner: 'Jegy.hu', price: 6500, url: 'https://jegy.hu', available: true },
      { partner: 'Jegymester', price: 6800, url: 'https://jegymester.hu', available: true },
    ],
  },
  {
    id: '4',
    title: 'Sziget Fesztivál 2026',
    artist: undefined,
    category: 'Fesztivál',
    date: '2026-08-05',
    time: '12:00',
    venue: 'Óbudai-sziget',
    city: 'Budapest',
    image: '/images/sziget.jpg',
    description: 'A Sziget Fesztivál Európa egyik legnagyobb zenei fesztiválja. 5 napon át világsztárok, art programok és fergeteges hangulat.',
    featured: true,
    offers: [
      { partner: 'Jegy.hu', price: 89000, url: 'https://jegy.hu', available: true },
      { partner: 'Eventim HU', price: 91000, url: 'https://www.eventim.hu', available: true },
      { partner: 'Viagogo', price: 98000, url: 'https://viagogo.com', available: true },
      { partner: 'StubHub', price: 105000, url: 'https://stubhub.com', available: true },
    ],
  },
  {
    id: '5',
    title: 'Azahriah – Hazai Pálya Tour',
    artist: 'Azahriah',
    category: 'Koncert',
    date: '2026-04-25',
    time: '20:00',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/images/azahriah.jpg',
    description: 'Azahriah hazatér! A legsikeresebb magyar fiatal előadó grandiózus koncertet ad a Sportarénában.',
    offers: [
      { partner: 'Jegy.hu', price: 8900, url: 'https://jegy.hu', available: true },
      { partner: 'Tixa', price: 9200, url: 'https://tixa.hu', available: true },
    ],
  },
  {
    id: '6',
    title: 'Dumaszínház – Kovács András Péter',
    artist: 'Kovács András Péter',
    category: 'Komédia',
    date: '2026-05-10',
    time: '19:00',
    venue: 'Dumaszínház',
    city: 'Budapest',
    image: '/images/dumaszinhaz.jpg',
    description: 'KAP legújabb stand-up estje: öngyilkos gondolatok nélkül – humoros és önironikus előadás.',
    offers: [
      { partner: 'Jegy.hu', price: 3500, url: 'https://jegy.hu', available: true },
      { partner: 'Jegymester', price: 3700, url: 'https://jegymester.hu', available: true },
    ],
  },
  {
    id: '7',
    title: 'Coldplay – Music of the Spheres',
    artist: 'Coldplay',
    category: 'Koncert',
    date: '2026-07-10',
    time: '20:30',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    image: '/images/coldplay.jpg',
    description: 'A Coldplay látványos, fenntartható koncerttúrájával érkezik Budapestre. Egyedülálló fény- és lézeres show.',
    offers: [
      { partner: 'Jegy.hu', price: 24500, url: 'https://jegy.hu', available: true },
      { partner: 'Eventim HU', price: 25000, url: 'https://www.eventim.hu', available: true },
      { partner: 'StubHub', price: 32000, url: 'https://stubhub.com', available: true },
      { partner: 'Viagogo', price: 35000, url: 'https://viagogo.com', available: true },
    ],
  },
  {
    id: '8',
    title: 'Magyar Nemzeti Jégkorong Liga döntő',
    artist: undefined,
    category: 'Sport',
    date: '2026-04-30',
    time: '17:00',
    venue: 'Tüskecsarnok',
    city: 'Budapest',
    image: '/images/hockey.jpg',
    description: 'A Magyar Jégkorong Liga döntője – két legjobb csapat csap össze a bajnoki aranyért!',
    offers: [
      { partner: 'Jegy.hu', price: 2800, url: 'https://jegy.hu', available: true },
      { partner: 'Tixa', price: 2900, url: 'https://tixa.hu', available: true },
    ],
  },
  {
    id: '9',
    title: 'Operett Gála – Operettsínház',
    artist: undefined,
    category: 'Színház',
    date: '2026-05-22',
    time: '19:00',
    venue: 'Budapest Operettszínház',
    city: 'Budapest',
    image: '/images/operett.jpg',
    description: 'Kálmán Imre és Lehár Ferenc örökzöld dallamai elevenednek meg a Budapest Operettszínház gálaestjén.',
    offers: [
      { partner: 'Jegy.hu', price: 5500, url: 'https://jegy.hu', available: true },
      { partner: 'Jegymester', price: 5800, url: 'https://jegymester.hu', available: true },
    ],
  },
  {
    id: '10',
    title: 'VOLT Fesztivál 2026',
    artist: undefined,
    category: 'Fesztivál',
    date: '2026-06-25',
    time: '14:00',
    venue: 'Fertőrákos Barlangszínház',
    city: 'Sopron',
    image: '/images/volt.jpg',
    description: 'A VOLT Fesztivál visszatér Sopronba! Négy napon át hazai és külföldi zenészek a legjobb fesztiválatmoszférában.',
    offers: [
      { partner: 'Jegy.hu', price: 45000, url: 'https://jegy.hu', available: true },
      { partner: 'Eventim HU', price: 46500, url: 'https://www.eventim.hu', available: true },
    ],
  },
  {
    id: '11',
    title: 'Rammstein – Europe Stadium Tour',
    artist: 'Rammstein',
    category: 'Koncert',
    date: '2026-09-05',
    time: '20:00',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    image: '/images/rammstein.jpg',
    description: 'A Rammstein lenyűgöző pirotechnikai show-val tér vissza Budapestre. Fenomenális látvány és erőteljes zene.',
    offers: [
      { partner: 'Eventim HU', price: 28000, url: 'https://www.eventim.hu', available: true },
      { partner: 'StubHub', price: 35000, url: 'https://stubhub.com', available: true },
      { partner: 'Viagogo', price: 38000, url: 'https://viagogo.com', available: true },
    ],
  },
  {
    id: '12',
    title: 'Nemzeti Labdarúgó BL-selejtező',
    artist: undefined,
    category: 'Sport',
    date: '2026-07-22',
    time: '20:45',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    image: '/images/futball.jpg',
    description: 'A Bajnokok Ligája selejtezőjének hazai mérkőzése a Puskás Arénában. Szurkolj a nemzeti csapatnak!',
    offers: [
      { partner: 'Jegy.hu', price: 6500, url: 'https://jegy.hu', available: true },
      { partner: 'Tixa', price: 6500, url: 'https://tixa.hu', available: true },
    ],
  },
  {
    id: '13',
    title: 'Megasztár Gálaest 2026',
    artist: undefined,
    category: 'Komédia',
    date: '2026-06-06',
    time: '20:00',
    venue: 'MOM Sport',
    city: 'Budapest',
    image: '/images/megasztar.jpg',
    description: 'A Megasztár tehetségkutató legjobbjai egy különleges gálaesten lépnek fel.',
    offers: [
      { partner: 'Jegy.hu', price: 4900, url: 'https://jegy.hu', available: true },
      { partner: 'Jegymester', price: 5200, url: 'https://jegymester.hu', available: true },
    ],
  },
  {
    id: '14',
    title: 'Paloznaki Jazzpiknik',
    artist: undefined,
    category: 'Fesztivál',
    date: '2026-07-31',
    time: '15:00',
    venue: 'Paloznaki Présház',
    city: 'Paloznak',
    image: '/images/jazzpiknik.jpg',
    description: 'A Balaton-part egyik legkedveltebb nyári rendezvénye: jazz, bor és finom ételek a Balatonnál.',
    offers: [
      { partner: 'Jegy.hu', price: 12500, url: 'https://jegy.hu', available: true },
      { partner: 'Tixa', price: 12800, url: 'https://tixa.hu', available: true },
    ],
  },
  {
    id: '15',
    title: 'A Pál utcai fiúk – Vígszínház',
    artist: undefined,
    category: 'Színház',
    date: '2026-05-30',
    time: '19:30',
    venue: 'Vígszínház',
    city: 'Budapest',
    image: '/images/pal-utcai.jpg',
    description: 'Molnár Ferenc klasszikusának új feldolgozása a Vígszínházban. Megható és időtálló história a barátságról.',
    offers: [
      { partner: 'Jegy.hu', price: 4200, url: 'https://jegy.hu', available: true },
      { partner: 'Jegymester', price: 4200, url: 'https://jegymester.hu', available: true },
    ],
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(price)
}

export function getMinPrice(offers: TicketOffer[]): number {
  const available = offers.filter((o) => o.available)
  if (available.length === 0) return 0
  return Math.min(...available.map((o) => o.price))
}

export function getCategoryColor(category: EventCategory): string {
  const map: Record<EventCategory, string> = {
    Koncert: 'bg-blue-100 text-blue-800',
    Sport: 'bg-green-100 text-green-800',
    Színház: 'bg-purple-100 text-purple-800',
    Fesztivál: 'bg-orange-100 text-orange-800',
    Komédia: 'bg-yellow-100 text-yellow-800',
  }
  return map[category]
}
