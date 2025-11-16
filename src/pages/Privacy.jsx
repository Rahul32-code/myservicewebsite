import React from 'react';

const Privacy = () => {
  return (
    <div className="privacy-policy max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="mb-2">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Personal information (name, email address, etc.) when you register</li>
            <li>Content you submit or post on our platform</li>
            <li>Communications between you and our team</li>
            <li>Technical data including IP address, browser type, and device information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="mb-2">We use the collected information for:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Providing, maintaining, and improving our services</li>
            <li>Communicating with you about updates and support</li>
            <li>Personalizing your experience</li>
            <li>Analyzing usage patterns and trends</li>
            <li>Ensuring security and preventing fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Third parties in connection with a business transfer</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Remember your preferences and settings</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Provide personalized content and ads</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate or incomplete information</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict processing of your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Third-Party Links</h2>
          <p>Our service may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Children's Privacy</h2>
          <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="mt-2 p-4 bg-gray-100 rounded">
            <p>Email: privacy@yourcompany.com</p>
            <p>Address: [Your Company Address]</p>
            <p>Phone: [Your Contact Number]</p>
          </div>
        </section>

        <div className="mt-8 p-4 bg-blue-50 rounded">
          <p className="text-sm text-gray-600">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;