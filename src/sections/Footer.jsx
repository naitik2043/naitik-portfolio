import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer border-t border-white/10 mt-20">
      <div className="footer-container flex flex-col md:flex-row items-center justify-between gap-6 py-6">

        {/* Portfolio Note */}
        <div className="flex items-center">
          <p className="text-sm text-white/60 hover:text-white transition">
            Open to internships and collaboration opportunities
          </p>
        </div>

        {/* Social Icons */}
        <div className="socials flex items-center gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon hover:scale-110 transition duration-300"
            >
              <img
                src={socialImg.imgPath}
                alt={socialImg.name}
                className="w-5 h-5"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm text-white/60 text-center md:text-right">
            © {new Date().getFullYear()} Naitik Gupta · Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;