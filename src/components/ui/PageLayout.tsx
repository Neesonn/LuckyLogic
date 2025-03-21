import { motion } from 'framer-motion';
import { Card } from './Card';

interface PageLayoutProps {
  children: React.ReactNode;
  showLogo?: boolean;
  className?: string;
  cardClassName?: string;
}

export const PageLayout = ({
  children,
  showLogo = false,
  className = '',
  cardClassName = '',
}: PageLayoutProps) => {
  return (
    <main
      className={`min-h-screen theme-gradient-bg flex flex-col items-center justify-center p-5 relative overflow-hidden ${className}`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-200/20 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <Card
          className={`max-w-3xl w-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 border-brand-200/30 backdrop-blur-xl ${cardClassName}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            {showLogo && (
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-400/30 to-brand-300/20 flex items-center justify-center border border-brand-200/30">
                <span className="text-3xl font-bold text-white">LL</span>
              </div>
            )}
            {children}
          </motion.div>
        </Card>
      </motion.div>
    </main>
  );
};
