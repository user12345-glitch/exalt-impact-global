import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const approaches = [
  { title: "Community-Led Development",   desc: "Communities participate in identifying challenges and designing solutions." },
  { title: "Capacity Building",            desc: "We strengthen skills, leadership, and institutional capacity." },
  { title: "Partnership & Collaboration", desc: "We work across sectors to maximize impact." },
  { title: "Evidence-Based Programming",  desc: "Programs are informed by data, research, and learning." },
  { title: "Faith & Values-Based Transformation", desc: "We nurture integrity, compassion, and servant leadership." },
  { title: "Sustainability & Local Ownership",     desc: "We build local systems that continue beyond project cycles." },
];

const partners = [
  "Governments and Public Institutions",
  "Faith-Based Organizations",
  "Churches and Religious Networks",
  "Local and International NGOs",
  "Universities and Research Institutions",
  "Development Agencies",
  "Foundations and Philanthropic Organizations",
  "Corporate Partners",
  "Community-Based Organizations",
  "Social Enterprises",
];

const advocacy = [
  "Child Protection", "Safeguarding", "Prevention of Sexual Harassment and Abuse",
  "Gender Equality", "Human Rights", "Disability Inclusion",
  "Youth Participation", "Climate Justice", "Ethical Leadership and Governance", "Faith-Based Accountability",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-navy px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Who We Are</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">About Exalt<br />Impact Network</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A Christian faith-driven social impact organization that exists to empower people, strengthen communities, and transform futures through holistic development, strategic partnerships, advocacy, and values-based leadership.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="section-title mb-6">Why We Exist</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Exalt Impact Network was established in response to the growing need for integrated and sustainable solutions to the challenges facing communities across Africa and beyond.
              </p>
              <p>
                Recognizing that poverty, inequality, environmental degradation, weak governance, family breakdown, and spiritual challenges are interconnected, the organization was founded to provide holistic, faith-informed responses that empower individuals and communities to thrive.
              </p>
              <p>
                Since its inception, Exalt Impact Network has expanded its focus across leadership development, environmental stewardship, protection and safeguarding, education, economic empowerment, health and wellness, and faith formation.
              </p>
              <p>
                Today, the organization continues to build strategic partnerships that amplify impact and create sustainable transformation for generations to come.
              </p>
            </div>
          </div>
          <div className="bg-brand-sky p-10 border-l-4 border-brand-gold">
            <h3 className="font-display text-2xl text-brand-navy mb-6">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg font-display italic">
              "To see transformed individuals, thriving communities, and sustainable nations empowered by faith, integrity, innovation, and servant leadership."
            </p>
            <h3 className="font-display text-2xl text-brand-navy mb-4">Our Tagline</h3>
            <p className="text-brand-gold font-semibold text-xl">Empowering Faith. Transforming Futures.</p>
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section id="strategy" className="py-20 px-6 bg-brand-navy-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Global Strategy 2026–2030</p>
            <h2 className="font-display text-4xl text-white mb-4">Five Pillars of Transformation</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm">
              By 2030, we envision thriving communities where people live with dignity, institutions are strong, livelihoods are sustainable, and faith inspires lasting transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
            {[
              { label: "Creation",   desc: "Environmental stewardship and climate resilience." },
              { label: "People",     desc: "Health, protection, human dignity, and inclusion." },
              { label: "Systems",    desc: "Leadership, governance, and institutional strengthening." },
              { label: "Economy",    desc: "Livelihoods, entrepreneurship, and economic empowerment." },
              { label: "Inner Life", desc: "Faith formation, discipleship, and transformational leadership." },
            ].map((p, i) => (
              <div key={p.label} className="bg-white/5 hover:bg-white/10 transition-colors p-7">
                <div className="font-display text-5xl text-brand-gold/30 font-bold mb-3">{String(i+1).padStart(2,"0")}</div>
                <h3 className="font-display text-xl text-white font-bold mb-2">{p.label}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">What Guides Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "Faith",              d: "God is the foundation of our work." },
              { v: "Integrity",          d: "We uphold honesty, transparency, and accountability." },
              { v: "Excellence",         d: "We pursue quality and continuous improvement." },
              { v: "Compassion",         d: "We respond to human needs with dignity and empathy." },
              { v: "Stewardship",        d: "We responsibly manage resources and opportunities." },
              { v: "Servant Leadership", d: "We lead through service and empowerment." },
              { v: "Inclusivity",        d: "We embrace diversity and equal opportunity." },
              { v: "Sustainability",     d: "We invest in solutions that create lasting impact." },
            ].map((item) => (
              <div key={item.v} className="bg-white p-6 border-t-2 border-brand-gold hover:shadow-md transition-shadow">
                <h4 className="font-display font-bold text-brand-navy text-lg mb-2">{item.v}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faith */}
      <section id="faith" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label">Our Foundation</p>
          <h2 className="section-title mb-6">Our Faith</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Our faith inspires and guides everything we do. Rooted in biblical principles of stewardship, compassion, justice, servant leadership, integrity, and the dignity of every person, we seek to demonstrate God's love through practical action and meaningful service.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            While our work is inspired by Christian faith, our services are offered to all people regardless of religion, ethnicity, gender, age, disability, or social status. We believe every person carries inherent worth and deserves opportunities to thrive.
          </p>
          <div className="inline-block pull-quote text-left">
            <p className="font-display text-xl text-brand-navy italic">
              "We serve people of all faiths, backgrounds, cultures, genders, and communities with respect, compassion, and without discrimination."
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 px-6 bg-brand-sky">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Who Leads Us</p>
            <h2 className="section-title">Our Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: "Executive Director & Founder", desc: "Provides strategic leadership and oversees the implementation of the organization's vision, mission, and programs." },
              { role: "Board of Directors", desc: "Provides governance oversight, strategic direction, policy guidance, and accountability to ensure the organization remains faithful to its mission." },
              { role: "Management Team", desc: "Leads program implementation, partnerships, finance, operations, resource mobilization, and organizational development." },
            ].map((l) => (
              <div key={l.role} className="bg-white p-8">
                <div className="w-14 h-14 bg-brand-navy rounded-full mb-5" />
                <h3 className="font-display text-xl text-brand-navy font-bold mb-3">{l.role}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="section-label">How We Work</p>
            <h2 className="section-title mb-6">Our Approaches</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Our work is guided by a holistic and community-centered approach that creates sustainable change long after projects end.
            </p>
            <div className="space-y-5">
              {approaches.map((a) => (
                <div key={a.title} className="flex gap-4">
                  <CheckCircle size={20} className="text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">{a.title}</h4>
                    <p className="text-gray-500 text-sm">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advocacy */}
          <div id="advocacy">
            <p className="section-label">Policy & Social Change</p>
            <h2 className="section-title mb-6">Our Advocacy</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We advocate for justice, dignity, inclusion, and sustainable development through awareness campaigns, policy engagement, research, and partnerships.
            </p>
            <div className="flex flex-wrap gap-2">
              {advocacy.map((a) => (
                <span key={a} className="bg-brand-sky text-brand-navy text-xs font-semibold px-3 py-1.5 border border-brand-navy/10">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Collaboration</p>
            <h2 className="section-title">Our Partners</h2>
            <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
              We believe lasting transformation is achieved through collaboration. Together, we leverage resources, expertise, innovation, and influence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
            {partners.map((p) => (
              <div key={p} className="bg-white p-5 text-center hover:bg-brand-sky transition-colors">
                <p className="text-gray-600 text-xs font-medium leading-snug">{p}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/get-involved#partner" className="btn-ghost">
              Become a Partner <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
