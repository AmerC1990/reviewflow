import Head from "next/head";

export default function Privacy() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      <Head>
        <title>Privacy Policy — ReviewFlow</title>
        <meta name="description" content="ReviewFlow Privacy Policy" />
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

        <h1 style={{ fontSize: "26px", color: "#000", marginBottom: "8px" }}>PRIVACY POLICY</h1>
        <p style={{ color: "#595959", marginBottom: "32px" }}><strong>Last updated July 27, 2026</strong></p>

        <p style={{ marginBottom: "16px" }}>This Privacy Notice for <strong>Amer Cosovic</strong> (doing business as <strong>ReviewFlow</strong>) describes how and why we might access, collect, store, use, and/or share your personal information when you use our services, including when you visit our website at <a href="https://www.reviewflowapp.com" target="_blank" style={{ color: "#3030F1" }}>https://www.reviewflowapp.com</a> or use ReviewFlow.</p>

        <p><strong>Questions or concerns?</strong> Contact us at <a href="mailto:support@reviewflowapp.com" style={{ color: "#3030F1" }}>support@reviewflowapp.com</a>.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <p style={{ marginBottom: "12px" }}>We collect personal information you provide directly: names, email addresses, usernames, passwords, billing addresses, and payment information. Payment data is handled by <a href="https://stripe.com/privacy" target="_blank" style={{ color: "#3030F1" }}>Stripe</a>. We also collect information when you connect your Google Business Profile via Google OAuth.</p>

        <h3 style={{ fontSize: "17px", color: "#000", marginTop: "20px", marginBottom: "10px" }}>Google API</h3>
        <p>Our use of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" style={{ color: "#3030F1" }}>Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank" style={{ color: "#3030F1" }}>Limited Use requirements</a>.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p>We process your information to provide and improve our services, manage your account, communicate with you, process payments, respond to inquiries, and comply with legal obligations.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p>We share information with: <strong>OpenAI</strong> (AI reply generation), <strong>Google</strong> (Business Profile connection), <strong>Stripe</strong> (payment processing), <strong>Supabase</strong> (database), and <strong>Vercel</strong> (hosting). We do not sell your personal information.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>4. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
        <p>Yes. We use OpenAI to generate AI-powered review replies. Your review text and business information are sent to OpenAI to generate responses. We do not use this data for training AI models.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p>We allow you to connect your Google Business Profile via OAuth. We receive and store access tokens necessary to fetch your reviews and post replies on your behalf. We only use this access for the purposes described in this policy.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p>We keep your information for as long as you have an account with us. When you delete your account, we delete your data from our active databases.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p>We implement appropriate technical and organizational security measures to protect your information. However, no electronic transmission over the Internet can be guaranteed 100% secure.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p>No. We do not knowingly collect data from children under 18. If you believe we have collected data from a minor, contact us at <a href="mailto:support@reviewflowapp.com" style={{ color: "#3030F1" }}>support@reviewflowapp.com</a>.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>You may review, change, or delete your account at any time by visiting <a href="https://app.reviewflowapp.com/settings" style={{ color: "#3030F1" }}>https://app.reviewflowapp.com/settings</a> or by contacting us at <a href="mailto:support@reviewflowapp.com" style={{ color: "#3030F1" }}>support@reviewflowapp.com</a>.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p>If you are a resident of California or other US states with privacy laws, you may have additional rights including the right to know, access, correct, or delete your personal information. To exercise these rights, visit <a href="https://app.reviewflowapp.com/settings" style={{ color: "#3030F1" }}>https://app.reviewflowapp.com/settings</a> or email <a href="mailto:support@reviewflowapp.com" style={{ color: "#3030F1" }}>support@reviewflowapp.com</a>.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p>Yes. We may update this Privacy Notice from time to time. The updated version will be indicated by an updated date at the top of this notice.</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>Email: <a href="mailto:support@reviewflowapp.com" style={{ color: "#3030F1" }}>support@reviewflowapp.com</a><br /><br />
        <strong>Amer Cosovic (ReviewFlow)</strong><br />
        Greensboro, NC, United States</p>

        <h2 style={{ fontSize: "19px", color: "#000", marginTop: "32px", marginBottom: "12px" }}>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p>Visit <a href="https://app.reviewflowapp.com/settings" style={{ color: "#3030F1" }}>https://app.reviewflowapp.com/settings</a> to review, update, or delete your data.</p>

      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #e2e8f0", padding: "24px 20px", textAlign: "center", marginTop: "40px" }}>
        <p style={{ fontSize: "13px", color: "#94a3b8" }}>
          © 2026 ReviewFlow ·{" "}
          <a href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</a>
          {" · "}
          <a href="/terms" style={{ color: "#94a3b8", textDecoration: "none" }}>Terms of Service</a>
          {" · "}
          <a href="mailto:support@reviewflowapp.com" style={{ color: "#94a3b8", textDecoration: "none" }}>support@reviewflowapp.com</a>
        </p>
      </footer>
    </div>
  );
}