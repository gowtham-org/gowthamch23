import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Brain, TrendingUp, Eye, Leaf } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Smart Cost Estimation",
      description: "Advanced machine learning solution for accurate project cost prediction using ensemble methods and statistical analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["XGBoost", "Random Forest", "Pandas", "Matplotlib", "Python"],
      category: "Machine Learning",
      icon: Brain,
      stats: { accuracy: "95%", variance: "Reduced by 40%" },
      featured: true
    },
    {
      id: 2,
      title: "MultiModal VQA & Image Captioning",
      description: "Deep learning system combining CNN and LSTM with attention mechanisms for visual question answering and automatic image captioning.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["CNN", "LSTM", "Attention", "TensorFlow", "OpenCV"],
      category: "Computer Vision",
      icon: Eye,
      stats: { dataset: "DAQUAR", performance: "State-of-art" },
      featured: false
    },
    {
      id: 3,
      title: "Stock Market Forecasting System",
      description: "Sophisticated ensemble model combining XGBoost, CNN, and ELM for accurate stock price prediction and market analysis.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      technologies: ["XGBoost", "CNN", "ELM", "Pandas", "Scikit-learn"],
      category: "Financial Analytics",
      icon: TrendingUp,
      stats: { accuracy: "87%", models: "3 Ensemble" },
      featured: false
    },
    {
      id: 4,
      title: "Plant Disease Detection",
      description: "Computer vision application for early detection and classification of plant diseases using multiple ML algorithms.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop",
      technologies: ["CNN", "SVM", "KNN", "TensorFlow", "OpenCV"],
      category: "Agriculture Tech",
      icon: Leaf,
      stats: { diseases: "15+ Types", accuracy: "93%" },
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 hover:bg-primary/20">
            DIGITAL PRODUCT SHOWCASES
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of data science and machine learning projects that demonstrate 
            expertise in solving complex real-world problems with innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:flex lg:items-center' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  project.featured ? 'lg:w-1/2' : 'aspect-video'
                }`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Actions */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className={`p-6 ${project.featured ? 'lg:w-1/2 lg:p-8' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-primary/5 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between mb-6">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-white transition-all duration-300 font-semibold px-8">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;