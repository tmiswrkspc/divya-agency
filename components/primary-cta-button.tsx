import { Button } from '@/components/ui/button';
import { ButtonProps } from '@/components/ui/button';

interface PrimaryCtaButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function PrimaryCtaButton({ children, className = "", ...props }: PrimaryCtaButtonProps) {
  return (
    <Button 
      className={`bg-[#FFB400] hover:bg-[#FFB400]/90 text-black font-semibold rounded-full py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}