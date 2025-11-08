import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const iconVariants = {
    initial: { rotate: -180, opacity: 0 },
    animate: { 
      rotate: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    },
    exit: { 
      rotate: 180, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center justify-center group hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === 'dark' ? (
            <motion.div
              key="sun"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute"
            >
              <Sun className="h-5 w-5 text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute"
            >
              <Moon className="h-5 w-5 text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

export default ThemeToggle;
