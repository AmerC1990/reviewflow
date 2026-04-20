import Head from "next/head";

export default function Home() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      <Head>
        <title>ReviewFlow — Never Write a Google Review Response Again</title>
        <meta name="description" content="ReviewFlow uses AI to instantly generate and manage Google review replies for local businesses. Save hours every week. Free during beta." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-dot {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }

          .fade-1 { animation: fadeUp 0.6s ease forwards; }
          .fade-2 { animation: fadeUp 0.6s ease 0.1s forwards; opacity: 0; }
          .fade-3 { animation: fadeUp 0.6s ease 0.2s forwards; opacity: 0; }
          .fade-4 { animation: fadeUp 0.6s ease 0.3s forwards; opacity: 0; }
          .fade-5 { animation: fadeUp 0.6s ease 0.4s forwards; opacity: 0; }

          .card { transition: all 0.2s ease; }
          .card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }

          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }

          .business-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }

          .why-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .dark-panel {
            display: block;
          }

          .try-btn {
            display: block;
            background: #0f172a;
            color: #fff;
            fontSize: 16px;
            font-size: 16px;
            font-weight: 700;
            padding: 16px;
            border-radius: 10px;
            text-align: center;
            text-decoration: none;
            letter-spacing: 0.01em;
            transition: background 0.2s ease;
          }

          .try-btn:hover {
            background: #1e40af;
          }

          .try-btn-blue {
            display: block;
            background: #3b82f6;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            padding: 16px;
            border-radius: 10px;
            text-align: center;
            text-decoration: none;
            letter-spacing: 0.01em;
            transition: background 0.2s ease;
          }

          .try-btn-blue:hover {
            background: #2563eb;
          }

          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr;
              gap: 36px;
            }
            .dark-panel {
              display: none;
            }
            .business-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
            .why-grid {
              grid-template-columns: 1fr;
              gap: 14px;
            }
            .final-cta-inner {
              padding: 36px 24px !important;
            }
          }
        `}</style>
      </Head>

      {/* NAV */}
      <nav style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "28px", height: "28px", background: "#0f172a", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#0f172a", letterSpacing: "-0.02em" }}>ReviewFlow</span>
        </div>
        <a href="https://app.reviewflowapp.com/reviews" className="try-btn" style={{ padding: "9px 16px", fontSize: "13px", borderRadius: "8px" }}>
          Try It Free
        </a>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px 60px" }}>
        <div className="hero-grid">
          {/* Left col */}
          <div>
            <div className="fade-1" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "100px", padding: "5px 12px", marginBottom: "18px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6", display: "inline-block", animation: "pulse-dot 2s infinite" }}></span>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#1d4ed8" }}>Now in beta — free while spots last</span>
            </div>

            <h1 className="fade-2" style={{ fontSize: "clamp(34px, 5vw, 52px)", fontFamily: "'DM Serif Display', serif", color: "#0f172a", lineHeight: "1.1", letterSpacing: "-0.02em", marginBottom: "18px" }}>
              Never write a Google review response again.
            </h1>

            <p className="fade-3" style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "24px" }}>
              ReviewFlow uses AI to instantly generate professional replies to your Google reviews — in your voice, for any rating. Stop losing customers to ignored reviews.
            </p>

            <div className="fade-4" style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              {[
                "Replies generated in seconds, not hours",
                "Handles 1-star reviews without the stress",
                "Sounds like you — not a robot",
              ].map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px", color: "#334155", fontWeight: 500 }}>{point}</span>
                </div>
              ))}
            </div>

            <div className="fade-5" id="get-access">
              <a href="https://app.reviewflowapp.com/reviews" className="try-btn" style={{ maxWidth: "420px" }}>
                Try It Free — No Sign Up Needed →
              </a>
              <p style={{ marginTop: "10px", fontSize: "12px", color: "#94a3b8", textAlign: "center" }}>
                No credit card. No account. Just try it.
              </p>
            </div>
          </div>

          {/* Right col — hidden on mobile */}
          <div className="dark-panel" style={{ background: "#0f172a", borderRadius: "20px", padding: "28px", boxShadow: "0 25px 60px rgba(15,23,42,0.25)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Latest reviews</span>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#4ade80", fontWeight: 600 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse-dot 2s infinite" }}></span>
                Live
              </span>
            </div>

            <div style={{ background: "#1e293b", borderRadius: "12px", padding: "14px", marginBottom: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ color: "#f1f5f9", fontSize: "13px", fontWeight: 600 }}>Sarah M.</span>
                <span style={{ fontSize: "12px" }}>⭐⭐⭐⭐⭐</span>
              </div>
              <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.5", marginBottom: "10px" }}>"Amazing service, my go-to spot. Friendly staff every single time!"</p>
              <div style={{ background: "#0f172a", borderRadius: "8px", padding: "10px", borderLeft: "2px solid #3b82f6" }}>
                <p style={{ color: "#93c5fd", fontSize: "11px", fontWeight: 600, marginBottom: "4px" }}>✦ AI Reply Generated</p>
                <p style={{ color: "#cbd5e1", fontSize: "12px", lineHeight: "1.5" }}>Thank you so much, Sarah! We're thrilled to hear this — our team works hard every day to make sure you feel welcome. See you next time! 🙏</p>
              </div>
            </div>

            <div style={{ background: "#1e293b", borderRadius: "12px", padding: "14px", marginBottom: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ color: "#f1f5f9", fontSize: "13px", fontWeight: 600 }}>James T.</span>
                <span style={{ fontSize: "12px" }}>⭐⭐</span>
              </div>
              <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.5", marginBottom: "10px" }}>"Wait time was way too long. Expected better."</p>
              <div style={{ background: "#0f172a", borderRadius: "8px", padding: "10px", borderLeft: "2px solid #f59e0b" }}>
                <p style={{ color: "#fcd34d", fontSize: "11px", fontWeight: 600, marginBottom: "4px" }}>✦ AI Reply Generated</p>
                <p style={{ color: "#cbd5e1", fontSize: "12px", lineHeight: "1.5" }}>Hi James, we're sorry about your experience — long waits are not what we aim for. We'd love to make it right. Please reach out directly and we'll take care of you.</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "14px" }}>
              {[{ value: "2 sec", label: "Avg reply time" }, { value: "100%", label: "Reviews covered" }].map(({ value, label }) => (
                <div key={label} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
                  <p style={{ color: "#f1f5f9", fontSize: "20px", fontWeight: 700, fontFamily: "'DM Serif Display', serif" }}>{value}</p>
                  <p style={{ color: "#64748b", fontSize: "11px", marginTop: "2px" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ background: "#fff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>Built for local businesses</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 36px)", fontFamily: "'DM Serif Display', serif", color: "#0f172a", marginBottom: "36px", letterSpacing: "-0.02em" }}>
            If you get Google reviews, you need this.
          </h2>
          <div className="business-grid">
            {[
              { emoji: "🍕", label: "Restaurants" },
              { emoji: "💇", label: "Salons & Spas" },
              { emoji: "🦷", label: "Dentists" },
              { emoji: "💪", label: "Gyms & Studios" },
              { emoji: "🔧", label: "Contractors" },
              { emoji: "🏥", label: "Med Spas & Clinics" },
            ].map(({ emoji, label }) => (
              <div key={label} className="card" style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "18px 12px", textAlign: "center" }}>
                <div style={{ fontSize: "26px", marginBottom: "6px" }}>{emoji}</div>
                <p style={{ fontWeight: 600, fontSize: "13px", color: "#0f172a" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>Why it matters</p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 36px)", fontFamily: "'DM Serif Display', serif", color: "#0f172a", marginBottom: "36px", letterSpacing: "-0.02em" }}>
          Ignored reviews cost you customers.
        </h2>
        <div className="why-grid">
          {[
            { icon: "⚡", title: "Instant replies", desc: "ReviewFlow generates a thoughtful, on-brand response in seconds — so no review goes unanswered, even at 2am." },
            { icon: "🛡️", title: "Protect your reputation", desc: "Negative reviews handled calmly and professionally, before they scare off potential customers browsing your profile." },
            { icon: "🎯", title: "Sounds like you", desc: "Set your business name, type, and tone once. Every reply reflects your brand — not a generic AI template." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card" style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "24px" }}>
              <div style={{ fontSize: "26px", marginBottom: "12px" }}>{icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#0f172a", marginBottom: "8px" }}>{title}</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.7" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "0 20px 70px" }}>
        <div className="final-cta-inner" style={{ maxWidth: "560px", margin: "0 auto", background: "#0f172a", borderRadius: "24px", padding: "48px 44px", textAlign: "center", boxShadow: "0 25px 60px rgba(15,23,42,0.2)" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontFamily: "'DM Serif Display', serif", color: "#f1f5f9", marginBottom: "12px", letterSpacing: "-0.02em" }}>
            Ready to stop writing review responses?
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.6", marginBottom: "28px" }}>
            Try it free right now — no account, no credit card needed.
          </p>
          <a href="https://app.reviewflowapp.com/reviews" className="try-btn-blue">
            Try It Free — No Sign Up Needed →
          </a>
          <p style={{ marginTop: "14px", fontSize: "12px", color: "#475569" }}>
            Free during beta · No credit card · No account needed
          </p>
        </div>
      </section>

    </div>
  );
}