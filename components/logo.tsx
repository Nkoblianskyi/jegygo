'use client'

import Link from 'next/link'

type LogoVariant = 'header' | 'footer'

interface LogoProps {
  variant?: LogoVariant
  className?: string
  href?: string
  showWordmark?: boolean
}

/** Shared icon: dark rounded square + 3 golden elements (top circle, arrow, bottom circle) */
const LogoIcon = ({ variant }: { variant: LogoVariant }) => {
  const isFooter = variant === 'footer'
  const bg = isFooter ? '#fbbf24' : '#0f172a'
  const fg = isFooter ? '#0f172a' : '#f59e0b'

  return (
    <svg
      viewBox="0 0 40 40"
      className="w-9 h-9 sm:w-10 sm:h-10 shrink-0"
      aria-hidden
    >
      <rect x="0" y="0" width="40" height="40" rx="8" fill={bg} />
      <circle cx="20" cy="9" r="3" fill={fg} />
      <circle cx="20" cy="31" r="3" fill={fg} />
      {/* Arrow "go" – triangle + bar */}
      <path d="M14 18h4v2h-4v2l6-3-6-3v2z" fill={fg} />
      <rect x="18" y="20" width="8" height="2.5" rx="1" fill={fg} />
    </svg>
  )
}

export function Logo({ variant = 'header', className = '', href = '/', showWordmark = true }: LogoProps) {
  const isFooter = variant === 'footer'

  const content = (
    <>
      <LogoIcon variant={variant} />
      {showWordmark && (
        <span className={`font-bold text-lg sm:text-xl tracking-tight ${isFooter ? 'text-white inline' : 'text-slate-900 hidden sm:inline'}`}>
          jegy<span className={isFooter ? 'text-amber-400' : 'text-amber-600'}>go</span>
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
