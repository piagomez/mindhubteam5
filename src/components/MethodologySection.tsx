import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Users, 
  Lightbulb, 
  TestTube, 
  Rocket, 
  TrendingUp,
  Target,
  BarChart3,
  GitBranch,
  Repeat
} from "lucide-react";

const methodologySteps = [
  {
    phase: "1. Investigación",
    title: "Descubrimiento y Análisis",
    icon: Search,
    color: "text-blue-600",
    activities: [
      "Investigación de usuarios y personas",
      "Análisis competitivo y benchmarking",
      "Investigación de mercado",
      "Stakeholder interviews",
      "Análisis de datos existentes"
    ],
    deliverables: ["User Research Report", "Competitive Analysis", "Market Insights"],
    tools: ["Miro", "Figma", "Google Analytics", "Hotjar"]
  },
  {
    phase: "2. Definición",
    title: "Estrategia y Roadmap",
    icon: Target,
    color: "text-green-600",
    activities: [
      "Definición de objetivos y KPIs",
      "Creación de user stories",
      "Priorización de features",
      "Roadmap de producto",
      "Definition of Done"
    ],
    deliverables: ["Product Strategy", "Feature Roadmap", "Success Metrics"],
    tools: ["Jira", "ProductPlan", "Notion", "Aha!"]
  },
  {
    phase: "3. Ideación",
    title: "Design Thinking y Concepto",
    icon: Lightbulb,
    color: "text-yellow-600",
    activities: [
      "Sesiones de brainstorming",
      "Design Thinking workshops",
      "Prototipado rápido",
      "Validación de conceptos",
      "Architecture definition"
    ],
    deliverables: ["Wireframes", "Prototypes", "Technical Specs"],
    tools: ["Figma", "Miro", "InVision", "Marvel"]
  },
  {
    phase: "4. Validación",
    title: "Testing y Feedback",
    icon: TestTube,
    color: "text-purple-600",
    activities: [
      "User testing sessions",
      "A/B testing setup",
      "Stakeholder validation",
      "Technical feasibility",
      "Business case validation"
    ],
    deliverables: ["Test Results", "Validated Assumptions", "Go/No-Go Decision"],
    tools: ["Maze", "UsabilityHub", "Optimizely", "Google Optimize"]
  },
  {
    phase: "5. Desarrollo",
    title: "Implementación Ágil",
    icon: GitBranch,
    color: "text-orange-600",
    activities: [
      "Sprint planning",
      "Daily standups",
      "Sprint reviews",
      "Retrospectivas",
      "Continuous delivery"
    ],
    deliverables: ["Working Software", "Sprint Reports", "Demo Sessions"],
    tools: ["Jira", "Confluence", "Slack", "GitHub"]
  },
  {
    phase: "6. Lanzamiento",
    title: "Go-to-Market",
    icon: Rocket,
    color: "text-red-600",
    activities: [
      "Estrategia de lanzamiento",
      "Plan de comunicación",
      "Training y onboarding",
      "Monitoreo post-launch",
      "Support structure"
    ],
    deliverables: ["Launch Plan", "Communication Kit", "Support Documentation"],
    tools: ["Intercom", "Zendesk", "Mailchimp", "Mixpanel"]
  },
  {
    phase: "7. Optimización",
    title: "Medición y Mejora",
    icon: TrendingUp,
    color: "text-indigo-600",
    activities: [
      "Análisis de métricas",
      "User feedback collection",
      "Performance optimization",
      "Feature usage analysis",
      "Iteración continua"
    ],
    deliverables: ["Analytics Reports", "Optimization Plan", "Next Iteration Backlog"],
    tools: ["Google Analytics", "Mixpanel", "Hotjar", "Amplitude"]
  }
];

const frameworks = [
  {
    name: "Scrum",
    description: "Marco ágil para desarrollo iterativo",
    usage: "Desarrollo de productos complejos"
  },
  {
    name: "Design Thinking",
    description: "Metodología centrada en el usuario",
    usage: "Innovación y resolución de problemas"
  },
  {
    name: "Lean Startup",
    description: "Validación rápida de hipótesis",
    usage: "Productos nuevos y startups"
  },
  {
    name: "OKRs",
    description: "Objetivos y resultados clave",
    usage: "Alineación estratégica del equipo"
  }
];

const researchMethods = [
  "Entrevistas de usuarios",
  "Encuestas y cuestionarios",
  "Análisis competitivo",
  "Card sorting",
  "Tree testing",
  "Análisis heurístico",
  "User journey mapping",
  "Personas development"
];

export default function MethodologySection() {
  return (
    <section id="methodology" className="py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿Cómo Trabajamos?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nuestro proceso integral combina las mejores prácticas de Product Management, 
            metodologías ágiles e investigación centrada en el usuario.
          </p>
        </div>

        {/* Process Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Roadmap de Trabajo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {methodologySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={step.phase}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-3 ${step.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="w-fit mb-2">{step.phase}</Badge>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Actividades:</h4>
                      <ul className="space-y-1">
                        {step.activities.slice(0, 3).map((activity, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start">
                            <span className="text-primary mr-1">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Entregables:</h4>
                      <div className="flex flex-wrap gap-1">
                        {step.deliverables.map((deliverable) => (
                          <Badge key={deliverable} variant="secondary" className="text-xs">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Herramientas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {step.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  {/* Connection line for desktop */}
                  {index < methodologySteps.length - 1 && (
                    <div className="hidden xl:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-border"></div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Frameworks Used */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Repeat className="mr-2 h-5 w-5 text-primary" />
                Marcos de Trabajo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {frameworks.map((framework) => (
                  <div key={framework.name} className="border-l-4 border-primary/20 pl-4">
                    <h4 className="font-medium text-foreground">{framework.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{framework.description}</p>
                    <p className="text-xs text-muted-foreground">{framework.usage}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                Métodos de Investigación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {researchMethods.map((method) => (
                  <div key={method} className="flex items-center text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{method}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Flow */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Search className="h-4 w-4 mr-1" />
                Investigar
              </span>
              <span>→</span>
              <span className="flex items-center">
                <Target className="h-4 w-4 mr-1" />
                Definir
              </span>
              <span>→</span>
              <span className="flex items-center">
                <Lightbulb className="h-4 w-4 mr-1" />
                Idear
              </span>
              <span>→</span>
              <span className="flex items-center">
                <TestTube className="h-4 w-4 mr-1" />
                Validar
              </span>
              <span>→</span>
              <span className="flex items-center">
                <Rocket className="h-4 w-4 mr-1" />
                Lanzar
              </span>
              <span>→</span>
              <span className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                Optimizar
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}