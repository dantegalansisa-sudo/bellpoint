type Props = { variant?: 'color' | 'light'; className?: string }

/** Marca "O" de Bellpoint: anillo naranja con swoosh azul */
export function LogoMark({ size = 32, blue = '#1b4aa8' }: { size?: number; blue?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="13.5" fill="none" stroke="#fd6505" strokeWidth="7" />
      <path d="M6 27c6 4 17 5 27-9" fill="none" stroke={blue} strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ variant = 'color', className }: Props) {
  const blue = variant === 'light' ? '#ffffff' : '#1b4aa8'
  const sub = variant === 'light' ? 'rgba(255,255,255,.7)' : '#3b4a66'
  return (
    <svg
      className={className}
      viewBox="0 0 232 58"
      role="img"
      aria-label="Belpoint SRL — Soluciones para tu empresa"
    >
      <g fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fill={blue}>
        <text x="0" y="36" fontSize="40" letterSpacing="-1.5">BELP</text>
        <g transform="translate(96 4)">
          <circle cx="17" cy="18" r="13" fill="none" stroke="#fd6505" strokeWidth="6.5" />
          <path d="M3 25c6 4 16 4.5 26-8" fill="none" stroke={blue} strokeWidth="5" strokeLinecap="round" />
        </g>
        <text x="132" y="36" fontSize="40" letterSpacing="-1.5">INT</text>
        <text x="199" y="36" fontSize="15" letterSpacing="0">SRL</text>
      </g>
      <text
        x="1"
        y="54"
        fontFamily="'Figtree', sans-serif"
        fontWeight="600"
        fontSize="9.2"
        letterSpacing="2.6"
        fill={sub}
      >
        SOLUCIONES PARA TU EMPRESA
      </text>
    </svg>
  )
}
