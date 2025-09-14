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
      <section id="fixtures" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Today's Fixtures</h2>
            <p className="text-muted-foreground">Don't miss today's exciting cricket matches</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {todaysFixtures.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>
        </div>
      </section>

      {/* Women's Cricket Section */}
      <section id="women" className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Women's Cricket</h2>
            <p className="text-muted-foreground">Supporting women's cricket around the world</p>
          </div>
          
          <div className="max-w-md mx-auto">
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
      <footer className="py-12 bg-card border-t">
        <div className="container text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={logo} alt="Crick on Time Logo" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-bold text-lg text-foreground">
              Crick on Time
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Your premier destination for live cricket streaming and updates
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://crickontime.pages.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-cricket-green hover:underline"
            >
              Main Cricket Site
            </a>
            <a 
              href="https://jstartv.pages.dev/jstar?id=1142" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-cricket-green hover:underline"
            >
              Women's Live Stream
            </a>
            <a 
              href="https://t.me/+JtamklRCRxAxMTg1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
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
