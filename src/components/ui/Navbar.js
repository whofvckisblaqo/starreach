"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-black">
          Star<span className="text-gray-400">Reach</span> ⭐
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-black transition">
            Home
          </Link>
          <Link href="/celebrities" className="text-sm text-gray-600 hover:text-black transition">
            Celebrities
          </Link>
          <Link href="/booking-types" className="text-sm text-gray-600 hover:text-black transition">
            Booking Types
          </Link>
          <Link href="/about" className="text-sm text-gray-600 hover:text-black transition">
            About
          </Link>
          <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition">
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-black border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Home
          </Link>
          <Link
            href="/celebrities"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Celebrities
          </Link>
          <Link
            href="/booking-types"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Booking Types
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-600 hover:text-black transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Contact
          </Link>
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-black border border-black px-5 py-2 rounded-full text-center hover:bg-black hover:text-white transition"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="text-sm bg-black text-white px-5 py-2 rounded-full text-center hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}