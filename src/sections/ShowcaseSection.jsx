import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const reactLabRef = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      reactLabRef.current,
    ];

    projects.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        },
      );
    });
  }, []);

  return (
    <div id="projects" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Paste App" />
            </div>

            <div className="text-content">
              <a
                href="https://paste-app-wine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-3xl">Paste App – Clipboard Manager</h2>
                <span className="underline" />
              </a>

              <p className="text-white-50 md:text-xl">
                A React-based clipboard manager designed to create, organize,
                and retrieve text snippets efficiently with persistent storage
                and optimized state management.
              </p>

              <ul className="mt-4 text-white-50 space-y-2">
                <li>• CRUD operations with efficient React state management</li>
                <li>• Real-time search and filtering functionality</li>
                <li>• Clipboard API integration for quick copy access</li>
                <li>• LocalStorage-based persistent data storage</li>
                <li>• Fully responsive user interface</li>
              </ul>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/naitik2043/Paste-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black rounded-md font-semibold"
                >
                  GitHub
                </a>

                <a
                  href="https://paste-app-wine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white rounded-md"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#e0f7ff]">
                <img src="/images/project2.png" alt="ReUnix Project" />
              </div>
              <a
                href="https://reunix.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>ReUnix – Digital Alumni Platform</h2>
                <span className="underline" />
              </a>

              <p className="text-white-50">
                Full-stack React and TypeScript platform connecting alumni and
                students through mentorship features and role-based dashboards.
              </p>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#f3e8ff]">
                <img src="/images/project3.png" alt="NG Cartify" />
              </div>
              <a
                href="https://ng-cartify.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>NG-Cartify – E-Commerce Application</h2>
                <span className="underline" />
              </a>
              <p className="text-white-50">
                A React-based e-commerce application featuring dynamic product
                listings, cart management, and a responsive shopping experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20" ref={reactLabRef}>
          <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
            <h2 className="text-2xl md:text-3xl font-semibold">
              React Learning Lab – Structured React Mastery
            </h2>

            <p className="text-white-50 mt-4 max-w-3xl">
              A structured React repository focused on mastering core concepts
              through hands-on mini projects, covering Hooks, Routing, Context
              API, Redux, and performance optimization.
            </p>

            <div className="mt-6">
              <a
                href="https://github.com/naitik2043/react-learning-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-white rounded-md inline-block"
              >
                View Repository →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;