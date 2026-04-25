const stats = [
  { value: "500+", label: "Celebrities Listed" },
  { value: "10,000+", label: "Bookings Completed" },
  { value: "50", label: "States Covered" },
  { value: "4.9★", label: "Average Rating" },
];

export default function Stats() {
  return (
    <section className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</p>
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}