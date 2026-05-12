"use client";

import { motion } from "framer-motion";
import { Card, CardTitle } from "@/components/ui/card";
import { codingStats } from "@/data/dashboard";

export function CodingPlatforms() {
  return (
    <Card>
      <CardTitle>Coding Radar</CardTitle>
      <p className="mt-1 text-sm text-[var(--muted)]">Phase 1 renders live-ready cards. API adapters plug in next.</p>
      <div className="mt-5 space-y-4">
        {codingStats.map((stat) => (
          <div key={stat.platform}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold">{stat.platform}</span>
              <span className="text-[var(--muted)]">
                {stat.solved} solved · {stat.rating}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${stat.progress}%` }}
                className="h-full rounded-full bg-gradient-to-r from-cyanfire to-mintvolt"
                initial={{ width: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
