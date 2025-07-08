import { LucideIcon } from 'lucide-react';

interface IconContainerProps {
  icon: LucideIcon;
  bgColorClass?: string;
  sizeClass?: string;
  iconSizeClass?: string;
  className?: string;
}

export default function IconContainer({ 
  icon: Icon, 
  bgColorClass = "bg-gradient-to-br from-[#1A6B3D] to-[#2A7B4D]",
  sizeClass = "w-16 h-16",
  iconSizeClass = "h-8 w-8",
  className = "mx-auto mb-6"
}: IconContainerProps) {
  return (
    <div className={`${sizeClass} ${bgColorClass} rounded-full flex items-center justify-center ${className}`}>
      <Icon className={`${iconSizeClass} text-white`} />
    </div>
  );
}