import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Roof Repairs", to: "/roofing-list" },
  { label: "Request Quote", to: "/contact-us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      setMenuOpen(false);
    }
  };

  return (
    <>
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
            <motion.div
              animate={{
                rotate: menuOpen ? 180 : 0,
                scale: menuOpen ? 1.1 : 1
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-primary shadow-2xl md:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-primary-foreground/10">
                <h2 className="font-heading text-lg font-bold text-primary-foreground">
                  Menu
                </h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-primary-foreground/70 hover:text-primary-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6">
                <div className="space-y-2">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className="group relative block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground/80 transition-all hover:bg-accent/10 hover:text-accent"
                      >
                        <span className="relative z-10">{item.label}</span>
                        <motion.div
                          className="absolute inset-0 rounded-lg bg-accent/5"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Phone Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: navLinks.length * 0.1 + 0.1,
                    duration: 0.3
                  }}
                  className="mt-8"
                >
                  <a
                    href="tel:9362595222"
                    className="group relative inline-flex w-full items-center justify-center gap-3 rounded-lg bg-accent px-6 py-4 font-bold text-accent-foreground transition-all hover:shadow-lg active:scale-95"
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Phone className="h-5 w-5" />
                    </motion.div>
                    <span>(936) 259-5222</span>
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-accent-foreground/10"
                      initial={{ scale: 0 }}
                      whileTap={{ scale: 1 }}
                      transition={{ duration: 0.1 }}
                    />
                  </a>
                </motion.div>

                {/* Swipe hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="mt-8 text-center text-xs text-primary-foreground/50"
                >
                  ← Swipe to close
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
