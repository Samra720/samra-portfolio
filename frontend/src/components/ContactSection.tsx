import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";

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
    <section className="px-24 mt-40">
      <div className="text-center">
        <h1 className="font-bold text-7xl max-w-225 mx-auto mb-6"><span className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_bottom_right,#ff282e_25%,#960db9_60%,#6200fe_100%)]">Say Hi!</span> and tell me about <span className="block text-right"><FaArrowRightLong className="inline" /> your idea</span></h1>
        <p className="text-[#9d9ea6] text-3xl">Have a nice works? Reach out and let's chat.</p>
        <div className="text-white min-h-screen px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Honeypot Field */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, website: e.target.value })
                }
                className="hidden"
              />

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 text-sm">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm({ ...form, name: e.target.value })
                    }
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Where can I reply"
                    className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-2 transition"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block mb-2 text-sm">Company name</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  placeholder="Your company or website?"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-2 transition"
                />
              </div>

              {/* Services */}
              <div>
                <label className="block mb-6 text-sm">
                  What’s in your mind?<span className="text-red-500">*</span>
                </label>

                <div className="flex flex-wrap gap-4">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service);

                    return (
                      <motion.button
                        key={service}
                        type="button"
                        layout
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => toggleService(service)}
                        className={`px-5 py-2 rounded-full border transition-all duration-300
                      ${isSelected
                            ? "bg-linear-to-r from-pink-500 to-purple-600 border-transparent shadow-lg shadow-purple-500/30"
                            : "border-gray-600 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/20"
                          }`}
                      >
                        {service}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-2 transition resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col justify-end w-full gap-3">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                  className="relative px-10 py-4 rounded-full font-medium
              bg-linear-to-r from-red-500 to-purple-600
              hover:from-pink-500 hover:to-indigo-600
              transition-all duration-300
              shadow-lg shadow-purple-500/40
              hover:shadow-purple-500/60 ml-auto"
                >
                  {loading ? "Sending..." : "Send me your message"}
                </motion.button>
                <p className="text-[#9d9ea6] text-right">I'll try my best to get back to you as soon as possible!</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

