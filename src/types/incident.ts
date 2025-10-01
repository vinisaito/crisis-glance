export type SeverityLevel = 'critical' | 'high' | 'medium' | 'low';
export type IncidentStatus = 'active' | 'investigating' | 'resolved';

export interface Incident {
  id: string;
  number: string;
  title: string;
  dateTime: Date;
  severity: SeverityLevel;
  status: IncidentStatus;
  description: string;
  crisisRoom: CrisisRoom;
  timeline: TimelineEvent[];
  relatedRDMs: RDM[];
}

export interface CrisisRoom {
  manager: TeamMember;
  team: TeamMember[];
  channel: string;
  status: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  status: 'online' | 'offline' | 'busy';
}

export interface TimelineEvent {
  id: string;
  timestamp: Date;
  title: string;
  description: string;
  author: string;
  type: 'update' | 'action' | 'resolution' | 'escalation';
}

export interface RDM {
  id: string;
  number: string;
  title: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: SeverityLevel;
  assignee: string;
}
