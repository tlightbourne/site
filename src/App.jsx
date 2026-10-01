import RequestForm from "./components/RequestForm.jsx";
import {
  site,
  disclosure,
  services,
  computerHelp,
  referOut,
  faqs,
} from "./config.js";

const steps = [
  {
    title: "Tell me about the job",
    body: "Send the form below. A short description is enough to start.",
  },
  {
    title: "Get a written quote",
    body: "I reply with questions, then a fixed quote covering labor and parts.",
  },
  {
    title: "I come to you",
    body: "We pick a time. I bring the tools, do the work and clean up.",
  },
  {
    title: "Check it, then pay",
    body: "You look over the finished job before you pay.",
  },
];

const ticketRules = [
  "Written quote before any work starts",
  "Total stays under $1,000, parts included",
  "No work that needs a building permit",
  "Power off and tested before electrical work",
];

export default function App() {
  const offered = site.offerComputerHelp ? [...services, computerHelp] : services;
  const cityList = site.cities.join(", ").replace(/, ([^,]*)$/, " and $1");

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="wordmark" href="#top">
            Travis Lightbourne
          </a>
          <nav aria-label="Main">
            <a href="#services">Services</a>
            <a href="#how">How it works</a>
            <a href="#about">About</a>
            <a className="btn btn-small" href="#request">Request a job</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <h1>Small home repairs, done carefully.</h1>
              <p className="lede">
                Pressure washing, painting, faucets, toilets, smart home upgrades and
                small carpentry and electrical jobs in {cityList}. You get a written quote
                before I start.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#request">Request a job</a>
                <a className="text-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>

            <aside className="ticket" aria-label="How every job works">
              <div className="ticket-tape" aria-hidden="true" />
              <h2 className="ticket-title">Every job, same rules</h2>
              <ul className="ticket-list">
                {ticketRules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
                {site.insured && <li>Covered by general liability insurance</li>}
              </ul>
              <p className="ticket-sign">Travis</p>
            </aside>
          </div>
        </section>

        <section className="band" id="services" aria-labelledby="services-h">
          <div className="wrap">
            <h2 id="services-h">What I do</h2>
            <p className="section-intro">
              Jobs that take a few hours and don't need a permit.
            </p>
            <div className="services-grid">
              <ul className="service-list">
                {offered.map((s) => (
                  <li key={s.title}>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </li>
                ))}
              </ul>
              <div className="refer">
                <h3>Jobs I send to a licensed contractor</h3>
                <p>
                  These need a license or a permit. I'll tell you so rather than
                  take them on.
                </p>
                <ul>
                  {referOut.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="band band-alt" id="how" aria-labelledby="how-h">
          <div className="wrap">
            <h2 id="how-h">How it works</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band" id="about" aria-labelledby="about-h">
          <div className="wrap about">
            <img
              className="about-photo"
              src="/travis.jpg"
              alt="Travis Lightbourne, smiling, wearing glasses and a dark collared shirt"
              width="720"
              height="900"
              loading="lazy"
            />
            <div className="about-copy">
              <h2 id="about-h">About me</h2>
              <p>
                I'm Travis, and I live and work in Santa Clara. I started this
                business to handle the small repairs that are too minor for a
                contractor but still need to be done right.
              </p>
              <p>
                I work carefully and I don't guess. Before any electrical job I
                shut off power and test it, and if a job turns out to need a
                permit or a license, I'll say so and point you to someone who
                can do it.
              </p>
              {site.googleReviewsUrl && (
                <p>
                  <a className="text-link" href={site.googleReviewsUrl}>
                    Read reviews on Google
                  </a>
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="band band-dark" id="request" aria-labelledby="request-h">
          <div className="wrap request">
            <div className="request-intro">
              <h2 id="request-h">Request a job</h2>
              <p>
                Tell me what needs doing. I'll reply within one business day.
              </p>
              <p className="area">
                Serving {cityList}.
                {site.phone && (
                  <>
                    {" "}Or call <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>.
                  </>
                )}
              </p>
            </div>
            <RequestForm />
          </div>
        </section>

        <section className="band" id="faq" aria-labelledby="faq-h">
          <div className="wrap faq">
            <h2 id="faq-h">Common questions</h2>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p className="disclosure">{disclosure}</p>
          <p className="footer-meta">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>Serving {cityList}, California</span>
            <span>© {new Date().getFullYear()} Travis Lightbourne</span>
          </p>
        </div>
      </footer>
    </>
  );
}
