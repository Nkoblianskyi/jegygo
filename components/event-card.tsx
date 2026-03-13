import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { type Event, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'

interface EventCardProps {
  event: Event
  priority?: boolean
  /** Horizontal layout: image left, content right (for featured spot) */
  variant?: 'default' | 'horizontal'
}

export function EventCard({ event, priority = false, variant = 'default' }: EventCardProps) {
  const minPrice = getMinPrice(event.offers)

  if (variant === 'horizontal') {
    return (
      <Link
        href={`/esemenyek/${event.id}`}
        className="group flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
        aria-label={`${event.title} – ${event.city}, ${event.date}`}
      >
        <div className="relative w-full sm:w-[42%] min-h-[220px] sm:min-h-0 sm:flex-shrink-0">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, 45vw"
            priority={priority}
          />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
            {minPrice > 0 && (
              <span className="bg-white/95 text-slate-900 font-bold text-sm px-3 py-1.5 rounded-lg shadow">
                {formatPrice(minPrice)}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between min-h-[180px]">
          <div>
            <h3 className="font-bold text-slate-900 text-lg sm:text-xl leading-snug group-hover:text-slate-700 line-clamp-2 mb-2">
              {event.title}
            </h3>
            <div className="flex flex-col gap-1 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                {new Date(event.date).toLocaleDateString('hu-HU', { month: 'short', day: 'numeric', year: 'numeric' })} · {event.time}
              </span>
              <span className="flex items-center gap-1.5 truncate">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {event.venue}, {event.city}
              </span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
            Árak összehasonlítása
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    )
  }

  /* Default: vertical card with angled image bottom */
  return (
    <Link
      href={`/esemenyek/${event.id}`}
      className="group block bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full"
      aria-label={`${event.title} – ${event.city}, ${event.date}`}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover card-image-angle group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute top-2 left-2 flex gap-1.5">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
          {event.featured && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500 text-slate-900">
              Kiemelt
            </span>
          )}
        </div>
        {minPrice > 0 && (
          <div className="absolute bottom-2 right-2">
            <span className="bg-slate-900/90 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              {formatPrice(minPrice)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4 border-l-4 border-amber-500 pl-4">
        <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 mb-2">
          {event.title}
        </h3>
        <div className="text-sm text-slate-500 space-y-0.5 mb-3">
          <p>
            {new Date(event.date).toLocaleDateString('hu-HU', { month: 'short', day: 'numeric' })} · {event.time}
          </p>
          <p className="truncate">{event.venue}, {event.city}</p>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 mt-auto">
          Összehasonlítás
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
