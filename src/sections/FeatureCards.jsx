import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <section
      id="focus"
      className="w-full padding-x-lg py-14 sm:py-20 scroll-mt-32"
      aria-labelledby="focus-title"
    >
      <header className="max-w-7xl mx-auto text-center mb-10 sm:mb-14">
        <h2
          id="focus-title"
          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          Areas of Focus
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Evidence-led work across software engineering, AI systems, and data science.
        </p>
      </header>

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
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
              {title}
            </h3>
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