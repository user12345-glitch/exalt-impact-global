import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      {/* CTA strip */}
      <div className="bg-brand-gold py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-1">
              Ready to Transform Futures?
            </h3>
            <p className="text-white/80 text-sm">Join the movement. Every act of generosity creates lasting impact.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/get-involved#donate" className="btn-outline">
              Donate Now
            </Link>
            <Link href="/get-involved#volunteer" className="bg-white text-brand-gold font-semibold px-6 py-3 text-sm uppercase tracking-wide hover:bg-brand-sky transition-colors">
              Volunteer
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-5">
            <Image
              src="/logo.png"
              alt="Exalt Impact Network"
              width={180}
              height={68}
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            A Christian faith-driven social impact organization empowering people, strengthening communities, and transforming futures.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Our Programs</h4>
          <ul className="space-y-2.5">
            {[
              ["Environment & Climate", "/what-we-do#environment"],
              ["Health & Wellness", "/what-we-do#health"],
              ["Protection & Inclusion", "/what-we-do#protection"],
              ["Leadership & Governance", "/what-we-do#leadership"],
              ["Education & Skills", "/what-we-do#education"],
              ["Economic Empowerment", "/what-we-do#economy"],
              ["Faith & Spiritual", "/what-we-do#faith"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="text-gray-400 text-sm hover:text-brand-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              ["About Us", "/about"],
              ["Our Strategy 2026–2030", "/about#strategy"],
              ["Get Involved", "/get-involved"],
              ["Donate", "/get-involved#donate"],
              ["Volunteer", "/get-involved#volunteer"],
              ["Careers & Internships", "/careers"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="text-gray-400 text-sm hover:text-brand-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-gray-400">
              <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
              <span>Vision Apartment – Ground Floor, Gesora Road, Nairobi, Kenya</span>
            </li>
            <li>
              <a href="mailto:info@exaltimpactnetwork.org" className="flex gap-3 text-sm text-gray-400 hover:text-brand-gold transition-colors">
                <Mail size={16} className="text-brand-gold mt-0.5 shrink-0" />
                info@exaltimpactnetwork.org
              </a>
            </li>
            <li>
              <a href="tel:+254721827994" className="flex gap-3 text-sm text-gray-400 hover:text-brand-gold transition-colors">
                <Phone size={16} className="text-brand-gold mt-0.5 shrink-0" />
                +254 721 827 994
              </a>
            </li>
          </ul>
          <div className="mt-6 p-4 border border-gray-700 bg-white/5">
            <p className="text-xs text-gray-400 mb-3">Careers & Internships</p>
            <a href="mailto:careers@exaltimpactnetwork.org" className="text-brand-gold text-sm hover:underline">
              careers@exaltimpactnetwork.org
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Exalt Impact Network. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Use</Link>
            <Link href="/safeguarding" className="hover:text-brand-gold transition-colors">Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
