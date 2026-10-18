import { lazy, Suspense, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import TitleHeader from "../components/TitleHeader";

const ContactExperience = lazy(() =>
  import("../components/Models/contact/ContactExperience"),
);

const Contact = () => {
  const formRef = useRef(null);
  const sceneRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return undefined;

    if (typeof window.IntersectionObserver !== "function") {
      setShowExperience(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowExperience(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px 0px" },
    );

    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      toast.success(`Thanks ${form.name}! Your message was sent.`);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-80px)] flex items-center py-8 scroll-mt-32"
      aria-labelledby="contact-title"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        <TitleHeader
          id="contact-title"
          title="Get in Touch"
          sub="Interested in software engineering, full-stack, or data science opportunities? Feel free to reach out."
        />

        <div className="grid-12-cols mt-6 items-stretch gap-6">
          <div className="xl:col-span-5">
            <div className="card-border rounded-xl p-7 h-full flex items-center">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="3"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <span className="cta-button group">
                    <span className="bg-circle" aria-hidden="true" />
                    <span className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <span className="arrow-wrapper" aria-hidden="true">
                      <img src="/images/arrow-down.svg" alt="" />
                    </span>
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-[320px]" aria-hidden="true">
            <div
              ref={sceneRef}
              className="contact-scene bg-[#cd7c2e] w-full h-full rounded-3xl overflow-hidden hover:cursor-grab"
            >
              {showExperience ? (
                <Suspense fallback={<div className="contact-scene-placeholder" />}>
                  <ContactExperience />
                </Suspense>
              ) : (
                <div className="contact-scene-placeholder" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
