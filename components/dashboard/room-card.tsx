"use client";

import { motion } from "framer-motion";
import { Card, CardTitle } from "@/components/ui/card";

export function RoomCard() {
  return (
    <Card className="overflow-hidden">
      <CardTitle>Personal Coding Room</CardTitle>
      <p className="mt-1 text-sm text-[var(--muted)]">Cozy desk, glowing monitor, unlockable upgrades foundation.</p>
      <div className="relative mt-5 h-52 overflow-hidden rounded-2xl border border-white/10 bg-[#07101f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,243,255,0.22),transparent_55%)]" />
        <motion.div
          animate={{ opacity: [0.55, 1, 0.7] }}
          className="absolute left-1/2 top-8 h-24 w-36 -translate-x-1/2 rounded-xl border border-cyanfire/50 bg-cyanfire/12 shadow-neon"
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="absolute bottom-14 left-1/2 h-4 w-48 -translate-x-1/2 rounded-full bg-slate-800" />
        <div className="absolute bottom-10 left-1/2 h-5 w-64 -translate-x-1/2 rounded-lg bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900" />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          className="absolute bottom-14 right-14 size-10 rounded-full bg-mintvolt/70 shadow-[0_0_30px_rgba(114,255,182,0.42)]"
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <div className="absolute bottom-5 left-10 h-16 w-7 rounded-t-full bg-mintvolt/55" />
        <div className="absolute bottom-5 left-16 h-11 w-7 rounded-t-full bg-cyanfire/45" />
      </div>
    </Card>
  );
}
