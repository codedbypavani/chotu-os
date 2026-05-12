import { supabase } from "@/lib/supabase";
import type { CodingStat, FocusSession, Mission } from "@/types/domain";

export type StudentTables = {
  tasks: Mission;
  notes: { id: string; user_id: string; body: string; updated_at: string };
  streaks: { id: string; user_id: string; current: number; best: number; updated_at: string };
  focus_sessions: FocusSession;
  coding_stats: CodingStat & { id: string; user_id: string; updated_at: string };
};

export async function fetchFocusSessions(userId: string) {
  const client = supabase;
  if (!client) return [];

  const { data, error } = await client
    .from("focus_sessions")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) throw error;
  return data ?? [];
}

export function subscribeToStudentRealtime(userId: string, onChange: () => void) {
  const client = supabase;
  if (!client) return () => undefined;

  const channel = client
    .channel(`student-os-${userId}`)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "tasks", filter: `user_id=eq.${userId}` },
      onChange
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "focus_sessions", filter: `user_id=eq.${userId}` },
      onChange
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "coding_stats", filter: `user_id=eq.${userId}` },
      onChange
    )
    .subscribe();

  return () => {
    void client.removeChannel(channel);
  };
}
