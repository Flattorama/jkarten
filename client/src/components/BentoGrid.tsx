import { TrendingUp, Brain, Shield, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BentoGrid() {
  return (
    <section id="bio" className="px-6 py-20 max-w-7xl mx-auto" data-testid="section-bio">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
        <div
          className="md:col-span-2 row-span-2 rounded-2xl bg-card border border-white/10 p-8 flex flex-col justify-between relative overflow-visible group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)] hover:border-accent-blue-500/40"
          data-testid="card-investor"
        >
          <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
            <TrendingUp size={32} className="text-accent-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent-blue-500 uppercase tracking-wider mb-2">
              The Investor
            </h3>
            <h2 className="text-3xl font-serif text-white mb-4">
              Principal at Awz Ventures
            </h2>
            <p className="text-slate-400 max-w-md">
              Specializing in M&A, Capital Strategy, and Corporate Growth.
              Identifying technology that serves a dual mandate: driving
              economic prosperity while securing critical infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border-l-2 border-accent-blue-500 pl-4">
              <div className="text-3xl font-bold text-white" data-testid="text-moic">2.7x</div>
              <div className="text-xs text-slate-400 uppercase">MOIC (Prev. Fund)</div>
            </div>
            <div className="border-l-2 border-accent-blue-500 pl-4">
              <div className="text-3xl font-bold text-white" data-testid="text-irr">22.12%</div>
              <div className="text-xs text-slate-400 uppercase">IRR (Prev. Fund)</div>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl bg-card border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)] hover:border-accent-blue-500/40"
          data-testid="card-scholar"
        >
          <Brain size={24} className="text-slate-400 mb-4" />
          <div>
            <h3 className="text-xl font-serif text-white mb-2">The Scholar</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Merging Financial Engineering with Psychology. Columbia University
              Magna Cum Laude graduate.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/5 border-white/5 text-slate-300">
                Financial Engineering
              </Badge>
              <Badge variant="secondary" className="bg-white/5 border-white/5 text-slate-300">
                Behavioral Economics
              </Badge>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl bg-card border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)] hover:border-accent-blue-500/40"
          data-testid="card-soldier"
        >
          <Shield size={24} className="text-slate-400 mb-4" />
          <div>
            <h3 className="text-xl font-serif text-white mb-2">The Soldier</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Veteran Staff Sergeant, IDF Intelligence Division (Horizon Unit).
              Instilling a zero-failure mindset into capital deployment.
            </p>
          </div>
        </div>

        <div
          className="md:col-span-2 rounded-2xl bg-card border border-white/10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)] hover:border-accent-blue-500/40"
          data-testid="card-bridge"
        >
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
              The Bridge
            </h3>
            <h2 className="text-2xl font-serif text-white mb-2">
              The Kibbutz & Iftach Group
            </h2>
            <p className="text-slate-400 text-sm">
              Democratizing access to global capital for Israeli startups.
              Founded "The Kibbutz" accelerator to provide a soft landing for
              founders in NYC.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"
              data-testid="link-bridge-globe"
            >
              <Globe size={20} className="text-slate-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"
              data-testid="link-bridge-users"
            >
              <Users size={20} className="text-slate-300" />
            </a>
          </div>
        </div>

        <div
          className="rounded-2xl bg-white text-slate-950 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          data-testid="card-philanthropy"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate-500">
            Service
          </h3>
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-2">
              Philanthropy
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Investment Committee Chair at Beth Tzedec. Board leadership for
              Park East Synagogue.
            </p>
            <span className="inline-block border-b border-slate-950 pb-0.5 text-xs font-bold uppercase tracking-wider cursor-pointer">
              Community Trust
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
