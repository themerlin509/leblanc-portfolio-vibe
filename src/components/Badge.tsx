
import { ReactNode } from 'react';

interface BadgeProps {
  type: 'gold' | 'silver';
  children: ReactNode;
}

const Badge = ({ type, children }: BadgeProps) => {
  return (
    <span 
      className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full
      ${type === 'gold' ? 'badge-gold' : 'badge-silver'}`}
    >
      {children}
    </span>
  );
};

export default Badge;
