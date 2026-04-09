export default function Support() {
  return (
    <main
      style={{ backgroundColor: '#0B0B12', minHeight: '100vh', color: '#F0F0F5' }}
      className="px-6 py-12"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#F0F0F5' }}>Support</h1>
        <p className="mb-8" style={{ color: '#8888A0' }}>
          We&apos;re here to help. If you have a question, issue, or feedback about Momentum, reach out and we&apos;ll get back to you as soon as possible.
        </p>

        <h2 className="text-xl font-semibold mb-3" style={{ color: '#FF6B35' }}>Contact Us</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          Email us at{' '}
          <a href="mailto:support@getunstuck.pro" style={{ color: '#7C5CFC' }} className="underline">
            support@getunstuck.pro
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Common Questions</h2>

        <h3 className="font-semibold mb-1" style={{ color: '#F0F0F5' }}>How do I restore my purchase?</h3>
        <p className="mb-6" style={{ color: '#8888A0', lineHeight: '1.7' }}>
          Open the app, go to Settings, and tap &quot;Restore Purchases.&quot; Make sure you&apos;re signed in with the same Apple ID used for the original purchase.
        </p>

        <h3 className="font-semibold mb-1" style={{ color: '#F0F0F5' }}>How do I turn off notifications?</h3>
        <p className="mb-6" style={{ color: '#8888A0', lineHeight: '1.7' }}>
          Go to your iPhone Settings → Notifications → Momentum and adjust your preferences there.
        </p>

        <h3 className="font-semibold mb-1" style={{ color: '#F0F0F5' }}>Is my data private?</h3>
        <p className="mb-6" style={{ color: '#8888A0', lineHeight: '1.7' }}>
          Yes. Your data is stored locally on your device. We do not sell or share your personal information.
          See our{' '}
          <a href="/privacy" style={{ color: '#7C5CFC' }} className="underline">
            Privacy Policy
          </a>{' '}
          for full details.
        </p>
      </div>
    </main>
  );
}
