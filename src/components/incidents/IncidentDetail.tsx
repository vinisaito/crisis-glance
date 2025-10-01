import { Incident } from "@/types/incident";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SeverityBadge } from "./SeverityBadge";
import { StatusBadge } from "./StatusBadge";
import { CrisisRoomSection } from "./CrisisRoomSection";
import { TimelineSection } from "./TimelineSection";
import { RDMSection } from "./RDMSection";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface IncidentDetailProps {
  incident: Incident;
  onBack: () => void;
}

export function IncidentDetail({ incident, onBack }: IncidentDetailProps) {
  return (
    <div className="min-h-screen bg-background p-6 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={onBack}
            className="border-border hover:bg-secondary"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-3xl font-bold text-foreground">
            Relatório do Incidente
          </h1>
        </div>

        {/* Info Card */}
        <Card className="p-6 bg-card border-border">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground font-mono text-lg">
                {incident.number}
              </span>
              <SeverityBadge severity={incident.severity} size="lg" />
              <StatusBadge status={incident.status} />
            </div>

            <h2 className="text-2xl font-bold text-foreground">
              {incident.title}
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              {incident.description}
            </p>

            <div className="flex items-center gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} />
                <span className="text-sm">
                  {format(incident.dateTime, "dd 'de' MMMM 'de' yyyy", {
                    locale: ptBR,
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={16} />
                <span className="text-sm">
                  {format(incident.dateTime, "HH:mm", { locale: ptBR })}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Crisis Room */}
          <div className="lg:col-span-1">
            <CrisisRoomSection crisisRoom={incident.crisisRoom} />
          </div>

          {/* Right Column - Timeline and RDMs */}
          <div className="lg:col-span-2 space-y-6">
            <TimelineSection timeline={incident.timeline} />
            <RDMSection rdms={incident.relatedRDMs} />
          </div>
        </div>
      </div>
    </div>
  );
}
