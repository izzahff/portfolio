// Decorative ocean banner: a deep-sea gradient seen through ribbed "fractal glass",
// film grain on top, and layered swells with a foam line along the bottom.
export default function Ocean() {
  return (
    <div className="ocean" aria-hidden="true">
      <div className="ocean-sea" />
      <div className="ocean-glass" />
      <div className="ocean-ribs" />
      <svg className="ocean-wave" viewBox="0 0 1440 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="swellBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1f7fae" stopOpacity="0.55" />
            <stop offset="1" stopColor="#06163f" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="swellMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a9fb0" stopOpacity="0.75" />
            <stop offset="1" stopColor="#041030" />
          </linearGradient>
          <linearGradient id="swellFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0d3f7a" />
            <stop offset="1" stopColor="#020615" />
          </linearGradient>
        </defs>
        <g className="back">
          <path className="swell back" d="M0 120 C 180 70, 360 160, 560 110 S 900 50, 1100 105 S 1340 150, 1440 95 L 1440 300 L 0 300 Z" />
        </g>
        <g className="mid">
          <path className="swell mid" d="M0 175 C 160 135, 330 215, 520 172 S 860 120, 1040 168 S 1320 215, 1440 160 L 1440 300 L 0 300 Z" />
          <path className="foam soft" d="M0 175 C 160 135, 330 215, 520 172 S 860 120, 1040 168 S 1320 215, 1440 160" />
        </g>
        <g className="crest">
          <path className="swell front" d="M0 232 C 140 205, 300 262, 480 230 S 800 190, 980 226 S 1280 268, 1440 222 L 1440 300 L 0 300 Z" />
          <path className="foam" d="M0 232 C 140 205, 300 262, 480 230 S 800 190, 980 226 S 1280 268, 1440 222" />
        </g>
      </svg>
      <svg className="ocean-grain" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
