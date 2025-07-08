interface StatisticItemProps {
  value: string;
  label: string;
  labelColorClass?: string;
  className?: string;
}

export default function StatisticItem({ 
  value, 
  label, 
  labelColorClass = "text-green-200",
  className = ""
}: StatisticItemProps) {
  return (
    <div className={className}>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className={`text-lg ${labelColorClass}`}>{label}</div>
    </div>
  );
}