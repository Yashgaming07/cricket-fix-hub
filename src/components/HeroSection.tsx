import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-field opacity-10"></div>
      
      {/* Floating elements for premium effect */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cricket-green/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cricket-field/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container relative">
        <div className="text-center space-y-8 animate-fade-in">
          <Badge className="bg-cricket-green text-cricket-white px-6 py-3 text-sm font-semibold animate-scale-in shadow-glow">
            🏏 Live Cricket Streaming
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-up">
            <span className="bg-gradient-cricket bg-clip-text text-transparent drop-shadow-lg">
              Crick on Time
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Your ultimate destination for live cricket matches, scores, and updates. 
            Never miss a moment of the action with crystal clear streaming!
          </p>
          
          <div className="flex items-center justify-center gap-3 text-base text-muted-foreground animate-scale-in premium-glow" style={{animationDelay: '0.4s'}}>
            <div className="h-3 w-3 rounded-full bg-destructive animate-pulse shadow-glow"></div>
            <span className="font-medium">Live matches available now • HD Quality</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="bg-cricket-green hover:bg-cricket-field smooth-transition hover:scale-105 shadow-premium">
              🎯 Watch Now
            </Button>
            <Button variant="outline" size="lg" className="smooth-transition hover:scale-105 hover:shadow-glow border-cricket-green text-cricket-green hover:bg-cricket-green hover:text-white">
              📊 Live Scores
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;