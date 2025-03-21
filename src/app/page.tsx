'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageLayout } from '@/components/ui/PageLayout';
import { ThemeHeading, ThemeSubheading } from '@/components/ui/ThemeComponents';
import { LockButton } from '@/components/ui/LockButton';
import {
  ThemeFeatureCard,
  ThemeIconContainer,
  ThemeFeatureTitle,
  ThemeFeatureText,
} from '@/components/ui/ThemeComponents';

export default function Home() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <LockButton />
      </div>

      <PageLayout showLogo>
        <ThemeHeading>Lucky Logic</ThemeHeading>
        <ThemeSubheading>Something extraordinary is coming</ThemeSubheading>

        {/* Countdown placeholder */}
        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-12">
          {[
            { value: '00', label: 'Days' },
            { value: '00', label: 'Hours' },
            { value: '00', label: 'Minutes' },
            { value: '00', label: 'Seconds' },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <span className="text-2xl font-bold text-brand-400">
                {item.value}
              </span>
              <span className="text-sm text-white/80">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: 'Innovation',
              icon: '/window.svg',
              description: 'Pushing boundaries with cutting-edge solutions',
            },
            {
              title: 'Global Reach',
              icon: '/globe.svg',
              description: 'Connecting minds across continents',
            },
            {
              title: 'Documentation',
              icon: '/file.svg',
              description: 'Clear, concise, and comprehensive guides',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              <ThemeFeatureCard>
                <div className="flex flex-col items-center">
                  <ThemeIconContainer>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </ThemeIconContainer>
                  <ThemeFeatureTitle>{item.title}</ThemeFeatureTitle>
                  <ThemeFeatureText>{item.description}</ThemeFeatureText>
                </div>
              </ThemeFeatureCard>
            </motion.div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
