import { Button } from "@/components/ui/button";
import logo from "@/assets/crick-on-time-logo.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b glass-effect backdrop-blur-xl">
      <div className="container flex h-16 items-center smooth-transition">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2 smooth-transition hover:scale-105" href="/">
            <img src={logo} alt="Crick on Time Logo" className="h-10 w-10 rounded-full object-cover animate-glow" />
            <span className="font-bold text-xl text-foreground">
              Crick on Time
            </span>
          </a>
        </div>
        
        <nav className="flex items-center gap-6 text-sm">
          <a
            className="smooth-transition hover:text-foreground/80 text-foreground/60 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cricket-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            href="#fixtures"
          >
            Today's Fixtures
          </a>
          <a
            className="smooth-transition hover:text-foreground/80 text-foreground/60 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cricket-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            href="#women"
          >
            Women's Cricket
          </a>
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="border-cricket-green text-cricket-green hover:bg-cricket-green hover:text-cricket-white smooth-transition hover:scale-105 hover:shadow-glow"
          >
            <a href="https://crickontime.pages.dev/" target="_blank" rel="noopener noreferrer">
              Main Site
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white smooth-transition hover:scale-105 hover:shadow-glow"
          >
            <a href="https://t.me/+JtamklRCRxAxMTg1" target="_blank" rel="noopener noreferrer">
              📱 Telegram
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;