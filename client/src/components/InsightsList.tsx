import { ArrowUpRight } from "lucide-react";

interface Article {
  title: string;
  category: string;
  date: string;
  desc: string;
}

// todo: remove mock functionality
const articles: Article[] = [
  {
    title: "The Civil Rights Frontier: Title VI and the Protection of Jewish Students",
    category: "Legal Precedent",
    date: "Thought Leadership",
    desc: "How the 2019 Executive Order changed the legal landscape for minority groups on campus.",
  },
  {
    title: "The Asymmetry of Defense",
    category: "Venture Capital",
    date: "Market Thesis",
    desc: "Why private capital is becoming the new national shield in a volatile geopolitical landscape.",
  },
  {
    title: "Behavioral Alpha: The Psychology of the Pre-Seed Deal",
    category: "Economics",
    date: "Methodology",
    desc: "Applying behavioral psychology to structure deals that align founder emotions with financial targets.",
  },
];

export default function InsightsList() {
  return (
    <section
      id="insights"
      className="py-24 max-w-7xl mx-auto px-6"
      data-testid="section-insights"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-4">
        <div>
          <h2 className="text-3xl font-serif text-white">Latest Thinking</h2>
        </div>
        <a
          href="#"
          className="text-sm text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
          data-testid="link-view-all"
        >
          View all writings <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="space-y-8">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="group cursor-pointer"
            data-testid={`card-article-${idx}`}
          >
            <div className="flex flex-col md:flex-row gap-4 md:items-baseline justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-medium text-slate-200 group-hover:text-accent-blue-500 transition-colors">
                {article.title}
              </h3>
              <span className="text-xs font-mono text-slate-500 uppercase shrink-0">
                {article.category}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-2xl">{article.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
