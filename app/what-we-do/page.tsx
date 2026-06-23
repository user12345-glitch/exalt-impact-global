import Link from "next/link";
import { Leaf, Heart, Shield, Lightbulb, BookOpen, TrendingUp, Star, ArrowRight } from "lucide-react";

const programs = [
  {
    id: "environment",
    icon: Leaf,
    name: "Environment & Climate Resilience",
    initiative: "The Eden Initiative",
    tagline: "Restoring Creation. Sustaining the Future.",
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-700",
    desc: "Exalt Impact Network is committed to promoting environmental stewardship and climate resilience through community-driven solutions that protect natural resources and strengthen sustainable livelihoods.",
    areas: [
      "Conservation and reforestation",
      "Climate-smart agriculture",
      "Water resource management",
      "Renewable energy",
      "Environmental education",
      "Biodiversity protection",
    ],
  },
  {
    id: "health",
    icon: Heart,
    name: "Health, Wellness & Human Development",
    initiative: "The Good Samaritan Initiative",
    tagline: "Compassion in Action. Wellness for All.",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700",
    desc: "We promote holistic health and human development by addressing the physical, emotional, mental, and social well-being of vulnerable populations.",
    areas: [
      "Community health promotion",
      "Mental health & psychosocial support",
      "Nutrition and maternal health",
      "WASH (Water, Sanitation, Hygiene)",
      "Disability inclusion",
      "Substance abuse prevention",
    ],
  },
  {
    id: "protection",
    icon: Shield,
    name: "Protection, Inclusion & Human Dignity",
    initiative: "The Shield Initiative & Prodigal Hope Initiative",
    tagline: "Protecting the Vulnerable. Restoring Hope.",
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700",
    desc: "Every individual deserves to live in safety, dignity, and freedom from abuse, exploitation, discrimination, and neglect.",
    areas: [
      "Child protection and safeguarding",
      "GBV prevention",
      "Human rights advocacy",
      "Refugee support",
      "Psychosocial care",
      "Social reintegration",
    ],
  },
  {
    id: "leadership",
    icon: Lightbulb,
    name: "Leadership & Governance",
    initiative: "The Wisdom Initiative",
    tagline: "Leading with Integrity. Transforming Society.",
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    textColor: "text-amber-700",
    desc: "Strong leadership and accountable institutions are essential for sustainable development and thriving communities.",
    areas: [
      "Ethical leadership training",
      "Civic participation",
      "Governance strengthening",
      "Transparency & accountability",
      "Peacebuilding",
      "Youth leadership development",
    ],
  },
  {
    id: "education",
    icon: BookOpen,
    name: "Education & Skills Development",
    initiative: "The Daniel Initiative",
    tagline: "Equipping Minds. Transforming Futures.",
    color: "bg-rose-600",
    lightColor: "bg-rose-50",
    textColor: "text-rose-700",
    desc: "Education is a powerful catalyst for personal growth, economic opportunity, and community transformation.",
    areas: [
      "Educational access",
      "Vocational training",
      "Digital literacy & STEM",
      "Entrepreneurship",
      "Scholarships & mentorship",
      "Youth employability",
    ],
  },
  {
    id: "economy",
    icon: TrendingUp,
    name: "Economic Empowerment & Livelihoods",
    initiative: "The Bethesda Initiative & Olive Oil Initiative",
    tagline: "Creating Opportunities. Building Resilient Futures.",
    color: "bg-teal-600",
    lightColor: "bg-teal-50",
    textColor: "text-teal-700",
    desc: "We work to strengthen economic resilience and create sustainable livelihood opportunities for vulnerable individuals, families, and communities.",
    areas: [
      "Entrepreneurship development",
      "Financial inclusion",
      "Disability-inclusive livelihoods",
      "Women's economic empowerment",
      "Savings & investment groups",
      "Market access & business support",
    ],
  },
  {
    id: "faith",
    icon: Star,
    name: "Faith & Spiritual Transformation",
    initiative: "The Legacy Initiative",
    tagline: "Building Faith. Shaping Generations.",
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    desc: "Faith is at the heart of lasting transformation. We nurture spiritual growth, discipleship, values-based leadership, and character formation.",
    areas: [
      "Faith formation & discipleship",
      "Mentorship programs",
      "Family strengthening",
      "Intergenerational learning",
      "Servant leadership",
      "Community engagement",
    ],
  },
];

const campaigns = [
  {
    name: "Safe Faith Spaces Campaign",
    theme: "Faith Without Fear. Worship Without Harm.",
    tagline: "Protecting Dignity. Preventing Abuse. Promoting Accountability.",
    goal: "To create safe, inclusive, and accountable faith communities where children, women, youth, and vulnerable individuals are protected from sexual harassment, abuse, exploitation, and all forms of violence.",
    areas: [
      "Sexual harassment prevention",
      "Safeguarding in churches",
      "Child protection",
      "GBV prevention",
      "Survivor-centered support",
      "Faith leader capacity building",
    ],
  },
  {
    name: "Legacy Generations Campaign",
    theme: "Building Strong Families. Shaping Future Generations.",
    tagline: "Faith. Family. Future.",
    goal: "To strengthen families, empower fathers and mothers, mentor young people, and cultivate values-based leadership that creates lasting generational impact.",
    areas: [
      "Fatherhood engagement",
      "Family strengthening",
      "Youth mentorship",
      "Character & values formation",
      "Intergenerational learning",
      "Faith and discipleship",
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-navy px-6 relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />
        <div className="max-w-4xl mx-auto">
          <p className="section-label">What We Do</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">Our Programs<br />&amp; Initiatives</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Seven flagship programs addressing the interconnected challenges of our time — from environmental resilience to spiritual transformation.
          </p>
        </div>
      </section>

      {/* Program index */}
      <nav className="bg-white border-b border-gray-100 sticky top-[68px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex gap-6 overflow-x-auto py-3 scrollbar-hide">
          {programs.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="text-xs font-semibold text-gray-500 hover:text-brand-gold whitespace-nowrap transition-colors py-1">
              {p.initiative.replace("The ", "").replace(" Initiative", "").replace(" & Prodigal Hope Initiative", "")}
            </a>
          ))}
        </div>
      </nav>

      {/* Programs */}
      {programs.map((prog, i) => (
        <section
          id={prog.id}
          key={prog.id}
          className={`py-20 px-6 ${i % 2 === 0 ? "bg-white" : "bg-brand-sky"}`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${prog.textColor}`}>
                {prog.initiative}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-brand-navy font-bold mb-3 leading-tight">
                {prog.name}
              </h2>
              <p className="text-brand-gold font-semibold mb-5 text-sm italic">{prog.tagline}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{prog.desc}</p>
              <div className="grid grid-cols-2 gap-2">
                {prog.areas.map((a) => (
                  <div key={a} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
            <div className={`${prog.lightColor} p-12 flex items-center justify-center min-h-64 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
              <div className="text-center">
                <div className={`w-20 h-20 ${prog.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <prog.icon size={36} className="text-white" />
                </div>
                <p className="font-display text-xl text-brand-navy font-bold">{prog.name.split(" ")[0]}</p>
                <p className={`text-sm font-semibold mt-1 ${prog.textColor}`}>{prog.tagline}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Campaigns */}
      <section className="py-20 px-6 bg-brand-navy-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Awareness &amp; Change</p>
            <h2 className="font-display text-4xl text-white mb-4">Our Campaigns</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {campaigns.map((c) => (
              <div key={c.name} className="bg-white/10 p-8 border border-white/10 hover:bg-white/15 transition-colors">
                <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-2">{c.theme}</p>
                <h3 className="font-display text-2xl text-white font-bold mb-2">{c.name}</h3>
                <p className="text-white/50 text-sm italic mb-5">{c.tagline}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{c.goal}</p>
                <div className="flex flex-wrap gap-2">
                  {c.areas.map((a) => (
                    <span key={a} className="bg-white/10 text-white/70 text-xs px-3 py-1">{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label">Crisis Response</p>
          <h2 className="section-title mb-6">Emergency Relief</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            During times of crisis, disaster, conflict, or emergency, Exalt Impact Network responds with compassion and practical support. We work closely with local communities and partners to ensure timely and effective humanitarian responses.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {[
              "Emergency food assistance", "WASH", "Psychosocial support",
              "Child protection services", "Shelter & NFIs", "Community resilience", "Faith and spiritual care"
            ].map((item) => (
              <span key={item} className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-4 py-2">
                {item}
              </span>
            ))}
          </div>
          <Link href="/contact" className="btn-ghost">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
