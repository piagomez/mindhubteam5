import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import ProjectsSection from "@/components/ProjectsSection";
import MethodologySection from "@/components/MethodologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TeamSection />
        <ProjectsSection />
        <MethodologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
