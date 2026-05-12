"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrainCircuit, LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { navigation } from "@/config/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <aside className="glass fixed inset-y-4 left-4 z-20 hidden w-72 rounded-2xl p-4 lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-2 py-3">
        <div className="grid size-11 place-items-center rounded-xl bg-cyanfire text-slate-950 shadow-neon">
          <BrainCircuit size={24} />
        </div>
        <div>
          <p className="font-display text-xl font-bold">Chotu OS</p>
          <p className="text-xs text-[var(--muted)]">Coding room online</p>
        </div>
      </div>

      <nav className="mt-6 flex flex-1 flex-col gap-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[var(--muted)] transition hover:bg-white/8 hover:text-current",
                active && "bg-cyanfire/14 text-current shadow-[inset_0_0_0_1px_rgba(47,243,255,0.22)]"
              )}
              href={item.href}
              key={item.href}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-3 rounded-xl border border-white/10 bg-white/6 p-3">
        <Button
          className="w-full"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          type="button"
          variant="ghost"
        >
          {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          Switch vibe
        </Button>
        {user ? (
          <Button className="w-full" onClick={logout} type="button" variant="ghost">
            <LogOut size={16} />
            Sign out
          </Button>
        ) : null}
      </div>
    </aside>
  );
}
