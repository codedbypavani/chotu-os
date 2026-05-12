import type { CodingStat, DashboardMetric, Mission } from "@/types/domain";

export const metrics: DashboardMetric[] = [
  { label: "Focus score", value: "86%", delta: "+12 from yesterday", tone: "cyan" },
  { label: "Daily XP", value: "1,480", delta: "Level 14 incoming", tone: "green" },
  { label: "Coding streak", value: "23d", delta: "Top 50 pace: alive", tone: "gold" },
  { label: "Doomscroll recovery", value: "7m", delta: "Back in control", tone: "rose" }
];

export const missions: Mission[] = [
  { title: "Solve 2 array problems before dinner", reward: 120, done: true },
  { title: "Revise binary search notes", reward: 80, done: false },
  { title: "25 minute no-phone sprint", reward: 100, done: false },
  { title: "Log one honest reflection", reward: 60, done: false }
];

export const codingStats: CodingStat[] = [
  { platform: "LeetCode", solved: 412, streak: 23, rating: "1840", progress: 78 },
  { platform: "Codeforces", solved: 186, streak: 8, rating: "Specialist", progress: 64 },
  { platform: "CodeChef", solved: 139, streak: 12, rating: "3-star", progress: 58 },
  { platform: "HackerRank", solved: 92, streak: 5, rating: "Gold", progress: 46 },
  { platform: "GitHub", solved: 318, streak: 31, rating: "Active", progress: 82 }
];

export const weeklyFocus = [
  { day: "Mon", focus: 72, coding: 55 },
  { day: "Tue", focus: 84, coding: 68 },
  { day: "Wed", focus: 61, coding: 45 },
  { day: "Thu", focus: 92, coding: 76 },
  { day: "Fri", focus: 88, coding: 81 },
  { day: "Sat", focus: 79, coding: 60 },
  { day: "Sun", focus: 95, coding: 87 }
];

export const heatmap = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  intensity: (index * 7 + 13) % 5
}));
