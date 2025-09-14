import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MatchCard from "@/components/MatchCard";
import indiaAustriaThumb from "@/assets/india-austria-women.jpg";
import logo from "@/assets/crick-on-time-logo.jpg";

const Index = () => {
  const todaysFixtures = [
    {
      team1: "India Women",
      team2: "Austria Women",
      matchType: "Women's T20I",
      status: "Live",
      venue: "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
      time: "2:30 PM",
      date: "Today",
      thumbnail: indiaAustriaThumb,
      streamLink: "https://jstartv.pages.dev/jstar?id=1142",
      isLive: true,
    },
    {
      team1: "Australia",
      team2: "India",
      matchType: "Test Match",
      status: "Day 3",
      venue: "Melbourne Cricket Ground, Melbourne",
      time: "5:00 AM",
      date: "Today",
      isLive: true,
    },
    {
      team1: "England",
      team2: "South Africa",
      matchType: "ODI",
      status: "Upcoming",
      venue: "Lord's Cricket Ground, London",
      time: "6:30 PM",
      date: "Today",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Today's Fixtures Section */}
      <section id="fixtures" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
        <div className="container relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-cricket bg-clip-text text-transparent">Today's Fixtures</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Don't miss today's exciting cricket matches with HD streaming quality</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {todaysFixtures.map((match, index) => (
              <div key={index} className="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <MatchCard {...match} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Women's Cricket Section */}
      <section id="women" className="py-20 glass-effect relative">
        <div className="absolute inset-0 bg-gradient-card opacity-50"></div>
        <div className="container relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-cricket bg-clip-text text-transparent">Women's Cricket</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Supporting women's cricket around the world with premium streaming</p>
          </div>
          
          <div className="max-w-md mx-auto animate-scale-in">
            <MatchCard
              team1="India Women"
              team2="Austria Women"
              matchType="Women's T20I"
              status="Live Now"
              venue="Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium"
              time="2:30 PM"
              date="Today"
              thumbnail={indiaAustriaThumb}
              streamLink="https://jstartv.pages.dev/jstar?id=1142"
              isLive={true}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 glass-effect border-t border-muted/20 relative">
        <div className="absolute inset-0 bg-gradient-card opacity-30"></div>
        <div className="container text-center relative">
          <div className="flex items-center justify-center space-x-3 mb-6 animate-fade-in">
            <img src={logo} alt="Crick on Time Logo" className="h-10 w-10 rounded-full object-cover animate-glow" />
            <span className="font-bold text-2xl text-foreground">
              Crick on Time
            </span>
          </div>
          <p className="text-base text-muted-foreground mb-8 max-w-lg mx-auto animate-slide-up">
            Your premier destination for live cricket streaming and updates with crystal clear quality
          </p>
          <div className="flex justify-center gap-6 animate-scale-in">
            <a 
              href="https://crickontime.pages.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base text-cricket-green hover:underline smooth-transition hover:scale-105 font-medium"
            >
              🏏 Main Cricket Site
            </a>
            <a 
              href="https://jstartv.pages.dev/jstar?id=1142" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base text-cricket-green hover:underline smooth-transition hover:scale-105 font-medium"
            >
              📺 Women's Live Stream
            </a>
            <a 
              href="https://t.me/+JtamklRCRxAxMTg1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base text-blue-500 hover:underline smooth-transition hover:scale-105 font-medium"
            >
              📱 Join Telegram Channel
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
