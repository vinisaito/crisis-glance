import { Incident } from "@/types/incident";

export const mockIncidents: Incident[] = [
  {
    id: "1",
    number: "INC-2024-001",
    title: "Falha crítica no servidor de autenticação principal",
    dateTime: new Date("2024-10-01T14:30:00"),
    severity: "critical",
    status: "active",
    description: "Servidor de autenticação apresentando timeout intermitente, afetando login de usuários em produção.",
    crisisRoom: {
      manager: {
        id: "m1",
        name: "Ana Silva",
        role: "Incident Manager",
        status: "online"
      },
      team: [
        { id: "t1", name: "Carlos Santos", role: "DevOps Lead", status: "online" },
        { id: "t2", name: "Maria Oliveira", role: "Backend Engineer", status: "online" },
        { id: "t3", name: "João Costa", role: "SRE", status: "busy" },
        { id: "t4", name: "Patricia Lima", role: "Security Engineer", status: "online" }
      ],
      channel: "#incident-auth-failure",
      status: "Equipe mobilizada - Investigação em andamento"
    },
    timeline: [
      {
        id: "e1",
        timestamp: new Date("2024-10-01T14:30:00"),
        title: "Incidente detectado",
        description: "Alertas de timeout no serviço de autenticação disparados pelo sistema de monitoramento",
        author: "Sistema de Monitoramento",
        type: "update"
      },
      {
        id: "e2",
        timestamp: new Date("2024-10-01T14:35:00"),
        title: "Sala de crise iniciada",
        description: "Equipe de resposta mobilizada. Ana Silva assumiu como Incident Manager",
        author: "Ana Silva",
        type: "action"
      },
      {
        id: "e3",
        timestamp: new Date("2024-10-01T14:42:00"),
        title: "Causa raiz identificada",
        description: "Problema relacionado a sobrecarga no banco de dados de sessões. Investigando conexões abertas",
        author: "Carlos Santos",
        type: "update"
      },
      {
        id: "e4",
        timestamp: new Date("2024-10-01T14:55:00"),
        title: "Mitigação em progresso",
        description: "Escalando recursos do cluster de database e implementando rate limiting temporário",
        author: "Maria Oliveira",
        type: "action"
      }
    ],
    relatedRDMs: [
      {
        id: "r1",
        number: "RDM-2024-045",
        title: "Otimização de queries de autenticação",
        status: "in-progress",
        priority: "high",
        assignee: "Maria Oliveira"
      },
      {
        id: "r2",
        number: "RDM-2024-046",
        title: "Implementar cache distribuído para sessões",
        status: "open",
        priority: "critical",
        assignee: "Carlos Santos"
      }
    ]
  },
  {
    id: "2",
    number: "INC-2024-002",
    title: "Degradação de performance no processamento de pagamentos",
    dateTime: new Date("2024-10-01T13:15:00"),
    severity: "high",
    status: "investigating",
    description: "Transações de pagamento apresentando latência acima de 5 segundos, afetando experiência do cliente.",
    crisisRoom: {
      manager: {
        id: "m2",
        name: "Roberto Ferreira",
        role: "Incident Manager",
        status: "online"
      },
      team: [
        { id: "t5", name: "Juliana Rocha", role: "Payment Systems Lead", status: "online" },
        { id: "t6", name: "Fernando Alves", role: "Backend Engineer", status: "online" },
        { id: "t7", name: "Camila Souza", role: "Database Admin", status: "online" }
      ],
      channel: "#incident-payment-perf",
      status: "Análise de logs em andamento"
    },
    timeline: [
      {
        id: "e5",
        timestamp: new Date("2024-10-01T13:15:00"),
        title: "Alerta de degradação",
        description: "APM reportou aumento de 300% na latência de transações de pagamento",
        author: "Sistema APM",
        type: "update"
      },
      {
        id: "e6",
        timestamp: new Date("2024-10-01T13:22:00"),
        title: "Investigação iniciada",
        description: "Equipe de pagamentos acionada para análise detalhada",
        author: "Roberto Ferreira",
        type: "action"
      },
      {
        id: "e7",
        timestamp: new Date("2024-10-01T13:40:00"),
        title: "Possível causa identificada",
        description: "Gateway de pagamento externo apresentando timeout intermitente",
        author: "Juliana Rocha",
        type: "update"
      }
    ],
    relatedRDMs: [
      {
        id: "r3",
        number: "RDM-2024-047",
        title: "Implementar retry logic para gateway de pagamento",
        status: "open",
        priority: "high",
        assignee: "Fernando Alves"
      }
    ]
  },
  {
    id: "3",
    number: "INC-2024-003",
    title: "Intermitência no serviço de notificações por email",
    dateTime: new Date("2024-10-01T11:00:00"),
    severity: "medium",
    status: "investigating",
    description: "Aproximadamente 15% dos emails transacionais não estão sendo entregues.",
    crisisRoom: {
      manager: {
        id: "m3",
        name: "Lucas Martins",
        role: "Incident Manager",
        status: "online"
      },
      team: [
        { id: "t8", name: "Amanda Torres", role: "Infrastructure Lead", status: "online" },
        { id: "t9", name: "Ricardo Pereira", role: "DevOps Engineer", status: "online" }
      ],
      channel: "#incident-email-service",
      status: "Monitorando taxa de entrega"
    },
    timeline: [
      {
        id: "e8",
        timestamp: new Date("2024-10-01T11:00:00"),
        title: "Problema reportado",
        description: "Clientes reportando não recebimento de emails de confirmação",
        author: "Suporte ao Cliente",
        type: "update"
      },
      {
        id: "e9",
        timestamp: new Date("2024-10-01T11:15:00"),
        title: "Análise de métricas",
        description: "Confirmada queda de 15% na taxa de entrega de emails",
        author: "Amanda Torres",
        type: "update"
      }
    ],
    relatedRDMs: [
      {
        id: "r4",
        number: "RDM-2024-048",
        title: "Revisar configuração de reputação do domínio",
        status: "open",
        priority: "medium",
        assignee: "Ricardo Pereira"
      }
    ]
  }
];
