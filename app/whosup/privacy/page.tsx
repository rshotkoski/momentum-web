import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who's Up? Rivalries — Privacy Policy",
  description: "Who's Up? Rivalries collects no data. Everything stays on your iPhone.",
};

export default function WhosUpPrivacyPolicy() {
  return (
    <main
      style={{ backgroundColor: '#0B0B12', minHeight: '100vh', color: '#F0F0F5' }}
      className="px-6 py-12"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#F0F0F5' }}>Who&apos;s Up? Rivalries — Privacy Policy</h1>
        <p className="text-sm mb-8" style={{ color: '#8888A0' }}>Effective date: October 3, 2026</p>

        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          Who&apos;s Up? Rivalries (&quot;the app&quot;) is a scorekeeper for friendly rivalries. The short version:
          we don&apos;t collect any data. Everything you enter stays on your iPhone.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Information We Collect</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          None. The app has no accounts, no sign-in, no analytics, no advertising and no tracking. It does not
          send your rivalries, names or results to us or to anyone else.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Data Stored on Your Device</h2>
        <p className="mb-4" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          The rivalries, people, activities and results you enter are stored only on your iPhone, in a space the
          app shares with its own home screen and lock screen widgets. Deleting the app deletes this data.
        </p>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          Your data only leaves your phone when you choose to send it — for example, sharing a score card image or
          exporting your results as a CSV file. Where it goes then is up to you.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Purchases</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          The free trial and Who&apos;s Up Pro are handled entirely by Apple through the App Store. We never see your
          payment details or Apple Account. The app only asks Apple whether Pro or the trial is active on your
          account. See{" "}
          <a href="https://www.apple.com/legal/privacy/" style={{ color: '#7C5CFC' }} className="underline">
            Apple&apos;s Privacy Policy
          </a>{" "}
          for how Apple handles purchases.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Children&apos;s Privacy</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          The app does not collect information from anyone, including children under 13.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Changes to This Policy</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          If this policy changes, we will update it here and change the effective date above.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Contact Us</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          Questions about this policy? Email{" "}
          <a href="mailto:support@getunstuck.pro" style={{ color: '#7C5CFC' }} className="underline">
            support@getunstuck.pro
          </a>
          .
        </p>
      </div>
    </main>
  );
}
