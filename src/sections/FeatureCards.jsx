import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <section
      id="expertise"
      className="w-full padding-x-lg py-14 sm:py-20 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-14">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          Core Strengths
        </h2>

        <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Focused on frontend development, problem-solving with Data Structures
          & Algorithms, and continuous learning through real-world projects.
        </p>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title || index}
            className="
              group
              relative
              bg-gradient-to-br from-[#0f172a] to-[#0b1120]
              border border-white/10
              rounded-2xl
              p-6 sm:p-7 md:p-8
              flex flex-col gap-4
              transition-all duration-300
              hover:-translate-y-2
              hover:border-blue-500/40
              hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]
            "
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_70%)]" />

            <div
              className="
                relative
                w-12 h-12 sm:w-14 sm:h-14
                flex items-center justify-center
                rounded-xl
                bg-blue-500/10
                border border-blue-500/20
                transition-transform duration-300
                group-hover:scale-110
              "
            >
              <img
                src={imgPath}
                alt={title}
                loading="lazy"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform duration-300 group-hover:rotate-6"
              />
            </div>

            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold relative">
              {title}
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg relative">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
