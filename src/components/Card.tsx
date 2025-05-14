
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card = ({ className = '', children }: CardProps) => {
  return (
    <div className={`glass-card p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] ${className}`}>
      {children}
    </div>
  );
};

export default Card;
