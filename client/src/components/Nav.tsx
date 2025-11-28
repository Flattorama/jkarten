import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Thesis", href: "#thesis" },
  { name: "Bio", href: "#bio" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      data-testid="nav-header"
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white font-serif"
          data-testid="link-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          JONATHAN <span className="text-slate-400">KARTEN</span>
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-4"
          data-testid="nav-mobile-menu"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-lg font-medium text-slate-300 text-left"
              data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
