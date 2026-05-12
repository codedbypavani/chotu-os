"use client";

import { motion } from "framer-motion";
import { Card, CardTitle } from "@/components/ui/card";
import { heatmap } from "@/data/dashboard";
import { cn } from "@/lib/utils";

const colors = ["bg-white/8", "bg-cyanfire/20", "bg-cyanfire/35", "bg-mintvolt/45", "bg-sunpulse/70"];

export function ProductivityHeatmap() {
  return (
    <Card>
      <CardTitle>Consistency Heatmap</CardTitle>
      <p className="mt-1 text-sm text-[var(--muted)]">Tiny squares, massive identity shift.</p>
      <div className="mt-5 grid grid-cols-7 gap-2">
        {heatmap.map((cell, index) => (
          <motion.div
            animate={{ opacity: [0.55, 1, 0.75] }}
            className={cn("aspect-square rounded-md", colors[cell.intensity])}
            key={cell.id}
            transition={{ delay: index * 0.01, duration: 2.6, repeat: Infinity }}
          />
        ))}
      </div>
    </Card>
  );
}
