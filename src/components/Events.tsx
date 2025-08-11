import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "RoboSoccer Championship",
      description: "Autonomous soccer robots compete in fast-paced matches. Teams must program their robots to navigate, find the ball, and score goals.",
      date: "March 15-17, 2024",
      location: "Main Arena",
      participants: "24 Teams",
      prize: "$5,000",
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=500&h=300&fit=crop",
      difficulty: "Advanced",
      category: "Competition"
    },
    {
      title: "Robot Wars",
      description: "Combat robots face off in intense battles. Design and build fighting robots to dominate the arena in this ultimate test of engineering.",
      date: "April 8-10, 2024", 
      location: "Combat Zone",
      participants: "32 Teams",
      prize: "$7,500",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&h=300&fit=crop",
      difficulty: "Expert",
      category: "Competition"
    },
    {
      title: "Line Following Robot (LFR)",
      description: "Precision line-following competition where speed and accuracy matter. Navigate complex paths with tight turns and obstacles.",
      date: "February 22-23, 2024",
      location: "Tech Lab",
      participants: "40 Teams", 
      prize: "$3,000",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      difficulty: "Beginner",
      category: "Competition"
    },
    {
      title: "Robotic Quidditch",
      description: "Magical sport meets robotics! Flying drones compete to catch the golden snitch while ground robots play as chasers and beaters.",
      date: "May 20-22, 2024",
      location: "Open Field",
      participants: "16 Teams",
      prize: "$4,500",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop",
      difficulty: "Intermediate",
      category: "Innovation"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Expert":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-electric/20 text-electric border-electric/30";
    }
  };

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="bg-gradient-to-r from-electric to-neon bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exciting robotics competitions and showcase your engineering skills against the best teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index}
              className="gradient-card border-electric/20 hover:border-electric/40 transition-all duration-300 hover:shadow-electric group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getDifficultyColor(event.difficulty)} font-medium`}>
                    {event.difficulty}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-electric/20 text-electric border-electric/30">
                    {event.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-electric group-hover:text-electric-bright transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {event.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-electric" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-electric" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-electric" />
                    <span>{event.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Trophy className="w-4 h-4 text-electric" />
                    <span>{event.prize}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="outline"
                    className="flex-1 border-electric/30 text-electric hover:bg-electric/10"
                  >
                    Learn More
                  </Button>
                  <Button 
                    className="flex-1 gradient-primary text-background hover:shadow-electric"
                  >
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-electric/50 text-electric hover:bg-electric/10 px-8 py-6 text-lg hover:glow-electric transition-glow"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;