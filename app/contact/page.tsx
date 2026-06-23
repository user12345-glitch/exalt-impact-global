"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", reason: "general" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-navy px-6 relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Reach Out</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Have a question, want to partner, volunteer, or learn more about our work? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <p className="section-label">Send a Message</p>
            <h2 className="section-title mb-8">Get in Touch</h2>

            {submitted ? (
              <div className="bg-brand-sky border border-brand-navy/20 p-10 text-center">
                <CheckCircle size={48} className="text-brand-gold mx-auto mb-4" />
                <h3 className="font-display text-2xl text-brand-navy mb-2">Thank You!</h3>
                <p className="text-gray-600 text-sm">
                  We've received your message and will get back to you within 2–3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Reason for Contact</label>
                  <select
                    value={form.reason}
                    onChange={(e) => setForm({...form, reason: e.target.value})}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="media">Media & Press</option>
                    <option value="careers">Careers & Internships</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({...form, subject: e.target.value})}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    placeholder="Tell us how we can help or how you'd like to get involved..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="section-label">Find Us</p>
            <h2 className="section-title mb-8">Contact Information</h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-sky rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-1">Office Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Vision Apartment – Ground Floor<br />
                    Gesora Road, Nairobi, Kenya
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-sky rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-1">Email Us</h4>
                  <a href="mailto:info@exaltimpactnetwork.org" className="text-brand-gold text-sm hover:underline block">
                    info@exaltimpactnetwork.org
                  </a>
                  <a href="mailto:partnerships@exaltimpactnetwork.org" className="text-gray-500 text-sm hover:text-brand-gold transition-colors block">
                    partnerships@exaltimpactnetwork.org
                  </a>
                  <a href="mailto:careers@exaltimpactnetwork.org" className="text-gray-500 text-sm hover:text-brand-gold transition-colors block">
                    careers@exaltimpactnetwork.org
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-sky rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy mb-1">Call Us</h4>
                  <a href="tel:+254721827994" className="text-brand-gold text-sm hover:underline">
                    +254 721 827 994
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-brand-sky border border-brand-navy/10 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-brand-gold mx-auto mb-2" />
                <p className="text-brand-navy font-semibold text-sm">Nairobi, Kenya</p>
                <p className="text-gray-500 text-xs">Gesora Road, Vision Apartment</p>
                <a
                  href="https://maps.google.com/?q=Gesora+Road+Nairobi+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-brand-gold text-xs font-semibold hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* FAQ teaser */}
            <div className="mt-8 bg-brand-cream p-6">
              <h4 className="font-semibold text-brand-navy mb-4">Frequently Asked Questions</h4>
              <div className="space-y-3">
                {[
                  ["Who does Exalt Impact Network serve?", "Children, youth, women, families, faith communities, persons with disabilities, entrepreneurs, and vulnerable populations."],
                  ["Where do you work?", "Our primary focus is East Africa, with ambitions to expand globally through strategic partnerships."],
                  ["Is your work open to all faiths?", "Yes. While faith-inspired, our services are offered to all people regardless of religion, ethnicity, or background."],
                ].map(([q, a]) => (
                  <details key={q} className="border-b border-gray-200 pb-3">
                    <summary className="text-sm font-semibold text-brand-navy cursor-pointer hover:text-brand-gold transition-colors">
                      {q}
                    </summary>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
