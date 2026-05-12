export type ChotuMood = "proud" | "focused" | "sleepy" | "alert" | "celebrating";

export type CodingPlatform = "LeetCode" | "CodeChef" | "Codeforces" | "HackerRank" | "GitHub";

export type DashboardMetric = {
  label: string;
  value: string;
  delta: string;
  tone: "cyan" | "green" | "gold" | "rose";
};

export type Mission = {
  title: string;
  reward: number;
  done: boolean;
};

export type CodingStat = {
  platform: CodingPlatform;
  solved: number;
  streak: number;
  rating: string;
  progress: number;
};

export type FocusSession = {
  id: string;
  userId: string;
  task: string;
  minutes: number;
  score: number;
  createdAt: string;
};

export type ChotuProfile = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  xp: number;
  level: number;
  streak: number;
  mood: ChotuMood;
};
