import { lazy, Suspense, useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";

const HeroExperience = lazy(() =>
  import("../components/Models/hero_models/HeroExperience"),
);

const Hero = () => {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <section id="hero" className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute top-0 left-0 z-10" aria-hidden="true">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        <header className="hero-copy">
          <div className="flex flex-col gap-5 max-w-3xl">
            <p className="hero-badge">Software Engineering · Data Science · AI Systems</p>
            <h1 id="hero-title" className="text-5xl md:text-7xl font-bold relative z-10">
              Naitik Gupta
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold relative z-10">
              Computer Science & Engineering student building software and data products
            </h2>
            <p className="text-white-50 md:text-xl relative z-10">
              B.Tech CSE student at KIET Deemed to be University, building responsive web applications, AI-agent governance systems, and applied machine-learning projects.
            </p>
            <p className="text-white-50 relative z-10">
              2024–2028 · CGPA 8.27/10 · Open to software engineering and data science internship opportunities
            </p>

            <div className="relative z-10">
              <Button
                text="View Selected Projects"
                className="md:w-80 md:h-16 w-60 h-12 font-medium"
                id="projects"
              />
            </div>
          </div>
        </header>

        <figure className="hero-3d-layout" aria-label="Interactive 3D workspace">
          {showExperience ? (
            <Suspense
              fallback={
                <div className="hero-scene-placeholder hero-scene-loading" role="status">
                  Loading the interactive room…
                </div>
              }
            >
              <HeroExperience />
            </Suspense>
          ) : (
            <div className="hero-scene-placeholder">
              <div className="hero-scene-prompt">
                <span className="hero-scene-kicker">Interactive 3D workspace</span>
                <button
                  className="hero-scene-load"
                  type="button"
                  onClick={() => setShowExperience(true)}
                >
                  Explore the room
                </button>
              </div>
            </div>
          )}
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
