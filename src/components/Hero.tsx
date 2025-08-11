import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Settings, Zap } from "lucide-react";
import heroImage from "@/assets/robotics-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Robotics technology background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="p-3 rounded-full bg-electric/10 border border-electric/30 animate-pulse-glow">
          <Cpu className="h-8 w-8 text-electric" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <div className="p-3 rounded-full bg-neon/10 border border-neon/30 animate-pulse-glow">
          <Settings className="h-8 w-8 text-neon" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <div className="p-3 rounded-full bg-electric/10 border border-electric/30 animate-pulse-glow">
          <Zap className="h-8 w-8 text-electric" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">FUTURE OF</span>
            <span className="block bg-gradient-to-r from-electric via-electric-bright to-neon bg-clip-text text-transparent">
              ROBOTICS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Where innovation meets automation. Join our community of robotics enthusiasts building tomorrow's technology today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="gradient-primary text-background font-semibold px-8 py-6 text-lg hover:shadow-electric transition-glow group"
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-electric/50 text-electric hover:bg-electric/10 px-8 py-6 text-lg hover:glow-electric transition-glow"
            >
              Join Community
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center p-4 rounded-lg bg-surface/50 backdrop-blur-sm border border-electric/20">
              <div className="text-3xl font-bold text-electric mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-surface/50 backdrop-blur-sm border border-electric/20">
              <div className="text-3xl font-bold text-electric mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-surface/50 backdrop-blur-sm border border-electric/20">
              <div className="text-3xl font-bold text-electric mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Competitions Won</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-surface/50 backdrop-blur-sm border border-electric/20">
              <div className="text-3xl font-bold text-electric mb-2">5</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;