import TitleHeader from "../components/TitleHeader";
import { skillGroups } from "../constants";

const TechStack = () => {
  return (
    <section
      id="skills"
      className="w-full section-padding scroll-mt-32"
      aria-labelledby="skills-title"
    >
      <div className="max-w-7xl mx-auto">
        <TitleHeader
          id="skills-title"
          title="Technical Skills"
          sub="Technologies and methods applied across software, AI, and data projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-white/10 bg-[#0d1118] p-6 md:p-7"
            >
              <h3 className="text-xl font-semibold text-sky-100">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2 mt-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white/85"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;