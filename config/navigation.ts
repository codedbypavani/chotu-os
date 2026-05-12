import {
  BarChart3,
  BookOpenCheck,
  Brain,
  CalendarClock,
  Flame,
  Home,
  ShieldAlert,
  Timer,
  Trophy,
  Users
} from "lucide-react";

export const navigation = [
  { label: "Room", href: "/", icon: Home },
  { label: "Focus", href: "/focus", icon: Timer },
  { label: "DSA Roadmap", href: "/roadmap", icon: BookOpenCheck },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Boss Battles", href: "/battles", icon: Trophy },
  { label: "Anti-scroll", href: "/anti-doomscroll", icon: ShieldAlert },
  { label: "Schedule", href: "/schedule", icon: CalendarClock },
  { label: "Squads", href: "/squads", icon: Users },
  { label: "AI Mentor", href: "/mentor", icon: Brain },
  { label: "Streaks", href: "/streaks", icon: Flame }
];
