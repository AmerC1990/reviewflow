import Head from "next/head";

const CK_FORM_HTML = `
<form action="https://app.kit.com/forms/8801942/subscriptions"
  class="seva-form formkit-form"
  method="post"
  data-sv-form="8801942"
  data-uid="47a34e4c30"
  data-format="inline"
  data-version="5"
  min-width="400 500 600 700 800"
>
  <div data-style="clean">
    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>

    <div data-element="fields" class="seva-fields formkit-fields" 
      style="display:flex;flex-direction:column;gap:14px;width:100%;">
      
      <div class="formkit-field" style="width:100%;">
        <input
          class="formkit-input"
          name="email_address"
          aria-label="Email Address"
          placeholder="Email Address"
          required
          type="email"
          style="
            width:100%;
            padding:16px;
            border:2px solid #d5d5d5;
            border-radius:8px;
            font-size:17px;
            font-weight:400;
            color:#000;
          "
        />
      </div>

      <button
        data-element="submit"
        class="formkit-submit"
        style="
          width:100%;
          padding:16px;
          background-color:#1677be;
          color:white;
          font-size:17px;
          font-weight:600;
          border-radius:8px;
          cursor:pointer;
        "
      >
        <span>Join Waitlist</span>
      </button>
    </div>
  </div>

  <style>
    .formkit-form[data-uid="47a34e4c30"] .formkit-alert {
      display: none;
    }

    .formkit-form[data-uid="47a34e4c30"] .formkit-alert-success {
      display: block;
      margin-top: 12px;
      padding: 10px 12px;
      border-radius: 6px;
      background: #ecfdf3;
      color: #166534;
      font-size: 14px;
    }
  </style>
</form>
`;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ReviewFlow – Turn Google Reviews Into More Customers Automatically</title>
        <meta
          name="description"
          content="ReviewFlow automatically writes and posts replies to Google reviews—helping restaurants boost ratings, build trust, and attract more customers."
        />
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      </Head>

      {/* NAVBAR */}
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              R
            </div>
            <div>
              <span className="block text-lg font-semibold text-gray-900">
                ReviewFlow
              </span>
              <span className="block text-xs text-gray-500">
                Automatic review replies for restaurants
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <a href="#waitlist" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              Join waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
            New • Built for restaurants
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Turn Every Google Review Into More Customers — Automatically
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            ReviewFlow instantly writes and posts perfect replies to every Google review. 
            Boost your rating, build trust, and win more customers — without spending hours 
            replying manually.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>✅ Automated replies for positive & negative reviews</li>
            <li>✅ Improve reputation & local SEO with consistent responses</li>
            <li>✅ Save 5–10 hours every week — set it and forget it</li>
          </ul>

          {/* FORM */}
          <div className="mt-8" id="waitlist">
            <p className="text-sm font-semibold text-gray-800 mb-2">
              Join the early access list
            </p>

            <div className="w-full max-w-md">
              <div className="[&_.formkit-form]:w-full" dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }} />
            </div>

            <p className="mt-2 text-xs text-gray-500">No spam — only early access updates.</p>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            For cafés, pizzerias, sushi bars, burger spots, food trucks, and family restaurants.
          </p>
        </div>

        {/* RIGHT – MOCKUP */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-transparent to-purple-100 rounded-3xl blur-2xl opacity-70 pointer-events-none" />
          
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-blue-600">ReviewFlow dashboard</p>
                <p className="text-sm text-gray-500">Today's Google review queue</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                12 reviews ready
              </span>
            </div>

            {/* Sample reviews */}
            <div className="space-y-3">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">★★★★★</div>
                  <span className="text-[11px] text-gray-500">Google • 2 hours ago</span>
                </div>
                <p className="mt-1 text-xs text-gray-700">“Best pasta we've had in town. Staff was friendly.”</p>
                <div className="mt-2 flex justify-end">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700">
                    AI reply ready
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">★★☆☆☆</div>
                  <span className="text-[11px] text-gray-500">Google • 5 hours ago</span>
                </div>
                <p className="mt-1 text-xs text-gray-700">“Food was great but the wait time was long.”</p>
                <div className="mt-2 flex justify-end">
                  <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-medium text-orange-700">
                    Needs review
                  </span>
                </div>
              </div>
            </div>

            {/* AI Reply */}
            <div className="mt-5 rounded-2xl bg-slate-900 text-slate-50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-emerald-300">AI-generated reply</span>
                <span className="text-[11px] text-slate-300">Tone: friendly & warm</span>
              </div>
              <p className="text-xs text-slate-100">
                Hi Sarah, thank you so much for the kind words! We’re thrilled you loved the pasta. 
                Hope to see you again soon!
              </p>

              <div className="mt-3 flex items-center justify-between">
                <button className="text-[11px] px-3 py-1.5 rounded-full bg-emerald-500 text-white font-medium">
                  Approve &amp; post
                </button>
                <button className="text-[11px] text-slate-300 underline-offset-2 hover:underline">
                  Edit reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
          Why restaurants love ReviewFlow
        </h2>

        <p className="mt-2 text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Keep your reputation strong and attract more customers — without ever falling behind on reviews.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">Replies that feel human</h3>
            <p className="mt-2 text-sm text-gray-600">
              Warm, polite responses that match the personality of your restaurant — not robotic AI wording.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">Protect your rating</h3>
            <p className="mt-2 text-sm text-gray-600">
              Respond to unhappy customers with empathy and save potential damage to your Google score.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">Save hours every week</h3>
            <p className="mt-2 text-sm text-gray-600">
              Stop wasting time writing replies on your day off. ReviewFlow works quietly in the background.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">How it works</h2>
          <p className="mt-1 text-sm text-gray-600">Simple setup. Powerful results.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white mb-3">
                1
              </div>
              <h3 className="font-semibold text-gray-900">Connect Google Business</h3>
              <p className="mt-1">Import your existing reviews instantly.</p>
            </div>

            <div>
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white mb-3">
                2
              </div>
              <h3 className="font-semibold text-gray-900">AI writes responses</h3>
              <p className="mt-1">ReviewFlow drafts warm, professional replies for you.</p>
            </div>

            <div>
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white mb-3">
                3
              </div>
              <h3 className="font-semibold text-gray-900">Approve or auto-post</h3>
              <p className="mt-1">Post replies with one click — or turn on full automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Early access pricing</h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Early users get discounted plans and locked-in rates for life.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">Starter</h3>
            <p className="mt-1 text-sm text-gray-500">For small cafés & takeout</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">TBD</p>
            <p className="mt-2 text-xs text-gray-500">
              Limited reviews/month — perfect for small restaurants.
            </p>
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-5 shadow-md">
            <h3 className="font-semibold">Pro Restaurant</h3>
            <p className="mt-1 text-sm text-blue-100">Most popular</p>
            <p className="mt-4 text-2xl font-bold">Early-bird pricing</p>
            <p className="mt-2 text-xs text-blue-100">Unlimited replies for one location.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">Multi-location</h3>
            <p className="mt-1 text-sm text-gray-500">For restaurant groups</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">Custom</p>
            <p className="mt-2 text-xs text-gray-500">Ideal for 2+ locations or franchises.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Want first access when ReviewFlow launches?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Join the waitlist. No obligation — we’ll only email you with early access details.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-md">
              <div className="[&_.formkit-form]:w-full" dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }} />
            </div>
          </div>

          <p className="mt-2 text-xs text-gray-500">Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}


