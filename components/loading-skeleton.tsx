interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSkeleton({ className = "", children }: LoadingSkeletonProps) {
  if (children) {
    return (
      <div className={`animate-pulse ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-8"></div>
      <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
      <div className="h-12 bg-gray-200 rounded-full w-48 mx-auto"></div>
    </div>
  );
}