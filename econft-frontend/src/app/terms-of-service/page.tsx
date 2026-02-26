
import React from 'react';
import Link from 'next/link';

const TermsOfService = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 text-gray-100">
    <Link href="/" className="inline-block mb-6 px-4 py-2 bg-green-800 text-green-200 rounded hover:bg-green-700 transition-colors">
      &larr; Back to Home
    </Link>
    <h1 className="text-3xl font-bold mb-6 text-green-300">Terms of Service</h1>
    <p className="mb-4">Welcome to econfT! By accessing or using our platform, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-green-200">1. Acceptance of Terms</h2>
    <p className="mb-4">By using econfT, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-green-200">2. Use of the Platform</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>You must be at least 18 years old or have legal parental or guardian consent to use this platform.</li>
      <li>You agree not to use the platform for any unlawful or prohibited activities.</li>
      <li>All digital assets (EcoNFTs) are subject to blockchain technology and may be subject to risks including loss of access, volatility, and regulatory changes.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-green-200">3. Intellectual Property</h2>
    <p className="mb-4">All content, trademarks, and data on this platform, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of econfT or its licensors. You may not reproduce, distribute, or create derivative works without explicit permission.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-green-200">4. User Conduct</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Do not attempt to gain unauthorized access to any part of the platform or its systems.</li>
      <li>Do not use the platform to harass, abuse, or harm others.</li>
      <li>Do not upload or distribute malicious software or content.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-green-200">5. Limitation of Liability</h2>
    <p className="mb-4">econfT is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the platform or any digital assets. All transactions are at your own risk.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-green-200">6. Changes to Terms</h2>
    <p className="mb-4">We reserve the right to update or modify these Terms of Service at any time. Continued use of the platform after changes constitutes acceptance of the new terms.</p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-green-200">7. Contact</h2>
    <p className="mb-4">If you have any questions about these Terms of Service, please contact us via the links provided in the footer.</p>

    <p className="mt-8 text-sm text-gray-400">&copy; 2025 econfT. All rights reserved.</p>
  </div>
);

export default TermsOfService;
