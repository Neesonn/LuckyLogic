"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export const HomeButton = () => {
  return (
    <Link href="/" aria-label="Go to homepage">
      <div
        className="fixed top-4 left-4 z-50 
        backdrop-blur-lg bg-white/10 border border-white/20 
        p-2 rounded-full shadow-md hover:bg-white/20 
        transition duration-300 cursor-pointer"
      >
        <Home className="text-white w-6 h-6" />
      </div>
    </Link>
  );
}; 