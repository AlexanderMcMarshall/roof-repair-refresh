import {
  CloudRain,
  Zap,
  Layers,
  Droplets,
  Home,
  Bug,
  Shield,
  RotateCcw,
  Square,
  RefreshCw,
  Snowflake,
  Wrench,
  Leaf,
  Sun,
  CircleDot,
  Thermometer,
  PanelTop,
  Grid3X3,
  Pipette,
  Wind,
  Lightbulb,
  Sparkles,
  Fan,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Zap, title: "Emergency Hail Damage Repair", desc: "Addressing roof impairments caused by hail." },
  { icon: CloudRain, title: "Storm Damage Repair", desc: "Repairing weather-related roof damages." },
  { icon: Layers, title: "Shingle Replacement", desc: "Installing new shingles where needed." },
  { icon: Droplets, title: "Leak Detection and Repair", desc: "Detecting and mending water entry points." },
  { icon: Home, title: "Structural Repair", desc: "Addressing any sagging or deterioration in the roof structure." },
  { icon: Bug, title: "Animal Damage Repair", desc: "Restoring parts of the roof affected by animal activity." },
  { icon: Shield, title: "Waterproofing", desc: "Waterproofing to avoid leaks." },
  { icon: RotateCcw, title: "Full Roof Replacement", desc: "Renewing the entire roof structure." },
  { icon: Square, title: "Flat Roof Repair", desc: "Fixing leaks, punctures, and pooling water issues on flat roofs." },
  { icon: RefreshCw, title: "Re-roofing", desc: "Layering new roofing materials atop old ones." },
  { icon: Snowflake, title: "Ice Dam Removal", desc: "Eradicating ice dams that lead to pooling." },
  { icon: Wrench, title: "Flashing Repair", desc: "Fixing leaks around roof flashings." },
  { icon: Leaf, title: "Moss and Algae Cleaning", desc: "Cleansing the roof of organic growths." },
  { icon: Sun, title: "Skylight Sealing and Repair", desc: "Mending skylight leaks." },
  { icon: CircleDot, title: "Granule Loss Replacement", desc: "Reapplying granules to enhance roof durability." },
  { icon: Thermometer, title: "Thermal Insulation Improvement", desc: "Improving attic insulation to reduce heat loss." },
  { icon: PanelTop, title: "Soffit and Fascia Repair", desc: "Mending the finishing edges of the roof." },
  { icon: Grid3X3, title: "Tile Replacement", desc: "Replacing cracked or broken tiles on tiled roofs." },
  { icon: Pipette, title: "Gutter Cleaning and Repair", desc: "Clearing and securing gutters and downspouts." },
  { icon: Wind, title: "Ridge Cap Repair", desc: "Reinforcing the seal at roof intersections." },
  { icon: Wind, title: "Wind Lift Repairs", desc: "Repairing damage caused by wind lifting the edges of roofing materials." },
  { icon: Lightbulb, title: "Energy Efficiency Upgrades", desc: "Implementing energy-saving solutions on the roof." },
  { icon: Sparkles, title: "Roof Cleaning", desc: "Purifying the roof surface from harmful elements." },
  { icon: Fan, title: "Ventilation Issues", desc: "Fixing or improving roof and attic ventilation to prevent heat and moisture buildup." },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            What We Do
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            Our Roofing Services for Spring
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            From emergency repairs to full replacements, we handle every roofing need with expertise and care.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              className="service-card group cursor-pointer"
            >
              <motion.div
                className="mb-3 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-5 w-5" />
              </motion.div>
              <h3 className="mb-1.5 font-heading text-base font-bold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>

              {/* Mobile tap indicator */}
              <motion.div
                className="mt-3 flex items-center justify-center opacity-0 group-hover:opacity-100 md:hidden"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="rounded-full bg-accent/20 px-2 py-1 text-xs text-accent">
                  Tap to learn more
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
