import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who's Up? Rivalries — Support",
  description: "Help with Who's Up? Rivalries: Pro, restoring purchases, widgets and exporting results.",
};

export default function WhosUpSupport() {
  return (
    <main
      style={{ backgroundColor: '#0B0B12', minHeight: '100vh', color: '#F0F0F5' }}
      className="px-6 py-12"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#F0F0F5' }}>Who&apos;s Up? Rivalries — Support</h1>
        <p className="mb-8" style={{ color: '#8888A0' }}>
          Got a question, a bug or an idea for Who&apos;s Up? Reach out and we&apos;ll get back to you as soon as possible.
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
          Open the app, tap the gear on the Rivalries screen to open Settings, and tap &quot;Restore Purchases.&quot;
          Make sure you&apos;re signed in with the same Apple Account you used to buy Pro. Pro is shared with
          your Family Sharing group, so family members can restore it too.
        </p>

        <h3 className="font-semibold mb-1" style={{ color: '#F0F0F5' }}>What happens when my free trial ends?</h3>
        <p className="mb-6" style={{ color: '#8888A0', lineHeight: '1.7' }}>
          Nothing is charged. The app goes back to Free: your 2 oldest rivalries stay fully usable, and any others
          become view only. Nothing is deleted, and buying Pro (a one-time purchase, no subscription) opens them all
          up again.
        </p>

        <h3 className="font-semibold mb-1" style={{ color: '#F0F0F5' }}>How do I add a widget?</h3>
        <p className="mb-6" style={{ color: '#8888A0', lineHeight: '1.7' }}>
          Touch and hold an empty spot on your Home Screen, tap Edit, then Add Widget, and choose Who&apos;s Up.
          To pick which rivalry it shows, touch and hold the widget and tap Edit Widget. Lock Screen widgets are
          added the same way from the Lock Screen&apos;s Customize screen.
        </p>

        <h3 className="font-semibold mb-1" style={{ color: '#F0F0F5' }}>How do I export my results?</h3>
        <p className="mb-6" style={{ color: '#8888A0', lineHeight: '1.7' }}>
          With Pro or during the free trial, open Settings and tap &quot;Export Results (CSV).&quot; You can save the
          file or send it to Numbers, Excel or Google Sheets.
        </p>

        <h3 className="font-semibold mb-1" style={{ color: '#F0F0F5' }}>Is my data private?</h3>
        <p className="mb-6" style={{ color: '#8888A0', lineHeight: '1.7' }}>
          Yes. Who&apos;s Up collects no data at all — everything stays on your iPhone. See our{' '}
          <a href="/whosup/privacy" style={{ color: '#7C5CFC' }} className="underline">
            Privacy Policy
          </a>{' '}
          for full details.
        </p>
      </div>
    </main>
  );
}
