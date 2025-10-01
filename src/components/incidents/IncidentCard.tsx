import { Incident } from "@/types/incident";
import { Card } from "@/components/ui/card";
import { SeverityBadge } from "./SeverityBadge";
import { StatusBadge } from "./StatusBadge";
import { Clock, Users } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface IncidentCardProps {
  incident: Incident;
  onClick: () => void;
}

export function IncidentCard({ incident, onClick }: IncidentCardProps) {
  return (
    <Card
      className="p-6 cursor-pointer hover:shadow-glow transition-smooth border-border bg-card"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-muted-foreground font-mono text-sm">
              {incident.number}
            </span>
            <SeverityBadge severity={incident.severity} />
            <StatusBadge status={incident.status} />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {incident.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {incident.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>
            {format(incident.dateTime, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>{incident.crisisRoom.team.length + 1} membros</span>
        </div>
      </div>
    </Card>
  );
}
