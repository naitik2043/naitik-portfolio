import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import JourneySection from "./sections/JourneySection";
import TechStack from "./sections/TechStack";
import AchievementsSection from "./sections/AchievementsSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1f1f1f",
            color: "#fff",
            border: "1px solid #333",
          },
        }}
      />
      <NavBar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <TechStack />
        <JourneySection />
        <AchievementsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;