import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Lucky Logic',
    template: '%s | Lucky Logic',
  },
  description: 'Innovation Meets Excellence at Lucky Logic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luckylogic.com/',
    siteName: 'Lucky Logic',
    images: [
      {
        url: 'https://luckylogic.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lucky Logic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@luckylogic',
    creator: '@luckylogic',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
