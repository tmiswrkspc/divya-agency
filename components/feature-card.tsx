import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import IconContainer from './icon-container';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColorClass?: string;
  className?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  bgColorClass,
  className = "text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
}: FeatureCardProps) {
  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <div className="group-hover:scale-110 transition-transform duration-300">
          <IconContainer 
            icon={icon} 
            bgColorClass={bgColorClass}
          />
        </div>
        <h3 className="text-xl font-heading font-normal mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}