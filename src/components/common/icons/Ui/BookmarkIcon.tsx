interface BookmarkIconProps {
  isActive?: boolean;
  size?: number;
  onClick?: () => void;
  className?: string;
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ 
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
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
};