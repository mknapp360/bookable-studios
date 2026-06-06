const MARQUEE_ITEMS = [
  'Interior visualisation',
  'Bar & hospitality',
  'Commercial fit-out',
  'Residential',
  'Planning applications',
  'Client presentations',
]

const PROCESS = [
  {
    number: '01',
    title: 'Send us what you have',
    desc: "Floor plan, spec sheet, mood board, reference images. It doesn't need to be a CAD file. A photograph of a drawing is enough to start.",
  },
  {
    number: '02',
    title: 'We build the scene',
    desc: 'We model the space, source and place your specified furniture and materials, light it to atmosphere, and render it to a resolution ready for client presentation or planning submission.',
  },
  {
    number: '03',
    title: 'You present with confidence',
    desc: 'Hero views delivered as high-resolution stills. Clients see exactly what they’re approving. Revisions handled as a separate brief.',
  },
]

const INPUTS = [
  {
    title: 'Floor plans',
    desc: 'Hand-drawn, printed, annotated — any format. We interpret the layout and build the geometry.',
  },
  {
    title: 'Specification sheets',
    desc: 'Furniture, materials, finishes, lighting — if you can list it, we can place it.',
  },
  {
    title: 'Mood boards & references',
    desc: 'Colour direction, material feel, atmosphere — we read the intent, not just the spec.',
  },
  {
    title: 'Site photography',
    desc: 'Existing space photos help us get proportions, light sources, and existing features right.',
  },
]

const PORTFOLIO = [
  {
    viewLabel: 'View 01',
    viewName: 'Bar approach — herringbone & curved fascia',
    project: 'Sussex Masonic Centre, Brighton',
    desc: 'Bar & Lounge Refurbishment — Pumphouse Designs',
  },
  {
    viewLabel: 'View 02',
    viewName: 'Lounge seating area — overhead lighting',
    project: 'Sussex Masonic Centre, Brighton',
    desc: 'Bar & Lounge Refurbishment — Pumphouse Designs',
  },
  {
    viewLabel: 'View 03',
    viewName: 'Bar back — drinks shelving & pendant array',
    project: 'Sussex Masonic Centre, Brighton',
    desc: 'Bar & Lounge Refurbishment — Pumphouse Designs',
  },
  {
    viewLabel: 'View 04',
    viewName: 'Full lounge — seating layout & TV wall',
    project: 'Sussex Masonic Centre, Brighton',
    desc: 'Bar & Lounge Refurbishment — Pumphouse Designs',
  },
]

const PROJECT_TYPES = [
  'Bar & hospitality',
  'Commercial interior',
  'Residential interior',
  'Exterior / architectural',
  'Planning application',
  'Other',
]

export default function App() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          Bookable <span>Studios</span>
        </a>
        <a href="#contact" className="nav-cta">
          Start a project
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-visual">
          <div className="hero-visual-placeholder">
            <span className="render-label">Project render</span>
            <span className="render-title">
              Sussex Masonic Centre
              <br />
              Bar &amp; Lounge, Brighton
            </span>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">Architectural &amp; Interior Visualisation</div>
          <h1 className="hero-headline">
            Your design, <em>built</em> before it&rsquo;s built.
          </h1>
          <p className="hero-body">
            We take your floor plans, specification sheets, and mood boards and produce
            photorealistic renders your clients can actually respond to — before a single wall
            goes up.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start a project
            </a>
            <a href="#work" className="btn-ghost">
              See the work
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="section">
        <div className="section-label">What we do</div>
        <h2 className="section-headline">
          From hand-drawn plan to <em>photorealistic render.</em>
        </h2>
        <p className="section-body">
          Most visualisation studios need a CAD file and a detailed brief to get started. We
          don&rsquo;t. Give us a floor plan — even a hand-annotated one — a specification list, and a
          direction, and we&rsquo;ll build the scene from scratch. That&rsquo;s the part of the pipeline
          most architects and interior designers are stuck on longest.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem 8rem' }}>
        <div className="process-grid">
          {PROCESS.map((step) => (
            <div className="process-item" key={step.number}>
              <div className="process-number">{step.number}</div>
              <div className="process-title">{step.title}</div>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT YOU BRING */}
      <div className="inputs-section">
        <div className="inputs-inner">
          <div>
            <div className="section-label">What you need</div>
            <h2 className="section-headline">
              We work from <em>your process,</em> not ours.
            </h2>
            <p className="section-body" style={{ marginBottom: 0 }}>
              Architects and interior designers work the way they work. We don&rsquo;t ask you to
              change your process to fit our pipeline. Send us what you have.
            </p>
          </div>
          <ul className="inputs-list">
            {INPUTS.map((input) => (
              <li key={input.title}>
                <span className="icon">◆</span>
                <div>
                  <strong>{input.title}</strong>
                  {input.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gold-rule" />

      {/* PORTFOLIO */}
      <div className="portfolio-section" id="work">
        <div className="portfolio-header">
          <div>
            <div className="section-label">Our work</div>
            <h2 className="section-headline" style={{ marginBottom: 0 }}>
              Recent <em>projects.</em>
            </h2>
          </div>
        </div>
        <div className="portfolio-grid">
          {PORTFOLIO.map((item) => (
            <div className="portfolio-item" key={item.viewLabel}>
              <div className="portfolio-placeholder">
                <span className="view-label">{item.viewLabel}</span>
                <span className="view-name">{item.viewName}</span>
              </div>
              <div className="portfolio-overlay">
                <div className="overlay-project">{item.project}</div>
                <div className="overlay-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginTop: '2rem',
          }}
        >
          All renders produced from hand-annotated floor plan and specification sheet.
        </p>
      </div>

      <div className="gold-rule" />

      {/* CONTACT */}
      <div className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Start a project
          </div>
          <h2 className="contact-headline">
            Tell us what <em>you&rsquo;re working on.</em>
          </h2>
          <p className="contact-body">
            No pricing on this page — every project is different. Send us your brief and we&rsquo;ll
            come back to you with a clear scope and a quote, usually within 24 hours.
          </p>

          <form
            className="contact-form"
            action="mailto:martin@bookable.online"
            method="post"
            encType="text/plain"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" placeholder="Jane Smith" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Practice / studio</label>
                <input type="text" id="company" name="company" placeholder="Pumphouse Designs" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="jane@studio.com" />
            </div>
            <div className="form-group">
              <label htmlFor="type">Project type</label>
              <select id="type" name="type" defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="brief">Tell us about the project</label>
              <textarea
                id="brief"
                name="brief"
                placeholder="What are you designing, what do you have to send us, and when do you need the renders?"
              />
            </div>
            <button type="submit" className="form-submit">
              Send brief →
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          Bookable <span>Studios</span>
        </div>
        <div className="footer-meta">
          <a href="mailto:martin@bookable.online">martin@bookable.online</a>
          <br />
          Battle, East Sussex
          <br />A{' '}
          <a href="https://bookable.online" target="_blank" rel="noreferrer">
            Bookable Ltd
          </a>{' '}
          studio
        </div>
      </footer>
    </>
  )
}
