import Head from "next/head";

export default function Terms() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      <Head>
        <title>Terms of Service — ReviewFlow</title>
        <meta name="description" content="ReviewFlow Terms of Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`* { box-sizing: border-box; margin: 0; padding: 0; }`}</style>
      </Head>

      {/* NAV */}
      <nav style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1100px", margin: "0 auto", borderBottom: "1px solid #e2e8f0" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{ width: "28px", height: "28px", background: "#059669", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#0f172a", letterSpacing: "-0.02em" }}>ReviewFlow</span>
        </a>
        <a href="/" style={{ fontSize: "13px", fontWeight: 600, color: "#64748b", textDecoration: "none" }}>← Back to home</a>
      </nav>

      {/* CONTENT */}
      <div style={{ maxWidth: "900px", margin: "24px auto 0", padding: "40px 40px 80px", background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", fontFamily: "Arial, sans-serif", color: "#595959", fontSize: "14px", lineHeight: "1.7" }}>

        <h1 style={{ fontSize: "26px", color: "#000", marginBottom: "8px" }}>TERMS OF SERVICE</h1>
        <p style={{ color: "#595959", marginBottom: "32px" }}><strong>Last updated July 27, 2026</strong></p>

        <p style={{ marginBottom: "16px" }}>These Terms of Service ("Terms") govern your use of ReviewFlow, operated by Amer Cosovic (doing business as ReviewFlow) ("we," "us," or "our"). By accessing or using ReviewFlow at <a href="https://www.reviewflowapp.com" style={{ color: "#3030F1" }}>https://www.reviewflowapp.com</a> or <a href="https://app.reviewflowapp.com" style={{ color: "#3030F1" }}>https://app.reviewflowapp.com</a>, you agree to these Terms. If you do not agree, do not use our services.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>1. DESCRIPTION OF SERVICE</h2>
        <p>ReviewFlow is an AI-powered SaaS tool that helps local business owners generate and post professional replies to their Google reviews. Users connect their Google Business Profile and use AI to respond to customer reviews directly from the ReviewFlow dashboard. The service is intended for both personal and internal business use.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>2. ELIGIBILITY</h2>
        <p>You must be at least 18 years old to use ReviewFlow. By using our service, you represent that you are at least 18 years of age.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>3. USER ACCOUNTS</h2>
        <p>You must create an account to use ReviewFlow. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You may connect your Google Business Profile account to ReviewFlow via OAuth. You are responsible for ensuring you have the rights and permissions to connect and manage the Google Business Profile you connect to our service.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>4. SUBSCRIPTION AND PAYMENT</h2>
        <p style={{ marginBottom: "12px" }}>ReviewFlow is offered as a monthly subscription at $49/month. We offer a 30-day free trial. At the end of the free trial period, your account will not be automatically charged — your subscription will be suspended until you upgrade to a paid plan.</p>
        <p style={{ marginBottom: "12px" }}>Once you subscribe, your subscription automatically renews monthly. We accept Visa, Mastercard, American Express, and Discover. All payments are in US dollars and are processed securely through Stripe.</p>
        <p><strong>Refunds:</strong> All purchases are non-refundable. You may cancel your subscription at any time by logging into your account settings, which will prevent future charges.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>5. PROHIBITED ACTIVITIES</h2>
        <p>You agree not to misuse ReviewFlow. Prohibited activities include but are not limited to: violating any applicable laws, attempting to gain unauthorized access to our systems, using the service to spam or harass others, or interfering with the proper operation of the service.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>6. AI-GENERATED CONTENT</h2>
        <p>ReviewFlow uses AI (powered by OpenAI) to generate reply suggestions. You are solely responsible for reviewing, editing, and approving any AI-generated content before posting it to your Google Business Profile. We do not guarantee the accuracy, appropriateness, or quality of AI-generated replies.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>7. THIRD-PARTY LINKS AND SERVICES</h2>
        <p>ReviewFlow may contain links to third-party websites. We are not responsible for the content or practices of any third-party sites. Your use of third-party services, including Google and Stripe, is governed by their respective terms of service.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>8. LIMITATION OF LIABILITY</h2>
        <p>To the maximum extent permitted by law, our liability to you for any claims arising from your use of ReviewFlow is limited to the amount you paid us in the 6 months prior to the claim. We are not liable for indirect, incidental, special, or consequential damages.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>9. DISCLAIMER OF WARRANTIES</h2>
        <p>ReviewFlow is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, error-free, or free of viruses or other harmful components.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>10. DISPUTE RESOLUTION</h2>
        <p>Any disputes arising from these Terms or your use of ReviewFlow will first be resolved through informal negotiations for 30 days. If negotiations fail, disputes will be resolved through binding arbitration in Guilford County, North Carolina, United States. If a dispute proceeds in court rather than arbitration, it will be litigated in Guilford County, North Carolina.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>11. GOVERNING LAW</h2>
        <p>These Terms are governed by the laws of the State of North Carolina, United States, without regard to conflict of law principles.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>12. UPDATES TO THESE TERMS</h2>
        <p>We may update these Terms from time to time. We will notify you of significant changes by sending an email to the address associated with your account. Your continued use of ReviewFlow after receiving notice constitutes acceptance of the updated Terms.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>13. PRIVACY POLICY</h2>
        <p>Your use of ReviewFlow is also governed by our <a href="/privacy" style={{ color: "#3030F1" }}>Privacy Policy</a>, which is incorporated into these Terms by reference.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>14. CONTACT US</h2>
        <p>If you have questions about these Terms, contact us at:<br /><br />
        <strong>Amer Cosovic (ReviewFlow)</strong><br />
        Email: <a href="mailto:support@reviewflowapp.com" style={{ color: "#3030F1" }}>support@reviewflowapp.com</a><br />
        Greensboro, NC, United States</p>

      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #e2e8f0", padding: "24px 20px", textAlign: "center", marginTop: "40px" }}>
        <p style={{ fontSize: "13px", color: "#94a3b8" }}>
          © 2026 ReviewFlow ·{" "}
          <a href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</a>
          {" · "}
          <a href="/privacy" style={{ color: "#94a3b8", textDecoration: "none" }}>Privacy Policy</a>
          {" · "}
          <a href="mailto:support@reviewflowapp.com" style={{ color: "#94a3b8", textDecoration: "none" }}>support@reviewflowapp.com</a>
        </p>
      </footer>
    </div>
  );
}