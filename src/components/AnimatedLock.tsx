"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Unlock } from "lucide-react";
import { motion } from "framer-motion";

const AnimatedLock = () => {
  const [isLocked, setIsLocked] = useState(true);
  const router = useRouter();

  return (
    <motion.div
      className="fixed top-4 right-4 bg-green-600 p-3 rounded-full shadow-lg border-2 border-[#FFD700] cursor-pointer"
      onHoverStart={() => setIsLocked(false)}
      onHoverEnd={() => setIsLocked(true)}
      onClick={() => router.push("/login")}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: isLocked ? 0 : -10 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      {isLocked ? (
        <Lock data-testid="lock-icon" size={30} color="white" strokeWidth={2.5} />
      ) : (
        <Unlock data-testid="unlock-icon" size={30} color="white" strokeWidth={2.5} />
      )}
    </motion.div>
  );
};

export default AnimatedLock; 