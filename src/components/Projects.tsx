import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Navigation Robot",
      description: "Advanced path-finding robot with LIDAR and computer vision for obstacle detection and mapping.",
      technologies: ["Python", "OpenCV", "ROS", "LIDAR"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      status: "Completed",
      year: "2024"
    },
    {
      title: "Humanoid Assistant Bot",
      description: "Interactive humanoid robot capable of basic conversations and assistance tasks using AI.",
      technologies: ["TensorFlow", "Arduino", "Speech Recognition", "NLP"],
      image: "https://images.unsplash.com/photo-1546776230-bb095111ec4d?w=500&h=300&fit=crop",
      status: "In Progress",
      year: "2024"
    },
    {
      title: "Swarm Robotics System",
      description: "Coordinated multi-robot system for collaborative tasks and formation control.",
      technologies: ["C++", "Mesh Networking", "Embedded Systems", "AI"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      status: "Completed",
      year: "2023"
    },
    {
      title: "Robotic Arm Manipulator",
      description: "6-DOF robotic arm with precise control for pick-and-place operations.",
      technologies: ["Arduino", "Servo Control", "Computer Vision", "Kinematics"],
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&h=300&fit=crop",
      status: "Completed",
      year: "2023"
    },
    {
      title: "Underwater Exploration Drone",
      description: "Waterproof autonomous underwater vehicle for marine research and exploration.",
      technologies: ["Waterproof Sensors", "Pressure Control", "Wireless Communication"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
      status: "In Progress",
      year: "2024"
    },
    {
      title: "Medical Assistance Robot",
      description: "Healthcare robot designed to assist medical professionals with patient care and monitoring.",
      technologies: ["Health Sensors", "Machine Learning", "Database Integration"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      status: "Planning",
      year: "2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-electric/20 text-electric border-electric/30";
      case "Planning":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Past <span className="bg-gradient-to-r from-electric to-neon bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our innovative robotics projects that push the boundaries of technology and automation.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="gradient-card border-electric/20 hover:border-electric/40 transition-all duration-300 hover:shadow-electric group overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getStatusColor(project.status)} font-medium`}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 text-foreground">
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-electric group-hover:text-electric-bright transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="border-electric/30 text-electric/80 hover:bg-electric/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 border-electric/30 text-electric hover:bg-electric/10"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        size="sm"
                        className="flex-1 gradient-primary text-background hover:shadow-electric"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-electric/30 text-electric hover:bg-electric/10" />
          <CarouselNext className="border-electric/30 text-electric hover:bg-electric/10" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;