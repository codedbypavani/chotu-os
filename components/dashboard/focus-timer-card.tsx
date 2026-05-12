"use client";

import { motion } from "framer-motion";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FocusTimerCard() {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute -right-20 -top-20 size-52 rounded-full bg-cyanfire/10 blur-3xl" />
      <CardTitle>Deep Focus</CardTitle>
      <p className="mt-1 text-sm text-[var(--muted)]">One task. No phone. Chotu watching your future unlock.</p>
      <div className="mt-6 grid place-items-center">
        <div className="relative grid size-44 place-items-center rounded-full border border-cyanfire/25">
          <motion.div
            animate={{ rotate: 360 }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyanfire"
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div className="text-center">
            <p className="font-display text-5xl font-bold">25:00</p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">sprint ready</p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2">
        <Button type="button">
          <Play size={16} />
        </Button>
        <Button type="button" variant="ghost">
          <Pause size={16} />
        </Button>
        <Button type="button" variant="ghost">
          <RotateCcw size={16} />
        </Button>
      </div>
    </Card>
  );
}
