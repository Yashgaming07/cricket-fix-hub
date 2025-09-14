import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

interface MatchCardProps {
  team1: string;
  team2: string;
  matchType: string;
  status: string;
  venue: string;
  time: string;
  date: string;
  thumbnail?: string;
  streamLink?: string;
  isLive?: boolean;
}

const MatchCard = ({
  team1,
  team2,
  matchType,
  status,
  venue,
  time,
  date,
  thumbnail,
  streamLink,
  isLive = false,
}: MatchCardProps) => {
  return (
    <Card className="overflow-hidden shadow-match-card hover:shadow-premium smooth-transition hover-lift group glass-effect border-muted/50">
      {thumbnail && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={thumbnail}
            alt={`${team1} vs ${team2}`}
            className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
          {isLive && (
            <Badge className="absolute top-4 left-4 bg-destructive animate-pulse shadow-glow border-0 text-white font-bold">
              🔴 LIVE
            </Badge>
          )}
          <div className="absolute top-4 right-4 glass-effect rounded-full p-2">
            <div className="w-3 h-3 bg-cricket-green rounded-full animate-glow"></div>
          </div>
        </div>
      )}
      
      <CardHeader className="pb-4 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs font-semibold glass-effect">
            {matchType}
          </Badge>
          <Badge 
            variant={isLive ? "destructive" : "outline"} 
            className={`${isLive ? "animate-pulse shadow-glow" : ""} font-semibold`}
          >
            {status}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-center group-hover:scale-105 smooth-transition">
          <span className="text-cricket-green drop-shadow-sm">{team1}</span>
          <span className="mx-3 text-muted-foreground font-normal">vs</span>
          <span className="text-cricket-field drop-shadow-sm">{team2}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex items-center gap-3 p-2 rounded-lg glass-effect smooth-transition hover:bg-muted/20">
            <Calendar className="h-4 w-4 text-cricket-green" />
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg glass-effect smooth-transition hover:bg-muted/20">
            <Clock className="h-4 w-4 text-cricket-field" />
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg glass-effect smooth-transition hover:bg-muted/20">
            <MapPin className="h-4 w-4 text-cricket-gold" />
            <span className="truncate font-medium">{venue}</span>
          </div>
        </div>
        
        {streamLink && (
          <Button 
            className="w-full bg-gradient-cricket hover:opacity-90 smooth-transition hover:scale-105 shadow-premium text-white font-semibold py-3"
            asChild
          >
            <a href={streamLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 mr-2" />
              Watch Live Stream
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default MatchCard;