import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding scroll-mt-32">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Peer & Project Feedback"
          sub="Experiences from collaborations and academic projects"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((item) => (
            <GlowCard card={item} key={item.name}>
              <div className="flex items-center gap-3">
                <img
                  src={item.imgPath}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-white-50 text-sm">{item.role}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;