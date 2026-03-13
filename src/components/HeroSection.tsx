import { Phone, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent"
          >
            <Shield className="h-4 w-4" />
            Bonded · Insured · Licensed
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-black leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
          >
            A Local, Friendly Roofing Company for Spring
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-lg text-primary-foreground/80 md:text-xl"
          >
            When it comes to roofs, we do it all! Call for immediate same day or
            next day roofing services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="tel:9362595222"
              className="btn-cta group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Phone className="h-5 w-5" />
                (936) 259-5222
              </motion.div>
            </motion.a>
            <motion.a
              href="#services"
              className="btn-outline-hero group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View Our Services
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-primary-foreground/70"
          >
            {["Same Day Service", "Free Estimates", "Family Owned"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1.5 transition-colors hover:bg-primary-foreground/20"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="h-4 w-4 text-accent" />
                </motion.div>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
