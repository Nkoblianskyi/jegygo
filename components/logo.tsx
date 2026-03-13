'use client'

import Link from 'next/link'

type LogoVariant = 'header' | 'footer'

interface LogoProps {
  variant?: LogoVariant
  className?: string
  href?: string
  showWordmark?: boolean
}

/** Квиток з музичною нотою – концертний стиль. У футері: золота обводка, темний фон (як на референсі). */
const LogoIcon = ({ variant }: { variant: LogoVariant }) => {
  const isFooter = variant === 'footer'
  const ticketFill = isFooter ? '#0f172a' : '#0f172a'
  const ticketStroke = isFooter ? '#f59e0b' : 'transparent'
  const noteColor = '#f59e0b'

  return (
    <svg
      viewBox="0 0 40 40"
      className="w-9 h-9 sm:w-10 sm:h-10 shrink-0"
      aria-hidden
    >
      {/* Форма квитка: у футері — золота обводка + темний фон; у хедері — темний заповнений */}
      <path
        d="M8 4h24c2.2 0 4 1.8 4 4v5.8a2.2 2.2 0 0 1 0 4.4V32c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4v-5.8a2.2 2.2 0 0 1 0-4.4V8c0-2.2 1.8-4 4-4zm0 6v4.2a4 4 0 0 0 0 7.6V30h24v-8.2a4 4 0 0 0 0-7.6V10H8z"
        fill={isFooter ? ticketFill : '#0f172a'}
        stroke={ticketStroke}
        strokeWidth={isFooter ? 2 : 0}
      />
      {/* Музична нота ♪ — золота */}
      <g fill={noteColor} stroke={noteColor}>
        <ellipse cx="26" cy="21" rx="3" ry="2.4" />
        <path d="M26 19v-7l2.5 1.8" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="26" y1="19" x2="26" y2="27" strokeWidth="1.3" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function Logo({ variant = 'header', className = '', href = '/', showWordmark = true }: LogoProps) {
  const isFooter = variant === 'footer'

  const content = (
    <>
      <LogoIcon variant={variant} />
      {showWordmark && (
        <span className={`font-bold text-lg sm:text-xl tracking-tight ${isFooter ? 'text-white inline' : 'text-slate-900 inline'}`}>
          jegy<span className={isFooter ? 'text-amber-500' : 'text-amber-600'}>go</span>
        </span>
      )}
    </>
  )

  const wrapClassName = `flex items-center gap-2 shrink-0 ${className}`

  if (href) {
    return (
      <Link href={href} className={wrapClassName} aria-label="Jegygo főoldal">
        {content}
      </Link>
    )
  }

  return <div className={wrapClassName}>{content}</div>
}
