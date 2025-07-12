import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Target, Users } from "lucide-react";
const AboutSection = () => {
  const stats = [{
    icon: Target,
    value: "50+",
    label: "Projects Completed"
  }, {
    icon: Users,
    value: "30+",
    label: "Happy Clients"
  }, {
    icon: Award,
    value: "8+",
    label: "Years Experience"
  }, {
    icon: GraduationCap,
    value: "MS",
    label: "Engineering Data Science"
  }];
  const education = [{
    degree: "MS in Engineering Data Science",
    school: "University of Houston",
    period: "Aug 2024 – May 2026",
    status: "Current"
  }, {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Vel Tech Institute",
    period: "2019 – 2023",
    status: "Completed"
  }];
  return <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 hover:bg-primary/20">
            ABOUT ME
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Designing Solutions, Not
            <span className="text-primary block">Just Visuals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Gowtham Chowdam, a passionate Data Science Engineer with expertise in DevOps, 
            Machine Learning, and Cloud technologies. I love creating scalable solutions that 
            solve real-world problems through data-driven approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Profile Image & Info */}
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl overflow-hidden float-right ml-8 mb-4 border-4 border-primary/20 shadow-card">
                <img src="https://i.postimg.cc/BZd9XDDY/Whats-App-Image-2025-07-10-at-10-17-15-AM.jpg" alt="Gowtham Chowdam" className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">My Complete Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With a strong foundation in both theoretical knowledge and practical experience, 
                    I specialize in building end-to-end data science solutions. From machine learning 
                    model development to deploying scalable applications on cloud platforms, I ensure 
                    every project meets the highest standards of quality and performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">2+ Years of Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Throughout my journey, I've worked on diverse projects spanning DevOps automation, 
                    ML model deployment, and system monitoring. My experience includes working with 
                    major cloud platforms, CI/CD pipelines, and cutting-edge data science technologies.
                  </p>
                </div>

                {/* Research Highlight */}
                <div className="bg-gradient-card rounded-2xl p-6 shadow-card">
                  <h4 className="font-semibold text-lg mb-2 text-primary">Research Contribution</h4>
                  <p className="text-muted-foreground">
                    Presented research at ICACT2023 on the National Urban Governance Platform (NUGP), 
                    demonstrating expertise in large-scale system design and implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {})}
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <GraduationCap className="w-5 h-5 text-primary mr-3" />
                          <div>
                            <h4 className="font-semibold text-lg">{edu.degree}</h4>
                            <p className="text-muted-foreground">{edu.school}</p>
                          </div>
                        </div>
                        <Badge variant={edu.status === "Current" ? "default" : "secondary"} className={edu.status === "Current" ? "bg-primary" : ""}>
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-hero text-white rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold mb-2">Ready to start a project?</h4>
              <p className="mb-4 opacity-90">Let's work together to create something amazing</p>
              <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;