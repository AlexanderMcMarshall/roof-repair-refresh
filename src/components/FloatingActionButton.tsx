import { Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ y, opacity }}
      className="fixed bottom-6 right-6 z-40 md:hidden"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.a
        href="tel:9362595222"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        >
          <Phone className="h-6 w-6" />
        </motion.div>
      </motion.a>

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default FloatingActionButton;