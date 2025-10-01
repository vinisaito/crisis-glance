import { SeverityLevel } from "@/types/incident";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, AlertTriangle, Info, MinusCircle } from "lucide-react";

interface SeverityBadgeProps {
  severity: SeverityLevel;
  size?: "default" | "sm" | "lg";
}

const severityConfig = {
  critical: {
    label: "Crítico",
    className: "bg-critical/10 text-critical border-critical/30 hover:bg-critical/20",
    icon: AlertCircle,
  },
  high: {
    label: "Alto",
    className: "bg-high/10 text-high border-high/30 hover:bg-high/20",
    icon: AlertTriangle,
  },
  medium: {
    label: "Médio",
    className: "bg-medium/10 text-medium border-medium/30 hover:bg-medium/20",
    icon: MinusCircle,
  },
  low: {
    label: "Baixo",
    className: "bg-low/10 text-low border-low/30 hover:bg-low/20",
    icon: Info,
  },
};

export function SeverityBadge({ severity, size = "default" }: SeverityBadgeProps) {
  const config = severityConfig[severity];
  const Icon = config.icon;
  
  const iconSize = size === "sm" ? 12 : size === "lg" ? 16 : 14;

  return (
    <Badge 
      variant="outline" 
      className={`${config.className} font-medium transition-smooth`}
    >
      <Icon className="mr-1" size={iconSize} />
      {config.label}
    </Badge>
  );
}
