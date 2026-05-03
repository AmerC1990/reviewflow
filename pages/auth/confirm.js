import { useEffect } from "react";

export default function AuthConfirm() {
  useEffect(() => {
    // Forward everything to the app subdomain
    const url = new URL(window.location.href);
    window.location.href = "https://app.reviewflowapp.com" + url.pathname + url.search + url.hash;
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
      <p>Redirecting...</p>
    </div>
  );
}