'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Lucky Logic
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Coming Soon
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          We're crafting something extraordinary. Stay tuned for our grand reveal!
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-yellow-400 text-green-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors">
            Get Notified
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-8 text-green-100 text-sm"
      >
        © 2024 Lucky Logic. All rights reserved.
      </motion.div>
    </main>
  );
}
