import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const scrollToSection = (hash, behavior) => {
  const target = document.getElementById(hash.slice(1));
  if (!target) return false;

  const headerHeight =
    document.querySelector(".navbar")?.getBoundingClientRect().height ?? 0;
  const targetTop =
    target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: behavior ?? (reducedMotion ? "auto" : "smooth"),
  });

  return true;
};

const handleSectionClick = (event, hash) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  if (!document.getElementById(hash.slice(1))) return;

  event.preventDefault();
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  scrollToSection(hash);
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    const handleHistoryNavigation = () => {
      if (window.location.hash) {
        scrollToSection(window.location.hash, "auto");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("popstate", handleHistoryNavigation);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleHistoryNavigation);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The visual theme still works when browser storage is unavailable.
    }
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="inner">
          <a className="logo" href="#hero" onClick={(event) => handleSectionClick(event, "#hero")}>
            Naitik Gupta
          </a>

          <nav className="desktop" aria-label="Main navigation">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link} className="nav-link" onClick={(event) => handleSectionClick(event, link)}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme(nextTheme)}
              aria-label={`Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
            >
              {theme === "dark" ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.2 15.8A8.5 8.5 0 0 1 8.2 3.8 8.6 8.6 0 1 0 20.2 15.8Z" />
                </svg>
              )}
              <span className="theme-toggle-label">
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            </button>

            <a href="#contact" className="contact-btn group" onClick={(event) => handleSectionClick(event, "#contact")}>
              <span className="inner">
                <span>Contact</span>
              </span>
            </a>
          </div>
        </div>

        <nav className="mobile-nav lg:hidden" aria-label="Section navigation">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a href={link} onClick={(event) => handleSectionClick(event, link)}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;