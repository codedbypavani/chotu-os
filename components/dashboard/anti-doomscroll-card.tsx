"use client";

import { ShieldAlert } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AntiDoomscrollCard() {
  return (
    <Card className="border-danger/25 bg-danger/8">
      <div className="flex items-start gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-danger/18 text-danger">
          <ShieldAlert size={22} />
        </span>
        <div>
          <CardTitle>Recovery Nudge</CardTitle>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            You are falling behind today&apos;s Top 50 pace. Just solve one problem right now. Five minutes now is
            better than regret later.
          </p>
          <Button className="mt-4" type="button" variant="danger">
            Emergency focus mode
          </Button>
        </div>
      </div>
    </Card>
  );
}
