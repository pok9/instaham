import React from 'react';

interface InstahamIconProps {
  isActive?: boolean;
  size?: number;
  onClick?: () => void;
  className?: string;
}

const InstahamIcon: React.FC<InstahamIconProps> = ({ 
  isActive = false, 
  size = 24, 
  onClick, 
  className = '' 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isActive ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      {/* Camera outline */}
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      {/* Lens */}
      <circle cx="12" cy="12" r="6" />
      {/* Ham slice */}
      <path d="M9 12 A3 3 0 0 1 15 12" fill={isActive ? '#FFA07A' : 'none'} stroke="#FFA07A" />
      {/* Flash */}
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
};

export default InstahamIcon;