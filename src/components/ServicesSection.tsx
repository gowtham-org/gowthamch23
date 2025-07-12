import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, Database, Monitor, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & ML Development",
      description: "Custom machine learning models using XGBoost, CNN, Random Forest, and ensemble methods for predictive analytics and automation.",
      features: ["Model Development", "Data Preprocessing", "Feature Engineering", "Model Deployment"],
      highlight: true
    },
    {
      icon: Code,
      title: "DevOps & Automation",
      description: "Complete CI/CD pipeline setup, infrastructure automation with Terraform, and containerization with Docker & Kubernetes.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring Setup"],
      highlight: false
    },
    {
      icon: Database,
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights with advanced analytics, interactive dashboards, and comprehensive reporting.",
      features: ["Data Analytics", "Dashboard Creation", "Statistical Analysis", "Report Generation"],
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 hover:bg-primary/20">
            SERVICES
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive solutions spanning the entire data science and DevOps lifecycle, 
            from initial data analysis to production-ready deployments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant ${
                service.highlight 
                  ? 'bg-gradient-hero text-white border-0' 
                  : 'hover:shadow-card bg-card'
              }`}
            >
              <CardContent className="p-8">
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.highlight 
                    ? 'bg-white/20' 
                    : 'bg-primary/10 group-hover:bg-primary/20'
                } transition-colors duration-300`}>
                  <service.icon className={`w-8 h-8 ${
                    service.highlight ? 'text-white' : 'text-primary'
                  }`} />
                </div>

                {/* Service Content */}
                <h3 className={`text-xl font-bold mb-4 ${
                  service.highlight ? 'text-white' : 'text-foreground'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`mb-6 leading-relaxed ${
                  service.highlight ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-sm ${
                      service.highlight ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        service.highlight ? 'bg-white/60' : 'bg-primary'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>


                {/* Decorative Elements */}
                {service.highlight && (
                  <>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/10 rounded-full" />
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-card">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every project is unique. Let's discuss your specific requirements and create 
                a tailored solution that perfectly fits your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-all duration-300 font-semibold px-8">
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="font-semibold px-8">
                  <Monitor className="w-5 h-5 mr-2" />
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;