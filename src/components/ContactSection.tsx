import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import ThemeButton from "./ThemeButton";

const servicesList = [
  "Mobile App",
  "Website Design",
  "Branding",
  "Webflow Development",
  "App Design",
  "Graphic Design",
  "WordPress",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "", // honeypot (spam protection)
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot spam protection
    if (form.website) {
      return;
    }

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (selectedServices.length === 0) {
      toast.error("Please select at least one service.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          company: form.company,
          services: selectedServices.join(", "),
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        website: "",
      });
      setSelectedServices([]);
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="px-6 md:px-12 xl:px-24 mt-20 md:mt-30 lg:mt-40">
      <div>
        <div className="text-center mb-10 md:mb-20">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:6xl xl:7xl max-w-4xl mx-auto mb-6 leading-tight">
            <span className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_bottom_right,#ff282e_25%,#960db9_60%,#6200fe_100%)]">
              Say Hi!
            </span>{" "}
            and tell me about{" "}
            <span className="block md:text-right mt-2 md:mt-0">
              <FaArrowRightLong className="hidden md:inline mr-4" /> your idea
            </span>
          </h1>
          <p className="text-muted text-md sm:text-xl md:text-2xl lg:text-3xl px-4">
            Have a nice works? Reach out and let's chat.
          </p>
        </div>

        <div className="text-main min-h-screen py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, website: e.target.value })
                }
                className="hidden"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 text-sm">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Hello..."
                    className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-2 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Where can I reply"
                    className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-2 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm">Company name</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Your company or website?"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-2 transition"
                />
              </div>

              <div>
                <label className="block mb-6 text-sm text-center md:text-left">
                  What’s in your mind?<span className="text-red-500">*</span>
                </label>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <motion.button
                        key={service}
                        type="button"
                        layout
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 md:px-5 py-2 rounded-full border text-sm md:text-base transition-all duration-300
                      ${isSelected
                            ? "bg-linear-to-r from-pink-500 to-purple-600 border-transparent shadow-lg"
                            : "border-gray-600 hover:border-purple-500"
                          }`}
                        onClick={() => toggleService(service)}
                      >
                        {service}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-2 transition resize-none"
                />
              </div>

              <div className="flex flex-col items-center md:items-end w-full gap-4">
                <ThemeButton
                  type="submit"
                  disabled={loading}
                  className="md:w-auto ml-auto"
                  >
                  {loading ? "Sending..." : "Send me your message"}
                </ThemeButton>
                <p className="text-muted text-center md:text-right text-sm">
                  I'll try my best to get back to you as soon as possible!
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

