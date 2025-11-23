import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* LOAD CONVERTKIT */}
      <Head>
        <script async src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      </Head>

      {/* NAVBAR */}
      <nav className="w-full p-5 flex justify-between items-center bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">ReviewFlow</h1>
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

        {/* ConvertKit Form 1 */}
        <div className="mt-8 flex justify-center">
          <div
            className="ck-form-container"
            data-ck-version="5"
            data-ck-form="8801942"
          ></div>
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

      {/* CTA SECTION WITH FORM 2 */}
      <section className="mt-24 mb-20 text-center">
        <h3 className="text-3xl font-bold">Start Your Free 14-Day Trial</h3>
        <p className="text-gray-600 mt-2">No credit card required</p>

        <div className="mt-6 flex justify-center">
          <div
            className="ck-form-container"
            data-ck-version="5"
            data-ck-form="8801942"
          ></div>
        </div>
      </section>

    </div>
  );
}
