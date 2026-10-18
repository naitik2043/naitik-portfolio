import { profileLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer border-t border-white/10 mt-20">
      <div className="footer-container flex flex-col md:flex-row items-center justify-between gap-6 py-6">
        <p className="text-sm text-white/70 text-center">
          Open to software engineering and data science internship opportunities
        </p>

        <nav aria-label="Professional profiles">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {profileLinks.map((profile) => (
              <li key={profile.name}>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white underline-offset-4 hover:underline"
                >
                  {profile.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-white/60 text-center md:text-right">
          © {new Date().getFullYear()} Naitik Gupta · React · Vite · Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;