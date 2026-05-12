import { DashboardShell } from "@/components/layout/dashboard-shell";
import { ChotuDashboard } from "@/components/dashboard/chotu-dashboard";

export default function HomePage() {
  return (
    <DashboardShell>
      <ChotuDashboard />
    </DashboardShell>
  );
}
