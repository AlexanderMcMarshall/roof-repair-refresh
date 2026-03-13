import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground px-4 py-12 text-background/70">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="font-heading text-xl font-bold text-background">
              Vargas & Sons Roof Repair
            </span>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              Serving Spring, TX & Surrounding Areas
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href="tel:9362595222"
              className="flex items-center gap-2 text-lg font-bold text-accent"
            >
              <Phone className="h-4 w-4" />
              (936) 259-5222
            </a>
            <nav className="flex gap-6 text-sm">
              <a href="#" className="transition-colors hover:text-background">Home</a>
              <a href="#" className="transition-colors hover:text-background">Roof Repairs</a>
              <a href="#" className="transition-colors hover:text-background">Request Quote</a>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-background/10 pt-6 text-center text-xs">
          ©2026 www.vargasroofrepair.pro
        </div>
      </div>
    </footer>
  );
};

export default Footer;
