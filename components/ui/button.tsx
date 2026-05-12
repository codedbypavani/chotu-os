import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-55",
        variant === "primary" &&
          "bg-cyanfire text-slate-950 shadow-[0_0_28px_rgba(47,243,255,0.28)] hover:brightness-110",
        variant === "ghost" && "border border-white/10 bg-white/7 text-current hover:bg-white/12",
        variant === "danger" && "bg-danger text-white shadow-[0_0_28px_rgba(255,77,125,0.22)] hover:brightness-110",
        className
      )}
      {...props}
    />
  );
}
