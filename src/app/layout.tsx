import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { metadata as pageMetadata } from './page.metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = pageMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
