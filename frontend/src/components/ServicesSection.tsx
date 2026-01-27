function ServicesSection() {
  return (
    <section className="bg-black text-white px-24 py-24">
      <div className="flex justify-between items-center">
        <div className="w-90">
          <p className="mb-2"><span className="text-2xl">____</span> <span className="text-sm ml-1">MY SERVICES ?</span></p>
          <h2 className="text-6xl font-bold mb-12">What I'm Offering</h2>
        </div>
        <p className="w-120">There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
        <button className="px-8 py-3 rounded-full bg-linear-to-r from-[#fe2a2f] via-[#bf178c] to-[#6100fd] text-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.7)]">
          All Services
        </button>
      </div>


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

export default ServicesSection;
