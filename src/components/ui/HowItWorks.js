const steps = [
  {
    number: "01",
    title: "Browse & Choose",
    description: "Search our curated roster of A-list celebrities and find the perfect match for your needs.",
  },
  {
    number: "02",
    title: "Select Your Experience",
    description: "Pick from 6 exclusive booking types — from VIP memberships to full event appearances.",
  },
  {
    number: "03",
    title: "Confirm & Connect",
    description: "Complete your booking securely and get ready for your star moment.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center px-4">
              <p className="text-6xl sm:text-7xl font-bold text-gray-100 mb-4">
                {step.number}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}