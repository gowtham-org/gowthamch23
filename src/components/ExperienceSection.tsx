import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building2, Star } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Junior DevOps Engineer",
      company: "eGovernments Foundation",
      period: "Aug 2023 – Jul 2024",
      location: "Remote",
      type: "Full-time",
      description: "Led the development and deployment of scalable systems with focus on automation and infrastructure optimization.",
      achievements: [
        "Built comprehensive CI/CD pipelines using GitHub Actions and Jenkins",
        "Automated infrastructure provisioning with Terraform, reducing deployment time by 60%",
        "Dockerized applications and deployed them on AWS EC2 instances",
        "Implemented monitoring solutions with Prometheus & Grafana",
        "Managed AWS services including S3, ECR, and EC2 for optimal performance"
      ],
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana"],
      current: false
    },
    {
      title: "Site Reliability Engineer Intern",
      company: "eGovernments Foundation", 
      period: "Sep 2022 – Jul 2023",
      location: "Remote",
      type: "Internship",
      description: "Focused on system reliability, automation, and infrastructure management for large-scale government platforms.",
      achievements: [
        "Automated infrastructure management processes improving system reliability by 40%",
        "Implemented comprehensive system monitoring and alerting mechanisms",
        "Utilized Git for efficient version control and collaborative development",
        "Created intuitive dashboards for system performance visualization",
        "Contributed to the National Urban Governance Platform (NUGP) research"
      ],
      technologies: ["Git", "Linux", "Monitoring", "Automation", "System Administration", "NUGP"],
      current: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech Lead",
      company: "eGovernments Foundation",
      rating: 5,
      comment: "Gowtham's expertise in DevOps automation significantly improved our deployment processes. His attention to detail and proactive approach made him an invaluable team member.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Senior Engineer",
      company: "Tech Solutions Inc",
      rating: 5,
      comment: "Working with Gowtham on ML projects was exceptional. His deep understanding of algorithms and practical implementation skills delivered outstanding results.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      company: "Data Insights Corp",
      rating: 5,
      comment: "Gowtham consistently delivered high-quality solutions on time. His ability to translate complex technical concepts into business value is remarkable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 hover:bg-primary/20">
            EXPERIENCE
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over 8+ years of hands-on experience in DevOps, Machine Learning, and Software Engineering, 
            delivering scalable solutions for complex technical challenges.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border transform lg:-translate-x-px" />
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-primary rounded-full transform lg:-translate-x-1.5 z-10" />
                
                {/* Experience Card */}
                <Card className={`ml-12 lg:ml-0 lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                } hover:shadow-card transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <div className="flex items-center text-primary font-semibold mb-2">
                          <Building2 className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <Badge variant={exp.current ? "default" : "secondary"}>
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs bg-primary/5 text-primary border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <Badge className="mb-4 text-primary bg-primary/10">
              TESTIMONIALS
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">
              What People Say About Me
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback from colleagues and clients I've had the pleasure to work with.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;