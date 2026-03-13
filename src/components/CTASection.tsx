import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl"
        >
          Need Roof Repair in Spring?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/75"
        >
          Get immediate same day or next day roofing services. Free estimates — no obligation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="tel:9362595222"
            className="btn-cta text-xl group"
            whileHover={{ scale: 1.05, y: -2 }}
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
            href="#"
            className="btn-outline-hero group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Mobile-specific interactive elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center md:hidden"
        >
          <motion.div
            className="flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm text-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Phone className="h-4 w-4" />
            </motion.div>
            Tap the floating button for quick call
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
