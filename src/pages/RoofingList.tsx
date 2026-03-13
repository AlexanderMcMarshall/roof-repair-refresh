import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const roofCategories = [
  {
    title: "Composite Shingles",
    services: [
      { name: "Shingle Replacement", desc: "Substitute damaged or lost shingles with new ones." },
      { name: "Granule Loss Replacement", desc: "Restoring granules to maintain shingle effectiveness." },
      { name: "Leak Repair", desc: "Sealing leak sources to prevent water damage." },
      { name: "Flashing Repair", desc: "Repairing the flashing around chimneys, vents, and skylights." },
      { name: "Moss and Algae Removal", desc: "Cleaning off growths that can damage the shingles over time." },
    ],
  },
  {
    title: "Metal Roofs",
    services: [
      { name: "Seam Repair", desc: "Fixing seams that have become loose or separated." },
      { name: "Rust Removal", desc: "Treating and coating areas of rust to prevent further corrosion." },
      { name: "Dent Repair", desc: "Fixing dents to maintain surface integrity." },
      { name: "Coating Renewal", desc: "Applying new protective layers to combat environmental damage." },
      { name: "Screw Replacement", desc: "Updating fasteners to prevent leaks." },
    ],
  },
  {
    title: "Clay Tiles",
    services: [
      { name: "Tile Replacement", desc: "Replacing cracked or broken tiles." },
      { name: "Re-pointing", desc: "Mending deteriorating mortar for enhanced stability." },
      { name: "Debris Cleaning", desc: "Cleaning debris to prevent damming and pooling." },
      { name: "Underlayment Repair", desc: "Renewing underlayment to support tile integrity." },
      { name: "Impact Damage Repair", desc: "Repairing tile damage due to external impacts." },
    ],
  },
  {
    title: "Slate Roofs",
    services: [
      { name: "Slate Tile Replacement", desc: "Replace old slate tiles to maintain roof functionality." },
      { name: "Flashing Repair", desc: "Sealing flashing gaps to block water entry." },
      { name: "Delamination Check", desc: "Inspecting for delamination to prevent water ingress." },
      { name: "Snow Guard Installation", desc: "Implementing snow retention systems on slate roofs." },
      { name: "Structural Inspection", desc: "Evaluating the roof framework to sustain heavy materials." },
    ],
  },
  {
    title: "Wood Shingles",
    services: [
      { name: "Rot Repair", desc: "Removing and replacing decayed shingles to prevent further damage." },
      { name: "Shingle Resealing", desc: "Coating shingles to safeguard against moisture." },
      { name: "Color Restoration", desc: "Rejuvenating the appearance of discolored wood shingles." },
      { name: "Insect Damage Repair", desc: "Mending shingle damage caused by pest invasions." },
    ],
  },
];

const RoofingList = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="bg-primary pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Emergency Roofing Services for Spring Area Homes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/75">
            We're your go-to for experienced, local roofing services in Spring available anytime.
          </p>
          <a
            href="tel:9362595222"
            className="btn-cta mt-8 inline-flex"
          >
            <Phone className="h-5 w-5" />
            (936) 259-5222
          </a>
        </div>
      </section>

      {/* Roof Categories */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="space-y-16">
            {roofCategories.map((category) => (
              <div key={category.title}>
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    {category.title}
                  </h2>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service) => (
                    <div key={service.name} className="service-card">
                      <h3 className="mb-1.5 font-heading text-base font-bold text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoofingList;
