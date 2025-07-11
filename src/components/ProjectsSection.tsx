import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Users, TrendingUp, CheckCircle } from "lucide-react";
import ecomoveMockup from "@/assets/ecomove-mockup.jpg";

const projects = [
  {
    title: "EcoMove",
    subtitle: "Plataforma de Movilidad Sostenible",
    description: "Aplicación integral para promover el transporte ecológico en ciudades, conectando usuarios con opciones de movilidad verde y gamificando el comportamiento sostenible.",
    image: ecomoveMockup,
    category: "Movilidad Sostenible",
    duration: "8 meses",
    teamSize: "6 Product Owners",
    framework: "Scrum + Design Thinking",
    status: "Completado",
    metrics: {
      userGrowth: "150% aumento de usuarios",
      engagement: "45% mejora en engagement",
      retention: "85% retención a 3 meses"
    },
    tools: ["Figma", "Jira", "Google Analytics", "Hotjar", "Miro"],
    challenges: [
      "Integración con APIs de transporte público",
      "Gamificación efectiva sin ser intrusiva",
      "Comportamiento de usuarios en múltiples ciudades"
    ],
    solutions: [
      "Arquitectura modular para diferentes proveedores",
      "Sistema de recompensas basado en investigación UX",
      "Análisis de datos geográficos para personalización"
    ],
    learnings: [
      "Importancia de validación temprana con usuarios reales",
      "Necesidad de flexibilidad en roadmap para cambios regulatorios",
      "Valor del feedback continuo en productos de impacto social"
    ],
    roles: [
      { name: "Sebastian Hormero", role: "Product Lead & Strategy" },
      { name: "Cristián Rodríguez", role: "UX Research & Design" },
      { name: "Isabel de la Cuadra", role: "Business Analysis" },
      { name: "Rodrigo Vasquez", role: "Market Research" },
      { name: "Manuel Pinto", role: "Technical Architecture" },
      { name: "Pía Gómez", role: "Growth & Analytics" }
    ],
    improvements: [
      "Implementación de IA para rutas optimizadas",
      "Expansión a más ciudades latinoamericanas",
      "Integración con sistemas de pago digital"
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Casos de estudio reales que demuestran nuestra capacidad para transformar 
            ideas complejas en productos exitosos y escalables.
          </p>
        </div>

        {projects.map((project, index) => (
          <Card key={project.title} className="mb-12 overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Project Details */}
              <CardContent className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-lg text-primary font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </CardHeader>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-muted-foreground">Duración:</span>
                    <span className="ml-1 font-medium">{project.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-muted-foreground">Equipo:</span>
                    <span className="ml-1 font-medium">{project.teamSize}</span>
                  </div>
                </div>

                {/* Framework */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-2">Marco de Trabajo:</h4>
                  <Badge variant="outline">{project.framework}</Badge>
                </div>

                {/* Key Metrics */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Métricas Clave:</h4>
                  <div className="space-y-2">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 mr-2 text-accent" />
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Herramientas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Desafíos:</h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-destructive mr-2 mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Soluciones:</h4>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Team Roles */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Roles del Equipo:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.roles.map((member) => (
                      <div key={member.name} className="text-sm">
                        <span className="font-medium text-foreground">{member.name}:</span>
                        <span className="text-muted-foreground ml-1">{member.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learnings */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Aprendizajes:</h4>
                  <ul className="space-y-2">
                    {project.learnings.map((learning, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Oportunidades de Mejora:</h4>
                  <ul className="space-y-2">
                    {project.improvements.map((improvement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full sm:w-auto">
                  Ver Caso de Estudio Completo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}