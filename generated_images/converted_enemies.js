// ==========================================
// Ancient Chinese Ink-Wash Enemy Portraits
// Auto-generated - DO NOT EDIT
// ==========================================

var ENEMY_SVGS = {
  'lichou': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e6c6"/>
      <stop offset="55%" stop-color="#e9d6ad"/>
      <stop offset="100%" stop-color="#d7bf8f"/>
    </radialGradient>

    <filter id="paperTexture" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 .18 0" in="noise" result="noiseA"/>
      <feBlend mode="multiply" in="SourceGraphic" in2="noiseA"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)" filter="url(#paperTexture)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.3" fill="none" stroke="#b79d6f" stroke-width="0.8" opacity="0.55"/>
    <circle cx="16" cy="16" r="13.2" fill="none" stroke="#8a6f45" stroke-width="0.35" opacity="0.25"/>

    <!-- subtle ink wash vignette -->
    <path d="M3.2 19.2c2.4 5.2 7.6 9.2 12.8 9.2 5.8 0 10.7-3.6 12.8-8.4-3.4 2.7-8.8 3.9-13.2 3.9-4.6 0-9.4-1.2-12.4-4.7z"
          fill="#000" opacity="0.06"/>

    <!-- Willow branches (upper left drifting) -->
    <g filter="url(#inkBleed)" opacity="0.9">
      <path d="M6.2 7.2c2.4-.6 4.4.3 6.2 1.5" fill="none" stroke="#000" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.3 7.8c-.6 1.9-.8 3.8-.3 6.1" fill="none" stroke="#000" stroke-width="0.85" stroke-linecap="round"/>
      <path d="M8.6 8.2c-.3 2.1-.2 4 .4 6.2" fill="none" stroke="#000" stroke-width="0.7" stroke-linecap="round" opacity="0.85"/>
      <path d="M10 8.8c-.2 1.9.2 3.8.9 5.8" fill="none" stroke="#000" stroke-width="0.65" stroke-linecap="round" opacity="0.75"/>

      <!-- hanging leaves -->
      <path d="M6.6 10.1c.7.3 1.2.9 1.2 1.5-.8-.1-1.5-.6-1.9-1.2.2-.2.4-.3.7-.3z" fill="#000" opacity="0.35"/>
      <path d="M8.1 11.1c.8.4 1.2 1.1 1 1.8-.8-.2-1.5-.8-1.9-1.5.2-.2.5-.3.9-.3z" fill="#000" opacity="0.32"/>
      <path d="M9.7 12.2c.8.4 1.1 1.1.9 1.7-.8-.2-1.5-.8-1.8-1.5.2-.2.5-.3.9-.2z" fill="#000" opacity="0.28"/>
    </g>

    <!-- Boat departing (right side) -->
    <g filter="url(#inkBleed)">
      <path d="M19.7 22.4c2.4.5 5.4.5 8.1-.5" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" opacity="0.85"/>
      <path d="M21 21.2c2.2-1.1 4.8-1.2 6.6-.4" fill="none" stroke="#000" stroke-width="1.05" stroke-linecap="round" opacity="0.9"/>
      <path d="M24.2 18.2c.1 1.1.1 2.1-.2 3.2" fill="none" stroke="#000" stroke-width="0.9" stroke-linecap="round" opacity="0.9"/>
      <path d="M23.6 18.4c.9-.7 2-.9 3.1-.7" fill="none" stroke="#000" stroke-width="0.75" stroke-linecap="round" opacity="0.65"/>
      <path d="M26.9 18.7c.8 1.1 1.1 2.3 1 3.5" fill="none" stroke="#000" stroke-width="0.6" stroke-linecap="round" opacity="0.45"/>
      <!-- wake -->
      <path d="M20.4 23.7c1.3.6 2.6.8 4.2.7" fill="none" stroke="#000" stroke-width="0.55" stroke-linecap="round" opacity="0.35"/>
    </g>

    <!-- Lone figure watching (lower left) -->
    <g filter="url(#inkBleed)">
      <path d="M9.4 22.8c.4 1.8.4 3.1 0 4.3" fill="none" stroke="#000" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M8.3 23.3c.7-.9 1.7-1.3 2.7-1.2" fill="none" stroke="#000" stroke-width="1.05" stroke-linecap="round" opacity="0.9"/>
      <path d="M8.9 20.7c.9.1 1.5.6 1.7 1.4-.8.2-1.7-.1-2.2-.8.1-.4.3-.7.5-.6z" fill="#000" opacity="0.75"/>
      <path d="M7.8 27.2c1.8.6 3.7.6 5.6 0" fill="none" stroke="#000" stroke-width="0.65" stroke-linecap="round" opacity="0.5"/>
    </g>

    <!-- Main calligraphy: 离愁 (prominent, bold brush strokes) -->
    <g filter="url(#inkBleed)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- 离 -->
      <path d="M10.2 6.8c2.4.7 4.8.7 7.2-.1" stroke-width="2.3"/>
      <path d="M13.8 7.3c0 2.2-.2 4.5-.7 6.9" stroke-width="2.2"/>
      <path d="M11.1 10.2c2.6.6 4.9.6 7.2-.1" stroke-width="2.05" opacity="0.95"/>
      <path d="M10.6 13.1c1.1.7 2.7 1.2 4.4 1.2 1.3 0 2.5-.2 3.4-.6" stroke-width="1.9" opacity="0.95"/>
      <path d="M16.9 8.6c.7 1.4 1.3 3 1.6 4.7" stroke-width="1.75" opacity="0.85"/>
      <path d="M12 15.6c2.3 1.2 4.4 3 6.1 5.3" stroke-width="2.0" opacity="0.95"/>
      <path d="M10.6 19.9c2.4-.5 4.6-1.4 6.8-2.9" stroke-width="2.1"/>

      <!-- 愁 -->
      <path d="M18.1 11.2c2.0.3 3.8.3 5.8 0" stroke-width="2.05"/>
      <path d="M19.1 13.3c.9 1.2 2.2 2 3.9 2.4" stroke-width="1.85" opacity="0.95"/>
      <path d="M20.1 16.6c-.2 1.6-.2 3.3.1 5.1" stroke-width="2.05"/>
      <path d="M22.8 16.2c-.3 2.2-1.1 4.2-2.3 6" stroke-width="1.95" opacity="0.95"/>
      <path d="M24.4 14.3c.9 2 1.4 4.4 1.2 7" stroke-width="1.65" opacity="0.75"/>

      <!-- heart/sorrow dot & stroke (tear-like) -->
      <path d="M25.2 22.4c.1 1.1-.2 2.1-1 3" stroke-width="1.2" opacity="0.55"/>
      <path d="M23.8 24.6c.2.3.3.7.2 1.1-.5-.1-1-.4-1.2-.8.2-.2.6-.4 1-.3z" fill="#000" opacity="0.35" stroke="none"/>
    </g>

    <!-- subtle border ink flecks -->
    <g opacity="0.22" fill="#000">
      <path d="M4.7 14.2c.6.2 1 .6.9 1-.6.2-1.3-.1-1.6-.6.1-.3.4-.5.7-.4z"/>
      <path d="M27.3 9.8c.7.2 1.1.7 1 1.1-.7.2-1.4-.2-1.7-.7.1-.3.4-.5.7-.4z"/>
      <path d="M25.9 26.6c.7.2 1.1.7 1 1.1-.7.2-1.4-.2-1.7-.7.1-.3.4-.5.7-.4z"/>
    </g>
  </g>
</svg>`,
  'qiusi': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f6e6c7"/>
      <stop offset="55%" stop-color="#eed9b3"/>
      <stop offset="100%" stop-color="#e2c894"/>
    </radialGradient>

    <filter id="paperNoise" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.18 0" in="noise" result="noiseA"/>
      <feComposite in="noiseA" in2="SourceGraphic" operator="over"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="0.55" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0.7 0" result="shadow"/>
      <feComposite in="shadow" in2="SourceGraphic" operator="over"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="1" seed="3" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="0.35" xChannelSelector="R" yChannelSelector="G"/>
    </filter>

    <filter id="softInk" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="0.15" result="b"/>
      <feComposite in="SourceGraphic" in2="b" operator="over"/>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#c9a76f" stroke-width="0.7" opacity="0.55"/>
    <circle cx="16" cy="16" r="13.9" fill="none" stroke="#b99358" stroke-width="0.45" opacity="0.35"/>
    <g filter="url(#paperNoise)" opacity="0.55">
      <circle cx="16" cy="16" r="15" fill="none" stroke="#8a6a3b" stroke-width="0.2" opacity="0.3"/>
    </g>

    <!-- subtle crescent moon -->
    <g filter="url(#softInk)" opacity="0.9">
      <path d="M23.9 6.9c-2.2 0.5-3.6 2.6-3.2 4.7c0.4 2.1 2.5 3.5 4.7 3.0c-1.4 1.0-3.3 1.4-5.0 0.9c-2.9-0.9-4.6-4.0-3.7-6.9c0.8-2.8 3.9-4.4 7.2-1.7z"
            fill="#121212" opacity="0.55"/>
    </g>

    <!-- solitary wild goose (ink silhouette) -->
    <g filter="url(#inkBleed)" opacity="0.9">
      <path d="M24.6 12.2c-1.1-0.9-2.2-1.3-3.4-1.2c-1.4 0.1-2.4 0.7-3.2 1.5c1.0-0.2 1.9-0.1 2.8 0.3c-0.9 0.2-1.6 0.6-2.3 1.1c1.2-0.1 2.1 0.1 3.1 0.7c0.7 0.4 1.5 0.5 2.1 0.4c0.8-0.1 1.4-0.5 1.8-1.2c0.3-0.5 0.2-1.0-0.9-1.6z"
            fill="#0e0e0e" opacity="0.7"/>
      <path d="M18.0 12.6c-1.2-0.8-2.4-1.2-3.5-1.1c-1.1 0.1-2.2 0.6-3.1 1.5c1.0-0.2 1.9-0.1 2.8 0.3c-0.9 0.2-1.7 0.6-2.3 1.1c1.3-0.1 2.3 0.2 3.2 0.8c0.7 0.4 1.4 0.5 2.0 0.4c0.7-0.1 1.2-0.4 1.5-0.9c0.2-0.4-0.0-0.9-0.6-1.4z"
            fill="#0e0e0e" opacity="0.35"/>
    </g>

    <!-- falling maple leaves (ink strokes) -->
    <g filter="url(#inkBleed)" opacity="0.85">
      <path d="M7.1 9.0c1.0 0.4 1.7 0.1 2.2-0.3c0.2 0.8 0.7 1.4 1.5 1.7c-0.8 0.3-1.4 0.8-1.7 1.6c-0.3-0.8-0.9-1.3-2.0-1.4c0.7-0.3 1.1-0.8 1.0-1.6c-0.3 0.2-0.6 0.2-1.0 0.0z"
            fill="#0d0d0d" opacity="0.55"/>
      <path d="M8.9 16.5c0.9 0.4 1.6 0.2 2.1-0.3c0.2 0.8 0.7 1.3 1.5 1.6c-0.8 0.3-1.3 0.9-1.6 1.6c-0.3-0.8-0.9-1.2-1.9-1.3c0.7-0.3 1.1-0.8 0.9-1.6c-0.3 0.2-0.6 0.2-1.0 0.0z"
            fill="#0d0d0d" opacity="0.45"/>
      <path d="M6.5 22.3c0.8 0.4 1.4 0.2 1.8-0.3c0.2 0.7 0.6 1.2 1.3 1.4c-0.7 0.3-1.1 0.8-1.4 1.4c-0.3-0.7-0.8-1.0-1.7-1.1c0.6-0.3 1.0-0.7 0.8-1.4c-0.3 0.2-0.5 0.2-0.8 0.0z"
            fill="#0d0d0d" opacity="0.35"/>
      <path d="M10.6 8.1c0.2 1.7-0.2 3.0-1.1 4.2" fill="none" stroke="#101010" stroke-width="0.55" stroke-linecap="round" opacity="0.35"/>
      <path d="M12.3 15.6c0.2 1.8-0.2 3.2-1.2 4.4" fill="none" stroke="#101010" stroke-width="0.55" stroke-linecap="round" opacity="0.28"/>
      <path d="M9.3 21.3c0.1 1.5-0.2 2.6-0.9 3.6" fill="none" stroke="#101010" stroke-width="0.5" stroke-linecap="round" opacity="0.22"/>
    </g>

    <!-- Calligraphy: 秋思 (stylized brush strokes) -->
    <g filter="url(#inkBleed)" fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round">
      <!-- 秋 (left) -->
      <path d="M6.9 10.2c2.9-0.6 5.6-0.8 7.9-0.6" stroke-width="2.1" opacity="0.95"/>
      <path d="M10.2 7.6c-0.3 5.1-0.3 9.7 0.1 14.2" stroke-width="2.2" opacity="0.95"/>
      <path d="M7.6 14.1c2.6-0.2 5.0-0.1 7.1 0.2" stroke-width="1.8" opacity="0.9"/>
      <path d="M12.9 10.9c-0.5 3.2-1.9 6.0-4.3 8.4" stroke-width="1.9" opacity="0.9"/>
      <path d="M13.3 14.8c1.2 2.2 2.4 3.9 3.8 5.3" stroke-width="1.8" opacity="0.85"/>
      <path d="M14.6 9.2c1.3 1.8 2.2 3.7 2.7 5.9" stroke-width="1.9" opacity="0.85"/>
      <path d="M15.8 18.4c0.6 1.4 1.0 2.6 1.1 3.8" stroke-width="1.7" opacity="0.75"/>

      <!-- 思 (right) -->
      <path d="M18.0 11.0c1.8-0.2 3.7-0.2 5.7 0.0" stroke-width="2.0" opacity="0.95"/>
      <path d="M17.8 13.6c2.2 0.1 4.3 0.2 6.2 0.0" stroke-width="1.7" opacity="0.9"/>
      <path d="M19.0 9.2c-0.1 3.7-0.2 6.6 0.0 8.5" stroke-width="1.8" opacity="0.9"/>
      <path d="M22.7 9.4c0.1 3.3 0.2 6.1 0.1 8.3" stroke-width="1.8" opacity="0.88"/>
      <path d="M18.3 18.8c2.2-0.3 4.3-0.3 6.3 0.0" stroke-width="1.9" opacity="0.92"/>
      <path d="M19.0 21.2c1.0-0.6 2.0-1.0 3.0-1.1c1.1-0.1 2.1 0.1 3.0 0.6" stroke-width="1.6" opacity="0.8"/>
      <path d="M20.0 23.8c1.0 0.7 1.9 0.9 2.9 0.7c1.0-0.2 1.7-0.7 2.4-1.5" stroke-width="1.9" opacity="0.9"/>
      <path d="M17.7 24.8c1.2-1.8 1.9-3.7 2.2-5.8" stroke-width="1.5" opacity="0.35"/>

      <!-- Ink splatter accent -->
      <path d="M16.2 26.0c0.4 0.2 0.7 0.6 0.7 1.0c-0.0 0.6-0.6 1.0-1.4 0.9c-0.7-0.1-1.2-0.6-1.1-1.1c0.1-0.5 0.9-0.9 1.8-0.8z" fill="#0b0b0b" stroke="none" opacity="0.25"/>
    </g>

    <!-- outer ink rim irregularity -->
    <g filter="url(#inkBleed)" opacity="0.25">
      <path d="M16 1.3c7.9 0 14.7 6.2 14.8 14.6c0.1 8.6-6.6 14.9-14.8 14.9C7.8 30.8 1.2 24.6 1.2 16S7.6 1.3 16 1.3z"
            fill="none" stroke="#2a1e12" stroke-width="0.8"/>
    </g>
  </g>
</svg>`,
  'yeyu': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#f4e6c8"/>
      <stop offset="55%" stop-color="#ecd9b1"/>
      <stop offset="100%" stop-color="#dcc18f"/>
    </radialGradient>
    <filter id="inkBleed" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.35" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="0.15" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softInk" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="0.25" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
  <circle cx="16" cy="16" r="15" fill="none" stroke="#3a2b1a" stroke-opacity="0.22" stroke-width="0.9"/>
  <circle cx="16" cy="16" r="14.1" fill="none" stroke="#2b1f14" stroke-opacity="0.12" stroke-width="0.7"/>

  <g clip-path="url(#clipCircle)">
    <g opacity="0.22" filter="url(#softInk)">
      <path d="M22.6 8.2c-1.4 2.5-1.6 6.2-.3 9.0" fill="none" stroke="#000" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M24.8 9.1c-1.2 2.7-1.2 6.1.1 8.6" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round"/>
      <path d="M26.8 10.1c-1.0 2.7-.8 5.6.4 8.0" fill="none" stroke="#000" stroke-width="0.9" stroke-linecap="round"/>
      <path d="M21.7 10.0c-.9 2.8-1.1 5.2-.1 7.4" fill="none" stroke="#000" stroke-width="0.9" stroke-linecap="round"/>
    </g>

    <g filter="url(#inkBleed)" opacity="0.95">
      <path d="M21.8 11.0c0 0 3.0 1.1 4.8 0.4" fill="none" stroke="#000" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M21.6 15.2c0 0 3.4 1.2 5.1 0.5" fill="none" stroke="#000" stroke-width="1.7" stroke-linecap="round" stroke-opacity="0.92"/>
      <path d="M21.3 19.6c0 0 3.8 1.2 5.6 0.2" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.9"/>
    </g>

    <g filter="url(#inkBleed)" opacity="0.95">
      <path d="M6.7 10.2c2.8-0.9 5.6-1.1 8.3-0.7" fill="none" stroke="#000" stroke-width="2.0" stroke-linecap="round"/>
      <path d="M9.0 8.1c0.6 1.2 0.6 3.0 0.1 4.2" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M7.6 12.9c3.0 0.4 5.6 0.3 7.6-0.2" fill="none" stroke="#000" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M11.8 7.7c0.7 2.0 0.5 4.2-0.6 6.1" fill="none" stroke="#000" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M14.5 7.9c-0.6 2.6-1.8 4.8-3.6 6.5" fill="none" stroke="#000" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M8.0 15.4c1.6 1.2 3.9 2.0 6.4 2.2" fill="none" stroke="#000" stroke-width="2.0" stroke-linecap="round"/>
      <path d="M12.8 14.8c-0.3 1.8-1.0 3.1-2.2 4.0" fill="none" stroke="#000" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M14.8 15.4c-0.6 2.0-1.6 3.6-3.1 4.9" fill="none" stroke="#000" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M9.2 19.3c1.8 0.2 4.0-0.2 5.9-1.0" fill="none" stroke="#000" stroke-width="1.9" stroke-linecap="round"/>
    </g>

    <g filter="url(#inkBleed)" opacity="0.96">
      <path d="M6.4 22.8c3.5-0.8 7.0-0.9 10.2-0.2" fill="none" stroke="#000" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M10.4 20.2c0.2 2.2-0.8 4.6-2.2 6.0" fill="none" stroke="#000" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M13.8 20.1c0.6 2.4-0.1 4.7-2.0 6.6" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M16.7 20.4c-0.2 1.0-0.7 2.3-1.6 3.6" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M16.2 24.3c0.2 1.7 0.6 2.6 1.6 3.2" fill="none" stroke="#000" stroke-width="2.0" stroke-linecap="round"/>
      <path d="M8.0 24.8c2.0 1.1 4.8 1.4 7.6 0.8" fill="none" stroke="#000" stroke-width="2.0" stroke-linecap="round"/>
      <path d="M12.1 22.6c2.2 0.8 4.1 1.9 5.2 3.0" fill="none" stroke="#000" stroke-width="1.9" stroke-linecap="round"/>
      <path d="M14.8 22.2c0.8 1.4 1.0 2.8 0.6 4.2" fill="none" stroke="#000" stroke-width="2.0" stroke-linecap="round"/>
    </g>

    <g filter="url(#softInk)" opacity="0.9">
      <path d="M24.2 20.8c0.7 1.0 0.9 2.2 0.5 3.4" fill="none" stroke="#000" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.45"/>
      <path d="M24.0 19.9c0.8 0.7 1.1 1.6 0.9 2.7" fill="none" stroke="#000" stroke-width="1.1" stroke-linecap="round" stroke-opacity="0.35"/>
      <path d="M23.9 22.7c0.8 0.1 1.5 0.7 1.8 1.5" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round" stroke-opacity="0.3"/>
      <path d="M23.6 24.8c1.0 0.2 2.0 0.1 3.0-0.2" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round" stroke-opacity="0.25"/>
    </g>

    <g filter="url(#inkBleed)" opacity="0.9">
      <path d="M24.5 20.3c-0.4 1.3-0.6 2.5-0.6 3.6" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round" stroke-opacity="0.3"/>
      <path d="M26.1 20.8c-0.3 1.2-0.4 2.3-0.4 3.3" fill="none" stroke="#000" stroke-width="0.9" stroke-linecap="round" stroke-opacity="0.25"/>
      <path d="M22.9 21.1c-0.3 1.0-0.5 2.0-0.5 3.0" fill="none" stroke="#000" stroke-width="0.9" stroke-linecap="round" stroke-opacity="0.22"/>
    </g>
  </g>
</svg>`,
  'guhong': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.6" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="0.12"/>
    </filter>

    <filter id="paperTexture" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="11" result="turb"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.25 0" result="tAlpha"/>
      <feComposite in="tAlpha" in2="SourceGraphic" operator="in" result="tex"/>
      <feBlend in="SourceGraphic" in2="tex" mode="multiply"/>
    </filter>

    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e2bf"/>
      <stop offset="70%" stop-color="#ead2a2"/>
      <stop offset="100%" stop-color="#d8b67e"/>
    </radialGradient>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <circle cx="16" cy="16" r="15" fill="url(#parchment)" filter="url(#paperTexture)"/>
  <circle cx="16" cy="16" r="15" fill="none" stroke="#3a2a18" stroke-opacity="0.35" stroke-width="0.8"/>

  <g clip-path="url(#clipCircle)">
    <g filter="url(#inkBleed)" fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round">
      <!-- faint sky wash / horizon -->
      <path d="M3.5 19.2 C9.0 17.8, 13.0 18.4, 16.4 19.3 C21.4 20.7, 26.0 20.8, 29.2 19.4" stroke-width="1.2" stroke-opacity="0.18"/>
      <path d="M4.2 22.8 C8.8 22.0, 13.0 22.4, 16.8 23.0 C21.3 23.7, 25.1 23.6, 28.6 22.7" stroke-width="0.9" stroke-opacity="0.12"/>

      <!-- solitary wild goose (simple brush silhouette) -->
      <path d="M19.8 8.7 C18.7 9.3, 17.6 9.6, 16.6 9.3" stroke-width="1.35" stroke-opacity="0.85"/>
      <path d="M19.8 8.7 C21.0 9.2, 22.2 9.2, 23.2 8.5" stroke-width="1.35" stroke-opacity="0.85"/>
      <path d="M18.8 9.0 C19.0 9.4, 19.2 9.7, 19.7 10.0" stroke-width="0.9" stroke-opacity="0.65"/>

      <!-- Calligraphy: "孤鸿" (stylized brush strokes, bold and prominent) -->
      <g stroke-opacity="0.96">
        <!-- 孤 (left) -->
        <path d="M7.4 7.4 C7.0 10.2, 6.8 13.2, 7.1 16.2 C7.3 18.3, 7.0 20.6, 6.5 22.8" stroke-width="2.2"/>
        <path d="M7.1 10.4 C8.4 10.1, 10.0 9.9, 11.6 10.0 C12.5 10.0, 13.3 10.1, 14.0 10.3" stroke-width="1.9"/>
        <path d="M8.2 13.4 C9.4 13.1, 10.7 13.0, 12.0 13.2 C12.7 13.3, 13.3 13.4, 13.8 13.6" stroke-width="1.7"/>
        <path d="M8.0 16.6 C9.5 16.1, 11.5 15.9, 13.2 16.2" stroke-width="1.8"/>
        <path d="M11.9 7.3 C11.5 8.8, 11.4 10.4, 11.6 12.3 C11.7 14.0, 11.7 16.1, 11.5 18.0 C11.3 20.1, 11.0 21.8, 10.4 23.6" stroke-width="2.0"/>
        <path d="M6.8 19.2 C8.6 18.7, 10.7 18.6, 12.8 18.8 C13.6 18.9, 14.3 19.1, 14.8 19.4" stroke-width="1.6"/>

        <!-- 鸿 (right) -->
        <!-- left component (water/side) -->
        <path d="M17.0 11.0 C17.5 12.1, 17.8 13.3, 17.6 14.5" stroke-width="1.8"/>
        <path d="M16.4 14.9 C17.3 15.7, 17.9 16.8, 18.2 18.0" stroke-width="1.8"/>
        <path d="M16.0 18.7 C17.0 19.3, 17.6 20.2, 18.0 21.3" stroke-width="1.8"/>

        <!-- right component (bird) -->
        <path d="M20.0 9.2 C22.0 8.8, 24.0 8.7, 26.0 8.9" stroke-width="2.0"/>
        <path d="M21.2 9.5 C21.0 11.1, 20.9 12.8, 21.2 14.6 C21.4 15.6, 21.4 16.7, 21.1 17.7" stroke-width="2.1"/>
        <path d="M22.1 11.5 C23.3 11.3, 24.6 11.3, 25.8 11.6" stroke-width="1.6"/>
        <path d="M22.0 14.6 C23.5 14.2, 25.2 14.1, 26.7 14.5" stroke-width="1.7"/>
        <path d="M23.0 15.2 C23.6 16.8, 24.6 18.2, 26.0 19.3" stroke-width="2.0"/>
        <path d="M20.2 19.3 C21.9 19.0, 23.8 19.0, 25.8 19.3 C26.7 19.4, 27.3 19.6, 27.8 19.9" stroke-width="1.8"/>
        <path d="M22.0 20.1 C21.8 21.3, 21.2 22.4, 20.2 23.2" stroke-width="1.9"/>
        <path d="M24.2 20.3 C24.4 21.2, 24.8 22.2, 25.6 23.2" stroke-width="1.9"/>
      </g>
    </g>

    <!-- slight ink splatters -->
    <g fill="#0b0b0b" opacity="0.18">
      <circle cx="9.2" cy="24.4" r="0.6"/>
      <circle cx="24.8" cy="6.7" r="0.5"/>
      <circle cx="26.6" cy="24.1" r="0.4"/>
      <circle cx="6.0" cy="11.2" r="0.35"/>
    </g>
  </g>
</svg>`,
  'zhuangzhi': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e3bf"/>
      <stop offset="55%" stop-color="#ead3a2"/>
      <stop offset="100%" stop-color="#d8bd83"/>
    </radialGradient>

    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        0 0 0 0 0.35
        0 0 0 0 0.28
        0 0 0 0 0.15
        0 0 0 0.10 0" result="tint"/>
      <feBlend in="tint" in2="SourceGraphic" mode="multiply" result="mul"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.35"/>
      </feComponentTransfer>
      <feComposite in="mul" in2="SourceGraphic" operator="over"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 8 -2.8" result="i"/>
      <feComposite in="i" in2="SourceGraphic" operator="over"/>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)" filter="url(#paperGrain)"/>
    <circle cx="16" cy="16" r="14.3" fill="none" stroke="#b89655" stroke-width="0.9" opacity="0.55"/>
    <circle cx="16" cy="16" r="13.2" fill="none" stroke="#8a6a33" stroke-width="0.6" opacity="0.25"/>

    <!-- subtle cloud wash behind sword/peak -->
    <g opacity="0.22" filter="url(#inkBleed)">
      <path d="M6.2 18.9c2.6-2.1 5.5-2.5 8.4-1.4 2.3.9 4.2.6 6.2-.7 2.0-1.3 4.1-1.4 5.9.2.8.8 1.2 1.7.8 2.5-.6 1.3-2.4 2.0-5.1 1.7-2.1-.2-4.1.1-6.1.7-3.9 1.1-7.1.8-9.4-.7-1.1-.7-1.4-1.6-.7-2.3z" fill="#000"/>
      <path d="M8.1 14.7c1.8-1.1 3.9-1.3 6.0-.5 1.4.5 2.9.5 4.5-.2 1.7-.7 3.2-.7 4.6.1.7.4 1.0 1.1.6 1.6-.5.8-1.8 1.1-3.8 1.0-2.0-.1-4 .2-5.8.7-2.9.8-5.3.6-6.6-.3-.7-.5-.7-1 .5-2.4z" fill="#000" opacity="0.7"/>
    </g>

    <!-- mountain peak (ink wash) -->
    <g filter="url(#inkBleed)">
      <path d="M5.4 26.6c2.5-4.0 5.8-7.5 9.6-10.5 1.2-1.0 2.2-2.1 3.1-3.4 0.5 1.6 1.4 3.0 2.7 4.2 2.8 2.5 4.9 5.7 6.0 9.7-4.0-.8-7.7-.7-11.0.3-3.5 1.1-6.8 1.0-10.4-.3z" fill="#000" opacity="0.62"/>
      <path d="M9.0 26.4c1.9-3.2 4.3-6.0 7.2-8.5 0.7-.6 1.4-1.3 2.0-2.1 0.4 1.0 1.0 1.9 1.8 2.6 2.0 1.8 3.5 4.1 4.3 7.0-3.0-.5-5.7-.4-8.1.4-2.4.8-4.7.9-7.2.6z" fill="#000" opacity="0.5"/>
      <path d="M16.2 12.7l2.2 3.2 3.0 2.6-3.8-1.2-3.1 2.0 1.7-3.4-1.7-3.2z" fill="#000" opacity="0.25"/>
    </g>

    <!-- sword piercing clouds -->
    <g filter="url(#inkBleed)">
      <path d="M18.7 7.0c.4 3.2.2 6.4-.5 9.5-.6 2.8-1.2 5.7-1.6 8.6-.1.9-.2 1.8-.2 2.7" fill="none" stroke="#000" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.9 6.4l1.3 1.9-2.2.7z" fill="#000"/>
      <path d="M14.8 22.2c1.8.8 3.6.8 5.4 0" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round" opacity="0.85"/>
      <path d="M15.7 24.7c.3 1.3.6 2.2 1.0 3.0.3-.9.6-1.9.9-3.0" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round" opacity="0.85"/>
    </g>

    <!-- calligraphy: 壮志 (prominent) -->
    <g filter="url(#inkBleed)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
      <!-- 壮 -->
      <path d="M6.3 10.1c3.0.3 6.2.3 9.6-.1" stroke-width="2.2"/>
      <path d="M10.3 7.2c.2 2.3.1 4.7-.3 7.1-.3 1.9-.7 3.9-1.2 6.1" stroke-width="2.0"/>
      <path d="M13.0 12.1c.2 2.9.0 5.3-.6 7.4" stroke-width="2.0"/>
      <path d="M12.2 16.0c1.4.2 2.8.2 4.2-.1" stroke-width="2.1"/>
      <path d="M14.8 8.6c.2 3.3.1 6.6-.4 9.9" stroke-width="2.0" opacity="0.95"/>

      <!-- 志 -->
      <path d="M16.8 10.0c3.0-.6 5.7-1.6 8.3-3.0" stroke-width="2.2"/>
      <path d="M18.1 12.5c2.6.2 5.0.2 7.4-.1" stroke-width="2.2"/>
      <path d="M20.2 13.3c.2 1.8.1 3.5-.3 5.0-.4 1.6-.8 3.2-1.0 4.7" stroke-width="2.0"/>
      <path d="M22.8 13.2c.2 3.6.0 6.7-.8 9.2" stroke-width="2.1"/>
      <path d="M17.2 21.1c2.1.6 4.5.7 7.2.3" stroke-width="2.3"/>
      <path d="M19.0 24.4c1.0.9 2.0 1.5 3.1 1.8 1.1.3 2.3.3 3.7-.1" stroke-width="2.1" opacity="0.95"/>

      <!-- extra bold accents -->
      <path d="M6.8 9.8c2.1.1 4.2.1 6.4-.1" stroke-width="3.0" opacity="0.55"/>
      <path d="M17.4 20.8c2.2.6 4.7.7 7.4.2" stroke-width="3.0" opacity="0.5"/>
    </g>

    <!-- vignette edge wash -->
    <path d="M16 1.7c8.2 0 14.9 6.2 14.9 14.3S24.2 30.3 16 30.3 1.1 24.1 1.1 16 7.8 1.7 16 1.7z" fill="none" stroke="#000" stroke-width="0.9" opacity="0.12"/>
  </g>
</svg>`,
  'chouchang': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e6c8"/>
      <stop offset="55%" stop-color="#ead7ad"/>
      <stop offset="100%" stop-color="#ddc392"/>
    </radialGradient>

    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        0 0 0 0 0.30
        0 0 0 0 0.25
        0 0 0 0 0.18
        0 0 0 0.20 0" in="noise" result="grain"/>
      <feBlend in="SourceGraphic" in2="grain" mode="multiply"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.85 0" result="bb"/>
      <feMerge>
        <feMergeNode in="bb"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="0.8" result="s"/>
      <feOffset dx="0" dy="0.3" result="so"/>
      <feColorMatrix in="so" type="matrix" values="
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0.18 0" result="sm"/>
      <feMerge>
        <feMergeNode in="sm"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)" filter="url(#paperGrain)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#b89d6c" stroke-width="0.6" opacity="0.55"/>
    <circle cx="16" cy="16" r="13.2" fill="none" stroke="#a88d5b" stroke-width="0.35" opacity="0.35"/>

    <g opacity="0.14" fill="none" stroke="#6b5a3a" stroke-width="0.7" stroke-linecap="round">
      <path d="M4.2 15.6c3.8-2.3 7.9-3.3 11.8-2.8 3.3.4 7.7 2.1 11.8 5.6"/>
      <path d="M5.0 19.8c4.4-2.0 8.6-2.4 12.0-1.6 3.7.9 7.0 3.0 10.4 5.8"/>
    </g>

    <g filter="url(#softShadow)" opacity="0.9">
      <g opacity="0.85">
        <path d="M24.4 7.0c-2.6-1.5-6.4-0.6-7.7 2.0 1.8.6 3.0 2.2 3.0 3.9 0 .3 0 .6-.1.9 2.6.3 5.2-1.2 6.0-3.4.5-1.3.2-2.6-1.2-3.4z" fill="#111" opacity="0.18"/>
        <path d="M20.0 11.7c.6.0 1.2.2 1.7.6" stroke="#111" stroke-width="0.55" stroke-linecap="round" opacity="0.28" fill="none"/>
      </g>

      <g opacity="0.5" stroke="#111" stroke-linecap="round" stroke-width="1.1" fill="none">
        <path d="M26.8 6.0c-.8 2.2-1.2 4.5-1.1 6.8"/>
        <path d="M23.9 5.8c-.8 2.2-1.2 4.6-1.1 7.2"/>
        <path d="M21.0 6.6c-.6 2.0-.9 4.1-.8 6.2"/>
      </g>
      <g opacity="0.35" stroke="#111" stroke-linecap="round" stroke-width="0.8" fill="none">
        <path d="M27.6 8.6c-1.5 1.7-3.1 3.1-4.9 4.2"/>
        <path d="M26.7 11.0c-1.4 1.4-2.9 2.6-4.6 3.5"/>
      </g>
    </g>

    <g filter="url(#inkBleed)" opacity="0.9">
      <g fill="none" stroke="#0c0c0c" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9.4 22.4c2.5-.3 4.7-1.5 6.3-3.5" stroke-width="1.35" opacity="0.85"/>
        <path d="M15.7 18.9c.4 2.4-1.0 4.4-3.0 5.3" stroke-width="1.15" opacity="0.75"/>
        <path d="M11.6 24.3c-.5.9-1.2 1.6-2.1 2.0" stroke-width="0.95" opacity="0.75"/>
        <path d="M9.0 24.0c.8-.2 1.6-.1 2.3.3" stroke-width="0.85" opacity="0.55"/>
        <path d="M13.5 21.2c.9.5 1.9.7 2.9.5" stroke-width="0.75" opacity="0.45"/>
      </g>

      <g fill="#0c0c0c" opacity="0.55">
        <path d="M9.7 22.2c.8-.2 1.5.4 1.2 1.1-.3.8-1.6 1.1-2.2.5-.4-.4-.1-1.3 1.0-1.6z"/>
        <path d="M12.2 24.2c.9-.1 1.3.7.8 1.3-.5.6-1.7.5-2.0-.2-.2-.5.2-1.0 1.2-1.1z"/>
      </g>
    </g>

    <g filter="url(#inkBleed)">
      <g fill="none" stroke="#070707" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8.8 9.3c1.7.7 3.5 1.0 5.3.8" stroke-width="1.35"/>
        <path d="M11.0 8.1c.3 1.5.4 3.2.2 5.0" stroke-width="1.55"/>
        <path d="M9.3 12.5c1.4.2 2.9.1 4.5-.4" stroke-width="1.35"/>
        <path d="M12.5 11.4c.8 1.1 1.4 2.4 1.7 3.9" stroke-width="1.25"/>
        <path d="M9.2 15.2c1.7-.2 3.5-.6 5.2-1.3" stroke-width="1.45"/>
        <path d="M10.2 16.6c.6 1.0 1.1 2.2 1.4 3.6" stroke-width="1.25"/>

        <path d="M16.8 8.7c1.4.6 2.8.7 4.3.2" stroke-width="1.25"/>
        <path d="M17.2 10.4c1.8.2 3.4-.1 4.9-.9" stroke-width="1.35"/>
        <path d="M17.0 12.1c1.2.8 2.6 1.1 4.1.8" stroke-width="1.25"/>
        <path d="M19.5 9.1c-.4 2.3-1.2 4.2-2.4 5.8" stroke-width="1.6"/>
        <path d="M17.2 15.2c1.6-.1 3.3-.4 5.0-1.1" stroke-width="1.45"/>
        <path d="M20.6 13.0c.6 1.4.9 2.9.8 4.5" stroke-width="1.25"/>

        <path d="M22.8 10.5c.4 1.4.8 3.0 1.0 4.6" stroke-width="1.35" opacity="0.95"/>
        <path d="M23.8 12.0c.9-.2 1.8-.6 2.6-1.2" stroke-width="1.15" opacity="0.8"/>
        <path d="M23.9 14.9c.8.7 1.6 1.4 2.5 2.2" stroke-width="1.2" opacity="0.75"/>
        <path d="M21.9 16.6c.6 1.0 1.4 2.0 2.5 2.9" stroke-width="1.2" opacity="0.7"/>

        <path d="M14.8 18.0c.9.4 1.8.5 2.8.2" stroke-width="1.05" opacity="0.8"/>
        <path d="M15.8 19.3c-.5 1.2-1.2 2.3-2.1 3.2" stroke-width="1.55"/>
        <path d="M16.9 20.1c1.5.1 3.0-.1 4.4-.7" stroke-width="1.35"/>
        <path d="M19.1 18.6c.3 1.8.2 3.5-.3 5.0" stroke-width="1.5"/>
        <path d="M16.6 23.1c1.8-.3 3.5-1.0 5.2-2.0" stroke-width="1.4"/>
      </g>

      <g opacity="0.18" fill="none" stroke="#000" stroke-linecap="round">
        <path d="M8.3 10.0c.8 2.7 1.8 5.2 3.2 7.5" stroke-width="0.9"/>
        <path d="M16.2 8.9c.2 3.5.9 6.6 2.1 9.3" stroke-width="0.85"/>
      </g>

      <g fill="#050505" opacity="0.85">
        <path d="M11.2 8.0c.8.2 1.3.9 1.0 1.5-.3.6-1.1.8-1.7.4-.6-.4-.4-1.6.7-1.9z"/>
        <path d="M19.3 9.0c.7.3 1.0 1.1.5 1.7-.5.6-1.5.5-1.9-.2-.4-.7.2-1.6 1.4-1.5z"/>
        <path d="M15.6 19.2c.7.2 1.0 1.0.6 1.6-.4.6-1.4.6-1.8-.1-.4-.7.1-1.6 1.2-1.5z"/>
      </g>
    </g>

    <g opacity="0.18">
      <path d="M2.6 16c.0-7.4 6.0-13.4 13.4-13.4" fill="none" stroke="#ffffff" stroke-width="1.0" stroke-linecap="round"/>
    </g>
  </g>

  <circle cx="16" cy="16" r="15" fill="none" stroke="#2a2013" stroke-width="0.9" opacity="0.55"/>
</svg>`,
  'piaobo': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e6c8"/>
      <stop offset="65%" stop-color="#e8d7b3"/>
      <stop offset="100%" stop-color="#dcc79f"/>
    </radialGradient>

    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 .18 0" in="noise" result="grain"/>
      <feComposite in="grain" in2="SourceGraphic" operator="over"/>
    </filter>

    <filter id="inkBleed" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.8 0" result="bb"/>
      <feMerge>
        <feMergeNode in="bb"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)" filter="url(#paperGrain)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.7" fill="none" stroke="#c9b187" stroke-width="0.8" opacity="0.6"/>
    <circle cx="16" cy="16" r="13.9" fill="none" stroke="#bda27a" stroke-width="0.6" opacity="0.35"/>

    <g filter="url(#inkBleed)" fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.2 22.3 C8.5 20.7, 11.6 21.5, 15.0 20.7 C18.4 19.9, 22.0 19.0, 28.2 20.0" stroke-width="1.1" opacity="0.18"/>
      <path d="M3.8 24.4 C7.6 23.6, 11.9 24.0, 15.6 23.1 C19.2 22.3, 23.4 21.6, 28.4 22.3" stroke-width="1.4" opacity="0.16"/>
      <path d="M5.0 26.2 C9.2 25.4, 13.4 25.9, 16.6 24.9 C19.9 23.9, 23.6 23.4, 27.6 24.1" stroke-width="1.0" opacity="0.14"/>

      <path d="M21.5 24.0 C22.9 22.6, 25.0 22.4, 26.4 24.0" stroke-width="1.1" opacity="0.9"/>
      <path d="M20.9 24.0 C22.6 25.2, 25.4 25.2, 27.0 24.0" stroke-width="1.6" opacity="0.95"/>
      <path d="M24.1 19.9 L24.1 23.1" stroke-width="0.7" opacity="0.75"/>
      <path d="M24.1 20.3 C25.0 20.6, 25.7 21.0, 26.2 21.5" stroke-width="0.7" opacity="0.55"/>

      <g opacity="0.98">
        <path d="M8.4 7.4 C10.5 7.0, 12.6 7.0, 14.8 6.6" stroke-width="1.9"/>
        <path d="M11.1 6.6 C11.0 8.6, 10.4 10.2, 9.3 12.1" stroke-width="1.6"/>
        <path d="M13.3 6.7 C13.5 8.5, 13.2 10.3, 12.3 12.2" stroke-width="1.5"/>
        <path d="M7.9 11.4 C10.1 11.0, 12.6 10.9, 14.9 10.5" stroke-width="1.7"/>
        <path d="M9.3 12.4 C9.1 14.2, 8.7 16.1, 7.7 18.4" stroke-width="1.5"/>
        <path d="M12.9 12.1 C12.9 13.8, 13.4 15.7, 14.3 18.2" stroke-width="1.4"/>
        <path d="M7.4 17.0 C9.6 16.6, 12.0 16.3, 14.9 15.9" stroke-width="1.7"/>
        <path d="M8.2 18.8 C10.3 18.2, 12.3 18.1, 14.9 17.7" stroke-width="1.6"/>

        <path d="M17.5 7.2 C20.8 6.6, 23.7 6.5, 26.9 6.1" stroke-width="2.0"/>
        <path d="M18.7 8.1 C18.8 10.1, 18.3 12.5, 17.3 14.9" stroke-width="1.6"/>
        <path d="M21.0 8.0 C21.2 10.0, 21.0 12.2, 20.2 14.7" stroke-width="1.5"/>
        <path d="M23.6 7.8 C23.9 9.8, 24.1 12.1, 23.8 14.7" stroke-width="1.5"/>
        <path d="M19.0 11.3 C21.6 10.9, 24.1 10.7, 27.0 10.3" stroke-width="1.7"/>
        <path d="M18.5 14.8 C21.3 14.3, 23.9 14.2, 26.9 13.7" stroke-width="1.7"/>

        <path d="M18.2 16.7 C20.3 16.4, 22.0 16.0, 23.9 15.6" stroke-width="1.4"/>
        <path d="M23.7 15.5 C24.0 17.4, 24.8 18.9, 26.9 20.1" stroke-width="1.6"/>
        <path d="M20.3 16.6 C20.0 18.7, 19.3 20.4, 17.9 22.1" stroke-width="1.5"/>
        <path d="M18.2 22.1 C20.6 21.6, 23.0 21.2, 26.7 20.6" stroke-width="1.8"/>
        <path d="M18.9 23.8 C21.8 23.4, 24.1 23.0, 26.6 22.4" stroke-width="1.6"/>
      </g>

      <path d="M24.7 9.0 C25.9 9.4, 26.8 9.9, 27.6 10.7" stroke-width="0.7" opacity="0.35"/>
      <path d="M9.2 9.0 C9.8 9.6, 10.5 10.0, 11.3 10.3" stroke-width="0.7" opacity="0.35"/>
      <path d="M16.0 27.6 C15.4 28.1, 14.6 28.6, 13.6 28.9" stroke-width="0.6" opacity="0.25"/>
    </g>
  </g>
</svg>`,
  'saihong': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parch" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f6e9c9"/>
      <stop offset="60%" stop-color="#eddab2"/>
      <stop offset="100%" stop-color="#e2c995"/>
    </radialGradient>
    <filter id="paper" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/>
      <feColorMatrix in="n" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.18 0" result="na"/>
      <feBlend in="SourceGraphic" in2="na" mode="multiply"/>
    </filter>
    <filter id="ink" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" seed="11" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="0.55" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="0.08" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <clipPath id="clip">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g filter="url(#paper)">
    <circle cx="16" cy="16" r="15" fill="url(#parch)"/>
    <circle cx="16" cy="16" r="15" fill="none" stroke="#caa86b" stroke-width="0.8" opacity="0.7"/>
    <circle cx="16" cy="16" r="14.3" fill="none" stroke="#b89257" stroke-width="0.4" opacity="0.45"/>
  </g>

  <g clip-path="url(#clip)" filter="url(#ink)" fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round">
    <!-- frontier wild goose (swan-like) above -->
    <path d="M7.2 8.6 C9.6 6.9, 12.2 7.1, 14.3 8.7" stroke-width="1.2" opacity="0.95"/>
    <path d="M14.3 8.7 C16.2 7.0, 18.7 6.7, 21.0 8.3" stroke-width="1.2" opacity="0.95"/>
    <path d="M12.9 8.9 C13.8 9.6, 14.6 9.9, 15.6 10.0" stroke-width="0.75" opacity="0.75"/>

    <!-- desolate border fortress wall -->
    <path d="M5.3 24.2 C8.2 23.4, 11.2 23.7, 14.0 24.1 C17.3 24.6, 20.6 24.8, 24.8 24.1" stroke-width="1.25" opacity="0.85"/>
    <path d="M6.6 22.1 L6.6 24.2" stroke-width="0.9" opacity="0.65"/>
    <path d="M9.2 22.0 L9.2 24.3" stroke-width="0.9" opacity="0.65"/>
    <path d="M11.9 22.2 L11.9 24.4" stroke-width="0.9" opacity="0.65"/>
    <path d="M14.6 22.0 L14.6 24.5" stroke-width="0.9" opacity="0.65"/>
    <path d="M17.4 22.2 L17.4 24.4" stroke-width="0.9" opacity="0.6"/>

    <!-- Calligraphy: 塞 (left, bold) -->
    <path d="M7.0 12.2 C10.2 11.3, 12.1 11.2, 14.2 11.5" stroke-width="2.0"/>
    <path d="M8.2 10.2 C8.4 11.4, 8.3 13.1, 7.9 14.8" stroke-width="1.7"/>
    <path d="M12.8 10.3 C12.6 12.0, 12.5 13.6, 12.9 15.4" stroke-width="1.55" opacity="0.95"/>
    <path d="M8.0 15.8 C10.0 15.4, 12.2 15.3, 14.3 15.8" stroke-width="1.85"/>
    <path d="M7.5 18.0 C9.6 17.5, 11.7 17.5, 14.6 18.1" stroke-width="1.75"/>
    <path d="M9.2 16.2 C9.1 18.8, 9.2 20.3, 8.8 22.2" stroke-width="1.6" opacity="0.95"/>
    <path d="M12.6 16.1 C12.8 18.0, 12.8 20.0, 12.4 22.4" stroke-width="1.55" opacity="0.95"/>
    <path d="M8.5 20.0 C10.2 19.7, 11.9 19.7, 14.5 20.2" stroke-width="1.7"/>
    <path d="M10.3 21.0 C10.6 21.8, 11.2 22.5, 12.2 23.1" stroke-width="1.25" opacity="0.85"/>

    <!-- Calligraphy: 鸿 (right, bold, slightly higher) -->
    <path d="M17.3 12.0 C19.9 11.4, 22.1 11.5, 25.1 12.1" stroke-width="1.95"/>
    <path d="M18.2 10.2 C18.1 12.0, 18.1 13.8, 17.6 15.8" stroke-width="1.65"/>
    <path d="M20.0 13.0 C21.3 12.8, 22.7 12.9, 24.9 13.3" stroke-width="1.65" opacity="0.95"/>
    <path d="M19.2 15.7 C21.4 15.2, 23.2 15.2, 25.2 15.8" stroke-width="1.85"/>
    <path d="M21.0 10.1 C21.7 10.8, 22.4 11.6, 22.9 12.6" stroke-width="1.25" opacity="0.85"/>
    <path d="M20.1 17.0 C19.9 18.4, 19.6 19.5, 18.8 20.7" stroke-width="1.55" opacity="0.95"/>
    <path d="M21.2 17.4 C22.3 18.0, 23.3 18.7, 24.6 20.1" stroke-width="1.55" opacity="0.95"/>
    <path d="M17.6 21.5 C20.4 20.9, 22.6 21.0, 25.5 21.8" stroke-width="1.8"/>
    <path d="M23.7 16.8 C24.2 17.7, 24.5 18.7, 24.7 19.9" stroke-width="1.15" opacity="0.75"/>

    <!-- subtle ink splashes -->
    <path d="M6.8 19.4 C7.4 19.2, 7.8 19.6, 8.0 20.1" stroke-width="0.6" opacity="0.35"/>
    <path d="M24.9 9.7 C25.3 9.5, 25.6 9.7, 25.8 10.1" stroke-width="0.55" opacity="0.3"/>
    <path d="M15.6 26.0 C16.1 25.7, 16.6 25.9, 16.9 26.3" stroke-width="0.55" opacity="0.25"/>
  </g>

  <g clip-path="url(#clip)">
    <circle cx="16" cy="16" r="15" fill="none" stroke="#000" stroke-width="0.35" opacity="0.12"/>
  </g>
</svg>`,
  'muyu': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="#efe3c6"/>
      <stop offset="65%" stop-color="#e7d6b3"/>
      <stop offset="100%" stop-color="#d8c29a"/>
    </radialGradient>

    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/>
      <feColorMatrix in="n" type="matrix" values="
        0 0 0 0 0.35
        0 0 0 0 0.28
        0 0 0 0 0.18
        0 0 0 0.22 0" result="tint"/>
      <feBlend in="SourceGraphic" in2="tint" mode="multiply"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.9 0" result="b2"/>
      <feMerge>
        <feMergeNode in="b2"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>

    <linearGradient id="duskWash" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.10"/>
      <stop offset="55%" stop-color="#000000" stop-opacity="0.02"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.12"/>
    </linearGradient>
  </defs>

  <g clip-path="url(#clipCircle)" filter="url(#paperGrain)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#2a1f14" stroke-opacity="0.25" stroke-width="0.8"/>
    <circle cx="16" cy="16" r="13.9" fill="none" stroke="#2a1f14" stroke-opacity="0.18" stroke-width="0.6"/>

    <path d="M2.2,8.8 C7.2,7.5 12.0,7.3 16.2,7.6 C20.6,7.9 25.6,7.1 29.8,6.0 L30.2,12.2 C26.0,13.4 20.6,13.9 16.2,13.6 C11.7,13.2 7.0,13.6 2.0,15.1 Z"
          fill="url(#duskWash)" opacity="0.55"/>

    <g stroke="#0b0b0b" stroke-linecap="round" stroke-width="0.55" opacity="0.45">
      <path d="M7,16.5 L6.2,18.4"/>
      <path d="M9,15.7 L8.2,17.8"/>
      <path d="M11,16.2 L10.3,18.3"/>
      <path d="M13,15.4 L12.2,17.5"/>
      <path d="M15,16.1 L14.1,18.4"/>
      <path d="M17,15.2 L16.2,17.6"/>
      <path d="M19,16.0 L18.1,18.4"/>
      <path d="M21,15.3 L20.3,17.6"/>
      <path d="M23,16.4 L22.1,18.6"/>
      <path d="M25,15.6 L24.1,17.9"/>
      <path d="M27,16.2 L26.2,18.4"/>
    </g>

    <g fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round" filter="url(#inkBleed)">
      <!-- Fishing village silhouette (small, dusk) -->
      <path d="M5.0,22.7 C6.4,21.9 7.8,21.9 9.2,22.7 L9.2,24.6 L5.0,24.6 Z" stroke-width="1.0" opacity="0.55"/>
      <path d="M9.2,22.8 L11.0,21.6 L12.8,22.8" stroke-width="0.95" opacity="0.5"/>
      <path d="M10.9,21.7 L10.9,24.6" stroke-width="0.8" opacity="0.45"/>
      <path d="M4.6,24.8 C7.2,25.2 10.2,25.2 13.0,24.8" stroke-width="0.8" opacity="0.35"/>
      <path d="M22.0,24.7 C24.1,23.1 26.4,22.5 28.5,22.9" stroke-width="0.9" opacity="0.28"/>
      <path d="M23.2,23.9 C23.8,24.6 24.4,25.1 25.2,25.3" stroke-width="0.8" opacity="0.2"/>

      <!-- Calligraphy: "暮" (left) -->
      <path d="M6.6,8.0 C8.8,8.0 11.0,7.9 13.1,7.7" stroke-width="2.2"/>
      <path d="M9.6,7.8 C9.3,9.1 8.8,10.2 8.0,11.2" stroke-width="2.0"/>
      <path d="M7.0,11.0 C9.2,11.2 11.5,11.1 13.6,10.8" stroke-width="1.9"/>
      <path d="M7.4,12.6 C9.7,12.7 11.8,12.6 13.8,12.2" stroke-width="1.8"/>

      <path d="M8.0,13.7 C7.5,15.2 7.0,16.8 6.8,18.4" stroke-width="2.0"/>
      <path d="M12.8,13.7 C13.4,15.1 13.9,16.6 14.0,18.2" stroke-width="2.0"/>

      <path d="M7.3,15.0 C9.4,14.9 11.2,14.9 13.3,14.6" stroke-width="1.7"/>
      <path d="M7.1,16.5 C9.4,16.5 11.5,16.4 13.6,16.1" stroke-width="1.6"/>

      <path d="M7.4,18.6 C9.7,18.4 11.8,18.3 14.0,17.9" stroke-width="1.9"/>
      <path d="M7.1,20.2 C9.5,20.2 11.8,20.1 14.1,19.7" stroke-width="1.8"/>

      <path d="M8.1,21.4 C9.6,22.4 11.7,22.4 13.7,21.4" stroke-width="2.1"/>
      <path d="M10.8,13.2 C10.7,14.8 10.7,16.7 10.8,18.9 C10.9,20.4 10.7,21.5 10.2,22.3" stroke-width="2.0"/>

      <!-- Calligraphy: "雨" (right) -->
      <path d="M18.2,8.6 C21.2,8.4 24.2,8.2 27.2,7.6" stroke-width="2.3"/>
      <path d="M19.0,10.2 C18.9,11.7 18.9,13.5 18.9,15.2 C18.9,17.4 18.8,19.5 18.4,21.2" stroke-width="2.0"/>
      <path d="M18.6,10.6 C21.4,10.6 24.0,10.4 26.8,10.0" stroke-width="1.8"/>
      <path d="M18.6,12.8 C21.5,12.8 24.2,12.7 27.0,12.2" stroke-width="1.7"/>

      <path d="M20.0,14.6 C20.1,16.3 20.0,18.2 19.7,19.7" stroke-width="1.6" opacity="0.9"/>
      <path d="M22.4,14.6 C22.6,16.4 22.5,18.2 22.1,19.9" stroke-width="1.6" opacity="0.9"/>
      <path d="M24.8,14.5 C25.1,16.2 25.0,18.2 24.5,20.0" stroke-width="1.6" opacity="0.9"/>

      <path d="M18.9,21.2 C21.7,21.2 24.7,21.0 27.3,20.4" stroke-width="2.2"/>
      <path d="M19.8,22.7 L19.0,24.3" stroke-width="1.9"/>
      <path d="M22.2,22.8 L21.5,24.4" stroke-width="1.9"/>
      <path d="M24.6,22.6 L24.1,24.5" stroke-width="1.9"/>
      <path d="M26.9,22.2 L26.6,24.1" stroke-width="1.8"/>

      <!-- Extra rain strokes overlay near right side -->
      <path d="M21.0,11.4 L20.5,12.6" stroke-width="0.8" opacity="0.5"/>
      <path d="M23.0,11.1 L22.5,12.5" stroke-width="0.8" opacity="0.5"/>
      <path d="M25.0,10.9 L24.4,12.4" stroke-width="0.8" opacity="0.5"/>
      <path d="M26.6,11.4 L26.1,12.7" stroke-width="0.8" opacity="0.45"/>
    </g>

    <path d="M4.0,23.6 C7.0,26.0 12.0,26.8 16.0,26.6 C21.4,26.3 26.0,24.8 29.0,22.6"
          fill="none" stroke="#0b0b0b" stroke-opacity="0.12" stroke-width="1.2"/>
  </g>
</svg>`,
  'changfeng': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f4e7c6"/>
      <stop offset="60%" stop-color="#ecd9ad"/>
      <stop offset="100%" stop-color="#d8bf87"/>
    </radialGradient>
    <filter id="paperNoise" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/>
      <feColorMatrix in="n" type="matrix" values="
        0 0 0 0 0.18
        0 0 0 0 0.13
        0 0 0 0 0.05
        0 0 0 0.18 0" result="t"/>
      <feBlend in="SourceGraphic" in2="t" mode="multiply"/>
    </filter>
    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.85 0" result="bb"/>
      <feBlend in="SourceGraphic" in2="bb" mode="multiply"/>
    </filter>
    <clipPath id="coinClip">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#coinClip)" filter="url(#paperNoise)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#b99858" stroke-width="0.8" opacity="0.55"/>
    <circle cx="16" cy="16" r="14.2" fill="none" stroke="#6c552e" stroke-width="0.5" opacity="0.18"/>

    <!-- racing clouds (ink-wash) -->
    <g fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round" opacity="0.55" filter="url(#inkBleed)">
      <path d="M3.2 9.4c2.2-1.6 4.4-1.9 6.6-0.7 1.2-1.2 2.8-1.7 4.6-0.9 1.5-1.0 3.3-0.9 4.7 0.2 2.0-0.7 4.0-0.3 5.9 1.2" stroke-width="0.8"/>
      <path d="M5.0 11.2c2.0-1.1 4.1-1.2 6.1-0.1 1.4-0.9 3.0-1.0 4.6-0.2 2.3-0.7 4.6-0.2 6.7 1.4" stroke-width="0.65" opacity="0.45"/>
      <path d="M7.0 7.8c1.8-0.9 3.5-0.8 5.1 0.2 1.6-0.8 3.2-0.7 4.8 0.2" stroke-width="0.55" opacity="0.35"/>
    </g>

    <!-- wind-swept grass at bottom -->
    <g fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" filter="url(#inkBleed)">
      <path d="M6.2 25.8c1.8-1.6 3.6-2.2 5.3-1.8" stroke-width="0.9"/>
      <path d="M8.0 26.8c2.2-2.1 4.3-2.8 6.3-2.2" stroke-width="0.75"/>
      <path d="M10.3 27.6c1.9-2.3 3.8-3.2 5.6-2.7" stroke-width="0.65"/>
      <path d="M12.8 27.9c1.6-2.0 3.2-2.8 4.8-2.5" stroke-width="0.6" opacity="0.5"/>
      <path d="M5.0 27.2c2.0 0.4 4.0 0.3 6.1-0.4" stroke-width="0.55" opacity="0.35"/>
    </g>

    <!-- Calligraphy: 长风 -->
    <g fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round" filter="url(#inkBleed)">
      <!-- 长 -->
      <path d="M8.0 11.0c2.9-0.9 6.1-1.2 9.3-0.9" stroke-width="2.2"/>
      <path d="M12.1 7.4c-0.5 4.8-0.7 9.0-0.4 12.7" stroke-width="2.0"/>
      <path d="M9.1 16.6c2.0-0.5 4.3-0.6 6.8-0.2" stroke-width="1.8" opacity="0.95"/>
      <path d="M10.2 20.4c1.5 1.6 3.7 2.8 6.6 3.4" stroke-width="2.0"/>
      <path d="M15.8 13.1c-0.4 2.5-1.3 4.6-2.9 6.3" stroke-width="1.9"/>

      <!-- 风 -->
      <path d="M18.5 8.5c3.0-0.9 5.2-0.8 6.6 0.3 1.1 0.9 1.3 2.3 0.6 4.3-1.0 2.9-1.2 6.0-0.5 9.2" stroke-width="2.2"/>
      <path d="M20.6 11.0c-0.9 4.2-1.0 7.7-0.2 10.6" stroke-width="1.9"/>
      <path d="M19.8 15.3c1.6-0.5 3.2-0.4 4.8 0.3" stroke-width="1.7"/>
      <path d="M19.5 18.4c1.9-0.5 3.9-0.4 5.9 0.4" stroke-width="1.6" opacity="0.95"/>
      <path d="M21.3 21.8c1.2 1.0 2.7 1.6 4.4 1.8" stroke-width="1.8"/>
    </g>

    <!-- subtle wind swirl through characters -->
    <g fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round" opacity="0.35" filter="url(#inkBleed)">
      <path d="M4.2 18.2c4.6-2.2 9.4-2.5 14.2-0.8 2.7 0.9 5.4 0.9 8.2-0.2" stroke-width="0.9"/>
      <path d="M6.0 19.8c3.6-1.2 7.2-1.1 10.8 0.3 3.1 1.2 6.3 1.0 9.4-0.7" stroke-width="0.65" opacity="0.5"/>
    </g>
  </g>
</svg>`,
  'feixu': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#efe2c3"/>
      <stop offset="55%" stop-color="#e6d3ad"/>
      <stop offset="100%" stop-color="#d8c094"/>
    </radialGradient>
    <filter id="inkBleed" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.35" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="0.08"/>
    </filter>
    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12" result="g"/>
      <feColorMatrix in="g" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 -0.88 0.55" result="grain"/>
      <feComposite in="grain" in2="SourceGraphic" operator="in"/>
      <feBlend in="SourceGraphic" in2="grain" mode="multiply"/>
    </filter>
    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)" filter="url(#paperGrain)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#c7a96f" stroke-width="0.9" opacity="0.65"/>
    <circle cx="16" cy="16" r="14.1" fill="none" stroke="#b68f55" stroke-width="0.5" opacity="0.35"/>

    <!-- subtle catkins drifting -->
    <g filter="url(#inkBleed)" opacity="0.55" fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5.8 12.4c2.3-1.1 4.5-0.7 6.2 0.6" stroke-width="0.55"/>
      <path d="M20.8 8.7c2.2 0.2 3.9 1.1 5.2 2.6" stroke-width="0.5"/>
      <path d="M6.2 20.9c2.8 1.2 5.7 0.9 8-0.6" stroke-width="0.5"/>
      <path d="M18.8 23.6c2.4 0.5 4.6 0.1 6.2-1.2" stroke-width="0.45"/>
      <g opacity="0.65" fill="#111" stroke="none">
        <ellipse cx="9.8" cy="12.1" rx="0.65" ry="0.38" transform="rotate(-18 9.8 12.1)"/>
        <ellipse cx="12.1" cy="13.0" rx="0.55" ry="0.34" transform="rotate(22 12.1 13.0)"/>
        <ellipse cx="22.5" cy="10.3" rx="0.62" ry="0.36" transform="rotate(12 22.5 10.3)"/>
        <ellipse cx="24.9" cy="12.0" rx="0.56" ry="0.34" transform="rotate(28 24.9 12.0)"/>
        <ellipse cx="10.4" cy="21.2" rx="0.68" ry="0.4" transform="rotate(-10 10.4 21.2)"/>
        <ellipse cx="13.1" cy="20.2" rx="0.58" ry="0.35" transform="rotate(18 13.1 20.2)"/>
        <ellipse cx="22.2" cy="23.1" rx="0.62" ry="0.36" transform="rotate(-22 22.2 23.1)"/>
        <ellipse cx="25.0" cy="22.0" rx="0.56" ry="0.34" transform="rotate(-8 25.0 22.0)"/>
      </g>
    </g>

    <!-- bold ink calligraphy for 飞絮 -->
    <g filter="url(#inkBleed)" fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round">
      <!-- 飞 (left) -->
      <path d="M7.3 11.2c3.0-1.2 5.8-1.7 8.2-1.5" stroke-width="2.2"/>
      <path d="M9.2 13.0c1.0 2.3 0.8 4.7-0.7 7.0" stroke-width="2.3"/>
      <path d="M12.0 14.1c0.2 3.0-0.8 6.1-3.1 8.5" stroke-width="1.7" opacity="0.95"/>
      <path d="M10.1 19.0c2.2-0.9 4.2-2.2 6.0-3.9" stroke-width="2.0"/>
      <path d="M9.2 21.8c3.0-0.7 5.7-1.9 8.2-3.8" stroke-width="2.0"/>

      <!-- 絮 (right) -->
      <!-- top radical-like strokes -->
      <path d="17.0 9.8c2.1-1.0 4.2-1.5 6.6-1.6" stroke-width="2.1"/>
      <path d="M18.2 11.8c1.7 0.1 3.6-0.2 5.8-0.9" stroke-width="1.8"/>
      <path d="M19.0 13.4c0.2 2.2-0.2 4.1-1.2 5.7" stroke-width="1.9"/>
      <path d="M21.7 13.1c0.3 1.9 1.4 3.8 3.3 5.5" stroke-width="1.8"/>
      <!-- central body -->
      <path d="17.6 16.4c2.4-0.7 4.8-1.0 7.1-0.8" stroke-width="2.0"/>
      <path d="M19.0 17.9c1.6 1.4 3.7 2.2 6.1 2.4" stroke-width="1.8"/>
      <path d="M20.0 18.6c-0.8 1.6-2.0 3.0-3.6 4.4" stroke-width="1.9"/>
      <!-- bottom 糸-like finish -->
      <path d="18.0 22.2c1.0 0.7 2.2 1.2 3.6 1.6" stroke-width="1.7"/>
      <path d="21.0 22.4c0.3 1.3-0.1 2.7-1.2 4.1" stroke-width="1.7"/>
      <path d="23.6 21.6c0.6 1.5 0.6 3.0 0.0 4.6" stroke-width="1.6"/>
      <path d="19.0 25.4c2.1-0.2 4.1-0.7 6.0-1.7" stroke-width="1.9"/>
    </g>

    <!-- light vignette -->
    <circle cx="16" cy="16" r="15" fill="none" stroke="#000" stroke-width="1.2" opacity="0.08"/>
  </g>
</svg>`,
  'zhengyan': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>

    <filter id="paperNoise" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.18 0" in="noise" result="nAlpha"/>
      <feComposite in="nAlpha" in2="SourceGraphic" operator="over"/>
    </filter>

    <filter id="inkBleed" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="0.45" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.85 0" result="b2"/>
      <feMerge>
        <feMergeNode in="b2"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="roughen" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="turbulence" baseFrequency="0.55" numOctaves="1" seed="11" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="0.45" xChannelSelector="R" yChannelSelector="G"/>
    </filter>

    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f2e3c3"/>
      <stop offset="55%" stop-color="#e7d2a6"/>
      <stop offset="100%" stop-color="#d8be8f"/>
    </radialGradient>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)" filter="url(#paperNoise)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#c7a874" stroke-width="0.9" opacity="0.55"/>
    <circle cx="16" cy="16" r="13.9" fill="none" stroke="#b89460" stroke-width="0.6" opacity="0.35"/>

    <!-- distant migrating geese (V formation) -->
    <g fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round" opacity="0.65" filter="url(#roughen)">
      <path d="M10.2 7.6 q0.8 -0.7 1.6 0 q-0.8 -0.7 -1.6 0" stroke-width="0.7"/>
      <path d="M12.4 6.9 q0.9 -0.7 1.8 0 q-0.9 -0.7 -1.8 0" stroke-width="0.75"/>
      <path d="M14.7 6.3 q0.9 -0.7 1.8 0 q-0.9 -0.7 -1.8 0" stroke-width="0.8"/>
      <path d="M16.9 6.9 q0.9 -0.7 1.8 0 q-0.9 -0.7 -1.8 0" stroke-width="0.75"/>
      <path d="M19.2 7.6 q0.8 -0.7 1.6 0 q-0.8 -0.7 -1.6 0" stroke-width="0.7"/>
    </g>

    <!-- Calligraphy: 征雁 -->
    <g fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round" filter="url(#inkBleed)">
      <!-- 征 (left) -->
      <path d="M6.2 9.0 C7.6 9.3 8.9 9.3 10.2 8.9" stroke-width="2.2"/>
      <path d="M7.2 10.7 C7.3 13.0 7.2 15.2 6.8 17.2" stroke-width="2.0"/>
      <path d="M9.8 10.7 C9.9 13.1 9.8 15.6 9.4 17.8" stroke-width="2.0"/>
      <path d="M6.1 13.6 C7.7 13.7 9.1 13.7 10.6 13.5" stroke-width="1.9"/>
      <path d="M6.0 16.2 C7.8 16.2 9.3 16.1 11.0 15.8" stroke-width="1.8"/>

      <path d="M11.5 8.2 C12.7 8.7 13.5 9.7 13.9 11.0" stroke-width="2.1"/>
      <path d="M12.8 11.6 C12.5 14.8 12.0 18.3 11.2 22.0" stroke-width="2.3"/>
      <path d="M11.0 18.1 C12.8 17.7 14.4 17.2 16.0 16.5" stroke-width="2.0"/>
      <path d="M14.8 12.3 C14.9 15.4 15.0 18.5 15.0 22.0" stroke-width="2.2"/>

      <!-- 雁 (right) -->
      <path d="M18.0 9.0 C19.8 8.5 21.7 8.2 23.9 8.1" stroke-width="2.2"/>
      <path d="M18.6 10.7 C20.9 10.7 23.0 10.5 25.0 10.1" stroke-width="1.9"/>
      <path d="M19.1 12.6 C21.3 12.6 23.3 12.4 25.3 12.0" stroke-width="1.8"/>
      <path d="M18.4 14.4 C20.9 14.1 23.1 13.8 25.7 13.3" stroke-width="1.9"/>

      <path d="M19.2 9.2 C18.8 12.1 18.4 15.0 17.7 17.8" stroke-width="2.3"/>
      <path d="M22.0 9.0 C21.8 12.3 21.5 15.9 21.0 19.3" stroke-width="2.2"/>
      <path d="M24.8 8.6 C25.0 12.0 25.0 15.6 24.7 19.2" stroke-width="2.2"/>

      <path d="M18.5 17.3 C20.8 16.9 23.0 16.3 25.5 15.4" stroke-width="2.0"/>
      <path d="M18.2 19.2 C20.6 19.1 23.0 18.8 25.9 18.2" stroke-width="1.9"/>

      <!-- lower component with sweeping finish -->
      <path d="M19.0 20.6 C20.6 22.2 22.6 23.5 25.3 24.4" stroke-width="2.2"/>
      <path d="M17.8 23.3 C20.3 23.2 22.7 22.8 25.9 21.7" stroke-width="2.1"/>
      <path d="M21.1 20.9 C20.8 22.6 20.4 24.2 19.7 25.7" stroke-width="2.0"/>
      <path d="M23.9 20.2 C24.1 22.4 24.1 24.2 23.8 25.8" stroke-width="2.0"/>

      <!-- subtle ink splays -->
      <path d="M10.8 22.6 C11.8 23.1 12.8 23.0 13.9 22.6" stroke-width="1.4" opacity="0.7"/>
      <path d="M25.6 9.3 C26.2 9.6 26.7 9.6 27.2 9.4" stroke-width="1.2" opacity="0.55"/>
    </g>

    <!-- vignette wash -->
    <circle cx="16" cy="16" r="15" fill="none" stroke="#2a1a0b" stroke-width="1.2" opacity="0.12"/>
  </g>
</svg>`,
  'kuangfeng': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e6c8"/>
      <stop offset="55%" stop-color="#ecd9b5"/>
      <stop offset="100%" stop-color="#e2c99a"/>
    </radialGradient>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.55" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="0.12"/>
    </filter>

    <filter id="paperGrain" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="11" result="grain"/>
      <feColorMatrix in="grain" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.22 0" result="grainA"/>
      <feComposite in="grainA" in2="SourceGraphic" operator="over"/>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <circle cx="16" cy="16" r="15" fill="url(#parchment)" filter="url(#paperGrain)"/>
  <circle cx="16" cy="16" r="14.5" fill="none" stroke="#b69057" stroke-width="0.8" opacity="0.55"/>

  <g clip-path="url(#clipCircle)" filter="url(#inkBleed)">
    <!-- Wind sweep strokes -->
    <path d="M3.2 17.2c4.8-3.6 9.8-4.9 14.8-4.2 3.6.5 6.5 2 9.8 1.1" fill="none" stroke="#0b0b0b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
    <path d="M2.6 21.3c5.8-2.2 11.2-2.5 16.3-1.2 3.8 1 6.3 2.6 10.4 2" fill="none" stroke="#0b0b0b" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
    <path d="M4.1 12.7c3.7-2.4 7.4-3.3 11.3-2.7 2.7.4 5.1 1.6 7.7.8" fill="none" stroke="#0b0b0b" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>

    <!-- Swirling debris dots -->
    <g fill="#0b0b0b" opacity="0.65">
      <path d="M23.5 18.2c.8.1 1.2.7.6 1.2-.7.6-1.8 0-1.4-.8.2-.3.5-.5.8-.4z"/>
      <path d="M26.2 15.4c.7.1 1 .6.5 1.1-.6.5-1.6 0-1.2-.7.2-.3.4-.4.7-.4z"/>
      <path d="M20.6 22.2c.7.1 1 .6.5 1.1-.6.5-1.6 0-1.2-.7.2-.3.4-.4.7-.4z"/>
      <path d="M8.4 20.2c.7.1 1 .6.5 1.1-.6.5-1.6 0-1.2-.7.2-.3.4-.4.7-.4z"/>
      <path d="M10.1 14.7c.6.1.9.6.4 1-.5.5-1.4 0-1-.7.2-.2.4-.4.6-.3z"/>
    </g>

    <!-- Bent ancient tree silhouette -->
    <path d="M7.8 25.7c1.8-2.3 2.1-5.2 2.1-7.3 0-1.9.2-3.7 1.1-5.4.7-1.3 1.9-2.3 3.2-2.8"
          fill="none" stroke="#0b0b0b" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
    <path d="M9.9 18.9c-1.5-.3-2.6.2-3.8 1.3M10.2 16.3c-1.2-.4-2.4-.2-3.5.7M10.4 21.3c-1.2 0-2.2.5-3.1 1.4"
          fill="none" stroke="#0b0b0b" stroke-width="0.85" stroke-linecap="round" opacity="0.6"/>

    <!-- Calligraphy: 狂风 (stylized brush strokes) -->
    <g stroke="#050505" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- 狂 (left block) -->
      <path d="M12.3 8.2c-.6 1.9-1.3 3.6-2.3 5.1" stroke-width="2.2"/>
      <path d="M9.7 13.2c.9.3 2.1.4 3.4.2" stroke-width="1.8"/>
      <path d="M11.2 14.8c-.6 1.6-1 3.3-1.2 5.2-.2 1.8-.2 3.4 0 4.6" stroke-width="2.1"/>
      <path d="M13.1 17.1c.9-.1 2.1-.4 3.3-1" stroke-width="1.7"/>
      <path d="M14.7 9.2c-.1 3.7-.1 7.3-.1 11.1" stroke-width="2.35"/>
      <path d="M16.9 11c-.6 1.4-1.3 2.6-2.3 3.7" stroke-width="1.7"/>
      <path d="M16.9 13.7c.6 1 1.2 1.8 2.1 2.4" stroke-width="1.6"/>
      <path d="M13.9 21.2c1.2.9 2.4 1.7 3.6 2.5" stroke-width="1.7"/>

      <!-- 风 (right block) -->
      <path d="M19.3 8.6c2.6-.5 4.8-.6 6.6-.2" stroke-width="1.7" opacity="0.95"/>
      <path d="M20.3 9.7c-.6 4.4-.8 9.1-.6 14.2" stroke-width="2.45"/>
      <path d="M20.1 12.7c1.8-.5 3.4-.8 4.9-.9" stroke-width="1.8"/>
      <path d="M20.0 16c2.1-.3 3.9-.2 5.5.4" stroke-width="1.7"/>
      <path d="M21.1 18.6c1.2 1.9 2.6 3.4 4.2 4.6" stroke-width="1.85"/>
      <path d="M23.2 14.1c.4 1.1.7 2.1 1 3.2" stroke-width="1.55" opacity="0.9"/>
      <path d="M25.6 12.2c.2 4.2-.3 7.7-1.6 10.4" stroke-width="1.35" opacity="0.75"/>
    </g>

    <!-- Extra gust accent behind characters -->
    <path d="M14.8 24.8c3.2.7 6.3.5 9.3-.8" fill="none" stroke="#0b0b0b" stroke-width="1.05" stroke-linecap="round" opacity="0.55"/>
  </g>
</svg>`,
  'canhun': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="38%" cy="32%" r="75%">
      <stop offset="0" stop-color="#f6e7c8"/>
      <stop offset="0.55" stop-color="#ecd7ad"/>
      <stop offset="1" stop-color="#d7bc8a"/>
    </radialGradient>

    <filter id="paperGrain" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/>
      <feColorMatrix in="n" type="matrix"
        values="0 0 0 0 0.20
                0 0 0 0 0.16
                0 0 0 0 0.10
                0 0 0 0.22 0" result="grain"/>
      <feBlend in="SourceGraphic" in2="grain" mode="multiply"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.25" result="b"/>
      <feColorMatrix in="b" type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 1.15 0" result="bb"/>
      <feMerge>
        <feMergeNode in="bb"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="ghostSoft" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="0.7" result="g"/>
      <feComponentTransfer in="g">
        <feFuncA type="gamma" amplitude="1" exponent="1.6" offset="0"/>
      </feComponentTransfer>
    </filter>

    <mask id="fadeMask">
      <rect x="0" y="0" width="32" height="32" fill="white"/>
      <linearGradient id="fadeGrad" x1="10" y1="10" x2="26" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="white" stop-opacity="0.85"/>
        <stop offset="0.55" stop-color="white" stop-opacity="0.55"/>
        <stop offset="1" stop-color="white" stop-opacity="0.05"/>
      </linearGradient>
      <rect x="0" y="0" width="32" height="32" fill="url(#fadeGrad)"/>
    </mask>

    <clipPath id="coinClip">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#coinClip)" filter="url(#paperGrain)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.2" fill="none" stroke="#2b2114" stroke-opacity="0.18" stroke-width="1.2"/>
    <circle cx="16" cy="16" r="12.8" fill="none" stroke="#2b2114" stroke-opacity="0.10" stroke-width="0.8"/>

    <g opacity="0.18" filter="url(#ghostSoft)" mask="url(#fadeMask)">
      <path d="M22.6 9.2
               C21.2 7.9 19.4 7.4 17.7 8.1
               C16.4 8.6 15.6 9.9 15.6 11.4
               C15.6 12.5 16.1 13.4 16.9 14.1
               C16.2 14.7 15.7 15.6 15.5 16.7
               C15.1 18.8 15.8 20.9 17.2 22.4
               C18.0 23.2 18.9 23.8 20.0 24.2
               C19.2 23.1 19.1 22.2 19.5 21.2
               C19.9 20.1 20.9 19.4 22.1 19.2
               C23.2 19.1 24.3 19.5 25.1 20.2
               C24.7 18.8 24.0 17.8 23.2 16.9
               C22.5 16.2 21.6 15.7 20.7 15.3
               C21.9 14.6 22.8 13.5 23.1 12.1
               C23.4 10.9 23.2 10.0 22.6 9.2 Z"
            fill="#000" opacity="0.9"/>
      <path d="M23.6 14.6
               C24.7 15.6 25.4 17.1 25.3 18.6
               C24.5 18.0 23.6 17.7 22.6 17.8
               C21.5 17.9 20.6 18.3 20.0 18.9
               C20.4 17.2 21.6 15.5 23.6 14.6 Z"
            fill="#000" opacity="0.65"/>
      <path d="M18.3 12.3
               C18.0 13.2 17.5 13.9 16.7 14.4
               C15.8 13.7 15.3 12.9 15.4 11.8
               C15.5 10.6 16.3 9.7 17.5 9.5
               C18.5 9.4 19.3 9.8 19.9 10.3
               C19.1 10.6 18.6 11.2 18.3 12.3 Z"
            fill="#000" opacity="0.55"/>
      <path d="M20.3 24.1
               C20.9 25.4 20.1 26.5 18.7 26.7
               C17.2 26.9 15.9 26.2 15.1 25.0
               C16.1 25.2 17.1 25.0 18.0 24.5
               C18.9 24.0 19.7 23.5 20.3 24.1 Z"
            fill="#000" opacity="0.45"/>
      <path d="M21.0 22.0 L23.7 23.5" stroke="#000" stroke-opacity="0.35" stroke-width="0.9" stroke-linecap="round"/>
      <path d="M19.2 21.5 L21.9 24.6" stroke="#000" stroke-opacity="0.22" stroke-width="0.8" stroke-linecap="round"/>
      <path d="M17.7 20.9 L18.4 25.8" stroke="#000" stroke-opacity="0.18" stroke-width="0.7" stroke-linecap="round"/>
    </g>

    <g filter="url(#inkBleed)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
      <!-- 残 -->
      <path d="M7.0 8.4 C8.8 8.2 10.5 8.2 12.2 8.4" stroke-width="2.2"/>
      <path d="M8.2 9.6 C8.4 11.6 8.4 13.5 8.2 15.7" stroke-width="2.0"/>
      <path d="M6.8 12.2 C8.9 12.1 10.7 12.1 12.8 12.2" stroke-width="1.8"/>
      <path d="M7.0 16.6 C9.1 16.4 10.9 16.4 13.1 16.7" stroke-width="1.8"/>
      <path d="M10.6 10.1 C10.2 11.5 9.6 12.8 8.8 14.0" stroke-width="1.7"/>
      <path d="M11.7 14.6 C10.8 15.8 9.9 16.8 8.7 17.8" stroke-width="1.6"/>

      <path d="M13.2 9.0 C14.3 9.1 15.6 9.1 16.8 9.0" stroke-width="1.9"/>
      <path d="M14.0 10.1 C13.9 12.0 13.9 13.9 14.0 15.8" stroke-width="1.7"/>
      <path d="M16.6 10.1 C16.7 11.9 16.7 13.7 16.6 15.6" stroke-width="1.7"/>
      <path d="M13.1 12.5 C14.6 12.4 16.2 12.4 17.7 12.5" stroke-width="1.6"/>
      <path d="M13.0 15.2 C14.6 15.1 16.2 15.1 17.8 15.2" stroke-width="1.6"/>

      <path d="M14.1 17.3 C14.8 18.1 15.5 19.0 16.0 20.0" stroke-width="1.7"/>
      <path d="M16.8 17.2 C16.2 18.6 15.4 19.8 14.4 21.0" stroke-width="1.7"/>
      <path d="M13.0 21.6 C14.9 21.4 16.7 21.4 18.7 21.7" stroke-width="1.9"/>
      <path d="M13.4 24.0 C15.3 23.8 17.1 23.8 19.0 24.1" stroke-width="2.0"/>
      <path d="M15.9 22.0 C15.8 23.4 15.6 24.8 15.2 26.1" stroke-width="1.6"/>

      <!-- 魂 -->
      <path d="M20.0 9.0 C21.9 8.8 23.8 8.8 25.8 9.1" stroke-width="2.2"/>
      <path d="M21.0 10.2 C21.2 12.5 21.2 14.7 21.0 17.1" stroke-width="2.0"/>
      <path d="M19.6 12.8 C21.9 12.6 24.1 12.6 26.4 12.8" stroke-width="1.8"/>
      <path d="M19.8 16.2 C22.0 16.0 24.2 16.0 26.5 16.3" stroke-width="1.8"/>

      <path d="M22.9 9.6 C22.6 11.0 22.0 12.5 21.1 13.8" stroke-width="1.6"/>
      <path d="M24.8 10.0 C25.1 11.5 25.7 12.8 26.6 14.0" stroke-width="1.6"/>

      <path d="M20.1 18.9 C21.6 18.7 23.2 18.7 24.7 18.9" stroke-width="1.9"/>
      <path d="M20.0 21.4 C21.8 21.2 23.6 21.2 25.6 21.5" stroke-width="2.0"/>
      <path d="M21.2 18.8 C21.1 21.1 20.9 23.3 20.4 25.4" stroke-width="1.7"/>
      <path d="M24.6 18.8 C24.8 21.0 25.1 23.2 25.9 25.2" stroke-width="1.7"/>

      <!-- broken / tattered soul fragment marks -->
      <path d="M26.8 19.2 L28.2 18.4" stroke-width="1.1" opacity="0.55"/>
      <path d="M26.9 21.1 L28.6 21.6" stroke-width="1.0" opacity="0.45"/>
      <path d="M26.5 23.0 L28.0 24.2" stroke-width="0.95" opacity="0.38"/>
      <path d="M24.2 25.6 C25.2 26.2 26.3 26.3 27.6 26.0" stroke-width="0.9" opacity="0.32"/>
    </g>

    <path d="M3.5 16 C3.8 8.5 8.8 3.8 16 3.6 C23.2 3.8 28.2 8.5 28.5 16 C28.2 23.5 23.2 28.2 16 28.4 C8.8 28.2 3.8 23.5 3.5 16 Z"
          fill="none" stroke="#000" stroke-opacity="0.12" stroke-width="1.2"/>

    <path d="M6.2 7.1 C9.0 5.2 12.3 4.4 16.0 4.6" fill="none" stroke="#fff" stroke-opacity="0.10" stroke-width="2.2" stroke-linecap="round"/>
  </g>
</svg>`,
  'xingshuang': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parch" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f5e7c7"/>
      <stop offset="55%" stop-color="#ead6ad"/>
      <stop offset="100%" stop-color="#d9bf8f"/>
    </radialGradient>

    <filter id="paperTex" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/>
      <feColorMatrix in="n" type="matrix" values="
        0 0 0 0 0.15
        0 0 0 0 0.12
        0 0 0 0 0.07
        0 0 0 0.12 0" result="n2"/>
      <feBlend in="SourceGraphic" in2="n2" mode="multiply"/>
    </filter>

    <filter id="ink" x="-25%" y="-25%" width="150%" height="150%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" seed="11" result="t"/>
      <feDisplacementMap in="SourceGraphic" in2="t" scale="0.6" xChannelSelector="R" yChannelSelector="G" result="d"/>
      <feGaussianBlur in="d" stdDeviation="0.12" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="d"/>
      </feMerge>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g filter="url(#paperTex)">
    <circle cx="16" cy="16" r="15" fill="url(#parch)"/>
    <circle cx="16" cy="16" r="15" fill="none" stroke="#4a3b24" stroke-opacity="0.35" stroke-width="0.9"/>
    <circle cx="16" cy="16" r="13.4" fill="none" stroke="#4a3b24" stroke-opacity="0.18" stroke-width="0.7"/>
  </g>

  <g clip-path="url(#clipCircle)">
    <!-- Star-frost / cosmos accents -->
    <g filter="url(#ink)" fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.9">
      <!-- frost ground sweep -->
      <path d="M4.2 23.7 C8.0 22.6, 11.2 22.9, 14.5 24.0 C18.2 25.3, 22.3 25.2, 27.8 23.9" stroke-width="1.15"/>
      <path d="M5.3 25.6 C9.0 24.8, 12.2 25.0, 15.7 26.1 C19.1 27.1, 22.7 27.0, 26.9 25.9" stroke-width="0.9" stroke-opacity="0.75"/>
      <!-- misty cosmos wash -->
      <path d="M6.2 9.5 C10.5 7.0, 15.8 6.4, 20.8 7.4 C24.1 8.1, 26.3 9.3, 28.4 11.0" stroke-width="0.65" stroke-opacity="0.35"/>
    </g>

    <!-- Twinkling stars -->
    <g filter="url(#ink)" stroke="#111" stroke-linecap="round" stroke-opacity="0.95">
      <g stroke-width="0.75">
        <path d="M25.7 8.2 L25.7 9.9"/>
        <path d="M24.9 9.05 L26.5 9.05"/>
      </g>
      <g stroke-width="0.65" stroke-opacity="0.85">
        <path d="M6.9 12.1 L6.9 13.3"/>
        <path d="M6.3 12.7 L7.5 12.7"/>
      </g>
      <g stroke-width="0.7" stroke-opacity="0.8">
        <path d="M11.0 7.9 L11.0 9.2"/>
        <path d="M10.3 8.55 L11.7 8.55"/>
      </g>
      <circle cx="22.7" cy="12.2" r="0.55" fill="#111" fill-opacity="0.65" stroke="none"/>
      <circle cx="9.2" cy="16.0" r="0.45" fill="#111" fill-opacity="0.55" stroke="none"/>
      <circle cx="27.2" cy="15.3" r="0.4" fill="#111" fill-opacity="0.5" stroke="none"/>
    </g>

    <!-- Calligraphy: "星霜" (stylized brush strokes) -->
    <g filter="url(#ink)" fill="none" stroke="#0d0d0d" stroke-linecap="round" stroke-linejoin="round">
      <!-- 星 (left) -->
      <path d="M6.4 9.2 C8.3 8.9, 10.6 8.7, 12.4 8.6" stroke-width="2.05"/>
      <path d="M7.2 11.4 C9.0 11.0, 10.8 10.9, 12.8 10.9" stroke-width="1.85"/>
      <path d="M6.9 13.9 C9.3 13.6, 11.4 13.6, 13.4 13.7" stroke-width="1.75"/>
      <path d="M9.7 7.4 C9.5 9.6, 9.5 12.7, 9.6 15.0 C9.7 16.7, 9.3 18.0, 8.3 19.4" stroke-width="2.2"/>
      <path d="M7.4 16.2 C9.3 16.3, 11.2 16.3, 13.2 16.2" stroke-width="1.85"/>
      <path d="M7.1 18.4 C9.8 18.1, 12.0 18.1, 13.8 18.2" stroke-width="1.7"/>
      <path d="M11.9 12.4 C12.0 13.6, 12.2 15.5, 12.4 16.8 C12.6 18.2, 12.9 19.4, 13.6 20.6" stroke-width="1.8"/>

      <!-- 霜 (right) -->
      <path d="M18.2 8.1 C19.4 8.5, 20.6 9.1, 22.0 10.2" stroke-width="1.85"/>
      <path d="M17.6 10.9 C20.1 10.5, 23.5 10.5, 26.1 10.7" stroke-width="1.9"/>
      <path d="M18.7 12.8 C18.4 14.1, 17.9 15.4, 17.1 16.8" stroke-width="1.75"/>
      <path d="M20.2 12.6 C20.0 14.2, 20.1 15.7, 20.4 17.4" stroke-width="1.65"/>
      <path d="M22.0 12.4 C22.4 13.7, 22.8 15.2, 22.9 16.8" stroke-width="1.6"/>
      <path d="M24.1 12.3 C25.0 13.6, 25.6 14.7, 26.4 16.1" stroke-width="1.6"/>

      <!-- lower component strokes -->
      <path d="M18.4 17.8 C20.8 17.5, 23.5 17.5, 26.6 17.8" stroke-width="2.05"/>
      <path d="M19.0 20.2 C21.7 19.8, 23.9 19.8, 26.1 20.0" stroke-width="1.85"/>
      <path d="M20.0 18.4 C19.9 20.4, 19.8 22.1, 19.5 23.9" stroke-width="2.1"/>
      <path d="M22.4 18.5 C22.6 20.0, 22.7 21.7, 22.6 23.9" stroke-width="1.9"/>
      <path d="M24.9 18.4 C25.1 20.1, 25.0 22.1, 24.5 24.2" stroke-width="1.95"/>
      <path d="M20.3 22.7 C22.0 22.6, 23.7 22.6, 25.7 22.7" stroke-width="1.7"/>
      <path d="M19.1 24.6 C21.7 24.0, 24.5 23.9, 27.0 24.4" stroke-width="1.55" stroke-opacity="0.85"/>
    </g>

    <!-- A few ink specks for texture -->
    <g fill="#0f0f0f" fill-opacity="0.25">
      <circle cx="14.6" cy="6.8" r="0.35"/>
      <circle cx="16.9" cy="7.2" r="0.28"/>
      <circle cx="5.8" cy="20.7" r="0.32"/>
      <circle cx="27.8" cy="21.2" r="0.3"/>
      <circle cx="23.4" cy="26.6" r="0.34"/>
    </g>
  </g>
</svg>`,
  'fengchen': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0" stop-color="#f6e7c6"/>
      <stop offset="0.55" stop-color="#ecd5a5"/>
      <stop offset="1" stop-color="#d8b77b"/>
    </radialGradient>

    <filter id="inkBleed" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.7" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="0.15"/>
    </filter>

    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="11" result="grain"/>
      <feColorMatrix in="grain" type="matrix" values="
        0 0 0 0 0.42
        0 0 0 0 0.32
        0 0 0 0 0.18
        0 0 0 0.18 0" result="grainTint"/>
      <feBlend in="SourceGraphic" in2="grainTint" mode="multiply"/>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)" filter="url(#paperGrain)"/>
    <circle cx="16" cy="16" r="14.2" fill="none" stroke="#6b4b22" stroke-opacity="0.35" stroke-width="0.8"/>
    <circle cx="16" cy="16" r="13.4" fill="none" stroke="#4b3418" stroke-opacity="0.18" stroke-width="0.6"/>

    <!-- Wind & dust swirls -->
    <g fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round" filter="url(#inkBleed)" opacity="0.9">
      <path d="M4.3 18.6c3.4-2.4 7.3-3.2 11.2-2.2 2.9.8 5.3.4 7.2-1.0 2.3-1.7 3.8-1.5 5.6-.8" stroke-width="1.2" stroke-opacity="0.55"/>
      <path d="M5.6 22.2c3.0-2.1 6.6-2.6 10.2-1.7 2.4.6 4.3.3 6.0-.9 2.2-1.6 4.3-2.0 6.5-1.2" stroke-width="1.0" stroke-opacity="0.45"/>
      <path d="M6.8 14.8c2.7-1.9 5.8-2.4 9.1-1.6 1.9.5 3.6.3 5.0-.6 1.8-1.2 3.5-1.2 5.2-.6" stroke-width="0.9" stroke-opacity="0.35"/>
      <path d="M9.2 25.1c1.6 0.6 3.7 0.9 6.0 0.8 2.9-.1 5.8-.9 7.6-2.2" stroke-width="0.9" stroke-opacity="0.35"/>
      <path d="M10.6 10.2c1.9-.7 4.1-.9 6.2-.6 2.1.3 4.0.2 5.8-.6" stroke-width="0.8" stroke-opacity="0.25"/>
      <path d="M21.9 6.7c-0.8 1.1-1.8 2.0-3.0 2.7" stroke-width="0.7" stroke-opacity="0.22"/>
      <!-- Dust specks -->
      <g stroke-width="0.7" stroke-opacity="0.25">
        <path d="M7.2 19.1l0.1 0.1"/>
        <path d="M8.6 17.4l0.1 0.1"/>
        <path d="M12.1 21.6l0.1 0.1"/>
        <path d="M14.8 18.9l0.1 0.1"/>
        <path d="M18.4 20.7l0.1 0.1"/>
        <path d="M22.8 18.4l0.1 0.1"/>
        <path d="M25.5 21.0l0.1 0.1"/>
      </g>
    </g>

    <!-- Traveler silhouette (small, bottom-right) -->
    <g filter="url(#inkBleed)" opacity="0.9">
      <path d="M22.7 23.8c0.6-0.6 1.2-0.9 1.9-0.8 0.7 0.1 1.1 0.6 1.2 1.2 0.1 0.8-0.2 1.6-0.8 2.2-0.5 0.5-1.2 0.9-2.0 1.0-0.8 0.1-1.7-0.2-2.6-0.7-0.8-0.5-1.7-0.6-2.6-0.4-0.4 0.1-0.8 0.3-1.2 0.5"
            fill="none" stroke="#111" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.55"/>
      <path d="M21.6 23.2c0.7-1.3 1.4-2.3 2.0-3.0 0.5-0.6 1.1-0.9 1.8-0.8 0.6 0.1 1.0 0.5 1.1 1.1 0.2 1.0-0.1 2.2-0.8 3.6"
            fill="none" stroke="#111" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.45"/>
      <path d="M24.1 19.6c-0.2-0.7 0.0-1.3 0.6-1.7 0.6-0.4 1.2-0.3 1.7 0.1 0.5 0.5 0.6 1.1 0.3 1.7-0.3 0.7-0.9 0.9-1.6 0.7"
            fill="#111" fill-opacity="0.55"/>
      <path d="M20.8 23.9c1.3-0.3 2.5-0.2 3.6 0.4 0.9 0.5 1.8 0.6 2.8 0.4"
            fill="none" stroke="#111" stroke-width="0.9" stroke-linecap="round" stroke-opacity="0.35"/>
    </g>

    <!-- Bold ink calligraphy for "风尘" (stylized brush strokes) -->
    <g fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round" filter="url(#inkBleed)">
      <!-- 风 -->
      <path d="M7.2 9.0c2.8-1.4 5.7-2.1 8.7-2.0" stroke-width="2.3"/>
      <path d="M8.4 11.4c1.2 0.2 2.7 0.2 4.6 0.0 1.4-0.1 2.5 0.1 3.2 0.6 0.7 0.5 1.0 1.3 0.8 2.5-0.2 1.5-0.7 3.0-1.6 4.4" stroke-width="2.4"/>
      <path d="M9.0 13.6c-0.4 3.9 0.2 6.7 1.8 8.4 1.1 1.2 2.8 1.9 5.1 2.1" stroke-width="2.3"/>
      <path d="M10.3 17.4c1.1-0.8 2.3-1.5 3.7-2.1" stroke-width="2.0"/>
      <path d="M10.6 20.3c1.4-0.6 2.9-1.1 4.6-1.3" stroke-width="2.0"/>
      <path d="M12.0 23.6c2.3-1.1 4.2-2.4 5.6-4.0" stroke-width="2.1"/>

      <!-- 尘 -->
      <path d="M18.7 10.0c1.9-0.5 3.7-0.7 5.5-0.6" stroke-width="2.2"/>
      <path d="M20.0 12.2c0.5 1.0 0.7 2.1 0.7 3.3 0.0 1.9-0.4 3.6-1.2 5.1" stroke-width="2.2"/>
      <path d="M22.6 12.5c0.4 0.7 0.8 1.9 1.2 3.6 0.3 1.4 0.9 2.4 1.7 3.0" stroke-width="2.0"/>
      <path d="M18.8 21.2c2.7-0.6 5.1-0.8 7.3-0.6" stroke-width="2.3"/>
      <path d="M18.3 24.2c3.2-0.3 6.0-0.3 8.4 0.0" stroke-width="2.4"/>
      <path d="M21.6 24.0c-0.3 1.0-0.8 1.8-1.4 2.4" stroke-width="2.0"/>
      <path d="M24.0 23.9c-0.2 1.1-0.6 2.0-1.2 2.8" stroke-width="2.0"/>
    </g>

    <!-- Extra ink pooling accents -->
    <g filter="url(#inkBleed)" opacity="0.35">
      <path d="M8.2 10.2c0.6 0.6 1.3 1.0 2.0 1.2" fill="none" stroke="#0b0b0b" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M25.6 11.1c-0.6 0.7-1.3 1.2-2.1 1.4" fill="none" stroke="#0b0b0b" stroke-width="1.2" stroke-linecap="round"/>
    </g>
  </g>
</svg>`,
  'canghai': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>

    <filter id="inkBleed" x="-40%" y="-40%" width="180%" height="180%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="0.12" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="paperGrain" x="-40%" y="-40%" width="180%" height="180%">
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="12" result="n"/>
      <feColorMatrix in="n" type="matrix"
        values="0 0 0 0 0.55
                0 0 0 0 0.49
                0 0 0 0 0.35
                0 0 0 0.25 0" result="grain"/>
      <feComposite in="grain" in2="SourceGraphic" operator="over"/>
    </filter>

    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e6c6"/>
      <stop offset="55%" stop-color="#e9d8ad"/>
      <stop offset="100%" stop-color="#d9c28f"/>
    </radialGradient>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)" filter="url(#paperGrain)"/>
    <circle cx="16" cy="16" r="15" fill="none" stroke="#2b2318" stroke-opacity="0.35" stroke-width="0.9"/>

    <g fill="none" stroke="#0a0a0a" stroke-linecap="round" stroke-linejoin="round" filter="url(#inkBleed)" opacity="0.95">
      <path d="M3.2 10.2 C7.2 8.9, 11.8 9.6, 15.6 8.9 C20.4 8.0, 24.7 7.7, 28.8 8.4" stroke-width="0.9" opacity="0.35"/>
      <path d="M2.6 22.2 C6.0 20.4, 10.1 20.6, 13.7 19.9 C17.9 19.1, 22.1 18.9, 26.9 19.7 C28.2 19.9, 29.3 20.2, 30.0 20.7" stroke-width="1.05" opacity="0.4"/>
      <path d="M2.4 24.8 C6.2 23.7, 9.3 24.1, 12.0 23.7 C15.3 23.2, 18.4 23.2, 21.8 23.9 C25.6 24.7, 28.6 25.6, 30.1 26.5" stroke-width="0.85" opacity="0.25"/>

      <path d="M6.2 21.1 C7.4 19.6, 8.9 19.5, 10.0 20.7 C11.2 22.0, 12.7 22.0, 14.2 20.6" stroke-width="1.2" opacity="0.55"/>
      <path d="M15.2 20.9 C16.4 19.7, 18.0 19.6, 19.3 20.8 C20.6 22.1, 22.2 22.1, 23.8 20.8" stroke-width="1.1" opacity="0.5"/>
      <path d="M23.7 21.2 C24.9 19.9, 26.5 19.8, 27.6 21.0 C28.6 22.1, 29.4 22.4, 30.2 22.0" stroke-width="1.0" opacity="0.45"/>

      <path d="M3.0 18.2 C9.0 17.0, 13.2 16.4, 18.0 16.2 C22.3 16.0, 26.3 16.3, 30.2 17.2" stroke-width="0.9" opacity="0.22"/>
      <path d="M4.0 17.6 C10.2 14.8, 21.8 14.5, 29.2 15.7" stroke-width="0.6" opacity="0.15"/>
    </g>

    <g filter="url(#inkBleed)" fill="none" stroke="#050505" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7.2 7.0 C6.4 8.8, 6.0 11.2, 6.0 13.5 C6.0 15.8, 6.2 18.2, 7.0 20.0" stroke-width="2.8"/>
      <path d="M9.4 11.0 C8.7 12.4, 8.5 13.9, 8.5 15.7 C8.5 17.6, 8.8 19.2, 9.6 20.4" stroke-width="2.0" opacity="0.9"/>

      <path d="M10.6 12.3 C12.2 12.0, 13.7 11.5, 15.1 10.8" stroke-width="2.2"/>
      <path d="M11.0 14.8 C12.6 14.5, 14.0 14.0, 15.2 13.2" stroke-width="2.0" opacity="0.95"/>

      <path d="M12.2 16.0 C12.2 18.0, 12.3 19.4, 12.4 20.7 C12.5 22.1, 12.3 23.7, 11.6 25.2" stroke-width="2.6"/>
      <path d="M12.8 18.2 C14.4 19.2, 15.5 20.1, 16.3 21.0" stroke-width="1.9" opacity="0.85"/>

      <path d="M17.0 11.6 C18.8 10.8, 21.0 10.3, 23.2 10.1 C24.8 10.0, 25.6 10.2, 26.1 10.8" stroke-width="2.4"/>
      <path d="M18.0 13.8 C19.6 13.2, 21.4 12.9, 23.2 12.8 C24.6 12.7, 25.5 12.9, 26.2 13.4" stroke-width="2.0" opacity="0.9"/>

      <path d="M19.0 14.6 C18.8 16.6, 18.7 18.4, 18.7 20.3" stroke-width="2.6"/>
      <path d="M21.8 14.2 C21.4 17.2, 21.2 20.2, 21.2 23.0" stroke-width="2.9"/>

      <path d="M18.2 18.0 C20.2 18.3, 22.7 18.1, 25.2 17.4" stroke-width="2.0" opacity="0.9"/>
      <path d="M18.0 20.8 C20.5 21.3, 23.6 21.1, 26.1 20.1" stroke-width="2.1"/>

      <path d="M24.8 15.0 C25.3 15.6, 25.5 16.4, 25.4 17.8 C25.3 19.5, 25.1 21.3, 25.0 23.1 C24.9 24.2, 24.5 25.2, 23.6 26.0" stroke-width="2.6"/>

      <path d="M17.2 24.2 C19.3 24.8, 21.7 25.1, 24.3 25.0 C26.2 24.9, 27.9 24.6, 29.3 24.0" stroke-width="2.2" opacity="0.92"/>
    </g>

    <g filter="url(#inkBleed)" opacity="0.18">
      <path d="M9.8 9.6 C10.6 9.9, 11.5 10.0, 12.3 9.9" fill="none" stroke="#000" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M19.6 9.6 C20.7 9.2, 21.8 9.0, 22.9 9.0" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round"/>
      <path d="M13.0 26.0 C14.2 26.5, 15.3 26.6, 16.4 26.3" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round"/>
    </g>
  </g>
</svg>`,
  'qingyun': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parch" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e7c8"/>
      <stop offset="55%" stop-color="#ead9b1"/>
      <stop offset="100%" stop-color="#d8c08d"/>
    </radialGradient>
    <filter id="paper" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="7" result="n"/>
      <feColorMatrix in="n" type="matrix" values="
        0 0 0 0 0.72
        0 0 0 0 0.64
        0 0 0 0 0.46
        0 0 0 0.18 0" result="tint"/>
      <feBlend in="SourceGraphic" in2="tint" mode="multiply"/>
    </filter>
    <filter id="ink" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.18" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0.9 0" result="bm"/>
      <feMerge>
        <feMergeNode in="bm"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <mask id="clipCircle">
      <rect width="32" height="32" fill="black"/>
      <circle cx="16" cy="16" r="15" fill="white"/>
    </mask>
  </defs>

  <g filter="url(#paper)">
    <circle cx="16" cy="16" r="15" fill="url(#parch)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#3b2b1a" stroke-opacity="0.18" stroke-width="0.9"/>
    <circle cx="16" cy="16" r="13.9" fill="none" stroke="#3b2b1a" stroke-opacity="0.10" stroke-width="0.7"/>
  </g>

  <g mask="url(#clipCircle)" filter="url(#ink)" fill="none" stroke="#0a0a0a" stroke-linecap="round" stroke-linejoin="round">
    <!-- subtle "azure clouds" rendered as ink-wash layered curls drifting upward -->
    <g opacity="0.55" stroke-width="1.2">
      <path d="M4.2,21.4 C6.1,19.9 8.3,20.0 9.6,21.2 C10.5,22.0 11.8,22.1 13.0,21.4 C14.6,20.5 16.6,20.7 17.8,22.0 C18.9,23.2 20.6,23.6 22.0,22.9 C24.0,21.9 26.3,22.4 27.6,23.8" />
      <path d="M5.1,18.7 C6.4,17.7 8.0,17.7 9.0,18.5 C9.8,19.1 10.8,19.0 11.7,18.5 C13.1,17.7 14.8,18.0 15.8,19.0 C16.7,19.9 18.1,20.2 19.3,19.7 C20.7,19.1 22.4,19.5 23.4,20.5" />
      <path d="M7.0,15.8 C8.2,15.0 9.6,15.2 10.4,15.9 C11.0,16.4 11.8,16.5 12.6,16.1 C13.7,15.6 15.0,15.8 15.8,16.6" />
    </g>

    <!-- crane (minimal ink silhouette) -->
    <g opacity="0.75" stroke-width="1.1">
      <path d="M21.8,9.5 C23.1,8.8 24.7,8.8 26.0,9.6" />
      <path d="M21.7,9.6 C22.6,10.7 23.8,11.3 25.3,11.1" />
      <path d="M23.2,10.2 C22.7,11.4 22.0,12.4 21.0,13.1" />
      <path d="M23.4,10.1 C24.4,10.3 25.0,10.6 25.6,11.2" />
    </g>

    <!-- Calligraphy: "青云" bold ink strokes (stylized) -->
    <g opacity="0.98" stroke-width="2.4">
      <!-- 青 (left) -->
      <path d="M7.2,7.8 C10.0,7.2 12.3,7.2 14.6,7.8" />
      <path d="M8.1,9.9 C10.2,9.6 12.0,9.6 14.0,10.0" />
      <path d="M9.0,8.3 C8.8,10.5 8.7,12.3 8.6,14.2" />
      <path d="M13.6,8.4 C13.9,10.2 14.0,12.2 13.8,14.4" />
      <path d="M7.6,12.2 C9.7,11.7 11.8,11.7 14.4,12.3" />
      <path d="M7.6,14.5 C10.1,14.1 12.1,14.1 14.6,14.7" />
      <path d="M8.0,16.7 C10.4,16.1 12.4,16.0 14.9,16.7" />
      <path d="M9.0,16.9 C9.1,19.1 9.0,21.4 8.7,23.8" />
      <path d="M14.0,16.9 C14.2,19.2 14.2,21.6 13.9,24.0" />
      <path d="M8.3,20.1 C10.2,19.6 12.1,19.6 14.3,20.2" />
      <path d="M8.3,22.8 C10.3,22.3 12.2,22.3 14.4,22.9" />
      <!-- thick finishing sweep -->
      <path d="M7.3,24.8 C9.8,25.4 12.4,25.4 15.2,24.9" />
    </g>

    <g opacity="0.98" stroke-width="2.5">
      <!-- 云 (right) -->
      <path d="M17.2,9.0 C19.6,8.4 22.0,8.4 24.8,9.1" />
      <path d="M18.0,11.4 C19.6,11.0 21.0,10.9 22.5,11.4" />
      <path d="M17.9,13.8 C20.2,13.2 22.2,13.2 24.9,13.9" />
      <path d="M19.0,15.2 C18.4,16.5 17.8,17.5 17.0,18.4" />
      <path d="M22.8,15.2 C23.2,16.5 23.9,17.6 25.0,18.4" />
      <path d="M17.0,19.2 C19.1,18.6 21.2,18.7 23.6,19.4" />
      <path d="M18.0,21.3 C20.0,20.8 22.0,20.9 24.7,21.8" />
      <path d="M17.2,24.3 C19.8,25.2 22.4,25.2 25.0,24.2" />
      <!-- expressive tail sweep -->
      <path d="M20.0,22.6 C20.2,24.2 20.0,25.5 19.4,26.7" />
    </g>

    <!-- ink splatters for wash character -->
    <g fill="#0a0a0a" stroke="none" opacity="0.18">
      <circle cx="11.5" cy="10.8" r="0.55"/>
      <circle cx="13.9" cy="13.2" r="0.42"/>
      <circle cx="20.8" cy="12.6" r="0.5"/>
      <circle cx="23.6" cy="20.7" r="0.45"/>
      <circle cx="18.4" cy="23.9" r="0.4"/>
    </g>
  </g>
</svg>`,
  'fusheng': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parch" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e6c9"/>
      <stop offset="65%" stop-color="#ead9b7"/>
      <stop offset="100%" stop-color="#d8c59f"/>
    </radialGradient>
    <filter id="paperTex" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix in="noise" type="matrix" values="
        0 0 0 0 0.10
        0 0 0 0 0.08
        0 0 0 0 0.05
        0 0 0 0.22 0" result="n2"/>
      <feBlend in="SourceGraphic" in2="n2" mode="multiply"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.55 0" result="b2"/>
      <feMerge>
        <feMergeNode in="b2"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="softInk" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.18" result="s"/>
      <feMerge>
        <feMergeNode in="s"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parch)" filter="url(#paperTex)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#b79e74" stroke-width="0.9" opacity="0.55"/>
    <circle cx="16" cy="16" r="13.9" fill="none" stroke="#9f845b" stroke-width="0.6" opacity="0.25"/>

    <g fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round" filter="url(#softInk)" opacity="0.55">
      <path d="M6.2 22.6 C10.4 21.0, 14.1 21.3, 18.3 22.2 C22.2 23.0, 25.0 23.0, 26.7 22.4" stroke-width="0.9"/>
      <path d="M6.5 23.9 C11.0 22.7, 15.2 22.8, 19.4 23.8 C22.6 24.6, 25.0 24.6, 26.4 24.0" stroke-width="0.7" opacity="0.45"/>
    </g>

    <g filter="url(#inkBleed)">
      <g fill="none" stroke="#050505" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6.7 10.1 C8.7 9.3, 10.6 9.1, 12.6 9.1" stroke-width="2.1"/>
        <path d="M9.4 7.0 C8.9 8.9, 8.4 10.8, 7.7 12.6 C7.2 13.9, 6.6 14.9, 6.0 15.7" stroke-width="2.4"/>
        <path d="M9.5 11.7 C10.6 11.7, 11.8 11.7, 13.1 11.6" stroke-width="1.8"/>
        <path d="M11.2 7.3 C11.1 9.5, 10.9 11.7, 10.8 13.9 C10.7 15.6, 10.9 16.9, 11.7 17.9 C12.5 18.9, 14.0 19.4, 16.1 19.2" stroke-width="2.3"/>
        <path d="M6.8 15.8 C8.5 15.0, 10.7 14.3, 13.1 13.9 C14.7 13.6, 15.8 13.5, 16.4 13.6" stroke-width="2.0"/>

        <path d="M17.6 8.6 C19.1 8.3, 20.8 8.2, 22.6 8.2 C24.1 8.2, 25.4 8.3, 26.3 8.5" stroke-width="2.1"/>
        <path d="M20.0 7.0 C19.7 8.9, 19.0 10.9, 17.9 12.8" stroke-width="2.3"/>
        <path d="M23.6 7.2 C23.6 9.2, 23.6 11.1, 23.6 12.8 C23.6 14.5, 23.6 16.0, 23.6 17.2" stroke-width="2.6"/>
        <path d="M18.3 12.6 C20.4 12.3, 22.5 12.3, 24.6 12.4 C25.4 12.5, 26.0 12.6, 26.4 12.8" stroke-width="2.0"/>
        <path d="M18.8 15.1 C20.7 14.9, 22.5 14.9, 24.2 15.1 C25.3 15.2, 26.0 15.4, 26.5 15.7" stroke-width="2.0"/>
        <path d="M19.2 17.6 C21.0 17.5, 22.7 17.6, 24.3 18.0 C25.3 18.2, 26.0 18.5, 26.6 18.9" stroke-width="2.0"/>
      </g>

      <g fill="none" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" opacity="0.85">
        <path d="M18.9 21.5 C18.0 21.1, 16.9 21.0, 15.9 21.3 C15.0 21.6, 14.3 22.1, 13.9 22.7 C13.5 23.3, 13.6 23.8, 14.2 24.1 C15.0 24.5, 16.2 24.4, 17.3 24.1 C18.5 23.7, 19.4 23.2, 19.8 22.5 C20.1 22.0, 19.8 21.7, 18.9 21.5 Z" stroke-width="1.2"/>
        <path d="M13.9 22.7 C15.0 22.9, 16.1 23.0, 17.2 22.9 C18.3 22.8, 19.1 22.6, 19.8 22.5" stroke-width="0.9" opacity="0.75"/>
      </g>

      <g fill="none" stroke="#050505" stroke-linecap="round" stroke-linejoin="round">
        <path d="M24.7 19.8 C24.7 21.0, 24.6 22.1, 24.4 23.2" stroke-width="1.4"/>
        <path d="M24.7 19.7 C25.1 20.3, 25.4 20.9, 25.6 21.6 C25.8 22.3, 25.7 23.0, 25.2 23.7 C24.7 24.4, 24.0 24.9, 23.1 25.2" stroke-width="1.3"/>
        <path d="M24.6 19.4 C25.2 19.1, 25.8 19.0, 26.3 19.2 C26.9 19.4, 27.2 19.8, 27.2 20.2 C27.1 20.8, 26.6 21.2, 25.9 21.4" stroke-width="1.1" opacity="0.9"/>
      </g>
    </g>

    <path d="M16 2 C11.2 2.3, 6.4 5.1, 4 9.7 C2.2 13.1, 2.2 18.9, 4.2 22.4 C6.8 26.8, 11.5 29.5, 16 29.8 C20.7 29.5, 25.6 26.9, 28 22.3 C30.0 18.8, 29.8 13.2, 28.0 9.8 C25.5 5.2, 20.8 2.4, 16 2 Z" fill="none" stroke="#7c6847" stroke-width="0.7" opacity="0.22"/>
  </g>
</svg>`,
  'mingshi': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f5e6c8"/>
      <stop offset="55%" stop-color="#edd7ac"/>
      <stop offset="100%" stop-color="#d9bd86"/>
    </radialGradient>
    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/>
      <feColorMatrix in="n" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.22 0" result="a"/>
      <feComposite in="a" in2="SourceGraphic" operator="over"/>
    </filter>
    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.75 0" result="ba"/>
      <feMerge>
        <feMergeNode in="ba"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <g filter="url(#paperGrain)" opacity="0.9">
      <circle cx="16" cy="16" r="15" fill="transparent"/>
    </g>

    <g opacity="0.25" filter="url(#inkBleed)">
      <path d="M3.2 12.4c3.2-1.2 6.4-0.7 9.6 0.2 3.0 0.8 5.8 0.9 8.7-0.4 2.1-0.9 4.2-1.3 6.5-0.7" fill="none" stroke="#000" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M4.3 21.7c3.4-0.8 6.2-0.4 9.2 0.6 3.1 1.0 6.1 0.8 9.0-0.3 2.0-0.7 3.9-1.0 5.7-0.6" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round"/>
    </g>

    <g filter="url(#inkBleed)" opacity="0.95">
      <path d="M21.8 24.6c-1.6-2.0-2.7-4.4-2.3-6.9 0.4-2.7 2.2-4.8 4.7-5.6 2.8-0.9 5.0 0.7 6.0 3.0 1.2 2.8-0.2 6.1-2.2 8.3-1.2 1.3-2.7 2.4-4.4 3.0-0.6 0.2-1.4 0.2-1.8-0.2z"
            fill="#000" opacity="0.55"/>
      <path d="M20.4 15.2c1.1-2.1 3.0-3.5 5.3-3.7 2.3-0.2 3.9 1.2 4.6 3.2 0.9 2.4-0.2 5.1-1.6 7.0-0.9 1.3-2.2 2.4-3.7 3.1"
            fill="none" stroke="#000" stroke-width="1.4" stroke-linecap="round" opacity="0.8"/>
      <path d="M24.8 17.1c0.3 1.5 0.3 3.0-0.1 4.5"
            fill="none" stroke="#000" stroke-width="1.2" stroke-linecap="round" opacity="0.85"/>
      <path d="M26.7 18.4c0.2 1.2 0.1 2.5-0.3 3.6"
            fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round" opacity="0.85"/>
      <path d="M28.2 17.0c0.6 1.6 0.3 3.6-0.6 5.2"
            fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round" opacity="0.7"/>

      <path d="M29.4 21.6c-0.8 0.5-1.5 1.1-2.0 1.8"
            fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round" opacity="0.8"/>
      <path d="M30.6 21.2c-0.5 0.1-1.0 0.3-1.4 0.6" fill="none" stroke="#000" stroke-width="0.9" stroke-linecap="round" opacity="0.7"/>
      <path d="M28.9 19.8c0.9 0.2 1.6 0.5 2.2 1.1" fill="none" stroke="#000" stroke-width="0.9" stroke-linecap="round" opacity="0.65"/>
      <circle cx="29.2" cy="22.1" r="0.8" fill="#000" opacity="0.75"/>
    </g>

    <g filter="url(#inkBleed)">
      <path d="M6.1 8.1c2.4 0.9 4.8 1.0 7.2 0.1 0.6-0.2 1.4-0.5 1.6-1.1 0.2-0.6-0.5-1.0-1.1-1.1-1.9-0.3-4.5 0.4-6.3 1.4"
            fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.0 6.4c-0.4 1.8-0.9 3.7-0.8 5.6 0.1 1.3 0.6 2.7 1.7 3.6 0.9 0.7 2.1 0.9 3.2 0.7"
            fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.6 12.3c2.9 0.3 5.8 0.3 8.6-0.4"
            fill="none" stroke="#000" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M6.8 15.1c1.6 1.2 3.6 1.8 5.6 1.9 1.0 0.0 2.2-0.1 2.9-0.9"
            fill="none" stroke="#000" stroke-width="2.0" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.5 18.2c2.5-0.4 5.1-0.5 7.6-0.2"
            fill="none" stroke="#000" stroke-width="2.0" stroke-linecap="round" opacity="0.95"/>
      <path d="M8.0 18.9c0.8 1.6 1.5 3.2 2.6 4.6 0.7 0.9 1.8 1.6 2.9 1.3 1.1-0.3 1.6-1.4 1.8-2.4"
            fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>

      <path d="M16.7 10.0c3.0-0.7 6.2-0.7 9.2 0.0"
            fill="none" stroke="#000" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M18.3 7.0c0.1 2.5 0.0 5.0-0.4 7.4"
            fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M22.2 7.6c0.2 2.7 0.2 5.3-0.3 8.0"
            fill="none" stroke="#000" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M26.2 7.9c0.1 2.6 0.0 5.2-0.5 7.8"
            fill="none" stroke="#000" stroke-width="2.0" stroke-linecap="round"/>

      <path d="M17.5 15.4c3.2 0.5 6.3 0.5 9.4-0.4"
            fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M18.8 17.8c0.2 1.9 0.7 3.7 1.6 5.4 0.4 0.8 1.0 1.6 1.9 1.8 0.9 0.2 1.8-0.3 2.5-0.8"
            fill="none" stroke="#000" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23.7 17.3c-0.2 2.4-0.1 4.8 0.3 7.1"
            fill="none" stroke="#000" stroke-width="2.0" stroke-linecap="round"/>
      <path d="M26.4 18.6c0.1 1.5 0.0 3.0-0.3 4.5"
            fill="none" stroke="#000" stroke-width="1.9" stroke-linecap="round" opacity="0.85"/>
    </g>

    <g filter="url(#inkBleed)" opacity="0.35">
      <path d="M4.7 10.2c2.2-1.0 4.7-1.5 7.1-1.2" fill="none" stroke="#000" stroke-width="1.0" stroke-linecap="round"/>
      <path d="M17.1 11.7c2.9-0.6 5.8-0.4 8.6 0.3" fill="none" stroke="#000" stroke-width="0.9" stroke-linecap="round"/>
      <path d="M7.2 23.9c2.0 0.8 4.2 0.9 6.3 0.1" fill="none" stroke="#000" stroke-width="0.9" stroke-linecap="round"/>
    </g>

    <circle cx="16" cy="16" r="15" fill="none" stroke="#000" stroke-opacity="0.55" stroke-width="0.7"/>
    <circle cx="16" cy="16" r="14.2" fill="none" stroke="#000" stroke-opacity="0.25" stroke-width="0.5"/>
  </g>
</svg>`,
  'zhanshen': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e5bf"/>
      <stop offset="55%" stop-color="#e9d4a2"/>
      <stop offset="100%" stop-color="#d9bf86"/>
    </radialGradient>
    <filter id="paperTexture" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix in="noise" type="matrix"
        values="0 0 0 0 0.55
                0 0 0 0 0.45
                0 0 0 0 0.28
                0 0 0 0.12 0" result="paperNoise"/>
      <feBlend in="SourceGraphic" in2="paperNoise" mode="multiply"/>
    </filter>
    <filter id="inkBleed" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="0.25" result="b"/>
      <feColorMatrix in="b" type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 8 -2" result="ink"/>
      <feBlend in="SourceGraphic" in2="ink" mode="multiply"/>
    </filter>
    <filter id="softInk" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="0.18" result="b"/>
      <feBlend in="SourceGraphic" in2="b" mode="multiply"/>
    </filter>
    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)" filter="url(#paperTexture)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#a8844e" stroke-opacity="0.55" stroke-width="0.8"/>
    <path d="M4.5,17.2 C6.6,13.5 10.5,10.8 16.2,10.6 C21.6,10.4 25.7,12.6 27.6,16.1 C25.1,21.6 20.8,24.4 15.9,24.6 C11.4,24.7 7.3,22.7 4.5,17.2 Z" fill="#000" opacity="0.04"/>
  </g>

  <g clip-path="url(#clipCircle)" filter="url(#inkBleed)">
    <!-- crossed spears behind -->
    <path d="M6.2 26.3 C10.2 21.4 13.2 16.9 16.2 8.2 C17.2 10.3 18.0 12.6 18.4 14.6 C16.8 19.8 13.3 24.5 8.8 27.3 C7.8 27.0 7.0 26.7 6.2 26.3 Z" fill="#0a0a0a" opacity="0.75"/>
    <path d="M25.8 26.3 C21.8 21.4 18.8 16.9 15.8 8.2 C14.8 10.3 14.0 12.6 13.6 14.6 C15.2 19.8 18.7 24.5 23.2 27.3 C24.2 27.0 25.0 26.7 25.8 26.3 Z" fill="#0a0a0a" opacity="0.75"/>

    <!-- spear tips -->
    <path d="M15.9 6.2 C15.2 6.9 14.9 7.7 15.0 8.7 C15.6 8.2 16.1 7.5 16.5 6.7 C16.3 6.4 16.1 6.2 15.9 6.2 Z" fill="#0a0a0a" opacity="0.9"/>
    <path d="M16.1 6.2 C16.8 6.9 17.1 7.7 17.0 8.7 C16.4 8.2 15.9 7.5 15.5 6.7 C15.7 6.4 15.9 6.2 16.1 6.2 Z" fill="#0a0a0a" opacity="0.9"/>

    <!-- battle aura -->
    <path d="M5.2 15.8 C7.5 12.2 11.5 9.7 16.2 9.6 C21.1 9.5 24.9 12.2 26.9 15.7 C24.8 19.7 21.2 22.3 16.1 22.4 C11.1 22.5 7.4 20.0 5.2 15.8 Z" fill="none" stroke="#0a0a0a" stroke-opacity="0.22" stroke-width="1.2"/>
    <path d="M6.1 15.8 C8.2 12.9 11.6 11.0 16.1 10.9 C20.6 10.8 23.9 12.9 25.9 15.7 C23.8 18.9 20.4 21.0 16.0 21.1 C11.6 21.2 8.2 19.0 6.1 15.8 Z" fill="none" stroke="#0a0a0a" stroke-opacity="0.14" stroke-width="0.9"/>

    <!-- fierce helmet silhouette -->
    <path d="M11.0 12.7 C12.3 10.3 14.0 9.0 16.0 9.0 C18.0 9.0 19.7 10.3 21.0 12.7
             C21.4 13.4 21.6 14.2 21.5 15.1
             C20.9 16.0 20.1 16.6 19.2 17.0
             C18.2 16.1 17.2 15.7 16.0 15.7
             C14.8 15.7 13.8 16.1 12.8 17.0
             C11.9 16.6 11.1 16.0 10.5 15.1
             C10.4 14.2 10.6 13.4 11.0 12.7 Z" fill="#070707" opacity="0.9"/>
    <path d="M13.0 12.4 C13.7 11.1 14.7 10.4 16.0 10.4 C17.3 10.4 18.3 11.1 19.0 12.4
             C18.1 12.7 17.1 12.9 16.0 12.9 C14.9 12.9 13.9 12.7 13.0 12.4 Z" fill="#000" opacity="0.22"/>

    <!-- helmet horns/crest -->
    <path d="M12.0 11.1 C11.2 10.1 11.1 9.2 11.7 8.6 C12.6 7.7 13.8 8.4 14.8 9.8
             C14.2 10.2 13.2 10.7 12.0 11.1 Z" fill="#0a0a0a" opacity="0.85"/>
    <path d="M20.0 11.1 C20.8 10.1 20.9 9.2 20.3 8.6 C19.4 7.7 18.2 8.4 17.2 9.8
             C17.8 10.2 18.8 10.7 20.0 11.1 Z" fill="#0a0a0a" opacity="0.85"/>

    <!-- eyes slit -->
    <path d="M13.2 14.4 C14.1 13.9 15.0 13.7 16.0 13.7 C17.0 13.7 17.9 13.9 18.8 14.4
             C18.0 14.9 17.1 15.1 16.0 15.1 C14.9 15.1 14.0 14.9 13.2 14.4 Z" fill="#000" opacity="0.55"/>

    <!-- calligraphy: 战神 -->
    <g filter="url(#softInk)">
      <!-- 战 -->
      <path d="M8.2 12.0 C9.8 11.5 11.2 11.2 12.6 11.1 C13.3 11.0 13.8 11.2 13.9 11.6
               C14.0 12.0 13.6 12.4 12.9 12.6 C11.6 13.0 10.0 13.4 8.6 13.5
               C8.0 13.6 7.6 13.3 7.6 12.9 C7.6 12.5 7.8 12.2 8.2 12.0 Z" fill="#050505"/>
      <path d="M9.2 9.2 C9.8 9.9 10.1 10.7 10.1 11.6 C10.1 12.8 9.7 14.2 9.0 15.6
               C8.7 16.1 8.3 16.3 7.9 16.1 C7.4 15.9 7.3 15.4 7.5 14.8
               C8.0 13.7 8.3 12.6 8.3 11.6 C8.3 10.8 8.1 10.2 7.7 9.7
               C7.3 9.2 7.4 8.8 7.8 8.5 C8.3 8.2 8.8 8.6 9.2 9.2 Z" fill="#050505"/>
      <path d="M10.8 14.8 C12.0 14.4 13.3 14.2 14.7 14.2 C15.4 14.2 15.8 14.4 15.9 14.9
               C16.0 15.4 15.6 15.7 14.9 15.8 C13.6 16.0 12.3 16.3 11.2 16.7
               C10.6 16.9 10.1 16.7 10.0 16.2 C9.9 15.6 10.2 15.0 10.8 14.8 Z" fill="#050505"/>
      <path d="M12.6 9.0 C13.0 9.6 13.3 10.4 13.4 11.3 C13.6 12.4 13.4 13.7 12.9 15.1
               C12.7 15.7 12.3 15.9 11.8 15.8 C11.3 15.6 11.2 15.1 11.4 14.5
               C11.8 13.4 11.9 12.5 11.8 11.6 C11.7 10.8 11.5 10.2 11.2 9.8
               C10.9 9.4 11.0 9.0 11.4 8.7 C11.9 8.3 12.3 8.5 12.6 9.0 Z" fill="#050505"/>
      <path d="M13.4 15.9 C13.9 16.5 14.5 17.0 15.2 17.5 C15.7 17.8 15.8 18.2 15.6 18.6
               C15.3 19.1 14.7 19.2 14.2 18.9 C13.2 18.3 12.4 17.5 11.8 16.6
               C11.5 16.1 11.6 15.6 12.1 15.3 C12.6 15.0 13.1 15.3 13.4 15.9 Z" fill="#050505"/>
      <path d="M14.2 12.0 C14.9 11.8 15.8 11.7 16.8 11.7 C17.5 11.7 17.9 12.0 17.9 12.5
               C17.9 13.0 17.4 13.2 16.7 13.2 C15.8 13.2 15.1 13.3 14.4 13.5
               C13.8 13.7 13.4 13.5 13.3 13.0 C13.2 12.5 13.6 12.2 14.2 12.0 Z" fill="#050505"/>

      <!-- 神 -->
      <path d="M17.9 12.2 C18.7 11.9 19.6 11.7 20.7 11.6 C21.4 11.5 21.8 11.8 21.8 12.3
               C21.8 12.8 21.3 13.1 20.6 13.2 C19.6 13.3 18.8 13.5 18.1 13.8
               C17.5 14.0 17.1 13.9 16.9 13.4 C16.7 12.9 17.2 12.5 17.9 12.2 Z" fill="#050505"/>
      <path d="M18.4 9.1 C18.9 9.8 19.2 10.8 19.2 12.0 C19.2 13.4 18.7 15.0 17.7 16.7
               C17.4 17.3 16.9 17.4 16.4 17.2 C15.9 17.0 15.9 16.4 16.2 15.9
               C16.9 14.6 17.3 13.4 17.3 12.2 C17.3 11.2 17.1 10.4 16.7 9.8
               C16.4 9.3 16.6 8.8 17.0 8.6 C17.6 8.3 18.0 8.5 18.4 9.1 Z" fill="#050505"/>
      <path d="M20.4 14.0 C21.6 13.7 22.7 13.5 23.7 13.5 C24.4 13.5 24.8 13.8 24.8 14.3
               C24.7 14.9 24.3 15.1 23.6 15.1 C22.7 15.1 21.8 15.3 20.8 15.6
               C20.2 15.8 19.7 15.6 19.6 15.1 C19.4 14.5 19.8 14.2 20.4 14.0 Z" fill="#050505"/>
      <path d="M22.3 9.3 C22.4 12.0 22.4 14.9 22.3 18.0 C22.3 18.7 21.9 19.1 21.3 19.1
               C20.7 19.1 20.4 18.7 20.4 18.0 C20.5 15.0 20.5 12.1 20.4 9.4
               C20.4 8.8 20.7 8.4 21.4 8.4 C22.0 8.4 22.3 8.8 22.3 9.3 Z" fill="#050505"/>
      <path d="M19.6 17.2 C20.9 16.8 22.2 16.6 23.6 16.6 C24.3 16.6 24.7 16.9 24.7 17.5
               C24.7 18.0 24.2 18.2 23.5 18.2 C22.2 18.2 21.0 18.4 19.9 18.8
               C19.2 19.0 18.8 18.8 18.7 18.2 C18.6 17.7 19.0 17.4 19.6 17.2 Z" fill="#050505"/>
      <path d="M23.9 10.8 C24.7 12.5 25.3 14.6 25.6 17.0 C25.7 17.6 25.4 18.0 24.8 18.1
               C24.2 18.2 23.8 17.8 23.7 17.2 C23.5 15.2 23.0 13.4 22.3 11.9
               C22.0 11.3 22.2 10.8 22.8 10.6 C23.3 10.4 23.7 10.5 23.9 10.8 Z" fill="#050505"/>
    </g>

    <!-- ink splatter -->
    <path d="M9.6 22.7 C9.9 22.2 10.5 22.0 11.0 22.3 C11.4 22.5 11.5 23.0 11.2 23.4
             C10.8 23.9 10.1 24.2 9.6 23.8 C9.2 23.5 9.2 23.1 9.6 22.7 Z" fill="#000" opacity="0.25"/>
    <path d="M22.3 22.4 C22.7 22.0 23.2 21.9 23.6 22.2 C24.1 22.5 24.0 23.1 23.6 23.5
             C23.1 24.0 22.4 24.1 22.0 23.7 C21.7 23.3 21.9 22.8 22.3 22.4 Z" fill="#000" opacity="0.22"/>
    <path d="M15.5 24.8 C16.2 24.6 16.8 24.7 17.1 25.2 C17.4 25.7 17.1 26.2 16.4 26.4
             C15.7 26.6 15.1 26.4 14.9 25.9 C14.7 25.4 14.9 25.0 15.5 24.8 Z" fill="#000" opacity="0.18"/>
  </g>
</svg>`,
  'wushuang': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="paper" cx="35%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#f6e6c8"/>
      <stop offset="55%" stop-color="#efd9b2"/>
      <stop offset="100%" stop-color="#e2c894"/>
    </radialGradient>
    <filter id="inkBleed" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.55" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="0.12" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softShade" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="0.8" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 .18 0" result="s"/>
      <feMerge>
        <feMergeNode in="s"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <circle cx="16" cy="16" r="15" fill="url(#paper)" stroke="#c6a66f" stroke-width="0.8" filter="url(#softShade)"/>
  <circle cx="16" cy="16" r="13.9" fill="none" stroke="#caa971" stroke-width="0.5" opacity="0.55"/>

  <g filter="url(#inkBleed)" fill="none" stroke="#111" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7.6,6.7 C9.6,7.7 12.1,8.2 14.8,8.0" stroke-width="2.0" opacity="0.9"/>
    <path d="M8.8,10.4 C10.5,10.2 12.8,10.0 15.4,10.2" stroke-width="2.2"/>
    <path d="M11.7,9.5 C11.2,13.1 10.0,16.2 8.5,18.6" stroke-width="2.3"/>
    <path d="M12.7,12.5 C13.8,13.9 14.9,15.6 15.6,17.3" stroke-width="1.8" opacity="0.85"/>
    <path d="M9.2,19.8 C11.6,19.1 13.9,18.8 16.2,19.0" stroke-width="2.1"/>
    <path d="M12.0,17.8 C11.9,21.2 11.7,23.9 11.1,26.2" stroke-width="2.3"/>
    <path d="M14.8,17.8 C14.9,21.4 15.1,24.1 15.5,26.3" stroke-width="2.1" opacity="0.95"/>
    <path d="M10.0,24.8 C12.1,24.6 13.9,24.5 16.2,24.7" stroke-width="1.9" opacity="0.9"/>

    <path d="M18.2,8.4 C19.8,9.0 22.0,9.3 24.7,9.1" stroke-width="2.0" opacity="0.9"/>
    <path d="M19.0,11.8 C21.1,11.5 23.0,11.4 25.2,11.7" stroke-width="2.2"/>
    <path d="M20.0,9.8 C19.3,14.0 18.6,17.0 17.4,19.3" stroke-width="2.2"/>
    <path d="M21.9,12.8 C22.7,14.5 23.8,16.3 25.3,17.9" stroke-width="2.0" opacity="0.95"/>
    <path d="M18.0,20.2 C20.6,19.7 23.2,19.6 25.6,19.9" stroke-width="2.2"/>
    <path d="M19.4,22.2 C19.4,23.9 19.3,25.4 18.8,26.8" stroke-width="2.2"/>
    <path d="M22.0,22.0 C22.1,24.0 22.1,25.7 22.0,27.0" stroke-width="2.1" opacity="0.95"/>
    <path d="M24.7,22.1 C24.9,23.9 25.1,25.6 25.4,27.0" stroke-width="2.0" opacity="0.9"/>
    <path d="M18.6,25.1 C21.0,24.8 23.4,24.8 25.9,25.2" stroke-width="1.9" opacity="0.85"/>

    <path d="M16,7.2 C16.2,8.3 16.4,9.5 16.6,10.7" stroke-width="1.6" opacity="0.55"/>
  </g>

  <g filter="url(#inkBleed)" stroke="#111" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M15.1,4.6 L16.1,3.7 L17.1,4.6" stroke-width="1.3" opacity="0.9"/>
    <path d="M13.8,5.7 L14.9,4.9" stroke-width="1.1" opacity="0.75"/>
    <path d="M18.2,5.7 L17.2,4.9" stroke-width="1.1" opacity="0.75"/>
    <path d="M12.9,6.9 L14.3,6.1" stroke-width="1.0" opacity="0.6"/>
    <path d="M19.1,6.9 L17.7,6.1" stroke-width="1.0" opacity="0.6"/>

    <path d="M16.0,9.8 C15.6,10.8 15.5,11.9 15.6,13.0 C15.7,14.0 15.9,15.1 16.0,16.2" stroke-width="1.4" opacity="0.45"/>
    <path d="M14.7,16.7 C15.4,16.9 16.6,16.9 17.3,16.7" stroke-width="1.2" opacity="0.45"/>
  </g>

  <path d="M6.5,16.0 C7.4,10.8 10.7,7.0 16.2,6.1 C22.9,5.0 27.2,9.2 28.1,15.2 C29.0,21.2 25.4,26.4 18.8,27.6 C12.3,28.8 7.1,24.3 6.5,19.0" fill="none" stroke="#7a5a2d" stroke-width="0.6" opacity="0.28"/>
</svg>`,
  'cimo': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="38%" cy="32%" r="70%">
      <stop offset="0%" stop-color="#f6e7c9"/>
      <stop offset="55%" stop-color="#e8d2a6"/>
      <stop offset="100%" stop-color="#d2b37d"/>
    </radialGradient>

    <filter id="paperTexture" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.12 0" in="noise" result="nA"/>
      <feBlend in="SourceGraphic" in2="nA" mode="multiply"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.45" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.65 0" result="b2"/>
      <feMerge>
        <feMergeNode in="b2"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="inkSpatter" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="0.2" result="s"/>
      <feMerge>
        <feMergeNode in="s"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)" filter="url(#paperTexture)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#8a6b3f" stroke-opacity="0.35" stroke-width="0.8"/>
    <circle cx="16" cy="16" r="13.7" fill="none" stroke="#8a6b3f" stroke-opacity="0.18" stroke-width="0.6"/>

    <!-- faint fibrous stains -->
    <path d="M3.8 18.4c3.2 2.2 7.2 2.8 11.1 2.3 4.2-.5 7.5-2.6 12.3-2.1" fill="none" stroke="#9a7a4a" stroke-opacity="0.18" stroke-width="0.9"/>
    <path d="M5.2 12.4c2.9-1.5 6.2-1.8 9.4-1.3 4 .6 7.4 2.4 12.2 1.6" fill="none" stroke="#9a7a4a" stroke-opacity="0.14" stroke-width="0.8"/>

    <!-- Ink calligraphy "词魔" (stylized brush strokes) -->
    <g filter="url(#inkBleed)" fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round">
      <!-- Left character: 词 -->
      <!-- 讠 radical -->
      <path d="M7.2 9.4c1.5.1 2.9-.3 4.2-1.1" stroke-width="2.1"/>
      <path d="M8.0 10.6c-0.2 4.4-0.4 8.6-0.8 12.6" stroke-width="2.6"/>
      <path d="M9.9 15.1c0.8 0.9 1.7 1.9 2.8 2.8" stroke-width="2.0"/>

      <!-- 司-ish right part -->
      <path d="M12.6 9.7c3.1-0.7 5.7-0.8 7.5-0.5" stroke-width="2.4"/>
      <path d="M13.1 12.0c3.0-0.6 5.2-0.7 6.7-0.5" stroke-width="2.1"/>
      <path d="M14.0 12.4c-0.4 2.2-0.7 4.1-0.7 6.3" stroke-width="2.2"/>
      <path d="M13.6 16.0c2.3-0.4 4.2-0.4 6.0-0.2" stroke-width="2.0"/>
      <path d="M19.5 12.2c0.1 2.4 0.2 4.5 0.1 7.1" stroke-width="2.2"/>
      <path d="M14.2 19.1c2.2 0.1 3.9 0.1 5.8-0.2" stroke-width="2.0"/>
      <path d="M15.2 20.0c0.8 1.2 1.9 2.3 3.1 3.1" stroke-width="2.0"/>

      <!-- Right character: 魔 -->
      <!-- top "麻" roof strokes -->
      <path d="M18.9 8.6c3.6-0.7 7.0-0.8 10.0-0.2" stroke-width="2.6"/>
      <path d="M20.0 10.4c-0.6 3.8-1.0 7.3-1.1 10.7" stroke-width="2.5"/>
      <path d="M22.2 10.6c-0.5 3.4-0.8 6.2-0.8 9.6" stroke-width="2.2"/>
      <path d="M24.2 10.5c-0.2 3.6-0.1 6.6 0.1 10.0" stroke-width="2.2"/>
      <path d="M26.2 10.3c0.2 3.5 0.4 6.6 0.4 10.0" stroke-width="2.1"/>
      <path d="M20.0 14.0c3.0-0.6 6.2-0.6 8.8-0.1" stroke-width="2.1"/>
      <path d="M20.1 16.2c3.1-0.6 6.1-0.6 8.7-0.1" stroke-width="2.0"/>

      <!-- lower "鬼" component -->
      <path d="M20.2 18.8c2.4-0.5 5.5-0.5 8.4 0.1" stroke-width="2.4"/>
      <path d="M21.4 20.2c2.2-0.4 4.3-0.4 6.4 0.0" stroke-width="2.0"/>
      <path d="M22.1 21.3c0.1 2.2-0.1 4.1-0.6 6.0" stroke-width="2.4"/>
      <path d="M24.0 21.2c0.2 1.8 0.2 3.4-0.1 5.4" stroke-width="2.2"/>
      <path d="M25.8 21.2c0.5 1.8 0.7 3.5 0.6 5.7" stroke-width="2.2"/>
      <path d="M20.8 24.6c2.2-0.3 4.7-0.2 7.3 0.3" stroke-width="2.0"/>

      <!-- demon-like twisted tail flourish -->
      <path d="M28.4 19.0c1.5 1.1 1.9 2.5 0.8 3.7-1.0 1.1-2.7 1.1-3.8 2.2-1.5 1.4-0.6 3.3 1.2 3.6 1.2 0.2 2.1-0.3 2.9-1.2" stroke-width="2.0"/>
    </g>

    <!-- Twisted brush / dark magic ribbon -->
    <g filter="url(#inkBleed)" opacity="0.95">
      <path d="M6.0 25.7c2.8-2.1 5.2-3.1 8.3-3.4 2.8-0.3 4.8 0.4 7.0 1.6 2.6 1.4 4.5 1.8 6.9 1.2"
            fill="none" stroke="#0b0b0b" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M6.2 26.6c2.1-1.3 4.0-1.9 6.4-2.1 2.2-0.2 3.8 0.2 5.6 1.1 2.5 1.2 4.7 1.6 7.6 0.7"
            fill="none" stroke="#0b0b0b" stroke-width="0.9" stroke-linecap="round" stroke-opacity="0.85"/>
    </g>

    <!-- Ink splatters -->
    <g filter="url(#inkSpatter)" fill="#0b0b0b" opacity="0.95">
      <circle cx="25.8" cy="6.8" r="0.8"/>
      <circle cx="27.3" cy="7.7" r="0.5"/>
      <circle cx="24.4" cy="7.5" r="0.4"/>
      <circle cx="10.6" cy="23.9" r="0.7"/>
      <circle cx="9.4" cy="24.9" r="0.45"/>
      <circle cx="12.0" cy="25.6" r="0.35"/>
      <circle cx="29.0" cy="20.8" r="0.55"/>
      <circle cx="28.6" cy="22.0" r="0.35"/>
      <circle cx="21.2" cy="27.7" r="0.6"/>
      <circle cx="22.6" cy="28.5" r="0.35"/>
      <path d="M26.7 24.0c0.9 0.1 1.5 0.5 1.8 1.1-0.7 0.5-1.6 0.5-2.5 0.1 0.1-0.6 0.3-1.0 0.7-1.2z" opacity="0.85"/>
    </g>

    <!-- Slight vignette inside parchment -->
    <circle cx="16" cy="16" r="15" fill="none" stroke="#2a1b0b" stroke-opacity="0.12" stroke-width="2.2"/>
  </g>
</svg>`,
  'shihun': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f5e7c8"/>
      <stop offset="55%" stop-color="#ecd7ad"/>
      <stop offset="100%" stop-color="#d9bd8a"/>
    </radialGradient>
    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 .18 0" in="noise" result="grain"/>
      <feBlend in="SourceGraphic" in2="grain" mode="multiply"/>
    </filter>
    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0.55 0" result="s"/>
      <feMerge>
        <feMergeNode in="s"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g filter="url(#paperGrain)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="15" fill="none" stroke="#8a6b3a" stroke-opacity="0.35" stroke-width="0.7"/>
    <circle cx="16" cy="16" r="14.1" fill="none" stroke="#6b4f2a" stroke-opacity="0.18" stroke-width="0.6"/>
  </g>

  <g clip-path="url(#clipCircle)">
    <!-- subtle ink wash clouds -->
    <g opacity="0.18" filter="url(#inkBleed)" fill="#000">
      <path d="M4.2,12.2c2.4-1.8,5.6-1.5,7.3,0.2c1.5,1.5,3.9,1.1,5.3-0.1c1.9-1.6,4.4-2.3,7.4-0.9c1.8,0.8,3.1,2.5,3.3,4.2c0.3,2.3-1.4,4.1-3.8,4.3c-3.4,0.3-5.8-1.1-8.1-0.8c-3,0.4-5.5,2-8.9,1.5c-2.4-0.4-4.1-2.2-4.0-4.3C2.8,14.7,3.3,13,4.2,12.2z"/>
    </g>

    <!-- floating scrolls / poetry spirit -->
    <g filter="url(#inkBleed)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
      <!-- left scroll -->
      <path d="M6.2,21.9c0.7-1.5,2.6-2.3,4.0-1.8c1.1,0.4,1.8,1.6,1.4,2.8c-0.5,1.6-2.5,2.6-4.4,2.1c-1.2-0.3-2.0-1.1-2.1-2.1" stroke-width="1.1" opacity="0.9"/>
      <path d="M7.0,21.0c1.5-0.8,3.5-0.4,4.8,0.8" stroke-width="0.7" opacity="0.7"/>
      <path d="M7.2,23.2c1.6,0.7,3.2,0.6,4.6-0.2" stroke-width="0.65" opacity="0.65"/>
      <!-- right scroll -->
      <path d="M24.8,7.6c-0.9,1.3-2.8,1.7-4.0,0.9c-0.9-0.6-1.2-1.9-0.5-2.9c0.9-1.4,2.9-1.9,4.6-1.1c1.1,0.5,1.7,1.5,1.6,2.5" stroke-width="1.0" opacity="0.9"/>
      <path d="M24.2,6.8c-1.4,0.5-3.1,0.0-4.2-1.1" stroke-width="0.65" opacity="0.7"/>
      <path d="M23.6,4.9c-1.4-0.6-2.8-0.5-4.0,0.1" stroke-width="0.6" opacity="0.6"/>
      <!-- radiant verse wisps -->
      <path d="M12.5,7.2c-0.4,1.0-0.1,2.2,0.9,2.8c1.1,0.7,2.5,0.3,3.2-0.7c0.6-0.9,0.5-2.0-0.2-2.7" stroke-width="0.55" opacity="0.55"/>
      <path d="M18.3,24.9c0.9,0.2,1.9-0.2,2.4-1.1c0.6-1.0,0.2-2.2-0.7-2.8c-0.8-0.5-1.8-0.4-2.4,0.2" stroke-width="0.55" opacity="0.55"/>
      <path d="M20.9,14.2c0.9,0.7,2.2,0.6,3.1-0.2c1.0-0.9,1.0-2.3,0.2-3.2" stroke-width="0.5" opacity="0.45"/>
    </g>

    <!-- Ink calligraphy: "诗魂" (stylized strokes) -->
    <g filter="url(#inkBleed)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
      <!-- 诗 (left) -->
      <path d="M7.2,9.6c2.6,0.2,4.9-0.2,7.0-1.2" stroke-width="1.7"/>
      <path d="M8.0,12.0c2.2,0.1,4.1-0.2,5.9-1.0" stroke-width="1.5"/>
      <path d="M9.0,8.4c-0.5,2.0-0.8,4.2-0.8,6.5c0,2.9,0.4,5.6,1.2,8.2" stroke-width="1.7"/>
      <path d="M11.4,13.0c-0.4,2.2-0.6,4.1-0.6,5.8c0,1.7,0.3,3.1,0.8,4.3" stroke-width="1.5"/>
      <path d="M12.6,15.2c1.3-0.2,2.8-0.8,4.3-1.8" stroke-width="1.4"/>
      <path d="M13.4,16.5c0.9,1.2,1.6,2.6,2.0,4.3" stroke-width="1.3"/>
      <path d="M12.5,22.1c1.8,0.2,3.6-0.2,5.4-1.1" stroke-width="1.6"/>

      <!-- 魂 (right) -->
      <path d="M18.4,9.2c0.6,1.2,0.8,2.7,0.6,4.6" stroke-width="1.7"/>
      <path d="M16.8,12.1c2.4,0.3,4.9,0.1,7.4-0.7" stroke-width="1.7"/>
      <path d="M21.2,7.8c-0.3,2.1-0.4,4.3-0.3,6.5c0.1,2.1,0.3,4.2,0.7,6.2" stroke-width="1.7"/>
      <path d="M16.9,16.2c2.0,0.2,4.1,0.1,6.2-0.5" stroke-width="1.6"/>
      <path d="M18.0,18.5c0.8,1.3,0.9,2.8,0.2,4.5" stroke-width="1.5"/>
      <path d="M19.3,19.1c1.2,1.4,2.9,2.7,5.1,3.8" stroke-width="1.6"/>
      <path d="M16.8,23.8c2.6,0.3,5.0-0.1,7.3-1.3" stroke-width="1.7"/>

      <!-- small ink splatters -->
      <g opacity="0.55">
        <path d="M25.6,18.9c0.2,0.7-0.2,1.4-0.9,1.6c-0.7,0.2-1.4-0.2-1.6-0.9c-0.2-0.7,0.2-1.4,0.9-1.6c0.7-0.2,1.4,0.2,1.6,0.9z" stroke-width="0" fill="#000"/>
        <path d="M6.3,15.9c0.2,0.6-0.1,1.1-0.7,1.3c-0.6,0.2-1.1-0.1-1.3-0.7c-0.2-0.6,0.1-1.1,0.7-1.3c0.6-0.2,1.1,0.1,1.3,0.7z" stroke-width="0" fill="#000"/>
        <path d="M14.8,6.1c0.15,0.5-0.12,1.0-0.62,1.15c-0.5,0.15-1.0-0.12-1.15-0.62c-0.15-0.5,0.12-1.0,0.62-1.15c0.5-0.15,1.0,0.12,1.15,0.62z" stroke-width="0" fill="#000"/>
      </g>
    </g>

    <!-- inner vignette -->
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#000" stroke-opacity="0.08" stroke-width="2.2"/>
  </g>
</svg>`,
  'wenqu': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <filter id="paperNoise" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 .18 0" result="noiseA"/>
      <feComposite in="noiseA" in2="SourceGraphic" operator="over"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.7 0" result="ba"/>
      <feMerge>
        <feMergeNode in="ba"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f4e7c6"/>
      <stop offset="55%" stop-color="#ecdab4"/>
      <stop offset="100%" stop-color="#e2c99c"/>
    </radialGradient>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)" filter="url(#paperNoise)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#caa66f" stroke-width="0.7" opacity="0.55"/>
    <circle cx="16" cy="16" r="13.6" fill="none" stroke="#b89158" stroke-width="0.4" opacity="0.35"/>

    <path d="M2,18 C6,12 10,9 16,8 C22,7 26,9 30,14 L30,32 L2,32 Z" fill="#000" opacity="0.03"/>

    <g filter="url(#inkBleed)" fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round">
      <g opacity="0.95">
        <path d="M7.3 8.2 C8.8 8.2 10.0 8.1 11.4 7.9" stroke-width="1.4"/>
        <path d="M8.0 10.0 C9.6 9.8 10.8 9.6 12.2 9.3" stroke-width="1.2"/>
        <path d="M7.6 12.2 C9.6 12.2 11.0 12.0 12.8 11.6" stroke-width="1.2"/>
        <path d="M9.4 6.9 C9.0 8.2 8.4 10.2 7.8 11.8 C7.2 13.3 6.7 14.2 6.1 15.0" stroke-width="1.6"/>
        <path d="M13.0 6.6 C12.7 8.9 12.4 11.2 12.1 13.2 C11.9 14.7 11.7 15.8 11.5 16.6" stroke-width="1.8"/>
        <path d="M7.9 14.1 C9.8 14.0 11.4 13.8 13.0 13.5" stroke-width="1.2"/>
        <path d="M7.2 16.2 C9.5 15.9 11.1 15.6 12.6 15.1" stroke-width="1.2"/>
        <path d="M8.0 17.2 C9.0 18.0 10.2 19.3 11.0 20.5" stroke-width="1.2"/>
        <path d="M12.4 17.0 C11.6 18.1 10.5 19.3 9.1 20.4" stroke-width="1.2"/>
        <path d="M9.2 10.7 C9.0 12.5 9.0 14.0 9.1 15.5 C9.2 17.0 9.5 19.2 9.7 21.0" stroke-width="1.6"/>
        <path d="M10.8 10.4 C10.7 12.5 10.7 14.1 10.8 15.9 C10.9 17.7 11.1 19.6 11.4 21.2" stroke-width="1.5"/>
      </g>

      <g opacity="0.95">
        <path d="M18.1 8.4 C20.1 8.2 22.4 7.8 25.1 7.2" stroke-width="1.6"/>
        <path d="M18.5 10.4 C20.8 10.2 23.2 9.8 25.8 9.2" stroke-width="1.3"/>
        <path d="M20.4 6.3 C20.0 8.2 19.3 10.6 18.4 12.5 C17.6 14.2 16.8 15.4 16.1 16.4" stroke-width="1.9"/>
        <path d="M24.9 6.1 C25.1 8.4 25.2 10.6 25.2 12.5 C25.2 14.3 25.0 16.2 24.5 17.6" stroke-width="1.9"/>
        <path d="M17.6 13.0 C19.8 12.8 22.2 12.4 24.9 11.8" stroke-width="1.3"/>
        <path d="M18.3 14.8 C20.6 14.6 22.9 14.2 25.1 13.6" stroke-width="1.2"/>
        <path d="M19.0 16.6 C20.6 16.5 22.3 16.3 24.0 15.9" stroke-width="1.2"/>
        <path d="M20.2 11.7 C20.0 13.6 19.9 15.4 20.0 17.3 C20.1 19.0 20.2 20.2 20.4 21.4" stroke-width="1.6"/>
        <path d="M23.0 11.3 C23.1 13.1 23.1 14.9 23.1 16.9 C23.1 18.7 23.0 20.2 22.8 21.5" stroke-width="1.6"/>
        <path d="M17.8 19.1 C20.6 18.9 23.0 18.5 25.2 17.8" stroke-width="1.4"/>
        <path d="M18.4 21.4 C20.8 21.2 23.1 20.8 25.0 20.2" stroke-width="1.3"/>
        <path d="M21.7 17.1 C21.6 18.2 21.5 19.4 21.5 20.6" stroke-width="1.4"/>
        <path d="M20.6 22.8 C21.7 23.5 23.0 24.3 24.5 25.3" stroke-width="1.4"/>
        <path d="M21.8 22.2 C20.6 23.6 19.1 24.7 17.4 25.6" stroke-width="1.4"/>
      </g>

      <g opacity="0.9">
        <path d="M22.7 4.4 L23.3 5.6" stroke-width="0.9"/>
        <path d="M23.9 4.7 L22.1 5.2" stroke-width="0.9"/>
        <path d="M22.2 4.9 L23.8 5.4" stroke-width="0.9"/>
      </g>

      <g opacity="0.9">
        <path d="M19.3 24.6 C20.8 24.3 22.4 24.2 24.0 24.2" stroke-width="1.0"/>
        <path d="M19.2 25.6 C20.9 25.9 22.6 26.0 24.2 25.9" stroke-width="0.95"/>
        <path d="M19.6 24.3 C19.1 25.1 18.8 26.0 18.6 27.0" stroke-width="1.0"/>
        <path d="M23.8 24.1 C24.2 24.8 24.5 25.8 24.7 26.9" stroke-width="1.0"/>
        <path d="M19.1 26.7 C20.8 26.5 22.6 26.4 24.4 26.2" stroke-width="0.95"/>
      </g>
    </g>

    <path d="M10 6 C12 4.2 14.5 3.4 16.6 3.6 C19.5 3.9 22 4.9 24.5 6.5" fill="none" stroke="#000" stroke-width="0.6" opacity="0.08"/>
    <path d="M6 22 C9 26.5 13.2 28.8 16.6 28.6 C20.7 28.4 24.5 26.6 27.2 23.2" fill="none" stroke="#000" stroke-width="0.7" opacity="0.06"/>
  </g>
</svg>`,
  'shuimo': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e5c6"/>
      <stop offset="55%" stop-color="#ead4a6"/>
      <stop offset="100%" stop-color="#d6b67b"/>
    </radialGradient>

    <radialGradient id="inkWash" cx="55%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.85"/>
      <stop offset="55%" stop-color="#000000" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.22 0" result="grain"/>
      <feComposite in="grain" in2="SourceGraphic" operator="over"/>
    </filter>

    <filter id="inkBleed" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.6" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.65 0" result="soft"/>
      <feMerge>
        <feMergeNode in="soft"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)" filter="url(#paperGrain)"/>
    <circle cx="16" cy="16" r="14.6" fill="none" stroke="#5a3a1c" stroke-opacity="0.18" stroke-width="1.2"/>
    <circle cx="16" cy="16" r="13.7" fill="none" stroke="#3b2412" stroke-opacity="0.10" stroke-width="0.7"/>

    <g opacity="0.95">
      <path d="M8.6 19.2 C10.6 16.9, 12.7 16.1, 14.2 14.6 C15.5 13.4, 16.3 11.8, 16.6 9.6
               C17.0 12.1, 18.2 13.9, 19.7 15.2 C21.6 16.8, 23.8 17.4, 25.0 19.4
               C22.6 18.3, 20.7 18.4, 19.0 19.2 C17.3 20.0, 16.2 21.2, 15.1 22.6
               C13.9 21.1, 12.7 20.1, 11.1 19.4 C10.2 19.0, 9.4 19.0, 8.6 19.2 Z"
            fill="url(#inkWash)"/>
      <path d="M18.8 21.3 C20.2 21.1, 21.8 21.5, 23.5 22.6 C25.0 23.6, 25.7 24.8, 25.2 25.9
               C24.7 27.0, 23.2 27.3, 21.6 26.8 C19.6 26.1, 18.5 24.4, 18.4 23.0
               C18.3 22.3, 18.4 21.7, 18.8 21.3 Z"
            fill="#000" opacity="0.22"/>
      <path d="M20.7 20.3 C21.4 19.8, 22.5 19.8, 23.7 20.4 C25.1 21.0, 26.0 21.9, 25.8 22.9
               C25.6 24.0, 24.4 24.4, 23.1 24.1 C21.5 23.7, 20.4 22.7, 20.2 21.7
               C20.0 21.0, 20.2 20.6, 20.7 20.3 Z"
            fill="url(#inkWash)"/>
    </g>

    <g filter="url(#inkBleed)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
      <!-- 水 (left) -->
      <path d="M10.2 8.4 C9.9 11.0, 9.3 13.2, 8.4 15.2" stroke-width="2.1"/>
      <path d="M11.7 10.6 C12.3 12.4, 12.4 14.8, 12.0 18.0" stroke-width="2.5"/>
      <path d="M14.2 10.0 C13.6 13.0, 13.9 15.3, 15.2 17.1 C16.1 18.4, 17.2 19.4, 18.7 20.3"
            stroke-width="2.2"/>
      <path d="M8.2 20.7 C10.6 20.0, 12.8 19.2, 15.3 18.1" stroke-width="2.6"/>
      <path d="M9.6 22.8 C11.4 22.7, 13.4 22.2, 15.7 21.2" stroke-width="2.0"/>

      <!-- 墨 (right) -->
      <path d="M18.2 9.1 C20.7 8.9, 22.9 8.9, 25.0 9.1" stroke-width="2.3"/>
      <path d="M19.0 11.4 C21.3 11.3, 23.2 11.3, 24.7 11.5" stroke-width="2.0"/>
      <path d="M18.8 13.5 C21.4 13.4, 23.5 13.4, 25.2 13.6" stroke-width="2.0"/>

      <path d="M19.3 9.0 C19.1 11.7, 19.1 14.2, 19.3 16.5" stroke-width="2.0"/>
      <path d="M22.0 8.9 C21.8 11.8, 21.8 14.1, 22.0 16.4" stroke-width="2.0"/>
      <path d="M24.7 9.0 C24.5 11.9, 24.5 14.1, 24.7 16.4" stroke-width="2.0"/>

      <path d="M18.7 16.8 C21.7 16.6, 24.1 16.6, 25.6 16.9" stroke-width="2.4"/>

      <path d="M19.4 18.9 C20.0 20.5, 21.2 21.8, 23.0 23.0 C24.3 23.9, 25.2 24.9, 25.6 26.0"
            stroke-width="2.6"/>
      <path d="M21.0 18.6 C20.7 20.5, 19.9 22.3, 18.6 24.0" stroke-width="2.2"/>
      <path d="M23.6 18.6 C23.2 20.8, 22.3 22.8, 20.9 24.7" stroke-width="2.2"/>
      <path d="M19.0 25.6 C21.5 25.2, 23.6 25.2, 25.2 25.6" stroke-width="2.4"/>
    </g>

    <!-- extra ink droplets / wash -->
    <g opacity="0.9">
      <path d="M16.6 22.6 C16.1 24.2, 15.7 25.3, 14.8 26.2
               C13.9 27.1, 13.0 27.0, 12.6 26.2
               C12.1 25.3, 12.6 24.1, 13.6 23.4
               C14.6 22.8, 15.7 22.6, 16.6 22.6 Z"
            fill="#000" opacity="0.28"/>
      <path d="M16.9 21.7 C16.3 23.3, 15.4 24.7, 14.0 25.8
               C13.0 26.6, 12.0 26.4, 11.7 25.7
               C11.4 25.0, 11.9 24.0, 13.2 23.1
               C14.5 22.2, 15.7 21.8, 16.9 21.7 Z"
            fill="url(#inkWash)"/>
      <circle cx="24.8" cy="22.2" r="1.0" fill="#000" opacity="0.35"/>
      <circle cx="23.7" cy="21.1" r="0.7" fill="#000" opacity="0.25"/>
      <circle cx="13.0" cy="18.2" r="0.6" fill="#000" opacity="0.22"/>
    </g>
  </g>
</svg>`,
  'bihun': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="parchment" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f3e6c8"/>
      <stop offset="55%" stop-color="#ead9b2"/>
      <stop offset="100%" stop-color="#d7bf8a"/>
    </radialGradient>

    <filter id="paperGrain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise"/>
      <feColorMatrix type="matrix" values="
        0 0 0 0 0.45
        0 0 0 0 0.37
        0 0 0 0 0.22
        0 0 0 0.22 0" in="noise" result="tint"/>
      <feBlend in="SourceGraphic" in2="tint" mode="multiply" />
    </filter>

    <filter id="inkBleed" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="0.35" result="b"/>
      <feColorMatrix in="b" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.55 0" result="s"/>
      <feMerge>
        <feMergeNode in="s"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="1.1" result="g"/>
      <feColorMatrix in="g" type="matrix" values="
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0.35 0" result="ga"/>
      <feMerge>
        <feMergeNode in="ga"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <clipPath id="clipCircle">
      <circle cx="16" cy="16" r="15"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clipCircle)">
    <circle cx="16" cy="16" r="15" fill="url(#parchment)" filter="url(#paperGrain)"/>
    <circle cx="16" cy="16" r="14.5" fill="none" stroke="#2a1c10" stroke-opacity="0.35" stroke-width="1"/>
    <circle cx="16" cy="16" r="13.1" fill="none" stroke="#2a1c10" stroke-opacity="0.18" stroke-width="0.8"/>

    <!-- Subtle ink wash cloud -->
    <path d="M5.6,20.4 C8.4,18.6 10.0,22.3 12.8,20.9 C15.4,19.6 16.1,22.6 18.9,21.7 C21.6,20.9 23.3,22.8 26.4,21.1"
          fill="none" stroke="#0b0b0b" stroke-opacity="0.08" stroke-width="3.2" stroke-linecap="round" filter="url(#inkBleed)"/>

    <!-- Brush spirit: glowing brush with rune-like ink trails -->
    <g filter="url(#softGlow)">
      <path d="M24.6,6.0 C25.6,7.6 25.7,9.7 24.8,11.4 C23.8,13.3 22.2,14.5 20.6,15.7"
            fill="none" stroke="#0b0b0b" stroke-opacity="0.55" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M20.7,15.6 C21.9,17.0 21.8,19.4 20.2,20.6 C18.9,21.6 17.6,21.7 16.7,22.8"
            fill="none" stroke="#0b0b0b" stroke-opacity="0.35" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M21.0,15.4 L26.8,8.0" stroke="#0b0b0b" stroke-opacity="0.65" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M26.8,8.0 L27.8,6.8" stroke="#0b0b0b" stroke-opacity="0.65" stroke-width="0.9" stroke-linecap="round"/>
      <path d="M26.2,8.7 C26.7,9.8 26.4,11.2 25.3,12.0 C24.4,12.7 23.7,12.5 22.9,13.2"
            fill="none" stroke="#0b0b0b" stroke-opacity="0.25" stroke-width="0.9" stroke-linecap="round"/>
      <!-- Tiny rune marks -->
      <path d="M22.6,12.8 l1.2,-0.2 m-0.9,0.9 l0.8,0.9 m-1.8,1.1 l1.4,0.1"
            fill="none" stroke="#0b0b0b" stroke-opacity="0.25" stroke-width="0.5" stroke-linecap="round"/>
      <!-- Brush tip -->
      <path d="M19.9,16.2 C19.1,17.4 18.9,18.5 19.4,19.0 C20.0,19.6 21.3,19.1 22.2,17.9"
            fill="none" stroke="#0b0b0b" stroke-opacity="0.55" stroke-width="1.0" stroke-linecap="round"/>
    </g>

    <!-- Main calligraphy "笔魂" (stylized ink strokes) -->
    <g fill="none" stroke="#0b0b0b" stroke-linecap="round" stroke-linejoin="round" filter="url(#inkBleed)">
      <!-- "笔" (left) -->
      <path d="M7.2,9.4 C9.8,8.6 12.1,8.3 13.8,8.5" stroke-width="2.3"/>
      <path d="M8.3,12.2 C10.7,11.4 12.7,11.2 14.3,11.3" stroke-width="1.9"/>
      <path d="M9.0,8.4 C9.0,12.2 9.0,15.3 8.8,18.7" stroke-width="2.0"/>
      <path d="M12.6,9.2 C12.2,12.1 11.7,14.6 10.8,16.9" stroke-width="1.6"/>
      <path d="M8.2,15.9 C10.2,16.4 12.3,16.6 14.7,16.4" stroke-width="1.8"/>
      <path d="M11.8,12.8 C12.7,15.2 13.3,16.9 14.6,18.9" stroke-width="1.4"/>
      <path d="M8.0,19.7 C10.2,19.2 12.9,19.0 15.2,19.4" stroke-width="1.7"/>
      <path d="M10.6,20.2 C10.7,22.4 10.5,24.3 9.7,26.0" stroke-width="1.9"/>
      <path d="M11.8,20.2 C12.9,22.0 13.8,23.8 14.7,25.8" stroke-width="1.4"/>

      <!-- "魂" (right) -->
      <path d="M17.2,9.1 C19.3,9.0 21.5,9.1 23.8,8.8" stroke-width="2.1"/>
      <path d="M18.3,11.2 C19.5,13.2 20.7,15.1 22.4,16.8" stroke-width="1.6"/>
      <path d="M21.6,10.4 C20.7,13.4 19.6,15.6 17.7,17.8" stroke-width="1.6"/>
      <path d="M16.8,15.9 C19.4,15.9 22.0,15.8 24.8,15.5" stroke-width="1.8"/>
      <path d="M18.1,18.2 C18.3,20.3 18.2,22.4 17.7,24.7" stroke-width="1.9"/>
      <path d="M20.7,18.0 C20.9,20.0 20.9,22.0 20.6,24.6" stroke-width="2.2"/>
      <path d="M23.6,17.6 C24.4,20.2 24.8,22.4 24.6,25.2" stroke-width="1.7"/>
      <path d="M17.1,22.1 C19.5,21.9 22.3,22.0 25.0,22.4" stroke-width="1.7"/>
      <path d="M16.6,25.6 C19.2,25.0 22.4,24.9 25.6,25.4" stroke-width="1.8"/>
      <!-- finishing flourish -->
      <path d="M23.9,25.3 C22.6,26.7 20.8,27.5 18.6,27.7" stroke-width="1.4"/>
    </g>

    <!-- A few splatters -->
    <g fill="#0b0b0b" opacity="0.22">
      <circle cx="12.9" cy="6.9" r="0.55"/>
      <circle cx="6.7" cy="17.9" r="0.6"/>
      <circle cx="25.2" cy="19.2" r="0.5"/>
      <circle cx="21.9" cy="28.0" r="0.55"/>
    </g>
  </g>
</svg>`,

  // === Bosses ===
  'exam': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="pg_exam" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f5e8c8"/>
      <stop offset="55%" stop-color="#ecdbb5"/>
      <stop offset="100%" stop-color="#d4bf8a"/>
    </radialGradient>
    <filter id="be" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="0.3"/>
    </filter>
  </defs>
  <g>
    <circle cx="16" cy="16" r="15" fill="url(#pg_exam)"/>
    <circle cx="16" cy="16" r="14.5" fill="none" stroke="#b89d70" stroke-width="0.6" opacity="0.5"/>
    <rect x="8" y="5" width="16" height="22" rx="2" fill="none" stroke="#000" stroke-width="0.6" opacity="0.3"/>
    <rect x="9" y="6" width="14" height="20" rx="1" fill="none" stroke="#000" stroke-width="0.4" opacity="0.2"/>
    <g filter="url(#be)" stroke="#000" stroke-linecap="round" fill="none" opacity="0.7">
      <path d="M12,10 Q14,9 16,10 Q18,11 20,10" stroke-width="1.0"/>
      <path d="M12,13 Q15,12 18,13 Q20,14 22,13" stroke-width="0.7"/>
      <path d="M11,16 Q14,15 17,16 Q19,17 21,16" stroke-width="0.7"/>
      <path d="M13,19 Q15,18 17,19" stroke-width="0.5"/>
    </g>
    <circle cx="24" cy="24" r="3" fill="none" stroke="#cc3333" stroke-width="0.5" opacity="0.6"/>
    <text x="22" y="25.5" font-size="3" fill="#cc3333" opacity="0.6" font-family="serif">试</text>
  </g>
</svg>`,

  'master': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="pg_master" cx="40%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f0e0c0"/>
      <stop offset="50%" stop-color="#e8d4a8"/>
      <stop offset="100%" stop-color="#d0b878"/>
    </radialGradient>
    <filter id="bm">
      <feGaussianBlur stdDeviation="0.35"/>
    </filter>
  </defs>
  <g>
    <circle cx="16" cy="16" r="15" fill="url(#pg_master)"/>
    <circle cx="16" cy="16" r="14.5" fill="none" stroke="#a08050" stroke-width="0.6" opacity="0.5"/>
    <g filter="url(#bm)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.75">
      <path d="M6,26 L12,12 L16,18 L20,8 L26,24 L28,26" stroke-width="1.3"/>
      <path d="M10,22 L14,14 L18,20 L22,12" stroke-width="0.7" opacity="0.5"/>
    </g>
    <g filter="url(#bm)" fill="#000" opacity="0.12">
      <path d="M8,18 Q12,16 16,18 Q20,20 24,18 Q26,19 28,17 L28,20 Q24,22 20,20 Q16,18 12,20 Q8,22 6,20 Z"/>
    </g>
    <text x="3" y="9" font-size="2.5" fill="#000" opacity="0.3" font-family="serif">宗</text>
  </g>
</svg>`,

  'saint': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <radialGradient id="pg_saint" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#fff5e0"/>
      <stop offset="50%" stop-color="#f5e4c0"/>
      <stop offset="100%" stop-color="#e0c890"/>
    </radialGradient>
    <filter id="bs">
      <feGaussianBlur stdDeviation="0.3"/>
    </filter>
  </defs>
  <g>
    <circle cx="16" cy="16" r="15" fill="url(#pg_saint)"/>
    <circle cx="16" cy="16" r="14.5" fill="none" stroke="#c0a060" stroke-width="0.6" opacity="0.5"/>
    <g filter="url(#bs)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" opacity="0.6">
      <path d="M16,4 L16,7" stroke-width="1.0"/>
      <path d="M16,25 L16,28" stroke-width="1.0"/>
      <path d="M4,16 L7,16" stroke-width="1.0"/>
      <path d="M25,16 L28,16" stroke-width="1.0"/>
      <path d="M8,8 L10,10" stroke-width="0.8"/>
      <path d="M22,22 L24,24" stroke-width="0.8"/>
      <path d="M22,8 L24,10" stroke-width="0.8"/>
      <path d="M8,22 L10,24" stroke-width="0.8"/>
    </g>
    <circle cx="16" cy="16" r="6" fill="none" stroke="#000" stroke-width="0.8" opacity="0.4"/>
    <circle cx="16" cy="16" r="3" fill="#000" opacity="0.15"/>
    <text x="11" y="19" font-size="5" fill="#000" opacity="0.5" font-family="serif" font-weight="bold">圣</text>
  </g>
</svg>`,
};

// Export for use in game
if (typeof module !== "undefined" && module.exports) {
  module.exports = ENEMY_SVGS;
}
