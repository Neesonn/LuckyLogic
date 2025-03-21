'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the HeavyComponent with client-side only rendering
const LazyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => (
    <div className="p-6 bg-white bg-opacity-5 rounded-lg backdrop-blur-sm w-full max-w-2xl mx-auto animate-pulse">
      <div className="h-8 bg-white/10 rounded mb-4 w-48"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="h-24 bg-white/10 rounded-lg"></div>
        ))}
      </div>
    </div>
  ),
});

const LazyHeavyComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyHeavyComponent;
