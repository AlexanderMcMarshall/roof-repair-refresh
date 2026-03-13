import { Phone, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            <Shield className="h-4 w-4" />
            Bonded · Insured · Licensed
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            A Local, Friendly Roofing Company for Spring
          </h1>

          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            When it comes to roofs, we do it all! Call for immediate same day or
            next day roofing services.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="tel:9362595222" className="btn-cta">
              <Phone className="h-5 w-5" />
              (936) 259-5222
            </a>
            <a href="#services" className="btn-outline-hero">
              View Our Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-primary-foreground/70">
            {["Same Day Service", "Free Estimates", "Family Owned"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
