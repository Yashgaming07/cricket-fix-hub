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
    <Card className="overflow-hidden shadow-match-card hover:shadow-cricket transition-all duration-300 group">
      {thumbnail && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={thumbnail}
            alt={`${team1} vs ${team2}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isLive && (
            <Badge className="absolute top-3 left-3 bg-destructive animate-pulse">
              LIVE
            </Badge>
          )}
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {matchType}
          </Badge>
          <Badge 
            variant={isLive ? "destructive" : "outline"} 
            className={isLive ? "animate-pulse" : ""}
          >
            {status}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-center">
          <span className="text-cricket-green">{team1}</span>
          <span className="mx-3 text-muted-foreground">vs</span>
          <span className="text-cricket-field">{team2}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="truncate">{venue}</span>
          </div>
        </div>
        
        {streamLink && (
          <Button 
            className="w-full bg-gradient-cricket hover:opacity-90 transition-opacity"
            asChild
          >
            <a href={streamLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Watch Live Stream
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default MatchCard;