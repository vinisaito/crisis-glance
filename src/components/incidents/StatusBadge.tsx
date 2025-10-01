import { IncidentStatus } from "@/types/incident";
import { Badge } from "@/components/ui/badge";
import { Activity, Search, CheckCircle } from "lucide-react";

interface StatusBadgeProps {
  status: IncidentStatus;
}

const statusConfig = {
  active: {
    label: "Ativo",
    className: "bg-status-active/10 text-status-active border-status-active/30",
    icon: Activity,
  },
  investigating: {
    label: "Investigando",
    className: "bg-status-investigating/10 text-status-investigating border-status-investigating/30",
    icon: Search,
  },
  resolved: {
    label: "Resolvido",
    className: "bg-status-resolved/10 text-status-resolved border-status-resolved/30",
    icon: CheckCircle,
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={`${config.className} font-medium`}>
      <Icon className="mr-1" size={14} />
      {config.label}
    </Badge>
  );
}
