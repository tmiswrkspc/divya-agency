import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  children?: React.ReactNode;
}

export default function EmptyState({ 
  icon: Icon, 
  title, 
  message, 
  actionLabel, 
  onAction,
  children 
}: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <Icon className="h-24 w-24 text-gray-400 mx-auto mb-8" />
      <h1 className="text-3xl font-heading font-light text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        {message}
      </p>
      {children || (actionLabel && onAction && (
        <Button 
          size="lg" 
          className="rounded-full py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      ))}
    </div>
  );
}