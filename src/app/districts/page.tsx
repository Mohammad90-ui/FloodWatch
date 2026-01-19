export default function DistrictsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Districts</h1>
          <p className="text-muted-foreground">Manage monitored districts and sensors.</p>
        </div>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
          Add District
        </button>
      </div>
      
      <div className="rounded-xl border border-border bg-card shadow-sm p-8 text-center text-muted-foreground">
        District list and management interface coming in Phase 4
      </div>
    </div>
  );
}
