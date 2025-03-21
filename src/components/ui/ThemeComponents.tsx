interface ThemeTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ThemeHeading = ({ children, className = '' }: ThemeTextProps) => (
  <h2 className={`text-5xl font-bold text-white mb-4 ${className}`}>
    {children}
  </h2>
);

export const ThemeSubheading = ({ children, className = '' }: ThemeTextProps) => (
  <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${className}`}>
    {children}
  </p>
);

export const ThemeFeatureCard = ({ children, className = '' }: ThemeTextProps) => (
  <div className={`p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-brand-200/30 hover:border-brand-300/50 theme-hover-scale group ${className}`}>
    {children}
  </div>
);

export const ThemeIconContainer = ({ children, className = '' }: ThemeTextProps) => (
  <div className={`mb-3 p-2 rounded-full bg-gradient-to-br from-brand-400/20 to-brand-300/10 group-hover:from-brand-400/30 group-hover:to-brand-300/20 transition-colors duration-300 ${className}`}>
    {children}
  </div>
);

export const ThemeFeatureTitle = ({ children, className = '' }: ThemeTextProps) => (
  <h3 className={`text-base font-semibold text-brand-300 mb-1 ${className}`}>
    {children}
  </h3>
);

export const ThemeFeatureText = ({ children, className = '' }: ThemeTextProps) => (
  <p className={`text-white/80 text-xs group-hover:text-white/90 transition-colors duration-300 ${className}`}>
    {children}
  </p>
); 