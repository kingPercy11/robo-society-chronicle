import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Events = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  
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

  const currentEvent = events[currentEventIndex];
  
  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };
  
  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
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

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEventIndex(index)}
                className={`w-4 h-16 rounded-sm border transition-all duration-300 ${
                  index === currentEventIndex 
                    ? 'bg-electric border-electric shadow-electric' 
                    : 'bg-transparent border-electric/30 hover:border-electric/60'
                }`}
              >
                <span className="sr-only">Event {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Main Event Card */}
          <div className="mx-16">
            <Card className="gradient-card border-electric/20 overflow-hidden relative">
              <div className="md:flex">
                {/* Event Image */}
                <div className="md:w-1/2 relative">
                  <img 
                    src={currentEvent.image} 
                    alt={currentEvent.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getDifficultyColor(currentEvent.difficulty)} font-medium`}>
                      {currentEvent.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-electric/20 text-electric border-electric/30">
                      {currentEvent.category}
                    </Badge>
                  </div>
                  
                  {/* Prize Pool Overlay */}
                  <div className="absolute top-1/2 left-6 -translate-y-1/2">
                    <div className="text-electric text-sm font-medium mb-2 uppercase tracking-wider">
                      PRIZES WORTH
                    </div>
                    <div className="text-electric text-3xl font-bold">
                      {currentEvent.prize}
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-electric mb-4">
                      {currentEvent.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {currentEvent.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-electric" />
                      <span>{currentEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-electric" />
                      <span>{currentEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-electric" />
                      <span>{currentEvent.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Trophy className="w-4 h-4 text-electric" />
                      <span>{currentEvent.prize}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
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
                </div>
              </div>
            </Card>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevEvent}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 border-electric/30 text-electric hover:bg-electric/10 w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextEvent}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 border-electric/30 text-electric hover:bg-electric/10 w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
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