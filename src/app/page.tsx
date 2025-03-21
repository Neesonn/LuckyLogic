'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Metadata } from 'next';
import { metadata as pageMetadata } from './page.metadata';

export const metadata: Metadata = pageMetadata;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Lucky Logic</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We&rsquo;re crafting something extraordinary. Stay tuned for our
            grand reveal!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Innovation', icon: '/window.svg' },
              { title: 'Global Reach', icon: '/globe.svg' },
              { title: 'Documentation', icon: '/file.svg' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
