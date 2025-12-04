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
</form>
`;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ReviewFlow – Reply to Google Reviews Automatically</title>
        <meta
          name="description"
          content="AI that automatically writes and posts Google review replies for restaurants."
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

          <a
            href="#waitlist"
            className="hidden sm:block text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Join waitlist
          </a>
        </div>
      </nav>

      {/* HERO – UPDATED + MORE CONVERTING */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
            New • Restaurant AI
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Stop Manually Replying to Google Reviews  
            <span className="block text-blue-600 mt-2">Let AI do it automatically</span>
          </h1>

          <p className="mt-5 text-lg text-gray-700 font-medium">
            ReviewFlow writes **and posts** fast, personalized Google review replies for your restaurant — saving hours every week and boosting your rating.
          </p>

          {/* STRONG BULLET BENEFITS */}
          <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
            <li>🔥 Auto-reply to every Google review (positive & negative)</li>
            <li>🔥 Replies sound human—warm, polite & on-brand</li>
            <li>🔥 Connect your Google Business Profile in minutes</li>
            <li>🔥 Improve ranking by responding faster</li>
          </ul>

          {/* FORM */}
          <div className="mt-10" id="waitlist">
            <p className="text-sm font-semibold text-gray-800 mb-2">
              Join the early access waitlist
            </p>

            <div className="w-full max-w-md">
              <div
                className="[&_.formkit-form]:w-full [&_.formkit-submit]:bg-blue-600"
                dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }}
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          <p className="mt-4 text-xs text-gray-500 font-medium">
            Get early-bird pricing + priority onboarding.
          </p>
        </div>

        {/* RIGHT IMAGE / MOCKUP */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-70 pointer-events-none" />
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

            <p className="text-xs font-semibold text-blue-600 mb-2">Live preview</p>

            <div className="rounded-xl border border-gray-200 p-4 bg-gray-50">
              <p className="text-xs text-gray-500 mb-1">New Google Review</p>
              <p className="text-sm text-gray-800 italic">
                “Service was slow, but the food tasted amazing.”
              </p>

              <div className="mt-4 rounded-lg bg-slate-900 text-slate-50 p-3">
                <p className="text-xs font-semibold text-emerald-300 mb-1">AI-Generated Reply</p>
                <p className="text-xs text-slate-100">
                  Thanks so much for the feedback — we're glad you loved the food! 
                  We’re working to speed up service and appreciate your patience. Hope to see you again soon!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Everything below remains unchanged */}
    </div>
  );
}

