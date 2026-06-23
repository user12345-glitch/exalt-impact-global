import Link from "next/link";
import {
  Leaf, Heart, Shield, Lightbulb, BookOpen, TrendingUp, Star,
  ArrowRight, Users, Globe, HandHeart, ChevronRight
} from "lucide-react";

const pillars = [
  { icon: Leaf,       label: "Creation",   desc: "Environmental stewardship and climate resilience.",            color: "bg-green-50 text-green-700",   href: "/what-we-do#environment" },
  { icon: Users,      label: "People",     desc: "Health, protection, human dignity, and inclusion.",           color: "bg-blue-50 text-blue-700",    href: "/what-we-do#health" },
  { icon: Lightbulb,  label: "Systems",    desc: "Leadership, governance, and institutional strengthening.",     color: "bg-purple-50 text-purple-700", href: "/what-we-do#leadership" },
  { icon: TrendingUp, label: "Economy",    desc: "Livelihoods, entrepreneurship, and economic empowerment.",    color: "bg-amber-50 text-amber-700",   href: "/what-we-do#economy" },
  { icon: Star,       label: "Inner Life", desc: "Faith formation, discipleship, and transformational leadership.", color: "bg-rose-50 text-rose-700",  href: "/what-we-do#faith" },
];

const programs = [
  { icon: Leaf,       name: "Eden Initiative",         tagline: "Restoring Creation. Sustaining the Future.",      href: "/what-we-do#environment" },
  { icon: Heart,      name: "Good Samaritan",          tagline: "Compassion in Action. Wellness for All.",         href: "/what-we-do#health" },
  { icon: Shield,     name: "Shield Initiative",       tagline: "Protecting the Vulnerable. Restoring Hope.",      href: "/what-we-do#protection" },
  { icon: Lightbulb,  name: "Wisdom Initiative",       tagline: "Leading with Integrity. Transforming Society.",   href: "/what-we-do#leadership" },
  { icon: BookOpen,   name: "Daniel Initiative",       tagline: "Equipping Minds. Transforming Futures.",          href: "/what-we-do#education" },
  { icon: TrendingUp, name: "Bethesda Initiative",     tagline: "Creating Opportunities. Building Resilience.",    href: "/what-we-do#economy" },
];

const stats = [
  { value: "7",    label: "Flagship Programs" },
  { value: "5",    label: "Transformation Pillars" },
  { value: "2030", label: "Strategy Horizon" },
  { value: "10+",  label: "Partner Categories" },
];

const values = [
  { label: "Faith",             desc: "God is the foundation of our work." },
  { label: "Integrity",         desc: "Honesty, transparency, and accountability." },
  { label: "Excellence",        desc: "Quality and continuous improvement." },
  { label: "Compassion",        desc: "Responding to human needs with dignity." },
  { label: "Stewardship",       desc: "Responsibly managing resources." },
  { label: "Servant Leadership",desc: "Leading through service and empowerment." },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden pt-20">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: "30px 30px"
          }} />
        </div>
        {/* Gold accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <p className="section-label text-brand-gold mb-4">Empowering Faith · Transforming Futures</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
              Building<br />
              <span className="text-brand-gold">Resilient</span><br />
              Communities
            </h1>
            <p className="text-white/75 text-lg leading-relaxed max-w-lg mb-10">
              A Christian faith-driven social impact organization working at the intersection of faith, development, protection, leadership, and community transformation across East Africa and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/what-we-do" className="btn-primary">
                Explore Our Work <ArrowRight size={16} />
              </Link>
              <Link href="/get-involved#donate" className="btn-outline">
                Support Us
              </Link>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur border border-white/20 p-6 hover:bg-white/15 transition-colors">
                <div className="font-display text-4xl font-bold text-brand-gold mb-1">{s.value}</div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>Scroll</span>
          <div className="w-px h-10 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* ===== MISSION STATEMENT ===== */}
      <section className="bg-brand-cream py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label">Our Mission</p>
          <blockquote className="font-display text-2xl md:text-3xl text-brand-navy leading-relaxed mb-8">
            "To empower people, strengthen communities, and transform futures through faith-driven leadership, sustainable development, strategic partnerships, and holistic empowerment programs."
          </blockquote>
          <Link href="/about" className="btn-ghost">
            About Exalt Impact <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ===== 5 PILLARS ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Global Strategy 2026–2030</p>
            <h2 className="section-title">Five Pillars of Transformation</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
              Sustainable transformation occurs when spiritual, social, economic, environmental, and institutional dimensions of life are addressed together.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group p-6 border border-gray-100 hover:border-brand-gold card-hover bg-white"
              >
                <div className={`w-12 h-12 rounded-full ${p.color} flex items-center justify-center mb-4`}>
                  <p.icon size={22} />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg mb-2">{p.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-brand-gold text-xs font-semibold group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS GRID ===== */}
      <section className="py-20 px-6 bg-brand-sky">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="section-title">Our Programs</h2>
            </div>
            <Link href="/what-we-do" className="btn-ghost whitespace-nowrap">
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <Link
                key={prog.name}
                href={prog.href}
                className="group bg-white p-8 card-hover border-b-4 border-transparent hover:border-brand-gold"
              >
                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors">
                  <prog.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display text-xl text-brand-navy font-bold mb-2">{prog.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{prog.tagline}</p>
                <div className="mt-5 flex items-center gap-1 text-brand-gold text-xs font-semibold">
                  Explore <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT QUOTE ===== */}
      <section className="bg-brand-navy py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-brand-gold text-5xl font-display mb-6">"</p>
          <p className="font-display text-2xl md:text-3xl text-white leading-relaxed mb-6">
            We work alongside communities to unlock potential, restore dignity, and build resilient futures — rooted in the belief that every person carries inherent worth.
          </p>
          <p className="text-white/50 text-sm">— Exalt Impact Network Mission</p>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">What Guides Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-100 border border-gray-100">
            {values.map((v) => (
              <div key={v.label} className="bg-white p-7 hover:bg-brand-sky transition-colors text-center">
                <h4 className="font-display font-bold text-brand-navy mb-2">{v.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GET INVOLVED ===== */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Be Part of It</p>
            <h2 className="section-title">Get Involved</h2>
            <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
              Whether you give, serve, partner, or pray — your involvement creates lasting change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HandHeart,
                title: "Donate",
                desc: "Your generosity funds programs that transform lives across Kenya and East Africa.",
                cta: "Give Today",
                href: "/get-involved#donate",
                accent: "bg-brand-gold",
              },
              {
                icon: Users,
                title: "Volunteer",
                desc: "Share your skills, time, and passion to directly serve communities in need.",
                cta: "Join the Team",
                href: "/get-involved#volunteer",
                accent: "bg-brand-navy",
              },
              {
                icon: Globe,
                title: "Partner",
                desc: "Collaborate with us to maximize reach, resources, and sustainable impact.",
                cta: "Explore Partnership",
                href: "/get-involved#partner",
                accent: "bg-brand-gold-dark",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 card-hover">
                <div className={`w-14 h-14 ${item.accent} rounded-full flex items-center justify-center mb-5`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-2xl text-brand-navy font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link href={item.href} className="btn-ghost text-xs">
                  {item.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
