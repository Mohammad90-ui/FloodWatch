import { AlertTriangle, MapPin, TrendingUp, Activity } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Real-time overview of flood risks and alerts.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Active Alerts"
          value="3"
          icon={AlertTriangle}
          description="High severity warnings"
          trend={{ value: 12, label: "from yesterday", positive: false }}
          className="border-l-4 border-l-red-500"
        />
        <StatsCard
          title="Monitored Districts"
          value="5"
          icon={MapPin}
          description="Active data feeds"
        />
        <StatsCard
          title="Avg Rainfall (24h)"
          value="45 mm"
          icon={Activity}
          description="Across all districts"
          trend={{ value: -5, label: "vs last week", positive: true }}
        />
        <StatsCard
          title="Risk Trend"
          value="Medium"
          icon={TrendingUp}
          description="Overall system status"
        />
      </div>

      {/* Main Content Area (Placeholder for Map) */}
      <div className="grid gap-6 md:grid-cols-7">
        <div className="col-span-4 rounded-xl border border-border bg-card shadow-sm h-[400px] flex items-center justify-center text-muted-foreground bg-gradient-to-br from-muted/20 to-muted/10 transition-all hover:shadow-md border-dashed">
          <div className="text-center space-y-2">
             <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
               <Activity className="w-8 h-8 text-muted-foreground/50" />
             </div>
             <p className="font-medium">Interactive Map Module</p>
             <p className="text-sm text-muted-foreground">(Coming in Phase 3)</p>
          </div>
        </div>
        
        <div className="col-span-3 rounded-xl border border-border bg-card shadow-sm h-[400px] p-6 flex flex-col">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            Recent Activity
          </h3>
          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
             {/* Mock List */}
             {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="flex items-start gap-3 text-sm p-2 rounded-lg transition-colors hover:bg-muted/50 cursor-pointer group">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-shadow" />
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">Water level rise detected</p>
                    <p className="text-muted-foreground text-xs">Phulchoki Station • {10 + i * 5}m ago</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
