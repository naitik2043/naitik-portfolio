import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";

const ShowcaseSection = () => {
  return (
    <section
      id="projects"
      className="w-full section-padding scroll-mt-32"
      aria-labelledby="projects-title"
    >
      <div className="max-w-7xl mx-auto">
        <TitleHeader
          id="projects-title"
          title="Selected Projects"
          sub="Project work across full-stack development, AI governance, and machine learning"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="border border-white/10 bg-gradient-to-br from-[#101827] to-[#090d14] rounded-2xl p-6 md:p-8 flex flex-col h-full"
            >
              <p className="text-sm uppercase tracking-[0.16em] text-sky-200">
                Featured Project {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mt-3">
                {project.title}
              </h3>
              <p className="text-sky-100/80 mt-1">{project.category}</p>
              <p className="text-white-50 leading-relaxed mt-5">
                {project.summary}
              </p>

              <ul className="list-disc ms-5 mt-4 space-y-2 text-white-50">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <ul
                aria-label={project.title + " technologies"}
                className="flex flex-wrap gap-2 mt-6"
              >
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/80"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mt-7 pt-5 border-t border-white/10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white text-black px-4 py-2 font-semibold hover:bg-sky-100"
                  >
                    Live demo: {project.title}
                  </a>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/30 px-4 py-2 font-semibold hover:bg-white/10"
                >
                  Source code: {project.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;