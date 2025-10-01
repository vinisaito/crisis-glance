import { useState } from "react";
import { mockIncidents } from "@/data/mockIncidents";
import { Incident } from "@/types/incident";
import { IncidentCard } from "@/components/incidents/IncidentCard";
import { IncidentDetail } from "@/components/incidents/IncidentDetail";
import { AlertTriangle } from "lucide-react";

const Index = () => {
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);

  if (selectedIncident) {
    return (
      <IncidentDetail
        incident={selectedIncident}
        onBack={() => setSelectedIncident(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
              <AlertTriangle className="text-primary" size={28} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                Incidentes Críticos
              </h1>
              <p className="text-muted-foreground mt-1">
                Monitoramento e gerenciamento em tempo real
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-critical/10 border border-critical/30">
            <div className="text-2xl font-bold text-critical">
              {mockIncidents.filter((i) => i.severity === "critical").length}
            </div>
            <div className="text-sm text-muted-foreground">Críticos</div>
          </div>
          <div className="p-4 rounded-lg bg-high/10 border border-high/30">
            <div className="text-2xl font-bold text-high">
              {mockIncidents.filter((i) => i.severity === "high").length}
            </div>
            <div className="text-sm text-muted-foreground">Alta Prioridade</div>
          </div>
          <div className="p-4 rounded-lg bg-status-investigating/10 border border-status-investigating/30">
            <div className="text-2xl font-bold text-status-investigating">
              {mockIncidents.filter((i) => i.status === "investigating").length}
            </div>
            <div className="text-sm text-muted-foreground">Em Investigação</div>
          </div>
          <div className="p-4 rounded-lg bg-status-active/10 border border-status-active/30">
            <div className="text-2xl font-bold text-status-active">
              {mockIncidents.filter((i) => i.status === "active").length}
            </div>
            <div className="text-sm text-muted-foreground">Ativos</div>
          </div>
        </div>

        {/* Incidents List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Incidentes em Andamento
          </h2>
          <div className="space-y-4">
            {mockIncidents.map((incident) => (
              <IncidentCard
                key={incident.id}
                incident={incident}
                onClick={() => setSelectedIncident(incident)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
