'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeavyComponent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm w-full max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-white mb-4">Heavy Component</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-4 bg-white/5 rounded-lg"
          >
            <div className="h-24 flex items-center justify-center text-white/80">
              Dynamic Content {i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeavyComponent;
