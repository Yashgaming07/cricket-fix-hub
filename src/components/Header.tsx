import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="h-8 w-8 rounded-full bg-gradient-cricket"></div>
            <span className="font-bold text-xl bg-gradient-cricket bg-clip-text text-transparent">
              Crick on Time
            </span>
          </a>
        </div>
        
        <nav className="flex items-center gap-6 text-sm">
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#fixtures"
          >
            Today's Fixtures
          </a>
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#women"
          >
            Women's Cricket
          </a>
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="border-cricket-green text-cricket-green hover:bg-cricket-green hover:text-cricket-white"
          >
            <a href="https://crickontime.pages.dev/" target="_blank" rel="noopener noreferrer">
              Main Site
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
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