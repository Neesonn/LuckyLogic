import { Lock } from "lucide-react";

const LockIcon = () => {
  return (
    <div className="fixed top-4 right-4 bg-green-600 p-2 rounded-full shadow-lg border-2 border-gold-500">
      <Lock data-testid="lock-icon" size={28} color="white" strokeWidth={2.5} />
    </div>
  );
};

export default LockIcon; 