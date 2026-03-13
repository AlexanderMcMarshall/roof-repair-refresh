import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          Need Roof Repair in Spring?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/75">
          Get immediate same day or next day roofing services. Free estimates — no obligation.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="tel:9362595222" className="btn-cta text-xl">
            <Phone className="h-5 w-5" />
            (936) 259-5222
          </a>
          <a
            href="#"
            className="btn-outline-hero"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
