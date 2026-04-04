export default function Home() {
  return (
    <main
      style={{ backgroundColor: '#0B0B12', minHeight: '100vh' }}
      className="flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Logo mark */}
      <div className="mb-8 flex items-center justify-center w-20 h-20 rounded-3xl"
        style={{ background: 'linear-gradient(135deg, #FF6B35, #7C5CFC)' }}>
        <span style={{ fontSize: 36 }}>✦</span>
      </div>

      {/* App name */}
      <h1
        className="text-5xl font-bold tracking-tight mb-3"
        style={{ color: '#F0F0F5', fontFamily: 'system-ui, sans-serif' }}
      >
        Momentum
      </h1>

      {/* Tagline */}
      <p
        className="text-xl mb-2"
        style={{ color: '#8888A0', fontFamily: 'system-ui, sans-serif' }}
      >
        Get unstuck. Take the next step.
      </p>

      {/* Description */}
      <p
        className="max-w-sm text-base mb-12 leading-relaxed"
        style={{ color: '#8888A0', fontFamily: 'system-ui, sans-serif' }}
      >
        Break out of overthinking with small, immediate actions designed to build momentum in seconds.
      </p>

      {/* App Store button - coming soon */}
      <div
        className="flex items-center gap-3 px-8 py-4 rounded-2xl opacity-50 cursor-not-allowed"
        style={{
          backgroundColor: '#16162A',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#F0F0F5">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div style={{ textAlign: 'left' }}>
          <div style={{ color: '#8888A0', fontSize: 11, fontFamily: 'system-ui, sans-serif' }}>Coming Soon to the</div>
          <div style={{ color: '#F0F0F5', fontSize: 17, fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}>App Store</div>
        </div>
      </div>
    </main>
  );
}
