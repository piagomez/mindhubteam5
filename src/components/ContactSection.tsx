import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send,
  MessageSquare,
  Users,
  Briefcase,
  Star
} from "lucide-react";

const contactInfo = {
  email: "equipo5@productowners.com",
  phone: "+56 9 1234 5678",
  location: "Santiago, Chile",
  linkedin: "https://www.linkedin.com/company/equipo5-product-owners"
};

const services = [
  "Product Strategy & Roadmapping",
  "User Research & Analytics",
  "Agile Product Development",
  "Digital Transformation",
  "Product Discovery & Validation",
  "Growth & Optimization"
];

const testimonials = [
  {
    name: "María González",
    role: "VP of Product, TechCorp",
    content: "El Equipo 5 transformó completamente nuestra estrategia de producto. Su enfoque metódico y centrado en el usuario nos ayudó a aumentar nuestro engagement en un 45%.",
    rating: 5
  },
  {
    name: "Carlos Mendoza",
    role: "CTO, StartupInnovate",
    content: "Profesionales excepcionales. Su expertise en metodologías ágiles y capacidad de ejecución nos permitió lanzar nuestro MVP en tiempo récord.",
    rating: 5
  },
  {
    name: "Ana Ruiz",
    role: "Product Manager, FinanceApp",
    content: "La investigación de usuarios que realizaron fue fundamental para entender nuestro mercado. Recomiendo totalmente trabajar con este equipo.",
    rating: 5
  }
];

const companies = [
  "TechCorp", "StartupInnovate", "FinanceApp", "EcoSolutions", 
  "DataDriven", "CloudFirst", "MobileNext", "AI Ventures"
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto. ¡Gracias por tu interés!",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trabajemos Juntos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes un proyecto en mente? Contáctanos y descubre cómo podemos 
            ayudarte a transformar tu idea en un producto exitoso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                Envíanos un Mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Additional Sections */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">{contactInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a 
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Equipo 5 - Product Owners
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-primary" />
                  Nuestros Servicios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((service) => (
                    <div key={service} className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Companies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Empresas que Confían en Nosotros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {companies.map((company) => (
                    <Badge key={company} variant="secondary" className="justify-center">
                      {company}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Lo que Dicen Nuestros Clientes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}