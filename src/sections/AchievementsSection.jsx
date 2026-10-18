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
            sub="Competition recognition and coding-profile milestones"
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
            sub="Professional credentials, course completion, and participation records"
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {certifications.map((certification) => (
              <li
                key={certification.name}
                className="rounded-2xl border border-white/10 bg-[#0d1118] p-6 md:p-7"
              >
                <p className="text-sky-200 text-sm font-medium uppercase tracking-wide">
                  {certification.type}
                </p>
                <h3 className="text-xl font-semibold mt-2">
                  {certification.name}
                </h3>
                <p className="text-white-50 mt-3">
                  <span className="font-medium text-white">Issuer:</span>{" "}
                  {certification.issuer}
                </p>
                <p className="text-white-50 mt-1">
                  <span className="font-medium text-white">Date:</span>{" "}
                  {certification.date}
                </p>
                {certification.detail && (
                  <p className="text-white-50 leading-relaxed mt-3">
                    {certification.detail}
                  </p>
                )}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  <a
                    className="text-sky-200 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
                    href={certification.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${certification.name} certificate PDF in a new tab`}
                  >
                    View certificate (PDF)
                  </a>
                  {certification.verificationUrl && (
                    <a
                      className="text-sky-200 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
                      href={certification.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${certification.name} in a new tab`}
                    >
                      Verify credential
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AchievementsSection;