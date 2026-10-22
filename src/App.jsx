
import React, { useState } from "react";
import "./App.css";

const INSTAGRAM_URL = "https://www.instagram.com/zhricutz_._x/";
const WHATSAPP_URL = "https://wa.me/917397503577";

const portfolio = [
  {
    title: "Edit No. 01",
    type: "Aesthetic Edit",
    style: "gold",
    url: "https://www.instagram.com/reel/Del5KUJTG9B/",
  },
  {
    title: "Edit No. 02",
    type: "Cinematic Edit",
    style: "midnight",
    url: "https://www.instagram.com/reel/DbNd7drI5dD/",
  },
  {
    title: "Edit No. 03",
    type: "Creative Edit",
    style: "ocean",
    url: "https://www.instagram.com/reel/DeoqRo5okHi/",
  },
];

const services = [
  {
    number: "01",
    title: "Instagram Reels",
    description:
      "Eye-catching reels with smooth transitions, beat sync, and engaging visuals.",
    tag: "SHORT-FORM CONTENT",
  },
  {
    number: "02",
    title: "Cinematic Editing",
    description:
      "Cinematic colour grading, storytelling, and visuals that create a mood.",
    tag: "CINEMATIC STYLE",
  },
  {
    number: "03",
    title: "Aesthetic Edits",
    description:
      "Clean, aesthetic edits with carefully selected music and visual effects.",
    tag: "CREATIVE VISUALS",
  },
  {
    number: "04",
    title: "Custom Edits",
    description:
      "Personalised editing based on your concept, preferred style, and requirements.",
    tag: "MADE FOR YOU",
  },
];

const filters = ["All", "Aesthetic", "Cinematic", "Creative"];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolio
      : portfolio.filter((item) =>
          item.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

  const whatsappMessage = encodeURIComponent(
    "Hi ZHRICUTZ STUDIO! I'm interested in your video editing services. Can you share the details?"
  );

  const contactLink = `${WHATSAPP_URL}?text=${whatsappMessage}`;

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <a className="brand" href="#home" aria-label="ZHRICUTZ Studio home">
          <span className="brand-mark">Z.</span>
          <span className="brand-name">
            ZHRICUTZ <span>STUDIO</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Our Work
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            className="nav-cta"
            href={contactLink}
            target="_blank"
            rel="noreferrer"
          >
            Let's Talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-padding" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              CREATIVE VIDEO EDITING STUDIO
            </div>

            <h1>
              YOUR VISION.
              <br />
              OUR <span className="gradient-text">CREATION.</span>
            </h1>

            <p className="hero-description">
              We turn ordinary clips into extraordinary stories. Creative
              editing, cinematic visuals, and aesthetic reels made to stand
              out.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore Our Work <span>↗</span>
              </a>
              <a
                className="button button-secondary"
                href={contactLink}
                target="_blank"
                rel="noreferrer"
              >
                Start a Project
              </a>
            </div>

            <div className="hero-social-proof">
              <span className="proof-line" />
              <span>CREATIVE IDEAS. UNIQUE EDITS.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Creative editing artwork">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-glow" />

            <div className="visual-card visual-card-back">
              <span className="visual-card-label">FRAME 02</span>
              <div className="visual-lines">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="visual-card visual-card-front">
              <div className="visual-card-top">
                <span>ZH / STUDIO</span>
                <span>✳</span>
              </div>

              <div className="visual-symbol">Z</div>

              <div className="visual-card-bottom">
                <span>VISUAL STORYTELLING</span>
                <span>001 — 026</span>
              </div>
            </div>

            <div className="floating-label label-top">
              <span className="label-icon">✦</span>
              CREATIVE DIRECTION
            </div>

            <div className="floating-label label-bottom">
              <span className="status-dot" />
              MADE TO STAND OUT
            </div>
          </div>

          <div className="hero-index">
            <span>01</span>
            <span className="index-line" />
            <span>03</span>
          </div>
        </section>

        {/* MOVING TEXT STRIP */}
        <div className="ticker" aria-label="Our creative services">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="ticker-group" key={index}>
                <span>VIDEO EDITING</span>
                <span className="ticker-star">✳</span>
                <span>CINEMATIC VISUALS</span>
                <span className="ticker-star">✳</span>
                <span>AESTHETIC REELS</span>
                <span className="ticker-star">✳</span>
                <span>CREATIVE STORIES</span>
                <span className="ticker-star">✳</span>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES SECTION */}
        <section className="services section-padding" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="status-dot" />
                WHAT WE DO
              </div>
              <h2>
                CREATIVITY IN
                <br />
                EVERY <span className="gradient-text">FRAME.</span>
              </h2>
            </div>

            <p className="section-description">
              From the first cut to the final colour grade, we help your
              content tell a story worth watching.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-arrow">↗</span>
                </div>

                <div className="service-icon" aria-hidden="true">
                  {service.number === "01"
                    ? "▶"
                    : service.number === "02"
                      ? "◈"
                      : service.number === "03"
                        ? "✳"
                        : "✦"}
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tag">{service.tag}</div>
              </article>
            ))}
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section className="portfolio section-padding" id="work">
          <div className="section-heading portfolio-heading">
            <div>
              <div className="eyebrow">
                <span className="status-dot" />
                SELECTED PROJECTS
              </div>
              <h2>
                EXPLORE OUR
                <br />
                <span className="gradient-text">WORK.</span>
              </h2>
            </div>

            <a
              className="instagram-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Visit Instagram <span>↗</span>
            </a>
          </div>

          <div className="portfolio-filters" aria-label="Filter portfolio">
            {filters.map((filter) => (
              <button
                className={`filter-button ${
                  activeFilter === filter ? "filter-active" : ""
                }`}
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredPortfolio.map((item, index) => (
              <a
                className={`portfolio-card portfolio-${item.style}`}
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${item.title} on Instagram`}
              >
                <div className="portfolio-art">
                  <span className="art-orb art-orb-one" />
                  <span className="art-orb art-orb-two" />
                  <span className="art-ring" />

                  <span className="art-number">
                    0{index + 1}
                  </span>

                  <span className="art-word">
                    {item.style === "gold"
                      ? "GLOW"
                      : item.style === "midnight"
                        ? "NOIR"
                        : "FLOW"}
                  </span>

                  <span className="play-button" aria-hidden="true">
                    ▶
                  </span>

                  <span className="art-caption">
                    {item.type.toUpperCase()}
                  </span>
                </div>

                <div className="portfolio-info">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.type}</p>
                  </div>
                  <span className="portfolio-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>

          <p className="portfolio-note">
            Select any project to watch the original Reel on Instagram.
          </p>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section section-padding" id="contact">
          <div className="cta-decoration cta-decoration-one" />
          <div className="cta-decoration cta-decoration-two" />

          <div className="eyebrow">
            <span className="status-dot" />
            HAVE A PROJECT IN MIND?
          </div>

          <h2>
            LET'S MAKE
            <br />
            SOMETHING <span className="gradient-text">ICONIC.</span>
          </h2>

          <p>
            Got an idea for your next reel? Let's bring your vision to life.
            Tell us what you have in mind.
          </p>

          <div className="cta-actions">
            <a
              className="button button-primary"
              href={contactLink}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <span>↗</span>
            </a>

            <a
              className="button button-secondary"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Follow on Instagram
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">Z.</span>
          <span className="brand-name">
            ZHRICUTZ <span>STUDIO</span>
          </span>
        </a>

        <p>Turning moments into visual stories.</p>

        <div className="footer-links">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            Instagram ↗
          </a>
          <a
            href={contactLink}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            WhatsApp ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ZHRICUTZ STUDIO</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        className="floating-whatsapp"
        href={contactLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact ZHRICUTZ Studio on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="25"
          height="25"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 .8A15.1 15.1 0 0 0 3.05 23.66L1 31l7.52-1.97A15.2 15.2 0 1 0 16 .8Zm0 27.6c-2.3 0-4.55-.62-6.5-1.8l-.47-.28-4.46 1.17 1.19-4.35-.3-.48A12.47 12.47 0 1 1 16 28.4Zm6.85-9.34c-.38-.19-2.22-1.1-2.56-1.23-.35-.13-.6-.19-.85.19-.26.38-.98 1.23-1.2 1.48-.22.25-.44.28-.82.1-.38-.2-1.6-.59-3.05-1.88-1.13-1.01-1.89-2.26-2.1-2.64-.22-.38-.03-.58.16-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.85-2.04-1.16-2.79-.3-.73-.62-.63-.85-.64h-.72c-.25 0-.66.1-1.01.48-.35.38-1.33 1.3-1.33 3.17s1.36 3.68 1.55 3.93c.19.25 2.68 4.09 6.49 5.74.91.39 1.62.62 2.17.8.91.29 1.74.25 2.39.15.73-.11 2.22-.91 2.53-1.79.32-.89.32-1.65.22-1.81-.1-.16-.35-.25-.73-.44Z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
