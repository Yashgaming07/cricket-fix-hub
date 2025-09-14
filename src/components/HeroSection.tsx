import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-field opacity-5"></div>
      <div className="container relative">
        <div className="text-center space-y-6">
          <Badge className="bg-cricket-green text-cricket-white px-4 py-2">
            Live Cricket Streaming
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-cricket bg-clip-text text-transparent">
              Crick on Time
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your ultimate destination for live cricket matches, scores, and updates. 
            Never miss a moment of the action!
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-destructive animate-pulse"></div>
            <span>Live matches available now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;