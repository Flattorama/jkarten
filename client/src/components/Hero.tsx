import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-[80vh]"
      data-testid="section-hero"
    >
      <div className="relative z-10 max-w-4xl">
        <div
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
          data-testid="badge-status"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent-blue-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide uppercase text-slate-300">
            Principal at Awz Ventures
          </span>
        </div>

        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] mb-8"
          data-testid="text-headline"
        >
          Capitalizing <br className="hidden md:block" />
          <span className="text-slate-500">Resilience.</span>
        </h1>

        <p
          className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          data-testid="text-subheadline"
        >
          Bridging the gap between National Security Intelligence and
          High-Velocity Venture Capital. Engineering the future of global
          security through dual-use technology investment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => scrollToSection("#thesis")}
            className="bg-white text-slate-950 hover:bg-slate-200 px-8 py-3 h-auto font-semibold rounded-md"
            data-testid="button-thesis-cta"
          >
            Investment Thesis
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="border-white/20 text-white hover:bg-white/5 px-8 py-3 h-auto font-medium rounded-md"
            data-testid="button-contact-cta"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      <div className="absolute top-0 right-0 -z-0 opacity-20 pointer-events-none">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1_2"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="600"
            height="600"
          >
            <rect width="600" height="600" fill="url(#paint0_radial_1_2)" />
          </mask>
          <g mask="url(#mask0_1_2)">
            <path d="M50 0V600" stroke="white" strokeWidth="1" />
            <path d="M150 0V600" stroke="white" strokeWidth="1" />
            <path d="M250 0V600" stroke="white" strokeWidth="1" />
            <path d="M350 0V600" stroke="white" strokeWidth="1" />
            <path d="M450 0V600" stroke="white" strokeWidth="1" />
            <path d="M550 0V600" stroke="white" strokeWidth="1" />
            <path d="M0 50H600" stroke="white" strokeWidth="1" />
            <path d="M0 150H600" stroke="white" strokeWidth="1" />
            <path d="M0 250H600" stroke="white" strokeWidth="1" />
            <path d="M0 350H600" stroke="white" strokeWidth="1" />
            <path d="M0 450H600" stroke="white" strokeWidth="1" />
            <path d="M0 550H600" stroke="white" strokeWidth="1" />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_1_2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(300 300) rotate(90) scale(300)"
            >
              <stop stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#737373" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
