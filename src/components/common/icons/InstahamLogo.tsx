import React from 'react';

interface InstahamLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const InstahamLogo: React.FC<InstahamLogoProps> = ({ width = 300, height = 100, className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 100"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <style>
          {`
            .script-font {
              font-family: 'Brush Script MT', cursive;
              font-size: 40px;
              fill: black;
            }
          `}
        </style>
      </defs>
      
      {/* Background */}
      <rect width="90%" height="100%" fill='white' />
      
      {/* Text */}
      <text x="20" y="30" dominantBaseline="middle" textAnchor="middle" className="script-font">
        Instaham
      </text>
    </svg>
  );
};

export default InstahamLogo;