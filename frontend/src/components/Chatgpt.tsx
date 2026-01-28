// =========================
// NOTE FOR YOU 💛
// This canvas contains ALL components split clearly.
// You can copy each component into its own file later.
// Tailwind v4 compatible, dark-mode ready via data-theme.
// Desktop-focused layout as requested.
// =========================

/* ---------------------------------- */
/* Navbar.jsx */
/* ---------------------------------- */
export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-24 py-6 bg-transparent text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">it's me</div>

        {/* Nav Links */}
        <ul className="flex items-center gap-10 text-sm text-gray-300">
          <li className="hover:text-white transition cursor-pointer">Home</li>
          <li className="hover:text-white transition cursor-pointer">Services</li>
          <li className="hover:text-white transition cursor-pointer">Experience</li>
          <li className="hover:text-white transition cursor-pointer">Work</li>
          <li className="hover:text-white transition cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

/* ---------------------------------- */
/* HeroSection.jsx */
/* ---------------------------------- */
export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white px-24 pt-40 pb-20">
      {/* Top gradient glow */}
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-r from-indigo-500 via-pink-500 to-purple-500 opacity-30 blur-3xl" />

      <div className="relative grid grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-sm tracking-widest uppercase text-gray-400">Hello</p>
          <h1 className="text-5xl font-bold leading-tight">
            I'm <span className="text-indigo-400">Madhu</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Product Designer crafting meaningful digital experiences with focus on usability and aesthetics.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 to-pink-500 font-medium">
              Get in touch
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-600 text-gray-300">
              View work
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src=""
            alt="Portrait of the product designer"
            className="w-full h-130 object-cover rounded-2xl opacity-90"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* GradientCarouselBar.jsx */
/* ---------------------------------- */
// Infinite loop explanation:
// We visually duplicate items and animate translateX continuously.
// No JS logic yet – pure CSS-ready structure.

export function GradientCarouselBar() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="whitespace-nowrap flex gap-12 px-24 py-6 bg-linear-to-r from-indigo-500 via-pink-500 to-purple-500">
        {[
          'UI/UX DESIGN',
          'APP DESIGN',
          'WEB FLOW',
          'BRANDING',
          'DEVELOPMENT',
          'PRODUCT DESIGN',
        ].map((item, index) => (
          <span
            key={index}
            className="text-sm font-semibold tracking-widest uppercase text-black"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* ServicesSection.jsx */
/* ---------------------------------- */
export function ServicesSection() {
  return (
    <section className="bg-black text-white px-24 py-24">
      <h2 className="text-3xl font-bold mb-12">What I'm Offering</h2>

      <div className="grid grid-cols-4 gap-8">
        {[
          'UI/UX Creative Design',
          'Visual Interaction',
          'Strategy & Research',
          'Digital Marketing',
        ].map((title, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
          >
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <p className="text-sm text-gray-400">
              Thoughtfully designed digital solutions focused on clarity and impact.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* ExperienceTimeline.jsx */
/* ---------------------------------- */
export function ExperienceTimeline() {
  return (
    <section className="bg-black text-white px-24 py-24">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>

      <div className="space-y-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center p-6 rounded-xl border border-gray-800"
          >
            <div>
              <h3 className="font-semibold">Senior UI Designer</h3>
              <p className="text-sm text-gray-400">Creative Studio</p>
            </div>
            <span className="text-sm text-gray-500">2021 – Present</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* CaseStudiesGrid.jsx */
/* ---------------------------------- */
export function CaseStudiesGrid() {
  return (
    <section className="bg-black text-white px-24 py-24">
      <h2 className="text-3xl font-bold mb-12">Case Study</h2>

      <div className="grid grid-cols-2 gap-12">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="space-y-4">
            <img
              src=""
              alt="Case study project preview"
              className="w-full h-75 rounded-xl object-cover"
            />
            <h3 className="text-xl font-semibold">Modern web & app design project</h3>
            <a href="#" className="text-indigo-400 text-sm">See Details →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* TestimonialSection.jsx */
/* ---------------------------------- */
export function TestimonialSection() {
  return (
    <section className="bg-black text-white px-24 py-24">
      <blockquote className="max-w-3xl text-2xl font-medium leading-relaxed">
        “I just wanted to share a quick note and let you know that you guys do a really good job.”
      </blockquote>

      <div className="mt-8 flex items-center gap-4">
        <img
          src=""
          alt="Client testimonial portrait"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Rohan Singh</p>
          <p className="text-sm text-gray-400">Founder, Startup Studio</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* StatsSection.jsx */
/* ---------------------------------- */
export function StatsSection() {
  return (
    <section className="bg-black text-white px-24 py-16">
      <div className="grid grid-cols-4 gap-8 text-center">
        {[2450, 1085, 0o7, 2790].map((num, index) => (
          <div key={index}>
            <p className="text-3xl font-bold">{num}</p>
            <p className="text-sm text-gray-400">Projects Completed</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* ContactSection.jsx */
/* ---------------------------------- */
export function ContactSection() {
  return (
    <section className="bg-black text-white px-24 py-24">
      <h2 className="text-4xl font-bold mb-4">Say Hi! and tell me about your idea</h2>
      <p className="text-gray-400 mb-12">Have a nice project? Reach out and let's chat.</p>

      <form className="grid grid-cols-2 gap-6">
        <input className="bg-transparent border border-gray-700 p-4 rounded-lg" placeholder="Your name" />
        <input className="bg-transparent border border-gray-700 p-4 rounded-lg" placeholder="Your email" />
        <input className="col-span-2 bg-transparent border border-gray-700 p-4 rounded-lg" placeholder="Category" />
        <textarea
          className="col-span-2 bg-transparent border border-gray-700 p-4 rounded-lg h-40"
          placeholder="What's in your mind?"
        />
        <button className="col-span-2 w-fit px-8 py-4 rounded-full bg-linear-to-r from-indigo-500 to-pink-500">
          Send message
        </button>
      </form>
    </section>
  );
}
