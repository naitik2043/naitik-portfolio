import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="inner">
          <a className="logo" href="#hero">
            Naitik Gupta
          </a>

          <nav className="desktop" aria-label="Main navigation">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link} className="nav-link">
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="contact-btn group">
            <span className="inner">
              <span>Contact</span>
            </span>
          </a>
        </div>

        <nav className="mobile-nav lg:hidden" aria-label="Section navigation">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;