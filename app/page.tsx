const profiles = [
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?user=SkKv_68AAAAJ&hl=en&oi=ao",
  },
  { label: "GitHub", href: "https://github.com/alexdavey" },
];

const researchThemes = [
  {
    title: "Policy optimisation",
    text: "Practical and theoretically grounded methods for stable reinforcement learning.",
  },
  {
    title: "Adaptive architectures",
    text: "Neural networks that grow their capacity as an agent learns, using computation where it matters.",
  },
  {
    title: "Learning from preferences",
    text: "Population-based approaches that seek diverse behaviours and make human feedback more useful.",
  },
];

const publications = [
  {
    year: "2026",
    field: "Reinforcement learning",
    title: "StaQ: a Finite Memory Approach to Discrete Action Policy Mirror Descent",
    href: "https://arxiv.org/abs/2506.13862",
    authors: "Alex Davey, Alena Shilova, Brahim Driss & Riad Akrour",
    venue: "Reinforcement Learning Conference 2026",
  },
  {
    year: "2026",
    field: "Reinforcement learning",
    title: "PB²: Preference Space Exploration via Population-Based Methods in Preference-Based Reinforcement Learning",
    href: "https://arxiv.org/abs/2506.13741",
    authors: "Brahim Driss, Alex Davey & Riad Akrour",
    venue: "Reinforcement Learning Conference 2026",
  },
  {
    year: "2026",
    field: "Machine learning",
    title:
      "Tackling brain signal inter-subject variability with adaptive neural architectures",
    href:
      "https://linklings.s3.amazonaws.com/organizations/WCCI/wcci2026/submissions/stype114/GycdL-ijcnn_pap3256s2.pdf",
    authors:
      "Sébastien Velut, Stella Douka, Theo Rudkiewicz, Alex Davey, Stéphane Rivaud, François Landes, Julien Mille, Guillaume Charpiat, Sylvain Chevallier, Marie-Constance Corsi & Frédéric Dehais",
    venue: "International Joint Conference on Neural Networks (IJCNN)",
  },
  {
    year: "2026",
    field: "Reinforcement learning",
    title: "Is Deep RL Reproducible? State of the art and new tools",
    href: "https://inria.hal.science/hal-05645819/file/RR-9617.pdf",
    authors:
      "Timothée Mathieu, Juliette Achddou, Alex Davey, Hector Kohler, Philippe Preux & Julien Teigny",
    venue: "EWRL 2026",
  },
  {
    year: "2024",
    field: "Gravity",
    title: "Strong Cosmic Censorship in Kerr–Newman–de Sitter",
    href: "https://arxiv.org/abs/2404.03724",
    authors: "Alex Davey, Óscar J. C. Dias & David Sola Gil",
    venue: "Journal of High Energy Physics",
  },
  {
    year: "2023",
    field: "Gravity",
    title: "Scalar QNM spectra of Kerr and Reissner–Nordström revealed by eigenvalue repulsions in Kerr–Newman",
    href: "https://arxiv.org/abs/2305.11216",
    authors: "Alex Davey, Óscar J. C. Dias & Jorge E. Santos",
    venue: "Journal of High Energy Physics",
  },
  {
    year: "2022",
    field: "Gravity",
    title: "Strong Cosmic Censorship and eigenvalue repulsions for rotating de Sitter black holes in higher dimensions",
    href: "https://arxiv.org/abs/2203.13830",
    authors: "Alex Davey, Óscar J. C. Dias, Paul Rodgers & Jorge E. Santos",
    venue: "Journal of High Energy Physics",
  },
  {
    year: "2021",
    field: "Gravity",
    title: "Phase diagram of the charged black hole bomb system",
    href: "https://arxiv.org/abs/2103.12752",
    authors: "Alex Davey, Óscar J. C. Dias & Paul Rodgers",
    venue: "Journal of High Energy Physics",
  },
  {
    year: "2021",
    field: "Gravity",
    title: "Fully constrained, high-resolution shock-capturing formulation of the Einstein–fluid equations in 2+1 dimensions",
    href: "https://arxiv.org/abs/2103.04435",
    authors: "Carsten Gundlach, Patrick Bourg & Alex Davey",
    venue: "Physical Review D",
  },
];

function highlightAuthor(authors: string) {
  return authors.split(/(Alex Davey)/).map((part, index) =>
    part === "Alex Davey" ? <strong key={`${part}-${index}`}>{part}</strong> : part,
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Alex Davey — home">
          AD<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Postdoctoral researcher · Machine learning</p>
          <h1>Alex Davey</h1>
          <p className="hero-statement">
            Reinforcement learning for <em>adaptive, efficient</em> agents.
          </p>
          <div className="hero-bio">
            <p>
              I am a postdoctoral researcher in the{" "}
              <a href="https://www.inria.fr/en/tau">TAU team at Inria</a> and{" "}
              <a href="https://www.universite-paris-saclay.fr/en">
                Université Paris-Saclay
              </a>
              . My research focuses on reinforcement learning, including policy
              optimisation, adaptive neural architectures and preference-based
              learning.
            </p>
            <p>
              Ex-physicist; previously working on gravity and black holes.
            </p>
          </div>
          <div className="profile-links" aria-label="Academic profiles">
            {profiles.map((profile) => (
              <a key={profile.label} href={profile.href}>
                {profile.label}<span aria-hidden="true"> ↗</span>
              </a>
            ))}
            <span className="placeholder-link" aria-label="CV coming soon">
              CV <small>soon</small>
            </span>
          </div>
          <p className="email-inline">{"Email: {firstname}.{lastname}@inria.fr"}</p>
        </div>

        <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder">
          <div className="portrait-orbit portrait-orbit-one" />
          <div className="portrait-orbit portrait-orbit-two" />
          <div className="portrait-center">AD</div>
          <span>Portrait forthcoming</span>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="section-heading">
          <p className="eyebrow">Current research</p>
          <h2>Learning systems that adapt without excess.</h2>
        </div>
        <ul className="research-list">
          {researchThemes.map((theme) => (
            <li key={theme.title}>
              <strong>{theme.title}.</strong> {theme.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="publications-section" id="publications">
        <div className="section-heading publications-heading">
          <div>
            <p className="eyebrow">Publications</p>
            <h2>Selected work</h2>
          </div>
          <p>
            Recent work in reinforcement learning, preceded by research in
            mathematical and numerical relativity.
          </p>
        </div>

        <div className="publication-list">
          {publications.map((publication) => (
            <article className="publication" key={publication.title}>
              <div className="publication-meta">
                <span>{publication.year}</span>
                <span>{publication.field}</span>
              </div>
              <div className="publication-body">
                <h3>
                  <a className="publication-title-link" href={publication.href}>
                    {publication.title}
                  </a>
                </h3>
                <p>{highlightAuthor(publication.authors)}</p>
                <div className="publication-footer">
                  <span>{publication.venue}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Questions, ideas, collaborations.</h2>
        <a
          className="email-link"
          href="mailto:{firstname}.{lastname}@inria.fr"
        >
          {"Email: {firstname}.{lastname}@inria.fr"}
        </a>
      </section>

      <footer>
        <p>Alex Davey · Inria TAU / Université Paris-Saclay</p>
      </footer>
    </main>
  );
}
