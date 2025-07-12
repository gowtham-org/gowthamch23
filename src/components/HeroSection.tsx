import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Github, Linkedin, Mail, MapPin } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-yellow rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-orange rounded-full opacity-15 animate-bounce" />
      <div className="absolute top-1/2 right-10 w-6 h-6 bg-primary-glow rounded-full opacity-40" />
      <div className="absolute bottom-1/3 left-20 w-8 h-8 bg-accent-yellow rounded-full opacity-30" />
      
      {/* Floating Dots */}
      <div className="absolute top-1/4 left-1/4 flex flex-col space-y-2">
        <div className="w-2 h-2 bg-white rounded-full opacity-60" />
        <div className="w-2 h-2 bg-white rounded-full opacity-40" />
        <div className="w-2 h-2 bg-white rounded-full opacity-60" />
      </div>
      
      <div className="absolute bottom-1/4 right-1/3 flex flex-col space-y-2">
        <div className="w-2 h-2 bg-white rounded-full opacity-60" />
        <div className="w-2 h-2 bg-white rounded-full opacity-40" />
        <div className="w-2 h-2 bg-white rounded-full opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
              👋 Hello, I'm
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-poppins leading-tight">
                Gowtham Chowdam
                <span className="block text-accent-yellow mt-2">
                  Data Science Engineer
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                Engineering Data-Driven Solutions | ML | DevOps | Cloud
              </p>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                Graduate student in Engineering Data Science at the University of Houston, 
                specializing in scalable systems, machine learning, and automated infrastructure.
              </p>
            </div>

            {/* Location & Stats */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center text-white/90">
                <MapPin className="w-5 h-5 mr-2" />
                Houston, TX, USA
              </div>
              
            </div>

            {/* CTA Buttons */}
            

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a href="https://github.com/gowtham-org" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/gowtham-chowdam-35ba96185" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:gowthamchowdam2001@gmail.com" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Rating Badge */}
            
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full backdrop-blur-sm" />
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img src="https://i.postimg.cc/BZd9XDDY/Whats-App-Image-2025-07-10-at-10-17-15-AM.jpg" alt="Gowtham Chowdam" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-16 -left-4 lg:left-8 bg-white rounded-2xl p-4 shadow-elegant animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;