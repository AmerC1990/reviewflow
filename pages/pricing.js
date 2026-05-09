import Head from "next/head";

export default function Pricing() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      <Head>
        <title>Pricing — ReviewFlow</title>
        <meta name="description" content="Simple, transparent pricing for ReviewFlow. One plan, everything included. Start free." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #f8fafc; }
        `}</style>
      </Head>

      {/* NAV */}
      <nav style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1100px", margin: "0 auto" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{ width: "28px", height: "28px", background: "#0f172a", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#0f172a", letterSpacing: "-0.02em" }}>ReviewFlow</span>
        </a>
        <a href="https://app.reviewflowapp.com/signup" style={{ background: "#0f172a", color: "#fff", padding: "9px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
          Start free trial
        </a>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: "700px", margin: "0 auto", padding: "60px 20px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Pricing</p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontFamily: "'DM Serif Display', serif", color: "#0f172a", lineHeight: "1.1", letterSpacing: "-0.02em", marginBottom: "16px" }}>
          Simple, transparent pricing.
        </h1>
        <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.7" }}>
          One plan. Everything included. No hidden fees, no per-user charges.
        </p>
      </section>

      {/* PRICING CARD */}
      <section style={{ maxWidth: "480px", margin: "40px auto", padding: "0 20px" }}>
        <div style={{ background: "#0f172a", borderRadius: "24px", padding: "48px 44px", textAlign: "center", boxShadow: "0 25px 60px rgba(15,23,42,0.2)" }}>
          
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#1e293b", border: "1px solid #334155", borderRadius: "100px", padding: "5px 12px", marginBottom: "24px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#94a3b8" }}>30-day free trial included</span>
          </div>

          {/* Plan name */}
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>ReviewFlow</p>

          {/* Price */}
          <div style={{ marginBottom: "32px" }}>
            <span style={{ fontSize: "64px", fontWeight: 700, color: "#f1f5f9", fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.02em" }}>$49</span>
            <span style={{ fontSize: "18px", color: "#64748b", marginLeft: "4px" }}>/month</span>
          </div>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px", textAlign: "left" }}>
            {[
              "AI-generated replies for every review",
              "Handles 1-star, 3-star & 5-star reviews",
              "Custom tone — sounds like your business",
              "Unlimited reply generation",
              "Edit replies before posting",
              "Works for any local business type",
              "Cancel anytime",
            ].map((feature) => (
              <div key={feature} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: "14px", color: "#cbd5e1" }}>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://app.reviewflowapp.com/signup"
            style={{
              display: "block",
              background: "#3b82f6",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
              padding: "16px",
              borderRadius: "10px",
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "background 0.2s ease",
            }}
          >
            Start Free Trial — No Credit Card →
          </a>

          <p style={{ marginTop: "14px", fontSize: "12px", color: "#475569" }}>
            Free for 30 days · Then $49/month · Cancel anytime
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px 80px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 4vw, 28px)", fontFamily: "'DM Serif Display', serif", color: "#0f172a", marginBottom: "36px", letterSpacing: "-0.02em" }}>
          Common questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            {
              q: "Do I need a credit card to start?",
              a: "No. Your 30-day free trial starts the moment you sign up. No credit card required until you decide to continue.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes — cancel anytime from your account settings. No contracts, no cancellation fees.",
            },
            {
              q: "What types of businesses can use ReviewFlow?",
              a: "Any local business with Google reviews — restaurants, salons, dentists, gyms, contractors, med spas, and more.",
            },
            {
              q: "Do the AI replies sound robotic?",
              a: "No. You set your business name, type, and tone during setup. Every reply is written to sound like you, not a generic template.",
            },
            {
              q: "How does it work?",
              a: "Sign up, tell us about your business, and start generating replies instantly. Edit them if you want, then copy and paste into Google.",
            },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "20px 24px" }}>
              <p style={{ fontWeight: 700, fontSize: "15px", color: "#0f172a", marginBottom: "8px" }}>{q}</p>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.7" }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #e2e8f0", padding: "24px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", color: "#94a3b8" }}>
          © 2026 ReviewFlow · <a href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</a>
        </p>
      </footer>
    </div>
  );
}