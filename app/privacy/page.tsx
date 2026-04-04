export default function PrivacyPolicy() {
  return (
    <main
      style={{ backgroundColor: '#0B0B12', minHeight: '100vh', color: '#F0F0F5' }}
      className="px-6 py-12"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#F0F0F5' }}>Privacy Policy</h1>
        <p className="text-sm mb-8" style={{ color: '#8888A0' }}>Effective date: April 3, 2026</p>

        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          Momentum ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, and store information when you use the Momentum mobile application.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Information We Collect</h2>
        <p className="mb-4" style={{ color: '#F0F0F5' }}>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#F0F0F5' }}>
          <li>Completed actions, preferences, and usage patterns within the app</li>
          <li>Notification preferences</li>
          <li>Purchase and subscription information (processed by Apple and RevenueCat)</li>
        </ul>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          We do not collect sensitive personal health information. The app does not require you to create
          an account or provide your name, email address, or other identifying information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#F0F0F5' }}>
          <li>To provide and improve the app experience</li>
          <li>To track your progress (streaks, completed actions)</li>
          <li>To send optional reminders via push notifications</li>
          <li>To process purchases and restore subscriptions</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Data Storage</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          Usage data is stored locally on your device. We do not sell or share your personal data
          with third parties except as necessary to operate the app (e.g., Apple for purchases,
          RevenueCat for subscription management).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Third-Party Services</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          Momentum uses RevenueCat to manage in-app purchases and subscriptions. RevenueCat may
          collect anonymized purchase data. Please review{" "}
          <a href="https://www.revenuecat.com/privacy" style={{ color: '#7C5CFC' }} className="underline">
            RevenueCat's Privacy Policy
          </a>{" "}
          for details.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Children's Privacy</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          Momentum is not directed at children under 13. We do not knowingly collect information
          from children under 13.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Not a Medical Application</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          Momentum is a general wellness and productivity tool. It is not a medical, mental health,
          or therapeutic application and does not provide professional advice. Users experiencing
          significant mental health challenges should seek support from a qualified professional.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Changes to This Policy</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          We may update this Privacy Policy from time to time. We will notify you of any significant
          changes by updating the effective date above.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#FF6B35' }}>Contact Us</h2>
        <p className="mb-6" style={{ color: '#F0F0F5', lineHeight: '1.7' }}>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:support@getunstuck.pro" style={{ color: '#7C5CFC' }} className="underline">
            support@getunstuck.pro
          </a>
          .
        </p>
      </div>
    </main>
  );
}
