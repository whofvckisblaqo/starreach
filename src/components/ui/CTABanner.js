import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-4">
          Get Started
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          Your Star Moment Awaits.
        </h2>
        <p className="text-gray-500 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Join thousands already connecting with the world's biggest names through StarReach.
        </p>
        <Link
          href="/signup"
          className="inline-block w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-gray-800 transition text-center"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}