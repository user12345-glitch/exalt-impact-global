"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Who We Are",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Vision & Values", href: "/about#values" },
      { label: "Our Leadership", href: "/about#leadership" },
      { label: "Our Faith", href: "/about#faith" },
      { label: "Our Partners", href: "/about#partners" },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Environment & Climate", href: "/what-we-do#environment" },
      { label: "Health & Wellness", href: "/what-we-do#health" },
      { label: "Protection & Inclusion", href: "/what-we-do#protection" },
      { label: "Leadership & Governance", href: "/what-we-do#leadership" },
      { label: "Education & Skills", href: "/what-we-do#education" },
      { label: "Economic Empowerment", href: "/what-we-do#economy" },
      { label: "Faith & Spiritual", href: "/what-we-do#faith" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Partner With Us", href: "/get-involved#partner" },
      { label: "Donate", href: "/get-involved#donate" },
      { label: "Volunteer", href: "/get-involved#volunteer" },
      { label: "Membership", href: "/get-involved#membership" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-brand-navy text-white text-xs py-1.5 px-6 flex justify-between items-center">
        <span>📍 Nairobi, Kenya &nbsp;|&nbsp; info@exaltimpactnetwork.org</span>
        <span className="hidden md:block">Empowering Faith. Transforming Futures.</span>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Exalt Impact Network"
            width={160}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link flex items-center gap-1 py-5">
                  {item.label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl border-t-2 border-brand-gold z-50 animate-fade-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-brand-navy-dark hover:bg-brand-sky hover:text-brand-navy border-b border-gray-50 last:border-0 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href!} className="nav-link py-5">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link href="/get-involved#donate" className="hidden lg:inline-flex btn-primary text-xs py-2.5 px-5">
          Donate Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-brand-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href || "#"}
                className="block px-6 py-4 font-semibold text-brand-navy border-b border-gray-50 hover:bg-brand-sky"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-10 py-3 text-sm text-gray-600 border-b border-gray-50 hover:bg-brand-sky"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="p-6">
            <Link href="/get-involved#donate" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
