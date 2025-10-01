import { TimelineEvent } from "@/types/incident";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertCircle, Play, CheckCircle, ArrowUp } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface TimelineSectionProps {
  timeline: TimelineEvent[];
}

const typeConfig = {
  update: {
    label: "Atualização",
    icon: AlertCircle,
    color: "bg-primary/10 text-primary border-primary/30",
  },
  action: {
    label: "Ação",
    icon: Play,
    color: "bg-status-investigating/10 text-status-investigating border-status-investigating/30",
  },
  resolution: {
    label: "Resolução",
    icon: CheckCircle,
    color: "bg-status-resolved/10 text-status-resolved border-status-resolved/30",
  },
  escalation: {
    label: "Escalação",
    icon: ArrowUp,
    color: "bg-critical/10 text-critical border-critical/30",
  },
};

export function TimelineSection({ timeline }: TimelineSectionProps) {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="text-primary" size={20} />
        <h2 className="text-xl font-semibold text-foreground">Timeline</h2>
      </div>

      <div className="relative space-y-6">
        {/* Linha vertical */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />

        {timeline.map((event, index) => {
          const config = typeConfig[event.type];
          const Icon = config.icon;

          return (
            <div key={event.id} className="relative pl-8">
              {/* Ponto na timeline */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className={config.color}>
                        <Icon size={12} className="mr-1" />
                        {config.label}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {format(event.timestamp, "HH:mm", { locale: ptBR })}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {event.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {event.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      por {event.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
