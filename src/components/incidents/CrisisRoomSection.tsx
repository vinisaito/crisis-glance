import { CrisisRoom } from "@/types/incident";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Crown } from "lucide-react";

interface CrisisRoomSectionProps {
  crisisRoom: CrisisRoom;
}

export function CrisisRoomSection({ crisisRoom }: CrisisRoomSectionProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-status-resolved";
      case "busy":
        return "bg-status-investigating";
      case "offline":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="text-primary" size={20} />
        <h2 className="text-xl font-semibold text-foreground">Sala de Crise</h2>
      </div>

      <div className="space-y-6">
        {/* Canal */}
        <div>
          <span className="text-sm text-muted-foreground">Canal</span>
          <p className="text-foreground font-mono mt-1">{crisisRoom.channel}</p>
        </div>

        {/* Status */}
        <div>
          <span className="text-sm text-muted-foreground">Status</span>
          <p className="text-foreground mt-1">{crisisRoom.status}</p>
        </div>

        {/* Manager */}
        <div>
          <span className="text-sm text-muted-foreground mb-2 block">
            Gerente do Incidente
          </span>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
            <div className="relative">
              <Avatar className="h-10 w-10 border-2 border-primary">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {getInitials(crisisRoom.manager.name)}
                </AvatarFallback>
              </Avatar>
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${getStatusColor(
                  crisisRoom.manager.status
                )}`}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground">
                  {crisisRoom.manager.name}
                </p>
                <Crown className="text-primary" size={14} />
              </div>
              <p className="text-sm text-muted-foreground">
                {crisisRoom.manager.role}
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <span className="text-sm text-muted-foreground mb-2 block">
            Equipe ({crisisRoom.team.length})
          </span>
          <div className="space-y-2">
            {crisisRoom.team.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border hover:bg-secondary/50 transition-smooth"
              >
                <div className="relative">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-muted text-foreground">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-card ${getStatusColor(
                      member.status
                    )}`}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">
                    {member.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
