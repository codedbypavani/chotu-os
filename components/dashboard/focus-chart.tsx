"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Card, CardTitle } from "@/components/ui/card";
import { weeklyFocus } from "@/data/dashboard";

export function FocusChart() {
  return (
    <Card className="min-h-[320px]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <CardTitle>Weekly Flow</CardTitle>
          <p className="mt-1 text-sm text-[var(--muted)]">Focus and coding intensity synced from your room.</p>
        </div>
        <span className="rounded-full bg-mintvolt/12 px-3 py-1 text-sm text-mintvolt">+18% discipline</span>
      </div>
      <div className="h-56">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart data={weeklyFocus}>
            <defs>
              <linearGradient id="focus" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#2ff3ff" stopOpacity={0.55} />
                <stop offset="95%" stopColor="#2ff3ff" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="coding" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#72ffb6" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#72ffb6" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis axisLine={false} dataKey="day" tickLine={false} stroke="var(--muted)" />
            <Tooltip
              contentStyle={{
                background: "rgba(5,8,22,0.9)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12,
                color: "#fff"
              }}
            />
            <Area dataKey="focus" fill="url(#focus)" stroke="#2ff3ff" strokeWidth={3} type="monotone" />
            <Area dataKey="coding" fill="url(#coding)" stroke="#72ffb6" strokeWidth={3} type="monotone" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
