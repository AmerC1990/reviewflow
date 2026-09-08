import Head from "next/head";
import { useState } from "react";

export default function Calculator() {
  const [reviews, setReviews] = useState(20);
  const [minutes, setMinutes] = useState(10);
  const [hourly, setHourly] = useState(50);
  const [customerValue, setCustomerValue] = useState(200);
  const [lostPct, setLostPct] = useState(5);

  const hoursPerMonth = (reviews * minutes) / 60;
  const timeCost = hoursPerMonth * hourly;
  const viewersPerMonth = reviews * 10;
  const lostCustomers = Math.round(viewersPerMonth * (lostPct / 100));
  const revenueLost = lostCustomers * customerValue;
  const totalCost = timeCost + revenueLost;
  const roi = Math.round(totalCost / 49);

  const sliderStyle = { flex: 1, accentColor: "#059669" };
  const labelStyle = { display: "block", fontSize: "13px", color: "#94a3b8", marginBottom: "8px" };
  const valueStyle = { fontSize: "18px", fontWeight: 700, color: "#f1f5f9", minWidth: "70px", textAlign: "right" };
  const rowStyle = { display: "flex", alignItems: "center", gap: "12px" };
  const fieldStyle = { marginBottom: "24px" };
  const resultRow = { display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "12px 0", borderBottom: "1px solid #065f46" };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0f172a", minHeight: "100vh", color: "#f1f5f9" }}>
      <Head>
        <title>How much are your unanswered reviews costing you? — ReviewFlow</title>
        <meta name="description" content="Calculate what ignoring your Google reviews is actually costing your business every month." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <nav style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1100px", margin: "0 auto" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{ width: "28px", height: "28px", background: "#059669", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" /></svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#f1f5f9" }}>ReviewFlow</span>
        </a>
        <a href="/" style={{ fontSize: "13px", fontWeight: 600, color: "#94a3b8", textDecoration: "none" }}>← Back to home</a>
      </nav>

      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "40px 20px 80px" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", lineHeight: 1.2, marginBottom: "8px", letterSpacing: "-0.02em" }}>
          How much are your unanswered reviews costing you?
        </h1>
        <p style={{ fontSize: "15px", color: "#94a3b8", marginBottom: "40px", lineHeight: 1.5 }}>
          Adjust the sliders to see what ignoring reviews actually costs your business each month.
        </p>

        <div style={{ background: "#1e293b", borderRadius: "14px", padding: "32px", marginBottom: "16px", border: "1px solid #334155" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#059669", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>Your business</div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Reviews per month</label>
            <div style={rowStyle}>
              <input type="range" min="1" max="100" value={reviews} onChange={e => setReviews(+e.target.value)} style={sliderStyle} />
              <span style={valueStyle}>{reviews}</span>
            </div>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Minutes spent writing each reply</label>
            <div style={rowStyle}>
              <input type="range" min="2" max="30" value={minutes} onChange={e => setMinutes(+e.target.value)} style={sliderStyle} />
              <span style={valueStyle}>{minutes} min</span>
            </div>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Your hourly value</label>
            <div style={rowStyle}>
              <input type="range" min="20" max="200" step="5" value={hourly} onChange={e => setHourly(+e.target.value)} style={sliderStyle} />
              <span style={valueStyle}>${hourly}</span>
            </div>
          </div>

          <div style={{ height: "1px", background: "#334155", margin: "8px 0 24px" }} />

          <div style={fieldStyle}>
            <label style={labelStyle}>Average revenue per new customer</label>
            <div style={rowStyle}>
              <input type="range" min="20" max="2000" step="10" value={customerValue} onChange={e => setCustomerValue(+e.target.value)} style={sliderStyle} />
              <span style={valueStyle}>${customerValue}</span>
            </div>
          </div>

          <div style={{ marginBottom: 0 }}>
            <label style={labelStyle}>% of potential customers lost to unanswered reviews</label>
            <div style={rowStyle}>
              <input type="range" min="1" max="30" value={lostPct} onChange={e => setLostPct(+e.target.value)} style={sliderStyle} />
              <span style={valueStyle}>{lostPct}%</span>
            </div>
          </div>
        </div>

        <div style={{ background: "#064e3b", border: "1px solid #059669", borderRadius: "14px", padding: "32px", marginBottom: "16px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#6ee7b7", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>What this is costing you</div>

          <div style={resultRow}>
            <span style={{ fontSize: "14px", color: "#6ee7b7" }}>Time spent on reviews monthly</span>
            <span style={{ fontSize: "20px", fontWeight: 700 }}>{hoursPerMonth.toFixed(1)} hrs</span>
          </div>
          <div style={resultRow}>
            <span style={{ fontSize: "14px", color: "#6ee7b7" }}>Dollar value of that time</span>
            <span style={{ fontSize: "20px", fontWeight: 700 }}>${Math.round(timeCost).toLocaleString()}</span>
          </div>
          <div style={resultRow}>
            <span style={{ fontSize: "14px", color: "#6ee7b7" }}>Est. revenue lost to ignored reviews</span>
            <span style={{ fontSize: "20px", fontWeight: 700 }}>${Math.round(revenueLost).toLocaleString()}</span>
          </div>
          <div style={{ ...resultRow, borderBottom: "none", paddingBottom: 0 }}>
            <span style={{ fontSize: "14px", color: "#6ee7b7" }}>Total monthly cost of doing nothing</span>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#34d399" }}>${Math.round(totalCost).toLocaleString()}</div>
              <div style={{ display: "inline-block", background: "#059669", color: "white", fontSize: "13px", fontWeight: 600, padding: "4px 12px", borderRadius: "100px", marginTop: "4px" }}>
                ReviewFlow pays for itself {roi}x over
              </div>
            </div>
          </div>
        </div>

        <a href="https://app.reviewflowapp.com/signup" style={{ display: "block", background: "#059669", color: "white", borderRadius: "10px", padding: "18px 24px", fontSize: "16px", fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
          Start your free 30-day trial — no credit card
        </a>
        <p style={{ fontSize: "12px", color: "#475569", textAlign: "center", marginTop: "12px" }}>$49/month after trial · Cancel anytime</p>
      </div>
    </div>
  );
}