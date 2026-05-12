"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ChotuMood } from "@/types/domain";

const moodCopy: Record<ChotuMood, string> = {
  proud: "Aaj ka rhythm solid hai. Bas one more problem and we turn consistency into identity.",
  focused: "Phone door, brain online. I am guarding this sprint with you.",
  sleepy: "You vanished for a bit. No guilt. Five minutes now, then momentum returns.",
  alert: "Top 50 pace slipping. One tiny win right now. Open the next problem.",
  celebrating: "Streak saved. I am doing the victory dance in binary."
};

export function ChotuCompanion({ mood = "proud" }: { mood?: ChotuMood }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      className="glass fixed bottom-4 right-4 z-30 hidden max-w-sm rounded-2xl p-4 shadow-neon md:block"
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex gap-4">
        <motion.div
          animate={{ rotate: mood === "celebrating" ? [0, -8, 8, 0] : [0, 2, -2, 0] }}
          className="relative grid size-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyanfire via-mintvolt to-sunpulse text-3xl shadow-neon"
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <span>च</span>
          <span className="absolute -right-1 -top-1 grid size-7 place-items-center rounded-full bg-void text-cyanfire">
            <Sparkles size={14} />
          </span>
        </motion.div>
        <div>
          <div className="mb-2 flex items-center gap-2">
            <p className="font-display font-bold">Chotu</p>
            <span className="rounded-full border border-cyanfire/30 px-2 py-0.5 text-xs text-cyanfire">{mood}</span>
          </div>
          <p className="text-sm leading-6 text-[var(--muted)]">{moodCopy[mood]}</p>
          <Button className="mt-3 h-9 px-3" type="button">
            <Zap size={15} />
            Start 25m sprint
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
