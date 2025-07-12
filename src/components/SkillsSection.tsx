import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Database, Code, Cloud, Brain, Settings, BarChart } from "lucide-react";
const SkillsSection = () => {
  const skillCategories = [{
    title: "Data Tools",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: ["MS Excel", "Power BI", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
  }, {
    title: "Languages",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    skills: ["Python", "SQL", "Java", "GoLang", "Bash"]
  }, {
    title: "DevOps",
    icon: Cloud,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    skills: ["GitHub Actions", "Jenkins", "Docker", "Kubernetes", "AWS (EC2, S3, ECR)", "Terraform"]
  }, {
    title: "ML Algorithms",
    icon: Brain,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    skills: ["Regression", "XGBoost", "CNN", "SVM", "KNN", "Ensemble methods"]
  }, {
    title: "Others",
    icon: Settings,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    skills: ["Git", "VS Code", "Jupyter Notebook", "Linux"]
  }];
  const workingProcess = [{
    step: "01",
    title: "Business Planning",
    description: "Understand requirements, analyze business needs, and define project scope with clear deliverables and timelines.",
    icon: "🎯"
  }, {
    step: "02",
    title: "Design Strategy",
    description: "Create comprehensive system architecture, select optimal algorithms, and design scalable data pipelines.",
    icon: "🎨"
  }, {
    step: "03",
    title: "Grow Your Business",
    description: "Deploy production-ready solutions, monitor performance metrics, and provide ongoing optimization support.",
    icon: "📈"
  }];
  return <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 hover:bg-primary/20">
            SKILLS & EXPERTISE
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across the entire data science and DevOps stack, 
            from data analysis to production deployment and monitoring.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Working Process */}
        <div className="bg-secondary/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-primary bg-primary/10">
              MY WORKING PROCESS
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">
              How I Work
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My systematic approach ensures every project is delivered with the highest quality 
              and meets your specific business objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {workingProcess.map((process, index) => <div key={index} className="text-center group">
                <div className="relative mb-6">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">{process.icon}</div>
                  
                  {/* Connecting Line */}
                  {index < workingProcess.length - 1 && <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8 -translate-y-1/2" />}
                </div>

                <h4 className="text-xl font-bold mb-3">{process.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;