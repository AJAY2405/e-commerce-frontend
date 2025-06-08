import React from 'react';
import Layout from '../components/Layout/Layout';

function Policy() {
  return (
    <Layout title={"Privacy Policy - CrystalClear"}>
      <div className="container mt-4 mb-5">
        <br />
        <br />
        <p className="text-justify">
            <h1 className="text-center mb-4">Privacy Policy</h1>
          At <strong>CrystalClear</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
        </p>

        <h4 className="mt-4">1. Information We Collect</h4>
        <p>
          We may collect personal information such as your name, email address, phone number, shipping address, and payment details when you register on our site, place an order, subscribe to our newsletter, or contact us.
        </p>

        <h4 className="mt-4">2. How We Use Your Information</h4>
        <p>
          We use your information to:
          <ul>
            <li>Process transactions and deliver orders</li>
            <li>Improve our website and customer service</li>
            <li>Send periodic emails and promotional offers</li>
            <li>Respond to your queries and support needs</li>
          </ul>
        </p>

        <h4 className="mt-4">3. Protecting Your Information</h4>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. Your data is protected through SSL encryption and secure payment gateways.
        </p>

        <h4 className="mt-4">4. Sharing of Information</h4>
        <p>
          We do not sell, trade, or rent your personal information to others. We may share data with trusted third-party partners to help us operate our website and conduct business, as long as those parties agree to keep this information confidential.
        </p>

        <h4 className="mt-4">5. Cookies</h4>
        <p>
          Our website uses cookies to enhance your browsing experience. Cookies help us understand site usage and improve our offerings. You can choose to disable cookies through your browser settings.
        </p>

        <h4 className="mt-4">6. Changes to this Policy</h4>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>

        <h4 className="mt-4">7. Contact Us</h4>
        <p>
          If you have any questions about our Privacy Policy, please contact us at: <br />
          <strong>Email:</strong> crystalclear2411@gmail.com <br />
          <strong>Phone:</strong> +91 8528672824
        </p>
      </div>
    </Layout>
  );
}

export default Policy;
