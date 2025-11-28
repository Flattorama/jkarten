import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ThesisSection from "@/components/ThesisSection";
import InsightsList from "@/components/InsightsList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <BentoGrid />
      <ThesisSection />
      <InsightsList />
      <Footer />
    </div>
  );
}
