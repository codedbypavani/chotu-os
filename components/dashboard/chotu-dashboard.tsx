"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Bell, Headphones, Sparkles } from "lucide-react";
import { AuthPanel } from "@/components/dashboard/auth-panel";
import { AntiDoomscrollCard } from "@/components/dashboard/anti-doomscroll-card";
import { ChotuCompanion } from "@/components/dashboard/chotu-companion";
import { CodingPlatforms } from "@/components/dashboard/coding-platforms";
import { DailyMissions } from "@/components/dashboard/daily-missions";
import { FocusTimerCard } from "@/components/dashboard/focus-timer-card";
import { MetricCard } from "@/components/dashboard/metric-card";
import { ProductivityHeatmap } from "@/components/dashboard/productivity-heatmap";
import { RoomCard } from "@/components/dashboard/room-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { metrics } from "@/data/dashboard";
import { useAuth } from "@/hooks/use-auth";
import { useRealtimeSync } from "@/hooks/use-realtime-sync";

const FocusChart = dynamic(() => import("@/components/dashboard/focus-chart").then((mod) => mod.FocusChart), {
  ssr: false,
  loading: () => <Card className="min-h-[320px] animate-pulse" />
});

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function ChotuDashboard() {
  const { profile } = useAuth();
  const { realtimeReady, pulse } = useRealtimeSync(profile?.uid);

  return (
    <>
      <div className="mb-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <motion.p
            animate={{ opacity: [0.65, 1, 0.75] }}
            className="mb-2 flex items-center gap-2 text-sm text-cyanfire"
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Sparkles size={16} />
            {realtimeReady ? `Realtime pulse ${pulse}` : "Local demo mode · connect Supabase to sync"}
          </motion.p>
          <h1 className="font-display text-4xl font-black tracking-normal md:text-6xl">
            {greeting()}, {profile?.displayName?.split(" ")[0] ?? "future top coder"}.
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">
            Chotu has your room ready: missions, focus, streak pressure, coding analytics, and a gentle push when your
            brain starts negotiating with YouTube.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="ghost">
            <Headphones size={17} />
            Rain + lofi
          </Button>
          <Button type="button" variant="ghost">
            <Bell size={17} />
            Smart nudges
          </Button>
        </div>
      </div>

      <div className="mb-5">
        <AuthPanel />
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard index={index} key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <FocusChart />
        <FocusTimerCard />
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <RoomCard />
          <AntiDoomscrollCard />
        </div>
        <div className="space-y-4">
          <DailyMissions />
          <ProductivityHeatmap />
        </div>
      </section>

      <section className="mt-4 pb-28">
        <CodingPlatforms />
      </section>

      <ChotuCompanion mood={profile?.mood ?? "proud"} />
    </>
  );
}
