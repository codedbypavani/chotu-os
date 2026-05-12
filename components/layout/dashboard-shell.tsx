import { RainLayer } from "@/components/layout/rain-layer";
import { Sidebar } from "@/components/layout/sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid-room relative min-h-screen overflow-hidden">
      <RainLayer />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-cyanfire/10 to-transparent" />
      <Sidebar />
      <section className="relative z-10 px-4 py-4 lg:pl-84">
        <div className="mx-auto max-w-[1500px]">{children}</div>
      </section>
    </main>
  );
}
