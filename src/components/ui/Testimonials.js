const testimonials = [
  {
    quote: "StarReach made booking Kevin Hart for our gala effortless. Truly world-class service.",
    name: "Marcus T.",
    role: "Event Planner",
  },
  {
    quote: "The VIP membership got me front-row Beyoncé meet & greet access before tickets sold out.",
    name: "Janelle R.",
    role: "Fan",
  },
  {
    quote: "Securing Serena Williams for our brand campaign was seamless and highly professional.",
    name: "David K.",
    role: "Brand Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">
            What People Say
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Trusted by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-black">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}