import { Button } from '@/components/ui/button';
import { ButtonProps } from '@/components/ui/button';

interface OutlineCtaButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function OutlineCtaButton({ children, className = "", ...props }: OutlineCtaButtonProps) {
  return (
    <Button 
      variant="outline"
      className={`border-2 border-[#1A6B3D] text-[#1A6B3D] hover:bg-[#1A6B3D] hover:text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}