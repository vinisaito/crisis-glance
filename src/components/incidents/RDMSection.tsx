import { RDM } from "@/types/incident";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, User } from "lucide-react";
import { SeverityBadge } from "./SeverityBadge";

interface RDMSectionProps {
  rdms: RDM[];
}

const statusConfig = {
  open: {
    label: "Aberto",
    className: "bg-primary/10 text-primary border-primary/30",
  },
  "in-progress": {
    label: "Em Progresso",
    className: "bg-status-investigating/10 text-status-investigating border-status-investigating/30",
  },
  resolved: {
    label: "Resolvido",
    className: "bg-status-resolved/10 text-status-resolved border-status-resolved/30",
  },
};

export function RDMSection({ rdms }: RDMSectionProps) {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="text-primary" size={20} />
        <h2 className="text-xl font-semibold text-foreground">
          RDMs Relacionados
        </h2>
        <Badge variant="secondary" className="ml-2">
          {rdms.length}
        </Badge>
      </div>

      <div className="space-y-3">
        {rdms.map((rdm) => {
          const statusCfg = statusConfig[rdm.status];

          return (
            <div
              key={rdm.id}
              className="p-4 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-smooth"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-mono text-muted-foreground">
                      {rdm.number}
                    </span>
                    <Badge variant="outline" className={statusCfg.className}>
                      {statusCfg.label}
                    </Badge>
                    <SeverityBadge severity={rdm.priority} size="sm" />
                  </div>
                  <h4 className="font-medium text-foreground">{rdm.title}</h4>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
                <User size={14} />
                <span>{rdm.assignee}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
