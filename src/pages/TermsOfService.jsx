import React from "react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-4">Effective Date: June 27, 2026 · Last Updated: June 27, 2026</p>
        <p className="text-red-400 font-semibold text-sm mb-10">
          IMPORTANT: These Terms contain a binding arbitration clause and class action waiver (Section 10) that affect your legal rights.
        </p>

        <Section title="1. Acceptance of Terms">
          These Terms of Service ("Terms") are a legally binding agreement between you and Ranvision LLC, a Wyoming limited liability company. BY ACCESSING THE SITE OR USING OUR SERVICES, YOU AGREE TO THESE TERMS AND OUR PRIVACY POLICY. If you do not agree, do not use the Site or Services. If accessing on behalf of a business, you represent you have authority to bind that entity.
        </Section>

        <Section title="2. Changes to Terms">
          Ranvision may modify these Terms at any time. Changes are effective upon posting. Continued use constitutes acceptance. Check this page periodically.
        </Section>

        <Section title="3. Services">
          Ranvision provides independent freight dispatching: load sourcing, broker communication, check calls, tracking, carrier onboarding assistance, and BPO services. Ranvision is NOT a federally licensed freight broker. All loads are booked under the carrier's own MC authority. Ranvision makes no guarantee of load volume, rates, or third-party conduct.
        </Section>

        <Section title="4. Eligibility">
          You must be 18+, legally capable of entering contracts, hold valid USDOT/MC authority and required insurance (if a carrier), and provide accurate information. You are responsible for all activity under your account.
        </Section>

        <Section title="5. Fees and Payment">
          Dispatch fees are a percentage of gross load revenue per the executed Dispatch Service Agreement. Fees are due as specified in that agreement. Non-payment may result in immediate suspension. All fees are non-refundable except as stated in the DSA or required by law.
        </Section>

        <Section title="6. Carrier Obligations">
          You represent and warrant: valid active USDOT/MC authority in good standing; all required insurance maintained; all information provided is accurate; compliance with all applicable laws and FMCSA regulations; prompt notification of any change in authority or insurance status. Breach may result in immediate termination.
        </Section>

        <Section title="7. Prohibited Conduct">
          You may not: use the Site for unlawful purposes; misrepresent your identity or authority; scrape or harvest Site data; introduce malware; reverse engineer the Site; solicit Ranvision employees or clients for competitive purposes; circumvent dispatch fees including by booking loads discovered through Ranvision through another dispatcher.
        </Section>

        <Section title="8. Intellectual Property & Trade Secrets">
          All Site content is the exclusive property of Ranvision LLC. You receive a limited, non-exclusive, revocable license to use the Site for its intended purpose only. Ranvision's dispatching processes, carrier relationships, load sourcing methods, and operational procedures are trade secrets protected under the Wyoming Uniform Trade Secrets Act and, for California users, the California UTSA.
        </Section>

        <Section title="9. Disclaimer of Warranties">
          THE SITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. RANVISION DOES NOT WARRANT UNINTERRUPTED SERVICE, ANY SPECIFIC LOAD VOLUME OR REVENUE, OR THAT ANY INFORMATION IS ACCURATE OR COMPLETE.
        </Section>

        <Section title="10. Binding Arbitration & Class Action Waiver">
          ANY DISPUTE ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL BE RESOLVED BY MANDATORY BINDING ARBITRATION under AAA Commercial Rules before a single arbitrator in Cheyenne, Wyoming. YOU WAIVE YOUR RIGHT TO A JURY TRIAL AND TO PARTICIPATE IN CLASS OR REPRESENTATIVE ACTIONS. Any cause of action must be filed within ONE (1) YEAR of accrual or is permanently barred. Ranvision may seek emergency injunctive relief in court to protect its intellectual property or trade secrets without first arbitrating.
        </Section>

        <Section title="11. Limitation of Liability">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, RANVISION LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES. RANVISION'S TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF: (A) DISPATCH FEES PAID IN THE 3 MONTHS BEFORE THE CLAIM; OR (B) $100.
        </Section>

        <Section title="12. Indemnification">
          You agree to defend, indemnify, and hold harmless Ranvision LLC and its members, officers, and agents from all claims, damages, costs, and attorneys' fees arising from: your use of the Services; your violation of these Terms or any law; any cargo claim, accident, or incident from your trucking operations; or any misrepresentation you make.
        </Section>

        <Section title="13. Termination">
          Ranvision may suspend or terminate your access at any time, with or without cause, without liability. All fees become immediately due upon termination. Sections 8–12 and 14–15 survive termination.
        </Section>

        <Section title="14. Governing Law">
          These Terms are governed by Wyoming law. Non-arbitrable disputes are subject to the exclusive jurisdiction of courts in Cheyenne, Wyoming.
        </Section>

        <Section title="15. Miscellaneous">
          These Terms are the entire agreement between you and Ranvision. If any provision is unenforceable, the rest remains in effect. Ranvision's failure to enforce any right is not a waiver. You may not assign these Terms without Ranvision's written consent. Ranvision may assign freely.
        </Section>

        <Section title="16. Contact">
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
