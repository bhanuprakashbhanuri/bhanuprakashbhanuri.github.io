import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeTransition = () => {
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousTheme, setPreviousTheme] = useState(theme);

  useEffect(() => {
    if (theme !== previousTheme && previousTheme) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setPreviousTheme(theme);
      }, 500);
    } else if (!previousTheme) {
      setPreviousTheme(theme);
    }
  }, [theme, previousTheme]);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="fixed inset-0 z-[100] pointer-events-none"
          style={{
            background: theme === 'dark' 
              ? 'hsl(var(--primary))' 
              : 'hsl(var(--secondary))',
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default ThemeTransition;
