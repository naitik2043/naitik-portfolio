import TitleHeader from "../components/TitleHeader";
import { achievements, certifications } from "../constants";

const AchievementsSection = () => {
  return (
    <>
      <section
        id="achievements"
        className="w-full section-padding scroll-mt-32"
        aria-labelledby="achievements-title"
      >
        <div className="max-w-7xl mx-auto">
          <TitleHeader
            id="achievements-title"
            title="Achievements"
            sub="Competition recognition and verified coding-profile milestones"
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {achievements.map((achievement) => (
              <li
                key={achievement.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7"
              >
                <h3 className="text-xl md:text-2xl font-semibold">
                  {achievement.title}
                </h3>
                <p className="text-white-50 leading-relaxed mt-3">
                  {achievement.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="certifications"
        className="w-full section-padding scroll-mt-32"
        aria-labelledby="certifications-title"
      >
        <div className="max-w-7xl mx-auto">
          <TitleHeader
            id="certifications-title"
            title="Certifications"
            sub="Credentials listed in the submitted resumes"
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {certifications.map((certification) => (
              <li
                key={certification.name}
                className="rounded-2xl border border-white/10 bg-[#0d1118] p-6 md:p-7"
              >
                <h3 className="text-xl font-semibold">{certification.name}</h3>
                <p className="text-white-50 mt-3">
                  {certification.issuer} · {certification.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AchievementsSection;