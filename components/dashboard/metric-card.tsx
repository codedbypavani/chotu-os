"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { DashboardMetric } from "@/types/domain";
import { cn } from "@/lib/utils";

const toneMap = {
  cyan: "from-cyanfire/30 to-cyanfire/5 text-cyanfire",
  green: "from-mintvolt/30 to-mintvolt/5 text-mintvolt",
  gold: "from-sunpulse/30 to-sunpulse/5 text-sunpulse",
  rose: "from-danger/30 to-danger/5 text-danger"
};

export function MetricCard({ metric, index }: { metric: DashboardMetric; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      <Card className="relative overflow-hidden">
        <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", toneMap[metric.tone])} />
        <p className="text-sm text-[var(--muted)]">{metric.label}</p>
        <p className="mt-3 font-display text-4xl font-bold">{metric.value}</p>
        <p className={cn("mt-2 text-sm", toneMap[metric.tone].split(" ").at(-1))}>{metric.delta}</p>
      </Card>
    </motion.div>
  );
}
