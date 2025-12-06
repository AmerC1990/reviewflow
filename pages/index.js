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
    <ul class="formkit-alert formkit-alert-error"
    data-element="errors"
    data-group="alert"
    style="display:none !important; margin:0; padding:0;">
</ul>


    <div
      data-element="fields"
      class="seva-fields formkit-fields"
      style="display:flex;flex-direction:column;gap:14px;width:100%;"
    >
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

    <style>
      .formkit-alert-success{
        color:#047857;
        background:#ecfdf5;
        border:1px solid #a7f3d0;
        font-size:0.85rem;
        padding:10px 12px;
        border-radius:6px;
        margin-top:8px;
        text-align:left;
      }
      .formkit-alert-error{
        color:#b91c1c;
        background:#fef2f2;
        border:1px solid #fecaca;
        font-size:0.85rem;
        padding:10px 12px;
        border-radius:6px;
        margin-top:8px;
        text-align:left;
      }
    </style>
  </div>
</form>
`;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>
          ReviewFlow – Reply to Google Reviews in Seconds — Built for Restaurants
        </title>
        <meta
          name="description"
          content="ReviewFlow helps restaurants reply to Google reviews in seconds with AI – saving time and boosting reputation."
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
                AI review replies for restaurants
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 border border-green-100">
              ✅ Built for restaurants
            </span>
            <a
              href="#waitlist"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
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
            New • AI replies for Google reviews
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Reply to Google Reviews in Seconds{" "}
            <span className="block text-xl sm:text-2xl text-blue-600 mt-2">
              Built for restaurants
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            ReviewFlow helps busy restaurant owners reply to every Google review
            in seconds — with thoughtful, on-brand responses that protect your
            reputation and improve local SEO.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>✅ Handles 5-star, 1-star, and everything in between</li>
            <li>✅ Keeps your tone friendly, professional, and on-brand</li>
            <li>✅ Designed for independent restaurants and small groups</li>
          </ul>

          {/* FORM */}
          <div className="mt-8" id="waitlist">
            <p className="text-sm font-semibold text-gray-800 mb-2">
              Join the early access waitlist for restaurants
            </p>

            <div className="w-full max-w-md">
              <div
                className="[&_.formkit-form]:w-full"
                dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }}
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              No spam. We’ll only email you when early access is ready.
            </p>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Built for: cafés, pizzerias, sushi bars, burger spots, and family
            restaurants.
          </p>
        </div>

        {/* RIGHT – DASHBOARD MOCKUP */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-transparent to-purple-100 rounded-3xl blur-2xl opacity-70 pointer-events-none" />
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-blue-600">
                  ReviewFlow dashboard
                </p>
                <p className="text-sm text-gray-500">
                  Today&apos;s Google review queue
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                12 reviews ready
              </span>
            </div>

            {/* Fake reviews list */}
            <div className="space-y-3">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    ★★★★★
                  </div>
                  <span className="text-[11px] text-gray-500">
                    Google • 2 hours ago
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-700 line-clamp-2">
                  “Best pasta we&apos;ve had in town. Staff was super friendly
                  and the place felt cozy.”
                </p>
                <div className="mt-2 flex justify-end">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700">
                    Suggested reply ready
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    ★★☆☆☆
                  </div>
                  <span className="text-[11px] text-gray-500">
                    Google • 5 hours ago
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-700 line-clamp-2">
                  “Food was great but our order took a long time to arrive.”
                </p>
                <div className="mt-2 flex justify-end">
                  <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-medium text-orange-700">
                    Needs your review
                  </span>
                </div>
              </div>
            </div>

            {/* Reply preview */}
            <div className="mt-5 rounded-2xl bg-slate-900 text-slate-50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-emerald-300">
                  Suggested reply
                </span>
                <span className="text-[11px] text-slate-300">
                  Tone: friendly &amp; professional
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-100">
                Hi Sarah, thank you so much for the kind words about our pasta
                and team. We&apos;re really happy you enjoyed your visit and
                can&apos;t wait to welcome you back again soon!
              </p>
              <div className="mt-3 flex items-center justify-between">
                <button className="text-[11px] px-3 py-1.5 rounded-full bg-emerald-500 text-white font-medium">
                  Approve &amp; post to Google
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
          Built for real restaurant life — not tech demos
        </h2>
        <p className="mt-2 text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          You&apos;re juggling staff, suppliers, and guests. ReviewFlow quietly
          keeps your reviews under control in the background.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">
              Replies that feel human
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Every response sounds like someone from your restaurant — warm,
              polite, and on-brand. No stiff AI jargon.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">
              Protect your reputation
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Quickly respond to negative reviews with empathy and
              professionalism, so one bad night doesn&apos;t hurt your rating.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">
              Save hours every week
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Stop spending your only day off writing replies. Let ReviewFlow do
              the writing so you can run the restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            How ReviewFlow works for your restaurant
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Simple setup. No complicated onboarding.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white mb-3">
                1
              </div>
              <h3 className="font-semibold text-gray-900">
                Connect Google Business
              </h3>
              <p className="mt-1">
                Link your Google Business Profile and import your existing
                reviews in a few clicks.
              </p>
            </div>

            <div>
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white mb-3">
                2
              </div>
              <h3 className="font-semibold text-gray-900">
                Let AI draft the replies
              </h3>
              <p className="mt-1">
                ReviewFlow analyzes each review and drafts a response that fits
                your restaurant&apos;s tone.
              </p>
            </div>

            <div>
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white mb-3">
                3
              </div>
              <h3 className="font-semibold text-gray-900">
                Approve or auto-post
              </h3>
              <p className="mt-1">
                Approve replies in a simple queue — or enable auto-posting once
                you trust the responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOT GOOGLE'S AI SUGGESTIONS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-slate-900 text-slate-50 rounded-2xl p-6 sm:p-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              “Can&apos;t I just use Google&apos;s AI suggestions?”
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-200">
              Google sometimes suggests replies while you&apos;re typing — but
              it&apos;s not built to protect your brand or handle every review
              across time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <p className="font-semibold text-rose-300 mb-1">
                Google&apos;s quick suggestions
              </p>
              <ul className="space-y-1 text-slate-200">
                <li>• Only appears when you&apos;re replying manually</li>
                <li>• No central queue or overview</li>
                <li>• No control over tone or rules</li>
                <li>• No automation across all reviews</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-4 border border-emerald-500/70">
              <p className="font-semibold text-emerald-300 mb-1">
                ReviewFlow for restaurants
              </p>
              <ul className="space-y-1 text-slate-200">
                <li>• Central inbox for every Google review</li>
                <li>• Consistent tone that matches your brand</li>
                <li>• Negative-review handling rules</li>
                <li>• Option to approve or auto-post</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Early access pricing
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          We&apos;re still finalizing plans, but early restaurant users will get
          simple, affordable pricing and locked-in discounts.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">Starter</h3>
            <p className="mt-1 text-sm text-gray-500">For tiny teams</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">TBD</p>
            <p className="mt-2 text-xs text-gray-500">
              Limited reviews/month — perfect for cafés and small spots.
            </p>
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-5 shadow-md">
            <h3 className="font-semibold">Pro Restaurant</h3>
            <p className="mt-1 text-sm text-blue-100">Most popular</p>
            <p className="mt-4 text-2xl font-bold">Early-bird pricing</p>
            <p className="mt-2 text-xs text-blue-100">
              Unlimited replies for one location.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">Multi-location</h3>
            <p className="mt-1 text-sm text-gray-500">For 2+ locations</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">Custom</p>
            <p className="mt-2 text-xs text-gray-500">
              Designed for growing restaurant groups and franchises.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Want first access when ReviewFlow launches?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Join the waitlist — we&apos;ll invite you as soon as the restaurant
            version is ready. No obligation.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-md">
              <div
                className="[&_.formkit-form]:w-full"
                dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }}
              />
            </div>
          </div>

          <p className="mt-2 text-xs text-gray-500">
            You can unsubscribe anytime with one click.
          </p>
        </div>
      </section>
    </div>
  );
}


