"use client";

import { CheckCircle2, Circle, Coins } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { missions } from "@/data/dashboard";

export function DailyMissions() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <CardTitle>Daily Quests</CardTitle>
        <span className="flex items-center gap-1 rounded-full bg-sunpulse/12 px-3 py-1 text-sm text-sunpulse">
          <Coins size={15} />
          360 XP
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {missions.map((mission) => (
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/6 p-3" key={mission.title}>
            {mission.done ? <CheckCircle2 className="text-mintvolt" size={20} /> : <Circle className="text-cyanfire" size={20} />}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{mission.title}</p>
              <p className="text-xs text-[var(--muted)]">Reward: {mission.reward} XP</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
