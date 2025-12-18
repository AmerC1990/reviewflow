import Head from "next/head";

const CK_FORM_HTML = `
<form action="https://app.kit.com/forms/8801942/subscriptions"
  class="seva-form formkit-form"
  method="post"
  data-sv-form="8801942"
  data-uid="47a34e4c30"
  data-format="inline"
  data-version="5"
>
  <div data-style="clean">
    <div data-element="fields" style="display:flex;flex-direction:column;gap:14px;width:100%;">
      <input
        class="formkit-input"
        name="email_address"
        placeholder="Enter your email"
        required
        type="email"
        style="padding:16px;border:2px solid #d5d5d5;border-radius:8px;font-size:16px;color:#111;::placeholder { color:#4B5563; };box-shadow:0 1px 3px rgba(0,0,0,0.1);transition:all 0.2s ease;"
      />
      <button
        class="formkit-submit"
        style="padding:16px;background:#1677be;color:#fff;font-size:16px;font-weight:600;border-radius:8px;transition:all 0.2s ease;"
        onmouseover="this.style.background='#145a9c';"
        onmouseout="this.style.background='#1677be';"
      >
        Get early access
      </button>
    </div>
  </div>
</form>
`;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ReviewFlow — Your AI Reputation Manager for Google Reviews</title>
        <meta
          name="description"
          content="ReviewFlow is an AI Reputation Manager that monitors, writes, and posts Google review replies for restaurants — automatically."
        />
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      </Head>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
            Built for busy restaurant owners
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Your AI Reputation Manager —
            <br />
            Google Reviews handled for you
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            ReviewFlow automatically monitors your Google reviews, writes thoughtful replies,
            and posts them for you — so you never ignore a customer again.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✅ Responds to every review (positive & negative)</li>
            <li>✅ Protects your rating and public image</li>
            <li>✅ Works 24/7 — no reminders, no stress</li>
          </ul>

          <div className="mt-8 max-w-md">
            <p className="text-sm font-semibold text-gray-900 mb-2">
              Get early access (limited spots)
            </p>
            <div dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }} />
            <p className="mt-2 text-xs text-gray-700">
              Join the waitlist — we’ll email you when access opens.
            </p>
          </div>
        </div>

        {/* VISUAL */}
        <div className="relative bg-white rounded-3xl shadow-xl border p-6">
          <p className="text-sm font-semibold text-gray-900 mb-3">
            Today’s review activity
          </p>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-gray-50 border text-sm hover:scale-105 transition-transform duration-200 shadow-sm">
              <span className="text-gray-900 font-medium">⭐⭐⭐⭐⭐ “Amazing food and service!”</span>
              <div className="text-xs text-blue-600 mt-1">
                AI replied automatically
              </div>
            </div>

            <div className="p-3 rounded-xl bg-gray-50 border text-sm hover:scale-105 transition-transform duration-200 shadow-sm">
              <span className="text-gray-900 font-medium">⭐⭐ “Wait time was too long.”</span>
              <div className="text-xs text-orange-600 mt-1">
                AI handled with empathy
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-slate-900 text-slate-100 rounded-xl text-xs">
            Hi James — thanks for the feedback. We’re sorry about the wait
            and truly appreciate you giving us a chance. We’re improving every day.
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          Why restaurants use ReviewFlow
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900">Never miss a review</h3>
            <p className="mt-2 text-sm text-gray-700">
              Every review gets a response — even when you’re busy or closed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900">Protect your reputation</h3>
            <p className="mt-2 text-sm text-gray-700">
              Handle negative reviews calmly before they scare customers away.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900">Zero effort</h3>
            <p className="mt-2 text-sm text-gray-700">
              No dashboards to babysit. Your AI agent works in the background.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <div className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to stop worrying about reviews?
          </h2>
          <p className="mt-3 text-gray-700">
            Join the early access list and let ReviewFlow handle it for you.
          </p>

          <div className="mt-6 max-w-md mx-auto">
            <div dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }} />
          </div>
        </div>
      </section>
    </div>
  );
}



