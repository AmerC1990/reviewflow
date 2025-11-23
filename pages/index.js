export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center mt-20 px-4">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Reply to Google Reviews in Seconds with AI
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          ReviewFlow helps small businesses craft perfect, personalized review replies instantly —
          saving time, boosting reputation, and improving local rankings.
        </p>

        {/* ConvertKit Script */}
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>

        {/* ConvertKit Form */}
        <div className="mt-8 flex justify-center">
          <form
            action="https://app.kit.com/forms/8801942/subscriptions"
            method="post"
            className="seva-form formkit-form flex"
            data-sv-form="8801942"
            data-uid="47a34e4c30"
            data-format="inline"
            data-version="5"
            min-width="400 500 600 700 800"
          >
            <div className="formkit-fields flex" data-stacked="false">
              <div className="formkit-field">
                <input
                  className="formkit-input px-4 py-3 border rounded-lg w-80"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>

              <button
                data-element="submit"
                className="formkit-submit bg-blue-600 text-white px-6 py-3 rounded-lg ml-2 font-medium"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-4xl mx-auto mt-24 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-xl font-semibold">Instant AI Responses</h4>
            <p className="text-gray-600 mt-2">
              Generate perfect, personalized replies to Google reviews with one click.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">One-Click Google Posting</h4>
            <p className="text-gray-600 mt-2">
              Reply directly from the dashboard without logging into Google Business.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Weekly Reputation Summary</h4>
            <p className="text-gray-600 mt-2">
              Get a simple email every week summarizing ratings, reviews, and insights.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="max-w-3xl mx-auto mt-24 text-center px-4">
        <h3 className="text-3xl font-bold">Pricing</h3>
        <p className="text-gray-600 mt-4">Affordable for every small business.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="border p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold">Free</h4>
            <p className="text-gray-600 mt-2">10 AI replies / month</p>
          </div>

          <div className="border p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold">Pro — $9.99/mo</h4>
            <p className="text-gray-600 mt-2">
              Unlimited replies • Alerts • One-click posting
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold">Premium — $99/yr</h4>
            <p className="text-gray-600 mt-2">
              All Pro features • Priority Support
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-3xl mx-auto mt-24 text-center pb-20 px-4">
        <h3 className="text-3xl font-bold">Start Your Free 14-Day Trial</h3>
        <p className="text-gray-600 mt-4">No credit card required</p>

        {/* ConvertKit Script */}
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>

        {/* ConvertKit Form Again */}
        <div className="mt-6 flex justify-center">
          <form
            action="https://app.kit.com/forms/8801942/subscriptions"
            method="post"
            className="seva-form formkit-form flex"
            data-sv-form="8801942"
            data-uid="47a34e4c30"
            data-format="inline"
            data-version="5"
            min-width="400 500 600 700 800"
          >
            <div className="formkit-fields flex" data-stacked="false">
              <div className="formkit-field">
                <input
                  className="formkit-input px-4 py-3 border rounded-lg w-80"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>

              <button
                data-element="submit"
                className="formkit-submit bg-blue-600 text-white px-6 py-3 rounded-lg ml-2 font-medium"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
