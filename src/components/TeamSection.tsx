import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Github, ExternalLink } from "lucide-react";

// Import team member photos
import sebastianPhoto from "@/assets/team/real-profile-photo.jpeg";
import cristianPhoto from "@/assets/team/cristian-rodriguez.jpeg";
import isabelPhoto from "@/assets/team/isabel-delacuadra.jpeg";
import rodrigoPhoto from "@/assets/team/rodrigo-vasquez.jpeg";
import manuelPhoto from "@/assets/team/manuel-pinto.jpeg";
import piaPhoto from "@/assets/team/pia-gomez.jpeg";

const teamMembers = [
  {
    name: "Sebastian Hormero",
    role: "Senior Product Owner",
    image: sebastianPhoto, 
    linkedin: "https://www.linkedin.com/in/sebastianhormeroraque/",
    email: "sebastian.hormero@email.com",
    skills: ["Product Strategy", "Agile Methodologies", "User Research", "Data Analysis"],
    description: "Especialista en transformación digital con más de 8 años de experiencia liderando equipos de producto en empresas tecnológicas.",
    achievements: ["Líder de proyecto EcoMove", "Certificación PO Scrum Master", "Incrementó engagement 45%"]
  },
  {
    name: "Cristián Rodríguez",
    role: "Product Owner & UX Strategist",
    image: cristianPhoto,
    linkedin: "https://www.linkedin.com/in/cris-rodr/",
    email: "cristian.rodriguez@email.com",
    skills: ["UX Strategy", "Design Thinking", "Product Roadmapping", "Stakeholder Management"],
    description: "Experto en experiencia de usuario con enfoque en productos digitales y metodologías centradas en el usuario.",
    achievements: ["Design Thinking Certified", "Optimizó conversión 30%", "Mentor UX junior"]
  },
  {
    name: "Isabel de la Cuadra",
    role: "Product Owner & Business Analyst",
    image: isabelPhoto,
    linkedin: "https://www.linkedin.com/in/isabeldelacuadralunas/",
    email: "isabel.delacuadra@email.com",
    skills: ["Business Analysis", "Requirements Engineering", "Process Optimization", "KPI Definition"],
    description: "Analista de negocio con sólida experiencia en definición de requerimientos y optimización de procesos empresariales.",
    achievements: ["Business Analysis Certified", "Redujo time-to-market 25%", "Especialista en KPIs"]
  },
  {
    name: "Rodrigo Vasquez Delmiglio",
    role: "Product Owner & Innovation Lead",
    image: rodrigoPhoto,
    linkedin: "https://www.linkedin.com/rvasquezd/",
    email: "rodrigo.vasquez@email.com",
    skills: ["Innovation Management", "Product Discovery", "Market Research", "Competitive Analysis"],
    description: "Líder en innovación con experiencia en descubrimiento de productos y análisis de mercado competitivo.",
    achievements: ["Innovation Leader Award", "Lanzó 5 productos exitosos", "Investigación de mercado experto"]
  },
  {
    name: "Manuel Pinto",
    role: "Product Owner & Technical Lead",
    image: manuelPhoto,
    linkedin: "https://www.linkedin.com/in/manuel-pinto-c%C3%A1ceres-b31679111/",
    email: "manuel.pinto@email.com",
    skills: ["Technical Product Management", "API Strategy", "System Architecture", "DevOps Integration"],
    description: "Product Owner técnico especializado en arquitectura de sistemas y estrategia de APIs para productos escalables.",
    achievements: ["Technical PO Certified", "Arquitectura escalable", "DevOps integration expert"]
  },
  {
    name: "Pía Gómez",
    role: "Product Owner & Growth Specialist",
    image: piaPhoto,
    linkedin: "https://www.linkedin.com/in/piagomez/",
    email: "pia.gomez@email.com",
    skills: ["Growth Hacking", "Analytics", "A/B Testing", "Customer Success"],
    description: "Especialista en crecimiento de producto con expertise en analíticas avanzadas y optimización de conversion.",
    achievements: ["Growth Hacking Certified", "Aumentó retención 40%", "A/B testing expert"]
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Profesionales experimentados en Product Management, cada uno con especialidades 
            únicas que complementan perfectamente nuestro enfoque integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/10"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Logros Destacados:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {member.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Links */}
                <div className="flex justify-center space-x-3 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:text-primary"
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:text-primary"
                  >
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email a ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
