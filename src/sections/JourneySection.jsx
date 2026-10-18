import TitleHeader from "../components/TitleHeader";
import { education } from "../constants";

const JourneySection = () => {
  return (
    <section
      id="education"
      className="w-full section-padding scroll-mt-32"
      aria-labelledby="education-title"
    >
      <div className="max-w-7xl mx-auto">
        <TitleHeader
          id="education-title"
          title="Education"
          sub="Academic background and relevant coursework"
        />

        <article className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                {education.degree}
              </h3>
              <p className="text-white-50 text-lg mt-2">
                {education.institution} · {education.location}
              </p>
              <p className="text-white/70 mt-2">{education.period}</p>
            </div>
            <p className="rounded-xl border border-sky-200/30 bg-sky-200/10 px-5 py-3 text-xl font-semibold text-sky-100">
              CGPA: {education.cgpa}
            </p>
          </div>

          <h4 className="text-lg font-semibold mt-8">Relevant Coursework</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="rounded-lg border border-white/10 px-4 py-3 text-white-50"
              >
                {course}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default JourneySection;