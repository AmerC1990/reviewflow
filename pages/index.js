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
        <title>ReviewFlow – AI Replies for Restaurant Reviews</title>
        <meta
          name="description"
          content="ReviewFlow helps restaurants reply to Google reviews in seconds with AI – saving time and boosting reputation."
        />
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      </Head>

      {/* NAVBAR */}
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            R
          </div>
          <span className="text-xl font-semibold text-gray-900">ReviewFlow</span>
        </div>
        <div className="hidden sm:block text-sm text-gray-500">
          Built for busy restaurant owners
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto mt-16 px-4 lg:px-0 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Reply to Google Reviews in Seconds&nbsp;
            <span className="text-blue-600">with AI</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            ReviewFlow is built for restaurants that are too busy to reply to
            every review, but care deeply about reputation. Get fast,
            personalized replies to every Google review — without spending hours
            at a computer.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>✅ Perfect for busy restaurant owners & managers</li>
            <li>✅ Handles positive, negative, and mixed reviews</li>
            <li>✅ Keeps your tone polite, professional, and on-brand</li>
          </ul>

          {/* FORM */}
          <div className="mt-8">
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
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white shadow-md rounded-xl p-0 border border-gray-100 overflow-hidden">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=60"
            alt="Restaurant Interior"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              How ReviewFlow helps your restaurant
            </h2>

            {/* UPDATED AUTOMATION STEPS */}
            <div className="space-y-4 text-sm text-gray-700">

              <div>
                <span className="font-semibold text-gray-900">1. Connect your Google Business Profile</span>
                <p>Import all your Google reviews instantly — no copy/paste or manual work.</p>
              </div>

              <div>
                <span className="font-semibold text-gray-900">2. AI writes personalized replies automatically</span>
                <p>
                  Get thoughtful, on-brand responses crafted in seconds for every review.
                </p>
              </div>

              <div>
                <span className="font-semibold text-gray-900">3. Approve or auto-post to Google</span>
                <p>
                  Publish replies with one click — or let ReviewFlow handle it automatically.
                </p>
              </div>

            </div>

            <div className="mt-6 border-t pt-4 text-xs text-gray-500">
              Ideal for:
              <span className="block mt-1">
                🍕 Pizzerias • 🍣 Sushi bars • ☕ Cafés • 🍔 Burger spots • 🍝 Family restaurants
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING BELOW UNCHANGED */}
      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-20 px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Built for real restaurant life — not tech demos
        </h2>
        <p className="mt-2 text-center text-gray-600 text-sm sm:text-base">
          You're juggling staff, customers, and the kitchen. ReviewFlow quietly
          handles reviews in the background.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">AI replies that feel human</h3>
            <p className="mt-2 text-sm text-gray-600">Every response feels personal — never robotic.</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">Protect your reputation</h3>
            <p className="mt-2 text-sm text-gray-600">
              Turn bad reviews into second chances with empathetic replies.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">Save hours every week</h3>
            <p className="mt-2 text-sm text-gray-600">
              Stop spending your day off replying to reviews.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="max-w-3xl mx-auto mt-20 px-4 lg:px-0">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-2">
            For independent restaurants
          </p>
          <p className="text-gray-800 text-sm sm:text-base">
            Whether you run a café or a family restaurant, reviews now matter as
            much as the food. ReviewFlow brings big-brand professionalism to
            small teams.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto mt-20 px-4 lg:px-0 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Early access pricing</h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Early restaurant users get simple, affordable pricing with locked-in discounts.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">

          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">Starter</h3>
            <p className="mt-1 text-sm text-gray-500">For tiny teams</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">TBD</p>
            <p className="mt-2 text-xs text-gray-500">Limited reviews/month — perfect for cafés.</p>
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-5 shadow-md">
            <h3 className="font-semibold">Pro Restaurant</h3>
            <p className="mt-1 text-sm text-blue-100">Most popular</p>
            <p className="mt-4 text-2xl font-bold">Early-bird pricing</p>
            <p className="mt-2 text-xs text-blue-100">Unlimited replies for one location.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">Multi-location</h3>
            <p className="mt-1 text-sm text-gray-500">For 2+ locations</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">Custom</p>
            <p className="mt-2 text-xs text-gray-500">Designed for growing restaurant groups.</p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-3xl mx-auto mt-20 mb-16 px-4 lg:px-0 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Want first access when ReviewFlow launches?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Join the waitlist — we'll invite you as soon as the restaurant version is ready.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-md">
            <div
              className="[&_.formkit-form]:w-full"
              dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }}
            />
          </div>
        </div>

        <p className="mt-2 text-xs text-gray-500">You can unsubscribe anytime with one click.</p>
      </section>
    </div>
  );
}
