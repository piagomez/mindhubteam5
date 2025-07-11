import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
            <Target className="mr-2 h-4 w-4" />
            Especialistas en Product Management
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl animate-slide-up">
            <span className="block">Equipo 5</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Product Owners
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Transformamos ideas en productos exitosos a través de metodologías ágiles, 
            investigación profunda de usuarios y una ejecución estratégica excepcional.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#team")}
              className="group"
            >
              Conoce al Equipo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#projects")}
            >
              Ver Proyectos
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">6</div>
              <div className="text-sm text-muted-foreground">Product Owners</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl" />
    </section>
  );
}