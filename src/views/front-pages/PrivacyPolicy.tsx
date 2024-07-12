// pages/privacy-policy.tsx
import React from 'react'

import Head from 'next/head'

const Policy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - NELOVOICE</title>
      </Head>
      <main className="bg-gray-100 text-gray-900 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: May 21, 2024</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p>
              At HBS Management, the owner of NELOVOICE, a Moroccan company based in Marrakech, we are dedicated to protecting your privacy. This Privacy Policy outlines how we collect, use, and share personal information from visitors to our website and users of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside">
              <li><strong>Personal Information:</strong> We collect your name, email address, phone number, and any other information you provide when interacting with NELOVOICE.</li>
              <li><strong>Financial Information:</strong> Our payment processor handles your payment card information; we do not store this information.</li>
              <li><strong>Communication Information:</strong> Details from your interactions with our support team or participation in surveys.</li>
              <li><strong>Usage Information:</strong> Data on how you use our services, including cookies and analytics.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside">
              <li><strong>Service Delivery:</strong> To provide and manage our AI phone agent services.</li>
              <li><strong>Improvement:</strong> To enhance our services and improve the user experience.</li>
              <li><strong>Communication:</strong> To send updates, newsletters, and respond to your inquiries.</li>
              <li><strong>Security:</strong> To protect against fraud and ensure the security of our services.</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Sharing Your Information</h2>
            <ul className="list-disc list-inside">
              <li><strong>Service Providers:</strong> We share information with companies that assist in providing our services, under confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
              <li><strong>With Your Consent:</strong> When you agree to share your information with third parties.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your experience on our site. You can control cookie settings through your browser. We also use analytics tools to understand how you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement measures to protect your data, but no system is completely secure. Please use caution when sharing information online.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">International Users</h2>
            <p>
              By using our services, you consent to the transfer of your information to Morocco and other locations where we operate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last Updated" date will reflect the latest changes. Continued use of our services indicates acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions or comments, please contact us at <a href="mailto:contact@nelovoice.com" className="text-blue-500">contact@nelovoice.com</a>.
            </p>
            <p>
              For further details, visit our website at <a href="http://nelovoice.com" className="text-blue-500">nelovoice.com</a> or contact our support team. Your privacy is important to us, and we are committed to safeguarding your information.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Policy;
