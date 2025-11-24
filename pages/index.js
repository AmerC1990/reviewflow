import Head from "next/head";

const CK_FORM_HTML = `
<form action="https://app.kit.com/forms/8801942/subscriptions"
  class="seva-form formkit-form"
  method="post"
  data-sv-form="8801942"
  data-uid="47a34e4c30"
  data-format="inline"
  data-version="5"
  data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
  min-width="400 500 600 700 800"
>
  <div data-style="clean">
    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
    <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
      <div class="formkit-field">
        <input
          class="formkit-input"
          name="email_address"
          aria-label="Email Address"
          placeholder="Email Address"
          required
          type="email"
          style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"
        />
      </div>
      <button
        data-element="submit"
        class="formkit-submit formkit-submit"
        style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 4px; font-weight: 400;"
      >
        <div class="formkit-spinner"><div></div><div></div><div></div></div>
        <span>Join Waitlist</span>
      </button>
    </div>
    <div class="formkit-powered-by-convertkit-container">
      <a
        href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"
        data-element="powered-by"
        class="formkit-powered-by-convertkit"
        data-variant="dark"
        target="_blank"
        rel="nofollow"
      >
        Built with Kit
      </a>
    </div>
  </div>
  <style>
    .formkit-form[data-uid="47a34e4c30"] *{box-sizing:border-box;}
    .formkit-form[data-uid="47a34e4c30"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
    .formkit-form[data-uid="47a34e4c30"] legend{border:none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}
    .formkit-form[data-uid="47a34e4c30"] fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0;}
    .formkit-form[data-uid="47a34e4c30"] body:not(:-moz-handler-blocked) fieldset{display:table-cell;}
    .formkit-form[data-uid="47a34e4c30"] h1,
    .formkit-form[data-uid="47a34e4c30"] h2,
    .formkit-form[data-uid="47a34e4c30"] h3,
    .formkit-form[data-uid="47a34e4c30"] h4,
    .formkit-form[data-uid="47a34e4c30"] h5,
    .formkit-form[data-uid="47a34e4c30"] h6{color:inherit;font-size:inherit;font-weight:inherit;}
    .formkit-form[data-uid="47a34e4c30"] h2{font-size:1.5em;margin:1em 0;}
    .formkit-form[data-uid="47a34e4c30"] h3{font-size:1.17em;margin:1em 0;}
    .formkit-form[data-uid="47a34e4c30"] p{color:inherit;font-size:inherit;font-weight:inherit;}
    .formkit-form[data-uid="47a34e4c30"] ol:not([template-default]),
    .formkit-form[data-uid="47a34e4c30"] ul:not([template-default]),
    .formkit-form[data-uid="47a34e4c30"] blockquote:not([template-default]){text-align:left;}
    .formkit-form[data-uid="47a34e4c30"] p:not([template-default]),
    .formkit-form[data-uid="47a34e4c30"] hr:not([template-default]),
    .formkit-form[data-uid="47a34e4c30"] blockquote:not([template-default]),
    .formkit-form[data-uid="47a34e4c30"] ol:not([template-default]),
    .formkit-form[data-uid="47a34e4c30"] ul:not([template-default]){color:inherit;font-style:initial;}
    .formkit-form[data-uid="47a34e4c30"] .ordered-list,
    .formkit-form[data-uid="47a34e4c30"] .unordered-list{list-style-position:outside !important;padding-left:1em;}
    .formkit-form[data-uid="47a34e4c30"] .list-item{padding-left:0;}
    .formkit-form[data-uid="47a34e4c30"][data-format="modal"]{display:none;}
    .formkit-form[data-uid="47a34e4c30"][data-format="slide in"]{display:none;}
    .formkit-form[data-uid="47a34e4c30"][data-format="sticky bar"]{display:none;}
    .formkit-sticky-bar .formkit-form[data-uid="47a34e4c30"][data-format="sticky bar"]{display:block;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-input,
    .formkit-form[data-uid="47a34e4c30"] .formkit-select,
    .formkit-form[data-uid="47a34e4c30"] .formkit-checkboxes{width:100%;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-button,
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-button:hover,
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit:hover,
    .formkit-form[data-uid="47a34e4c30"] .formkit-button:focus,
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit:focus{outline:none;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-button:hover > span,
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit:hover > span,
    .formkit-form[data-uid="47a34e4c30"] .formkit-button:focus > span,
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit:focus > span{background-color:rgba(0,0,0,0.1);}
    .formkit-form[data-uid="47a34e4c30"] .formkit-button > span,
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit > span{display:block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:12px 24px;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-input{background:#ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-input:focus{outline:none;border-color:#1677be;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-input::-webkit-input-placeholder{color:inherit;opacity:0.8;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-input::-moz-placeholder{color:inherit;opacity:0.8;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-input:-ms-input-placeholder{color:inherit;opacity:0.8;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-input::placeholder{color:inherit;opacity:0.8;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="dropdown"]{position:relative;display:inline-block;width:100%;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="dropdown"]::before{content:"";top:calc(50% - 2.5px);right:10px;position:absolute;pointer-events:none;border-color:#4f4f4f transparent transparent transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;z-index:999;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="dropdown"] select{height:auto;width:100%;cursor:pointer;color:#333333;line-height:1.4;margin-bottom:0;padding:0 6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:15px;padding:12px;padding-right:25px;border:1px solid #e3e3e3;background:#ffffff;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="dropdown"] select:focus{outline:none;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"]{text-align:left;margin:0;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"]{margin-bottom:10px;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] *{cursor:pointer;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{margin-bottom:0;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{display:none;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{content:none;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{border-color:#ffffff;content:"";}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{background:#10bf7a;border-color:#10bf7a;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] label{position:relative;display:inline-block;padding-left:28px;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] label::before,
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] label::after{position:absolute;content:"";display:inline-block;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] label::before{height:16px;width:16px;border:1px solid #e3e3e3;background:#ffffff;left:0px;top:3px;}
    .formkit-form[data-uid="47a34e4c30"] [data-group="checkboxes"] [data-group="checkbox"] label::after{height:4px;width:8px;border-left:2px solid #4d4d4d;border-bottom:2px solid #4d4d4d;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);left:4px;top:8px;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:5px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-alert:empty{display:none;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-alert-success{background:#d3fbeb;border-color:#10bf7a;color:#0c905c;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-spinner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-47a34e4c30- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-47a34e4c30- 1.4s infinite ease-in-out both;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-spinner > div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-spinner > div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-powered-by[data-active="false"]{opacity:0.35;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-powered-by-convertkit-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin:10px 0;position:relative;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-powered-by-convertkit-container[data-active="false"]{opacity:0.35;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-powered-by-convertkit{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ffffff;border-radius:9px;color:#3d3d3d;cursor:pointer;display:block;height:36px;margin:0 auto;opacity:0.95;padding:0;-webkit-text-decoration:none;text-decoration:none;text-indent:100%;-webkit-transition:ease-in-out all 200ms;transition:ease-in-out all 200ms;white-space:nowrap;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:157px;background-repeat:no-repeat;background-position:center;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-form[data-uid="47a34e4c30"]{max-width:700px;}
    .formkit-form[data-uid="47a34e4c30"] [data-style="clean"]{width:100%;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-fields{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-field,
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit{margin:0 0 15px 0;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-powered-by-convertkit-container{margin:0;}
    .formkit-form[data-uid="47a34e4c30"] .formkit-submit{position:static;}
    .formkit-form[data-uid="47a34e4c30"][min-width~="700"] [data-style="clean"],
    .formkit-form[data-uid="47a34e4c30"][min-width~="800"] [data-style="clean"]{padding:10px;padding-top:56px;}
    .formkit-form[data-uid="47a34e4c30"][min-width~="700"] .formkit-fields[data-stacked="false"],
    .formkit-form[data-uid="47a34e4c30"][min-width~="800"] .formkit-fields[data-stacked="false"]{margin-left:-5px;margin-right:-5px;}
    .formkit-form[data-uid="47a34e4c30"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,
    .formkit-form[data-uid="47a34e4c30"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field,
    .formkit-form[data-uid="47a34e4c30"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,
    .formkit-form[data-uid="47a34e4c30"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{margin:0 5px 15px 5px;}
    .formkit-form[data-uid="47a34e4c30"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,
    .formkit-form[data-uid="47a34e4c30"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field{-webkit-flex:100 1 auto;-ms-flex:100 1 auto;flex:100 1 auto;}
    .formkit-form[data-uid="47a34e4c30"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,
    .formkit-form[data-uid="47a34e4c30"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}
  </style>
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
          <span className="text-xl font-semibold text-gray-900">
            ReviewFlow
          </span>
        </div>
        <div className="hidden sm:block text-sm text-gray-500">
          Built for busy restaurant owners
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto mt-16 px-4 lg:px-0 grid lg:grid-cols-2 gap-10 items-center">
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

          {/* TOP FORM */}
          <div className="mt-8">
            <p className="text-sm font-semibold text-gray-800 mb-2">
              Join the early access waitlist for restaurants
            </p>
            <div
              className="w-full max-w-md"
              dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }}
            />
            <p className="mt-2 text-xs text-gray-500">
              No spam. We’ll only email you when early access is ready.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            How ReviewFlow helps your restaurant
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold text-gray-900">1. Paste a review</span>
              <p>
                Copy a Google review into ReviewFlow or connect your Google
                Business Profile.
              </p>
            </div>
            <div>
              <span className="font-semibold text-gray-900">2. AI writes a reply</span>
              <p>
                Get a thoughtful, on-brand response tailored to the tone of the
                customer’s review in seconds.
              </p>
            </div>
            <div>
              <span className="font-semibold text-gray-900">
                3. Post with one click
              </span>
              <p>
                Approve the reply, then post it to Google — no copy/paste
                gymnastics.
              </p>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 text-xs text-gray-500">
            Ideal for:
            <span className="block mt-1">
              🍕 Pizzerias • 🍣 Sushi bars • ☕ Cafés • 🍔 Burger spots • 🍝
              Family restaurants
            </span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-20 px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Built for real restaurant life — not tech demos
        </h2>
        <p className="mt-2 text-center text-gray-600 text-sm sm:text-base">
          You&apos;re juggling staff, customers, and the kitchen. ReviewFlow
          quietly handles reviews in the background.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">
              AI replies that feel human
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Every response is polite, personal, and sounds like a real person
              from your restaurant — not a robot.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">
              Protect your reputation
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Turn bad experiences into second chances. Quickly reply to
              negative reviews with empathy and professionalism.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-semibold text-gray-900">
              Save hours every week
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Stop spending your only day off writing replies. Let ReviewFlow
              handle the writing so you can run your restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* SIMPLE SOCIAL PROOF */}
      <section className="max-w-3xl mx-auto mt-20 px-4 lg:px-0">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-2">
            For independent restaurants
          </p>
          <p className="text-gray-800 text-sm sm:text-base">
            Whether you run a neighborhood café or a busy family restaurant,
            reviews now matter as much as the food. ReviewFlow is designed to
            give small restaurant teams the same review response quality as
            big chains — without hiring a full-time marketing person.
          </p>
        </div>
      </section>

      {/* PRICING (COMING SOON) */}
      <section className="max-w-4xl mx-auto mt-20 px-4 lg:px-0 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Early access pricing</h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          We&apos;re still finalizing plans, but early restaurant users will get
          simple, affordable pricing and locked-in discounts.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">Starter</h3>
            <p className="mt-1 text-sm text-gray-500">For tiny teams</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">TBD</p>
            <p className="mt-2 text-xs text-gray-500">
              Limited reviews / month, perfect for small cafés.
            </p>
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-5 shadow-md">
            <h3 className="font-semibold">Pro Restaurant</h3>
            <p className="mt-1 text-sm text-blue-100">Most popular</p>
            <p className="mt-4 text-2xl font-bold">Early-bird pricing</p>
            <p className="mt-2 text-xs text-blue-100">
              Unlimited AI replies for one location.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">Multi-location</h3>
            <p className="mt-1 text-sm text-gray-500">For 2+ locations</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">Custom</p>
            <p className="mt-2 text-xs text-gray-500">
              Designed for growing restaurant groups.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA WITH SECOND FORM */}
      <section className="max-w-3xl mx-auto mt-20 mb-16 px-4 lg:px-0 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Want first access when ReviewFlow launches for restaurants?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Join the waitlist and we&apos;ll invite you as soon as the restaurant
          version is ready. No obligation, no credit card.
        </p>

        <div className="mt-6 flex justify-center">
          <div
            className="w-full max-w-md"
            dangerouslySetInnerHTML={{ __html: CK_FORM_HTML }}
          />
        </div>

        <p className="mt-2 text-xs text-gray-500">
          You can unsubscribe anytime with one click.
        </p>
      </section>
    </div>
  );
}