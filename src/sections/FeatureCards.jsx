import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <section
      id="about"
      className="w-full padding-x-lg py-14 sm:py-20 scroll-mt-32"
      aria-labelledby="about-title"
    >
      <header className="max-w-7xl mx-auto text-center mb-8 sm:mb-10">
        <h2
          id="about-title"
          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          About Me
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Computer Science and Engineering student at KIET Deemed to be University · 2024–2028 · CGPA 8.27/10
        </p>
      </header>

      <div className="max-w-4xl mx-auto mb-10 sm:mb-12 space-y-4 text-center text-gray-300 leading-relaxed text-sm sm:text-base">
        <p>
          I build software and data products across full-stack development,
          AI-agent governance, and applied machine learning. My project work
          includes Abhed, PasteApp, ReUnix, and a data-science portfolio with
          more than 50 Jupyter notebooks.
        </p>
        <p>
          I received the CodeX 3.0 Best Innovators Award for an AI-agent
          governance and human-accountability solution. I have solved 834
          coding questions, attended 51 contests, and reached a peak LeetCode
          contest rating of 1740. I’m open to software engineering and data
          science internship opportunities.
        </p>
      </div>

      <h3 className="text-center text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
        Areas of Focus
      </h3>
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {abilities.map(({ imgPath, title, desc }) => (
          <article
            key={title}
            className="group relative bg-gradient-to-br from-[#0f172a] to-[#0b1120] border border-white/10 rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]"
          >
            <img
              src={imgPath}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-12 h-12 object-contain"
            />
            <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
              {title}
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
