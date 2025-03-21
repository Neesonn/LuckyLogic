import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export const LockButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/login")}
      className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm border border-brand-200/30 hover:border-brand-300/50 hover:scale-105 group"
      aria-label="Go to login"
      data-testid="lock-button"
    >
      <Lock className="w-6 h-6 text-brand-300 group-hover:text-brand-200 transition-colors duration-200" />
    </button>
  );
};

export default LockButton; 