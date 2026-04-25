import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24">
        <p className="text-white/70 uppercase tracking-widest text-xs sm:text-sm mb-4 font-light">
          The Premier Celebrity Booking Platform
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Access the World's <br />
          <span className="italic font-light">Biggest Stars.</span>
        </h1>
        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          StarReach connects fans, brands, and event planners with the biggest
          names in entertainment. Your star moment starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/celebrities"
            className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition text-center"
          >
            Explore Celebrities
          </Link>
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition text-center"
          >
            How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}