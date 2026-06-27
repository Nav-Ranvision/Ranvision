import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Effective Date: June 27, 2026 · Last Updated: June 27, 2026</p>

        <Section title="1. Introduction">
          Ranvision LLC ("Ranvision," "we," "us," or "our") is a Wyoming limited liability company providing independent freight dispatching and business process outsourcing services. We operate ranvision.com (the "Site") and all associated digital properties. This Privacy Policy explains what information we collect, how we use it, how we protect it, and your rights. By using the Site or our services, you agree to this Policy. We reserve the right to update this Policy at any time; continued use after posting constitutes acceptance.
        </Section>

        <Section title="2. Information We Collect">
          <b>Directly from you:</b> Full name, business name, email, phone, USDOT/MC number, equipment type, truck count, preferred lanes, payment information, and any other information you submit.<br /><br />
          <b>Automatically:</b> IP address, browser type, pages visited, time on page, referring URL, and device identifiers.<br /><br />
          <b>From third parties:</b> Publicly available FMCSA carrier records, load boards, business partners, and referral sources.
        </Section>

        <Section title="3. How We Use Your Information">
          To provide and improve our services; communicate regarding your account and loads; process payments; verify carrier authority and insurance; send marketing communications (opt out anytime); enforce our contracts; detect and prevent fraud; and comply with applicable law.
        </Section>

        <Section title="4. Disclosure of Your Information">
          We share information with trusted service providers (Supabase, Netlify, Resend, Google Workspace, Mercury Bank, Wise, DAT, Truckstop) who are contractually required to protect your data. We may disclose information in connection with a business transfer, or as required by law. We do not sell your personal information.
        </Section>

        <Section title="5. Data Retention">
          We retain information as long as necessary for business operations, legal compliance, dispute resolution, and contract enforcement. When no longer needed, data is deleted or anonymized.
        </Section>

        <Section title="6. Security">
          We implement commercially reasonable technical and administrative safeguards. However, no system is 100% secure. RANVISION LLC SHALL NOT BE LIABLE FOR UNAUTHORIZED ACCESS RESULTING FROM CIRCUMSTANCES BEYOND OUR REASONABLE CONTROL.
        </Section>

        <Section title="7. Third-Party Websites">
          The Site may link to third-party platforms. Ranvision is not responsible for their privacy practices. Review their policies independently.
        </Section>

        <Section title="8. Children's Privacy">
          The Site is not directed to individuals under 18. We do not knowingly collect data from minors.
        </Section>

        <Section title="9. Your Rights">
          You may request access, correction, or deletion of your information by contacting nav@ranvision.com. We respond within 30 days and reserve the right to verify identity before processing requests.
        </Section>

        <Section title="10. Governing Law">
          This Policy is governed by the laws of Wyoming. Disputes are subject to binding arbitration in Cheyenne, Wyoming per our Terms of Service.
        </Section>

        <Section title="11. Disclaimer">
          THE SITE AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. RANVISION LLC'S TOTAL LIABILITY UNDER THIS POLICY SHALL NOT EXCEED $100.
        </Section>

        <Section title="12. Contact">
          <span>Ranvision LLC · 30 N Gould St Ste N, Sheridan, WY 82801</span><br />
          <a href="mailto:nav@ranvision.com" className="text-blue-400 hover:underline">nav@ranvision.com</a> · ranvision.com
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-300 leading-relaxed text-sm">{children}</p>
    </div>
  );
}
