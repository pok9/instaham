import React from 'react';

interface ShareIconProps {
  isActive?: boolean;
  size?: number;
  onClick?: () => void;
  className?: string;
}

const ShareIcon: React.FC<ShareIconProps> = ({ 
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
};

export default ShareIcon;