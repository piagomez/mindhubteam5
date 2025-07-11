import { Linkedin, Mail, MapPin } from "lucide-react";

const teamMembers = [
  { name: "Sebastian Hormero", linkedin: "https://www.linkedin.com/in/sebastianhormeroraque/" },
  { name: "Cristián Rodríguez", linkedin: "https://www.linkedin.com/in/cris-rodr/" },
  { name: "Isabel de la Cuadra", linkedin: "https://www.linkedin.com/in/isabeldelacuadralunas/" },
  { name: "Rodrigo Vasquez", linkedin: "https://www.linkedin.com/rvasquezd/" },
  { name: "Manuel Pinto", linkedin: "https://www.linkedin.com/in/manuel-pinto-c%C3%A1ceres-b31679111/" },
  { name: "Pía Gómez", linkedin: "https://www.linkedin.com/in/piagomez/" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-foreground mb-4">
              Equipo 5 - Product Owners
            </h3>
            <p className="text-muted-foreground mb-4">
              Transformamos ideas en productos exitosos a través de metodologías ágiles, 
              investigación profunda de usuarios y una ejecución estratégica excepcional.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                Santiago, Chile
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-1" />
                <a 
                  href="mailto:equipo5@productowners.com"
                  className="hover:text-primary transition-colors"
                >
                  equipo5@productowners.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: "Inicio", href: "#hero" },
                { name: "Equipo", href: "#team" },
                { name: "Proyectos", href: "#projects" },
                { name: "Metodología", href: "#methodology" },
                { name: "Contacto", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Team LinkedIn */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Conecta con el Equipo</h4>
            <ul className="space-y-2">
              {teamMembers.map((member) => (
                <li key={member.name}>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center"
                  >
                    <Linkedin className="h-3 w-3 mr-2" />
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Equipo 5 - Product Owners. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span className="text-sm text-muted-foreground">
                Hecho con ❤️ en Santiago, Chile
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}