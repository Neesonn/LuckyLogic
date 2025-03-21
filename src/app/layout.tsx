import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { metadata as pageMetadata } from './page.metadata';
import AnimatedLock from '@/components/AnimatedLock';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = pageMetadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <AnimatedLock />
          {children}
        </div>
      </body>
    </html>
  );
}
