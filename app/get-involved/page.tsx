import Link from "next/link";
import { Globe, HandHeart, Users, CheckCircle, ArrowRight, Building, Church, GraduationCap, Briefcase } from "lucide-react";

const volunteerAreas = [
  { title: "Community Outreach",        desc: "Support community events, awareness campaigns, and field activities." },
  { title: "Training & Facilitation",   desc: "Share your expertise through workshops, mentorship, and coaching." },
  { title: "Communications & Media",    desc: "Assist with content creation, photography, videography, and social media." },
  { title: "Research & Advocacy",       desc: "Support policy research, campaigns, and community engagement." },
  { title: "Administration & Ops",      desc: "Provide professional support in project management, finance, and admin." },
  { title: "Faith & Mentorship",        desc: "Serve as a mentor, facilitator, or spiritual support volunteer." },
];

const membershipTypes = [
  { type: "Student Member",     desc: "For students and young leaders.",                  icon: GraduationCap },
  { type: "Individual Member",  desc: "For professionals and community members.",          icon: Users },
  { type: "Associate Member",   desc: "For supporters who wish to contribute expertise.",  icon: Briefcase },
  { type: "Life Member",        desc: "For individuals committed to long-term support.",  icon: CheckCircle },
];

const partnerTypes = [
  { icon: Building,  label: "Government Institutions" },
  { icon: Church,    label: "Faith-Based Organizations" },
  { icon: Globe,     label: "Local & International NGOs" },
  { icon: GraduationCap, label: "Academic Institutions" },
  { icon: Briefcase, label: "Corporate Organizations" },
  { icon: HandHeart, label: "Individual Philanthropists" },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-navy px-6 relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Be Part of the Transformation</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">Get Involved</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Together, we can build resilient communities, nurture ethical leaders, promote human dignity, strengthen families, steward creation, and inspire faith-driven transformation.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#donate" className="btn-primary">Donate</a>
            <a href="#volunteer" className="btn-outline">Volunteer</a>
            <a href="#partner" className="border-2 border-brand-gold text-brand-gold font-semibold px-6 py-3 text-sm uppercase tracking-wide hover:bg-brand-gold hover:text-white transition-colors">Partner</a>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label">Invest in Transformation</p>
              <h2 className="section-title mb-6">Donate</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your generosity helps us create sustainable impact in communities across Kenya, East Africa, and beyond. Every contribution supports programs that promote lasting change.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Environmental Stewardship", "Health & Wellness", "Child Protection", "Education", "Economic Empowerment", "Leadership Development", "Faith Transformation"].map((t) => (
                  <span key={t} className="bg-brand-sky text-brand-navy text-xs font-medium px-3 py-1.5">{t}</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">
                "Every gift helps restore dignity, create opportunities, strengthen families, protect vulnerable populations, and transform communities."
              </p>
            </div>

            <div className="space-y-4">
              {/* M-Pesa */}
              <div className="border border-gray-200 p-6 hover:border-brand-gold transition-colors">
                <h4 className="font-semibold text-brand-navy mb-1">M-Pesa (Kenya)</h4>
                <p className="text-sm text-gray-500 mb-2">Paybill Number: <span className="font-mono text-brand-navy">[To be Added]</span></p>
                <p className="text-sm text-gray-500">Account Name: <span className="font-mono text-brand-navy">Exalt Impact Network</span></p>
              </div>
              {/* Bank */}
              <div className="border border-gray-200 p-6 hover:border-brand-gold transition-colors">
                <h4 className="font-semibold text-brand-navy mb-1">Bank Transfer (Kenya)</h4>
                <p className="text-sm text-gray-500">Bank: I &amp; M Bank · Branch: UTWALA</p>
                <p className="text-sm text-gray-500">Account: <span className="font-mono text-brand-navy">Exalt Impact Network · [To be Added]</span></p>
              </div>
              {/* Online */}
              <div className="border border-gray-200 p-6 hover:border-brand-gold transition-colors">
                <h4 className="font-semibold text-brand-navy mb-2">Online Donations</h4>
                <p className="text-sm text-gray-500 mb-3">Donate securely via PayPal, Stripe, Visa, or Mastercard.</p>
                <button className="btn-primary text-xs py-2.5 px-5">Donate Online (Coming Soon)</button>
              </div>
              {/* Monthly */}
              <div className="bg-brand-navy p-6">
                <h4 className="font-semibold text-white mb-2">Become a Monthly Impact Partner</h4>
                <p className="text-white/70 text-sm mb-4">Commit to a monthly contribution that helps sustain long-term programs and community transformation.</p>
                <button className="btn-outline text-xs py-2.5 px-5">Start Monthly Giving</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-20 px-6 bg-brand-sky">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Creating Greater Impact Together</p>
            <h2 className="section-title">Partner With Us</h2>
            <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
              Partnership is at the heart of sustainable transformation. We collaborate with organizations and individuals who share our vision of empowered people and thriving communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
            {partnerTypes.map((p) => (
              <div key={p.label} className="bg-white p-6 text-center hover:shadow-md transition-shadow">
                <p.icon size={28} className="text-brand-gold mx-auto mb-3" />
                <p className="text-xs font-medium text-gray-600">{p.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Program Implementation",   desc: "Co-design and deliver programs that create measurable community impact." },
              { title: "Resource Mobilization",    desc: "Pool funding, expertise, and networks for greater reach." },
              { title: "Capacity Building",        desc: "Strengthen organizational and community capacity together." },
              { title: "Research & Innovation",    desc: "Collaborate on evidence-based approaches to development challenges." },
              { title: "Corporate Social Responsibility", desc: "Fulfil your CSR mandate with impactful, faith-rooted programs." },
              { title: "Advocacy & Awareness",     desc: "Amplify our collective voice for justice, dignity, and inclusion." },
            ].map((op) => (
              <div key={op.title} className="bg-white p-6">
                <h4 className="font-semibold text-brand-navy mb-2">{op.title}</h4>
                <p className="text-gray-500 text-sm">{op.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-navy text-white p-10 text-center">
            <h3 className="font-display text-2xl mb-3">Ready to Partner?</h3>
            <p className="text-white/70 text-sm mb-6">Contact our partnerships team to explore collaboration opportunities.</p>
            <a href="mailto:partnerships@exaltimpactnetwork.org" className="btn-outline">
              partnerships@exaltimpactnetwork.org
            </a>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Use Your Skills</p>
            <h2 className="section-title">Volunteer With Us</h2>
            <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
              Volunteers are an important part of our mission. Whether you have a few hours or long-term availability, your contribution can make a meaningful difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {volunteerAreas.map((v) => (
              <div key={v.title} className="border border-gray-100 p-7 hover:border-brand-gold hover:shadow-md transition-all">
                <div className="w-2 h-10 bg-brand-gold mb-4" />
                <h4 className="font-display font-bold text-brand-navy text-lg mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-sky p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl text-brand-navy mb-2">Join Our Volunteer Team</h3>
              <p className="text-gray-500 text-sm">Email: <a href="mailto:join@exaltimpactnetwork.org" className="text-brand-gold hover:underline">join@exaltimpactnetwork.org</a> · Phone: +254 721 827 994</p>
            </div>
            <a href="mailto:join@exaltimpactnetwork.org" className="btn-primary whitespace-nowrap">
              Apply to Volunteer <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Join the Network</p>
            <h2 className="section-title">Become a Member</h2>
            <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
              Join a growing network of individuals committed to faith-driven social impact and community transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {membershipTypes.map((m) => (
              <div key={m.type} className="bg-white p-7 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <m.icon size={22} className="text-white" />
                </div>
                <h4 className="font-display font-bold text-brand-navy mb-2">{m.type}</h4>
                <p className="text-gray-500 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="font-display text-2xl text-brand-navy mb-3">Member Benefits</h3>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {[
                "Participate in organizational events",
                "Access leadership opportunities",
                "Join volunteer programs",
                "Receive newsletters",
                "Participate in advocacy",
                "Connect with change-makers",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 border border-gray-200">
                  <CheckCircle size={14} className="text-brand-gold" />
                  {b}
                </div>
              ))}
            </div>
            <button className="btn-primary">
              Register as a Member <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 px-6 bg-brand-navy-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label">Work With Us</p>
          <h2 className="font-display text-4xl text-white mb-4">Careers &amp; Internships</h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            We welcome passionate professionals, volunteers, interns, consultants, and researchers who share our commitment to faith-driven social impact.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["Internships", "Volunteer Positions", "Project Staff", "Consultants", "Researchers", "Fellowship Opportunities"].map((o) => (
              <span key={o} className="border border-white/30 text-white/70 text-xs font-medium px-4 py-2">{o}</span>
            ))}
          </div>
          <a href="mailto:careers@exaltimpactnetwork.org" className="btn-outline">
            careers@exaltimpactnetwork.org
          </a>
        </div>
      </section>
    </>
  );
}
