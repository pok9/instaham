import React from 'react';

interface SearchIconProps {
  isActive?: boolean;
  size?: number;
  onClick?: () => void;
  className?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ 
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
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      {isActive && (
        <circle cx="11" cy="11" r="5" fill="currentColor" />
      )}
    </svg>
  );
};

export default SearchIcon;