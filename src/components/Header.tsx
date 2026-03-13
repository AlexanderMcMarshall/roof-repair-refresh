import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Roof Repairs", to: "/roofing-list" },
  { label: "Request Quote", to: "/contact-us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="font-heading text-xl font-bold text-primary-foreground md:text-2xl">
          Vargas & Sons
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:9362595222"
          className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-bold text-accent-foreground transition-transform hover:scale-105 md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          (936) 259-5222
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-primary-foreground md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:9362595222"
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-bold text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              (936) 259-5222
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
