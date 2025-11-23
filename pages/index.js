import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      </Head>

      {/* NAVBAR */}
      <nav className="w-full p-5 flex justify-between items-center bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">ReviewFlow</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
          Join Waitlist
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center mt-20 px-4">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Reply to Google Reviews in Seconds with AI
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          ReviewFlow helps small businesses craft perfect, personalized review replies instantly —
          saving time, boosting reputation, and improving local rankings.
        </p>

        {/* CONVERTKIT FORM */}
        <div className="mt-8 flex justify-center">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <form action="https://app.kit.com/forms/8801942/subscriptions" 
                  class="seva-form formkit-form" method="post"
                  data-sv-form="8801942" data-uid="47a34e4c30" data-format="inline"
                  min-width="400 500 600 700 800"
                >
                  <div data-style="clean">
                    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                    <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
                      <div class="formkit-field">
                        <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email">
                      </div>
                      <button data-element="submit" class="formkit-submit formkit-submit">
                        <div class="formkit-spinner"><div></div><div></div><div></div></div>
                        <span>Join Waitlist</span>
                      </button>
                    </div>
                  </div>
                </form>
              `,
            }}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-24 px-6 grid md:grid-cols-3 gap-10">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold">Instant AI Responses</h3>
          <p className="mt-2 text-gray-600">
            Generate perfect, personalized replies to Google reviews with one click.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold">One-Click Google Posting</h3>
          <p className="mt-2 text-gray-600">
            Reply directly from the dashboard without logging into Google Business.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold">Weekly Reputation Summary</h3>
          <p className="mt-2 text-gray-600">
            Get a simple email every week summarizing ratings, reviews, and insights.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto mt-24 px-6 text-center">
        <h3 className="text-3xl font-bold">Pricing</h3>
        <p className="text-gray-600 mt-2">Affordable for every small business.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-xl font-bold">Free</h4>
            <p className="mt-2 text-gray-600">10 AI replies/month</p>
          </div>

          <div className="p-6 bg-blue-600 text-white rounded-lg shadow">
            <h4 className="text-xl font-bold">Pro — $9.99/mo</h4>
            <p className="mt-2">Unlimited replies • Alerts • One-click posting</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-xl font-bold">Premium — $99/yr</h4>
            <p className="mt-2 text-gray-600">All Pro features • Priority Support</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-24 mb-20 text-center">
        <h3 className="text-3xl font-bold">Start Your Free 14-Day Trial</h3>
        <p className="text-gray-600 mt-2">No credit card required</p>

        <div className="mt-6">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <form action="https://app.kit.com/forms/8801942/subscriptions" 
                  class="seva-form formkit-form" method="post"
                  data-sv-form="8801942" data-uid="47a34e4c30" data-format="inline"
                  min-width="400 500 600 700 800"
                >
                  <div data-style="clean">
                    <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
                      <div class="formkit-field">
                        <input class="formkit-input" name="email_address" aria-label="Email" placeholder="Email Address" required type="email">
                      </div>
                      <button data-element="submit" class="formkit-submit">
                        <span>Join Waitlist</span>
                      </button>
                    </div>
                  </div>
                </form>
              `,
            }}
          />
        </div>
      </section>
    </div>
  );
}
