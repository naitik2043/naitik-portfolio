import { navLinks, profileLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer mt-20 border-t border-white/10">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <a className="footer-brand" href="#hero">
              Naitik Gupta
            </a>
            <p className="footer-summary">
              Computer Science and Engineering student focused on software
              engineering, AI agent governance, and applied data science.
            </p>
            <p className="footer-availability">
              Open to software engineering and data science internship
              opportunities.
            </p>
            <a className="footer-contact" href="#contact">
              Discuss an opportunity
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="footer-heading">Explore</h2>
            <ul className="footer-link-list">
              {navLinks.map(({ link, name }) => (
                <li key={name}>
                  <a href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Professional profiles">
            <h2 className="footer-heading">Find me online</h2>
            <ul className="footer-link-list">
              {profileLinks.map((profile) => (
                <li key={profile.name}>
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Naitik Gupta</p>
          <p>Built with React, Vite, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;