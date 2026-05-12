"use client";

import { LogIn, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";

export function AuthPanel() {
  const { authReady, profile, signInWithGoogle, user } = useAuth();

  if (user && profile) {
    return (
      <Card className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-[var(--muted)]">Signed in as</p>
          <p className="font-display text-xl font-bold">{profile.displayName}</p>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-mintvolt/12 px-3 py-1 text-sm text-mintvolt">
          <ShieldCheck size={16} />
          Synced
        </span>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-display text-xl font-bold">Unlock personal sync</p>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Google auth persists sessions and prepares your Firebase profile for Phase 2 data.
        </p>
      </div>
      <Button disabled={!authReady} onClick={signInWithGoogle} type="button">
        <LogIn size={17} />
        {authReady ? "Continue with Google" : "Add Firebase env"}
      </Button>
    </Card>
  );
}
