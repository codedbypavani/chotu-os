"use client";

import { useEffect, useState } from "react";
import { supabaseReady } from "@/lib/supabase";
import { subscribeToStudentRealtime } from "@/services/supabase-dashboard";

export function useRealtimeSync(userId?: string) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (!userId) return;
    return subscribeToStudentRealtime(userId, () => setPulse((value) => value + 1));
  }, [userId]);

  return { realtimeReady: supabaseReady, pulse };
}
