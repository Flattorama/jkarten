import { Brain, Lock, Briefcase, type LucideIcon } from "lucide-react";

interface Pillar {
  title: string;
  desc: string;
  tech: string;
  icon: LucideIcon;
}

const pillars: Pillar[] = [
  {
    title: "Artificial Intelligence",
    desc: "Predictive capability is the ultimate security asset. Investing in cognitive computing and supply chain visibility.",
    tech: "Conbo.ai",
    icon: Brain,
  },
  {
    title: "Cybersecurity",
    desc: "In a zero-trust world, security must be intrinsic. Focusing on Post-Quantum Cryptography and OT Security.",
    tech: "NanoLock Security",
    icon: Lock,
  },
  {
    title: "Photonics & Hardware",
    desc: "Software eats the world, but hardware sustains it. Backing the physical layer of the digital future.",
    tech: "Diamond Electronics",
    icon: Briefcase,
  },
];

export default function ThesisSection() {
  return (
    <section
      id="thesis"
      className="py-20 bg-card border-y border-white/5"
      data-testid="section-thesis"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:max-w-2xl">
          <h2 className="text-sm font-semibold text-accent-blue-500 uppercase tracking-wider mb-3">
            Investment Thesis
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Dual-Use Technology
          </h3>
          <p className="text-slate-400">
            "Dual-Use" refers to technologies with both commercial and security
            applications. By serving two masters—Profit and Security—these
            companies are insulated from standard market recessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-md border border-white/10 bg-background hover:bg-card transition-colors"
              data-testid={`card-pillar-${pillar.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-accent-blue-500 transition-colors">
                <pillar.icon size={20} />
              </div>
              <h4 className="text-xl font-medium text-white mb-3">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {pillar.desc}
              </p>
              <div className="text-xs font-mono text-accent-blue-500">
                Portfolio: {pillar.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
