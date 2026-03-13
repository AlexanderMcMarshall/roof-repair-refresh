import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground px-4 py-12 text-background/70">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div>
            <Link to="/" className="font-heading text-xl font-bold text-background">
              Vargas & Sons Roof Repair
            </Link>
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
              <Link to="/" className="transition-colors hover:text-background">Home</Link>
              <Link to="/roofing-list" className="transition-colors hover:text-background">Roof Repairs</Link>
              <Link to="/contact-us" className="transition-colors hover:text-background">Request Quote</Link>
            </nav>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 border-t border-background/10 pt-6 text-center text-xs"
        >
          ©2026 www.vargasroofrepair.pro
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
