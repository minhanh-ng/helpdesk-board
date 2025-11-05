export async function GET() {
  const tickets = [
  {
    id: "t-1023",
    title: "Cannot connect to VPN",
    description: "User reports intermittent VPN connectivity errors.",
    priority: "High", // Low | Medium | High | Critical
    status: "Open", // Open | In Progress | On Hold | Resolved
    assignee: "Unassigned", // string
    updatedAt: "2025-10-31T14:05:00Z"
  },
  {
    id: "t-1024",
    title: "Email not syncing on mobile device",
    description: "Outlook emails stopped syncing on user’s iPhone after latest update.",
    priority: "Medium",
    status: "In Progress",
    assignee: "Alex Kim",
    updatedAt: "2025-11-01T09:20:00Z"
  },
  {
    id: "t-1025",
    title: "Printer offline in Marketing Dept.",
    description: "HP LaserJet printer showing offline for all users in Marketing floor.",
    priority: "High",
    status: "Open",
    assignee: "Jordan Lee",
    updatedAt: "2025-11-02T08:15:00Z"
  },
  {
    id: "t-1026",
    title: "Forgotten password reset request",
    description: "User cannot log into internal HR portal and requests password reset.",
    priority: "Low",
    status: "Resolved",
    assignee: "Maria Gonzalez",
    updatedAt: "2025-11-02T12:40:00Z"
  },
  {
    id: "t-1027",
    title: "System slowness on finance database",
    description: "Multiple users report lag when accessing the financial database.",
    priority: "Critical",
    status: "In Progress",
    assignee: "Sam Patel",
    updatedAt: "2025-11-03T13:10:00Z"
  },
  {
    id: "t-1028",
    title: "New laptop setup for remote employee",
    description: "Request to configure a new MacBook Pro with required VPN and Office apps.",
    priority: "Medium",
    status: "On Hold",
    assignee: "Unassigned",
    updatedAt: "2025-11-01T16:50:00Z"
  },
  {
    id: "t-1029",
    title: "Two-factor authentication not working",
    description: "User unable to receive MFA code via authenticator app.",
    priority: "High",
    status: "Open",
    assignee: "Chris O’Donnell",
    updatedAt: "2025-11-03T09:05:00Z"
  },
  {
    id: "t-1030",
    title: "Shared drive access denied",
    description: "New intern reports access issue with shared drive 'Marketing_2025'.",
    priority: "Medium",
    status: "Resolved",
    assignee: "Emily Zhao",
    updatedAt: "2025-10-30T11:30:00Z"
  },
  {
    id: "t-1031",
    title: "Software installation request",
    description: "Request to install Tableau Desktop for analytics team member.",
    priority: "Low",
    status: "Open",
    assignee: "Unassigned",
    updatedAt: "2025-11-02T17:00:00Z"
  },
  {
    id: "t-1032",
    title: "Conference room projector flickering",
    description: "Display intermittently turns off during presentations in Room 3B.",
    priority: "Medium",
    status: "In Progress",
    assignee: "Jordan Lee",
    updatedAt: "2025-11-01T15:22:00Z"
  },
  {
    id: "t-1033",
    title: "Antivirus license expired",
    description: "Several systems showing Norton license expiration warning.",
    priority: "High",
    status: "In Progress",
    assignee: "Alex Kim",
    updatedAt: "2025-11-03T08:45:00Z"
  },
  {
    id: "t-1034",
    title: "Wi-Fi coverage issue in conference area",
    description: "Weak Wi-Fi signal reported near the south wing meeting rooms.",
    priority: "Medium",
    status: "On Hold",
    assignee: "Sam Patel",
    updatedAt: "2025-10-31T18:00:00Z"
  },
  {
    id: "t-1035",
    title: "Security patch deployment",
    description: "Deploy latest Windows security update to all devices by EOD.",
    priority: "Critical",
    status: "In Progress",
    assignee: "Maria Gonzalez",
    updatedAt: "2025-11-03T14:30:00Z"
  },
  {
    id: "t-1036",
    title: "Teams call drops intermittently",
    description: "Users experience random call disconnections during Teams meetings.",
    priority: "High",
    status: "Open",
    assignee: "Unassigned",
    updatedAt: "2025-11-03T12:00:00Z"
  },
  {
    id: "t-1037",
    title: "Request for admin access to Power BI workspace",
    description: "Data analyst requests admin rights for report editing.",
    priority: "Low",
    status: "Resolved",
    assignee: "Chris O’Donnell",
    updatedAt: "2025-11-01T10:15:00Z"
  }
];
  return Response.json(tickets);
}