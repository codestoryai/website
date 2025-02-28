import React from 'react';

interface StyledBreakProps {
  className?: string;
  width?: string;
}

export function StyledBreak({ className = '', width = '100%' }: StyledBreakProps) {
  return (
    <div 
      className={`my-8 h-px rounded-full ${className} opacity-50`}
      style={{
        width: width,
        background: 'linear-gradient(90deg, rgba(79, 70, 229, 0.5) 0%, rgba(14, 165, 233, 0.5) 50%, rgba(52, 211, 153, 0.5) 100%)',
        boxShadow: '0 0 4px rgba(79, 70, 229, 0.2)'
      }}
    />
  );
} 